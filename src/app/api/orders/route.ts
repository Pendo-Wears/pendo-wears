import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import printfulClient from "../printful";
import { privateApi, publicApi } from "@/src/lib/woocommerce";
import { SyncVariant } from "@/src/lib/types";

function getUserFromToken(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  const token = auth.replace("Bearer ", "");

  return jwt.verify(token, process.env.WP_JWT_SECRET!) as any;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order: any = await printfulClient.post("/orders", {
      recipient: body.recipient,
      items: body.items,
    });

    console.log(order, "ORDER DATA");

    const { id, status, costs } = order;

    // 🔑 THIS is where user is linked
    const orderRecord = {
      userId: body.userId,
      email: body.recipient.email,
      printfulOrderId: id,
      status: status,
      txRef: body.txRef,
      paymentMethod: body.paymentMethod,
    };

    // save to DB later
    console.log("Order record:", orderRecord);

    const printfulOrderId = id; // replace with actual ID from above

    // TODO: GET USER ORDERS FROM WP "GET /wp-json/wp/v2/store_order?author=me"

    const wpRes = await publicApi.post(
      `/wc/v3/orders?consumer_key=${process.env.WOO_CONSUMER_KEY}&consumer_secret=${process.env.WOO_CONSUMER_SECRET}`,
      {
        status: "processing",
        order_key: `#PF${printfulOrderId}`,
        customer_note: "",
        transaction_id: orderRecord.txRef,
        customer_id: orderRecord.userId,
        payment_method: orderRecord.paymentMethod,
        billing: {
          first_name: body.recipient.first_name,
          last_name: body.recipient.last_name,
          address_1: body.recipient.address1,
          city: body.recipient.city,
          country: body.recipient.country_code,
          email: body.recipient.email,
          phone: body.recipient.phone || "",
        },

        // IMPORTANT: dummy line item (required by WC)
        line_items: body.items.map((item: SyncVariant) => ({
          product_id: Number(item.external_id), // dummy product ID
          quantity: item.quantity,
          // total: Number(item.retail_price) * item.quantity,
        })),

        meta_data: [
          {
            key: "pendo_transaction_id",
            value: `${orderRecord.txRef}`,
          },
          {
            key: "pendo_printful_order_id",
            value: `#PF${printfulOrderId}`,
          },
        ],
      }
    );

    console.log("WP Response:", wpRes.data);

    return NextResponse.json(order);
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  if (!process.env.PRINTFUL_API_KEY) {
    return NextResponse.json(
      { message: "Missing PRINTFUL_API_KEY" },
      { status: 500 }
    );
  }

  try {
    const orders: any = await printfulClient.get("/orders");

    console.log(orders, "ORDER DATA");

    return NextResponse.json(orders ?? []);
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
