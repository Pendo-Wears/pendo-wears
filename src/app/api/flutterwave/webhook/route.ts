import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("verif-hash");

    // ✅ Verify webhook source
    if (signature !== process.env.FLW_WEBHOOK_SECRET) {
      console.warn("Invalid webhook signature");
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = await req.json();

    console.log("Webhook payload:", payload);

    const { event, data } = payload;

    if (event === "charge.completed") {
      const transaction_id = data.id;
      const txRef = data.tx_ref;
      const status = data.status;

      console.log("Payment event:", { transaction_id, txRef, status });

      if (status === "successful") {
        console.log("✅ Payment successful:", txRef);

        // 🔥 Verify transaction (VERY IMPORTANT)
        await verifyTransaction(transaction_id);

        // TODO: Update your DB here
      }
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error: any) {
    console.error("Webhook error:", error);

    return NextResponse.json(
      { message: "Webhook failed", error: error.message },
      { status: 500 },
    );
  }
}

async function verifyTransaction(id: number) {
  const res = await fetch(
    `https://api.flutterwave.com/v3/transactions/${id}/verify`,
    {
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
      },
    },
  );

  const data = await res.json();

  console.log("Verification result:", data);

  return data;
}