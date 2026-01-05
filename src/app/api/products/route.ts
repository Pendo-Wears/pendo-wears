import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import printfulClient from "../printful";

export async function GET(req: NextRequest) {
  if (!process.env.PRINTFUL_API_KEY) {
    return NextResponse.json(
      { message: "Missing PRINTFUL_API_KEY" },
      { status: 500 }
    );
  }

  try {
    const response = await printfulClient.get("/sync/products");

    return NextResponse.json(response ?? []);
  } catch (error: any) {
    console.error("Printful API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
