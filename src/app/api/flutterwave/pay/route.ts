import { NextRequest, NextResponse } from "next/server";
import Flutterwave from "flutterwave-node-v3";

const flw = new Flutterwave(
  process.env.FLUTTERWAVE_PUBLIC_KEY!,
  process.env.FLUTTERWAVE_SECRET_KEY!,
);

// Handle preflight OPTIONS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

// Handle POST (charge card)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      tx_ref,
      amount,
      currency = "USD",
      email,
      card,
      redirect,
      user,
    } = body;

    // Validate required fields
    if (!tx_ref || !amount || !email || !card || !user) {
      return NextResponse.json(
        {
          message: "Missing required fields",
          required: ["tx_ref", "amount", "email", "card", "user"],
          received: { tx_ref, amount, email, card, user },
        },
        { status: 400 },
      );
    }

    // Create payload for SDK
    const payload = {
      card_number: card.number,
      cvv: card.cvv,
      expiry_month: card.expiry_month,
      expiry_year: card.expiry_year,
      currency,
      amount,
      email,
      tx_ref,
      enckey: process.env.FLW_ENCRYPTION_KEY!,
      redirect_url: redirect
    };

    // Charge the card using SDK (handles 3DES internally)
    const response = await flw.Charge.card(payload);

    console.log("Flutterwave charge response:", response);

    return NextResponse.json(response, { status: 200 });
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
