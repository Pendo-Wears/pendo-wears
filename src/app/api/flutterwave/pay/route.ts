import { NextRequest, NextResponse } from "next/server";
import Flutterwave from "flutterwave-node-v3";
import axios from "axios";

const flw = new Flutterwave(
  process.env.FLUTTERWAVE_PUBLIC_KEY!,
  process.env.FLUTTERWAVE_SECRET_KEY!,
);

// Handle preflight OPTIONS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

// Handle POST (initialize payment)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      tx_ref,
      amount,
      currency = "USD",
      email,
      name,
      redirect_url,
    } = body;

    // Validate required fields
    if (!tx_ref || !amount || !email || !name || !redirect_url) {
      return NextResponse.json(
        {
          message: "Missing required fields",
          required: ["tx_ref", "amount", "email", "name", "redirect_url"],
        },
        { status: 400 },
      );
    }

    // v3 payment payload
    const payload = {
      tx_ref,
      amount,
      currency,
      redirect_url,
      payment_options: "card",
      customer: {
        email,
        name,
      },
      customizations: {
        title: "Your Store",
        description: "Payment for items",
        logo: "https://your-logo-url.com/logo.png",
      },
    };

    // Call Flutterwave v3
    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    // console.log("Flutterwave v3 response:", response);

    return NextResponse.json(
      {
        status: "success",
        link: response.data.data.link,
        data: response.data.data,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Flutterwave error:", error?.response || error);

    return NextResponse.json(
      {
        message: "Flutterwave payment failed",
        error: error?.response?.data || error.message,
      },
      { status: 400 },
    );
  }
}
