import { privateApi, publicApi } from "@/src/lib/woocommerce";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!process.env.WOO_CONSUMER_KEY || !process.env.WOO_CONSUMER_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const response = await publicApi.get(
      `/wc/v3/customers/${id}?consumer_key=${process.env.WOO_CONSUMER_KEY}&consumer_secret=${process.env.WOO_CONSUMER_SECRET}`,
    );

    // console.log("Single user response:", response);

    const user = response ?? null;

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User fetched successfully",
      data: user.data,
      success: true,
    });
  } catch (error: any) {
    console.error("Users API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json();

  if (!process.env.WOO_CONSUMER_KEY || !process.env.WOO_CONSUMER_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const response = await publicApi.put(
      `/wc/v3/customers/${id}?consumer_key=${process.env.WOO_CONSUMER_KEY}&consumer_secret=${process.env.WOO_CONSUMER_SECRET}`,
      body,
    );

    const user = response ?? null;

    // if (!user) {
    //   return NextResponse.json({ message: "User not found" }, { status: 404 });
    // }

    return NextResponse.json({
      message: "Profile updated successfully",
      data: user.data,
      success: true,
    });
  } catch (error: any) {
    console.error(
      "Profile update API error:",
      error.response?.data || error.message,
    );
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 },
    );
  }
}
