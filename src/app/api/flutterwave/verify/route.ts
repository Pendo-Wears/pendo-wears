import { NextRequest, NextResponse } from "next/server";
import Flutterwave from "flutterwave-node-v3";

const flw = new Flutterwave(
  process.env.FLUTTERWAVE_PUBLIC_KEY!,
  process.env.FLUTTERWAVE_SECRET_KEY!
);

// Handle preflight OPTIONS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

// POST endpoint to verify OTP
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { flw_ref, otp } = body;

    if (!flw_ref || !otp) {
      return NextResponse.json(
        { message: "flw_ref and otp are required", received: body },
        { status: 400 }
      );
    }

    // Call Flutterwave SDK to validate the charge
    const response = await flw.Charge.validate({ flw_ref, otp });

    // Optional: you can verify status here
    if (response.data.chargeResponseCode === "00") {
      return NextResponse.json({
        message: "Payment successful",
        data: response.data,
      });
    } else {
      return NextResponse.json({
        message: "Payment not successful",
        data: response.data,
      });
    }
  } catch (error: any) {
    console.error("Flutterwave OTP verify error:", error?.response || error);
    return NextResponse.json(
      {
        message: "Flutterwave OTP verification failed",
        error: error?.response?.data || error.message,
      },
      { status: 400 }
    );
  }
}
