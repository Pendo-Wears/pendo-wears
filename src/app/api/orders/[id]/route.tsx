import { NextRequest, NextResponse } from "next/server";
import printfulClient from "../../printful";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!process.env.PRINTFUL_API_KEY) {
    console.log("PRINTFUL_API_KEY missing!");
    return NextResponse.json(
      { message: "Missing PRINTFUL_API_KEY" },
      { status: 500 }
    );
  }

  try {
    // Fetch single order by ID
    const response = await printfulClient.get(`/orders/${id}`);

    const order = response ?? null;

    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Printful API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
