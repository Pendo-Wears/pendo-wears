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

// Verify payment (v3)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const transaction_id = searchParams.get("transaction_id");

    if (!transaction_id) {
      return NextResponse.json(
        { message: "transaction_id is required" },
        { status: 400 },
      );
    }

    // Verify transaction with Flutterwave
    const response = await flw.Transaction.verify({ id: transaction_id });

    const data = response.data;

    // 🔐 IMPORTANT: Always validate these
    if (
      response.status === "success" &&
      data.status === "successful" &&
      data.amount &&
      data.currency === "NGN" // match your expected currency
    ) {
      return NextResponse.json({
        message: "Payment verified successfully",
        data,
      });
    } else {
      return NextResponse.json(
        {
          message: "Payment not successful",
          data,
        },
        { status: 400 },
      );
    }
  } catch (error: any) {
    console.error("Flutterwave verify error:", error?.response || error);

    return NextResponse.json(
      {
        message: "Flutterwave verification failed",
        error: error?.response?.data || error.message,
      },
      { status: 400 },
    );
  }
}
