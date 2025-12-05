import api from "./woocommerce";

const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY!;

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
      user_meta: {
        "country": country || "",
        "avatar": avatar || "",
      }
    };


    // REGISTER + AUTO LOGIN
    const res = await api.post("/users", body);
    const data = res.data;

    if (!data?.success) {
      throw new Error(data?.data?.message || "Signup failed");
    }

    // Token returned automatically because auto-login is enabled

    const user = data?.data?.user;

    // VALIDATE TOKEN
    const login = await api.post("/auth", {
      email,
      password,
      auth_key: AUTH_KEY,
    });

    if (!login.data?.success) {
      throw new Error(login?.data?.message || "Login failed");
    }

    const token = login?.data?.data?.jwt;

    localStorage.setItem("token", token);

    const validate = await api.post("/auth/validate", {
      jwt: token,
      auth_key: AUTH_KEY,
    });

    if (!validate.data?.success) {
      throw new Error("Token validation failed");
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", JSON.stringify(true));

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
    const res = await api.post("/auth", body);
    const data = res.data;

    if (!data?.success) {
      throw new Error(data?.data?.message || "Login failed");
    }
    
    const token = data?.data?.jwt;
   

    localStorage.setItem("token", token);
    
    // VALIDATE TOKEN
    const validate = await api.post("/auth/validate", {
      jwt: token,
      auth_key: AUTH_KEY,
    });

    if (!validate.data?.success) {
      throw new Error("Token validation failed");
    }

     const user = validate?.data?.data?.user;

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", JSON.stringify(true));

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
      window.location.href = "/login"; // or "/" or "/auth"
    }

    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
};
