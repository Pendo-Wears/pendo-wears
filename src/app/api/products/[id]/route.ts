import { NextRequest, NextResponse } from "next/server";
import printfulClient from "../../printful";
import axios from "axios";

const woo = axios.create({
  baseURL: `${process.env.WOO_STORE_URL}/wp-json/wc/v3`,
  auth: {
    username: process.env.WOO_CONSUMER_KEY!,
    password: process.env.WOO_CONSUMER_SECRET!,
  },
});

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // if (!process.env.PRINTFUL_API_KEY) {
  //   console.log("PRINTFUL_API_KEY missing!");
  //   return NextResponse.json(
  //     { message: "Missing PRINTFUL_API_KEY" },
  //     { status: 500 }
  //   );
  // }

  try {
      // 1️⃣ Get main product
      const productRes = await woo.get(`/products/${id}`);
      // const { upsell_ids, cross_sell_ids } = productRes.data;
  
      // const relatedIds = [...upsell_ids, ...cross_sell_ids];
  
      // if (!relatedIds.length) {
      //   return NextResponse.json({
      //     upsells: [],
      //     crossSells: [],
      //   });
      // }
  
      // // 2️⃣ Fetch related products
      // const relatedRes = await woo.get(
      //   `/products?include=${relatedIds.join(",")}`
      // );
  
      return NextResponse.json(productRes.data);
    } catch (err: any) {
      console.error("Woo error:", err.response?.data || err.message);
      return NextResponse.json(
        { message: "Failed to fetch related products" },
        { status: 500 }
      );
    }
}
