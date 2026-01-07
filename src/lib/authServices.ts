import { productsEndpoint } from "./endpoints";
import userEndpoints from "./userServices";
import { privateApi } from "./woocommerce";

const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY!;

let token: string = "";
let user: any = null;

export async function signup({
  firstName,
  lastName,
  email,
  password,
  country,
  avatar,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country?: string;
  avatar?: string; // picture url
}) {
  try {
    const body: any = {
      first_name: firstName,
      last_name: lastName,
      user_nicename: firstName.toLowerCase() + "-" + lastName.toLowerCase(),
      email,
      password,
      auth_key: AUTH_KEY,
      country,
      photoUrl: avatar,
      avatar: avatar,
      simple_local_avatar: {
        full: avatar, // required by Simple Local Avatar
      },
      isVerified: false,
      // user_meta: [
      //   {
      //     key: "isVerified",
      //     value: false,
      //   },
      // ],
    };

    // REGISTER + AUTO LOGIN
    const res = await privateApi.post("/auth/v1/users", body);
    const data = res.data;

    if (!data?.success) {
      throw new Error(data?.data?.message || "Signup failed");
    }

    // Token returned automatically because auto-login is enabled

    user = data?.user;

    const updateBody = {
      avatar_url: avatar || "",
      billing: {
        country: country || "",
      },
    };

    if (user && user.ID) {
      const updateUser = await userEndpoints.updateUser(user?.ID, updateBody);
    }

    // VALIDATE TOKEN
    // const login = await privateApi.post("/auth/v1/auth", {
    //   email,
    //   password,
    //   auth_key: AUTH_KEY,
    // });

    // if (!login.data?.success) {
    //   throw new Error(login?.data?.message || "Login failed");
    // }

    // token = login?.data?.data?.jwt;

    //if(typeof window !== "undefined"){localStorage.setItem("token", token);

    // const validate = await privateApi.post("/auth/v1/auth/validate", {
    //   jwt: token,
    //   auth_key: AUTH_KEY,
    // });

    // if (!validate.data?.success) {
    //   throw new Error("Token validation failed");
    // }

    // // SAVE TO LOCAL STORAGE
    //if(typeof window !== "undefined"){localStorage.setItem("user", JSON.stringify(user));
    //if(typeof window !== "undefined"){localStorage.setItem("isAuthenticated", JSON.stringify(true));

    return { token, user };
  } catch (err: any) {
    console.error("Signup error:", err);
    throw new Error(err.response?.data?.data?.message || err.message);
  }
}

export async function login(identifier: string, password: string) {
  try {
    const body: any = {
      password,
      auth_key: AUTH_KEY,
    };

    // detect whether identifier is email or username
    if (identifier.includes("@")) {
      body.email = identifier;
    } else {
      body.username = identifier;
    }

    // LOGIN
    const res = await privateApi.post("/auth/v1/auth", body);
    const data = res.data;

    if (!data?.success) {
      throw new Error(data?.data?.message || "Login failed");
    }

    token = data?.data?.jwt;

    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }

    // VALIDATE TOKEN
    const validate = await privateApi.post("/auth/v1/auth/validate", {
      jwt: token,
      auth_key: AUTH_KEY,
    });

    if (!validate.data?.success) {
      throw new Error("Token validation failed");
    }

    user = validate?.data?.data?.user;
    const result: any = await userEndpoints.getUser(user?.ID);

    user = result?.data?.data;

    const checkIfValid = await privateApi.get(`/wp/v2/users/me`);

    if (user?.meta_data?.[0]?.value === "0") {
      throw new Error(
        "Account not verified. Please check your email to verify your account."
      );
    }

    // SAVE TO LOCAL STORAGE
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    }

    return { token, user };
  } catch (err: any) {
    console.error("Login error:", err);
    throw new Error(err.response?.data?.data?.message || err.message);
  }
}

export const logoutUser = () => {
  try {
    if (typeof window !== "undefined") {
      // Remove all authentication storage
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");

      // Optional: remove any WooCommerce cart or session keys
      localStorage.removeItem("wc_session");
    }

    // Redirect the user (optional)
    if (typeof window !== "undefined") {
      window.location.href = "/"; // or "/" or "/auth"
    }

    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
};
