import { NextRequest, NextResponse } from "next/server";
import { privateApi, publicApi } from "@/src/lib/woocommerce";

export async function POST(req: NextRequest) {
  if (!process.env.WOO_CONSUMER_KEY || !process.env.WOO_CONSUMER_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  const formData = await req.formData(); // ✅ correct

  const file = formData.get("file");

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  try {
    const response = await privateApi.post(`/wp/v2/media`, file, {
      headers: {
        "Content-Type": "image/*",
      },
    });

    // console.log(response.data);

    // return NextResponse.json({
    //   message: "Users fetched successfully",
    //   data: response.data ?? [],
    //   success: true,
    // });
  } catch (error: any) {
    console.error("User API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 },
    );
  }
}
