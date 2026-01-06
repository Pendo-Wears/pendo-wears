"use client";

import axios from "axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

type Props = {
  amount: number;
  email: string;
  name: string;
};

export default function FlutterwavePayButton({ amount, email, name }: Props) {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: `tx-${Date.now()}`,
    amount: Number(amount.toFixed(2)),
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    redirect_url:
      typeof window !== "undefined" ? `${window.location.origin}/checkout` : "",
    customer: {
      email,
      name,
      phone_number: "08000000000",
    },
    customizations: {
      title: "Pendowears",
      description: "Payment for items",
      logo: "https://your-logo-url.com/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      onClick={() =>
        handleFlutterPayment({
          callback: async (response) => {
            console.log("Flutterwave response:", response);

            // Always close modal
            closePaymentModal();

            try {
              const verifyRes = await axios.post("/api/flutterwave/verify", {
                transaction_id: response.transaction_id,
              });

              console.log("Verification result:", verifyRes.data);

              if (verifyRes.data.status === "success") {
                // ✅ payment verified
                // proceed with order creation, Printful, WP order update, etc.
              } else {
                // ❌ verification failed
              }
            } catch (error: any) {
              console.error(
                "Verification error:",
                error.response?.data || error.message
              );
            }
          },
          onClose: () => {
            console.log("Payment closed");
          },
        })
      }
      className="px-6 py-3 bg-black text-white rounded"
    >
      Pay with Flutterwave
    </button>
  );
}
