import { NextRequest, NextResponse } from "next/server";
import printfulClient from "../../printful";
import { createCanvas } from "canvas";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!process.env.PRINTFUL_API_KEY) {
    return NextResponse.json(
      { message: "Missing PRINTFUL_API_KEY" },
      { status: 500 },
    );
  }

  try {
    const response = await printfulClient.get(`/orders/${id}`);
    const order = response ?? null;

    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    // 🧾 Generate receipt image
    const receiptImage = generateReceiptImage(order);

    // console.log(receiptImage);

    return NextResponse.json({
      order,
      receiptImage, // base64 PNG
    });
  } catch (error: any) {
    console.error("Printful API error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data || error.message },
      { status: 500 },
    );
  }
}

function generateReceiptImage(order: any) {
  const width = 800;
  const height = 1000;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  // Text styles
  ctx.fillStyle = "#000";
  ctx.font = "bold 32px Arial";
  ctx.fillText("Pendo Order Receipt", 40, 60);

  ctx.font = "16px Arial";
  ctx.fillText(`Order ID: ${order.id}`, 40, 120);
  ctx.fillText(`Date: ${order.created}`, 40, 150);
  ctx.fillText(`Customer: ${order.recipient?.name}`, 40, 180);

  let y = 240;
  ctx.font = "bold 18px Arial";
  ctx.fillText("Items", 40, y);

  y += 30;
  ctx.font = "16px Arial";

  order.items.forEach((item: any) => {
    ctx.fillText(
      `${item.name} × ${item.quantity} — ${formatPrice(item.retail_price)}`,
      40,
      y,
    );
    y += 26;
  });

  ctx.fillText(
    `Shipping: ${formatPrice(order.retail_costs?.shipping)}`,
    40,
    y,
  );
  
  y += 40;
  ctx.font = "bold 20px Arial";
  ctx.fillText(
    `Total: ${formatPrice(order.retail_costs?.total)}`,
    40,
    y,
  );

  // Return base64 PNG
  return canvas.toDataURL("image/png");
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat(`en-${"NG"}`, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // remove decimals if you want
  }).format(price).slice(2);
};
