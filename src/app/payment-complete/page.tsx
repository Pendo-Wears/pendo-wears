"use client";

import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function PaymentComplete() {
  const params = useSearchParams();

  const veriFyTransaction = async () => {
    const transaction_id = params.get("transaction_id");
    const status = params.get("status");

    if (status === "successful" && transaction_id) {
      const verify = await axios.post("/api/flutterwave/verify", {
        transaction_id,
      });

      console.log("Verification result:", verify.data);
    }
  };
  useEffect(() => {
    veriFyTransaction();
  }, [params]);

  return null; // no UI needed
}
