import { NextRequest, NextResponse } from "next/server";
import printfulClient from "../../../printful";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!process.env.PRINTFUL_API_KEY) {
    // console.log("PRINTFUL_API_KEY missing!");
    return NextResponse.json(
      { message: "Missing PRINTFUL_API_KEY" },
      { status: 500 },
    );
  }

  try {
    // Fetch single product by ID
    const response = await printfulClient.get(`/sync/products/${id}`);

    // console.log("Single product response:", response);

    const product = response ?? null;

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(product);
  } catch (error: any) {
    console.error("Printful API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 },
    );
  }
}
