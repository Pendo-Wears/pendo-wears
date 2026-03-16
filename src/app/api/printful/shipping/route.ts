import { NextRequest, NextResponse } from "next/server";
import printfulClient from "../../printful";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { recipient, items } = body;

    // Basic validation
    if (
      !recipient.country_code ||
      !recipient.state_code ||
      !items ||
      !Array.isArray(items)
    ) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 },
      );
    }

    const printfulResponse = await printfulClient.post(`/shipping/rates`, {
      recipient,
      items,
    });

    const data = printfulResponse || null;

    if (!printfulResponse) {
      return NextResponse.json(
        { error: "Printful error", details: data },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Shipping rate error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
