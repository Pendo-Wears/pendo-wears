"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return 'LOADING...'; // or a spinner

  return <>{children}</>;
}
