import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

async function createCustomerForUser(user: {
  stripeCustomerId: string;
  name: string;
  email: string;
  userId: string;
  phone: string;
  country: string;
}) {
  if (user.stripeCustomerId) return user.stripeCustomerId; // already exists

  const customer = await stripe.customers.create({
    email: user.email,
    name: user.name,
    phone: user.phone,
    description: "Customer",
    metadata: {
      appUserId: user.userId,
    },
    address: {
      country: user.country,
    },
  });
  // console.log("Stripe Customer:", customer);

  return customer.id;
}

export async function POST(req: Request) {
  try {
    const { amount, user, orderId } = await req.json();

    const customerId = await createCustomerForUser(user);

    // 2. Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // NGN → kobo
      currency: "usd",
      customer: customerId,
      automatic_payment_methods: { enabled: true },
      receipt_email: user.email,
      metadata: {
        appUserId: user.userId,
        orderId,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      customerId: customerId,
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Stripe payment intent failed", error: err.message },
      { status: 500 },
    );
  }
}
