import crypto from "crypto";

export function encrypt3DES(payload: object, encryptionKey: string) {
  const text = JSON.stringify(payload);

  // Flutterwave requires a 24-byte key
  const key = Buffer.from(encryptionKey.substring(0, 24));

  // IV must be 8 bytes of zeros
  const iv = Buffer.alloc(8, 0);

  const cipher = crypto.createCipheriv("des-ede3-cbc", key, iv);

  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}
