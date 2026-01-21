import axios from "axios";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing token" }),
        { status: 400 },
      );
    }

    // Call WordPress using GET (this is IMPORTANT)
    const wpResponse = await axios.get(
      "https://darkgray-heron-136669.hostingersite.com",
      {
        params: {
          alg_wc_ev_verify_email: token,
        },
        maxRedirects: 0, // we only care if it succeeds
        validateStatus: (status) => status >= 200 && status < 400,
      },
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Verification failed",
      }),
      { status: 400 },
    );
  }
}
