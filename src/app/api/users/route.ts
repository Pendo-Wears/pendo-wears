import { NextRequest, NextResponse } from "next/server";
import { privateApi, publicApi } from "@/src/lib/woocommerce";

export async function GET(req: NextRequest) {
  if (!process.env.WOO_CONSUMER_KEY || !process.env.WOO_CONSUMER_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const response = await publicApi.get(
      `/wc/v3/customers?consumer_key=${process.env.WOO_CONSUMER_KEY}&consumer_secret=${process.env.WOO_CONSUMER_SECRET}`
    );

    return NextResponse.json({
      message: "Users fetched successfully",
      data: response.data ?? [],
      success: true,
    });
  } catch (error: any) {
    console.error("User API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
