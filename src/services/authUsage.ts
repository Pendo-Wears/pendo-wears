import {
  signup,
  login,
  resetPassword,
  changePassword,
  completeResetPassword,
} from "../lib/authServices";

export async function handleSignup(formData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country?: string;
  avatar?: string;
}) {
  const { firstName, lastName, email, password } = formData;

  // VALIDATION
  if (!firstName || firstName.trim() === "") {
    return { success: false, error: "FirstName is required" };
  }

  if (!lastName || lastName.trim() === "") {
    return { success: false, error: "LastName is required" };
  }

  if (!email || email.trim() === "") {
    return { success: false, error: "Email is required" };
  }

  if (!password || password.trim() === "") {
    return { success: false, error: "Password is required" };
  }
  try {
    // optional loading UI
    // console.log("Signing up...");

    const { token, user } = await signup(formData);

    // console.log("Signup successful");
    // console.log("User:", user);
    // console.log("Token:", token);

    return { success: true, user, token };
  } catch (error: any) {
    console.error("Signup failed:", error.message);
    return { success: false, error: error.message };
  }
}

export async function handleLogin(identifier: string, password: string) {
  if (!identifier || identifier.trim() === "") {
    return { success: false, error: "Email or username is required" };
  }

  if (!password || password.trim() === "") {
    return { success: false, error: "Password is required" };
  }

  try {
    // console.log("Logging in...");

    const { token, user } = await login(identifier, password);

    // console.log("Login successful");
    // console.log("User:", user);
    // console.log("Token:", token);

    return { success: true, user, token };
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return { success: false, error: error.message };
  }
}

export async function changeUserPassword(password: string) {
  // if (!email || email.trim() === "") {
  //   return { success: false, error: "Email or username is required" };
  // }

  if (!password || password.trim() === "") {
    return { success: false, error: "Password is required" };
  }

  try {
    const reset = await changePassword(password);

    // console.log("Reset successful", reset);

    return { success: true, data: reset.data };
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return { success: false, error: error.message };
  }
}

export async function resetUserPassword(email: string) {
  // if (!email || email.trim() === "") {
  //   return { success: false, error: "Email or username is required" };
  // }

  if (!email || email.trim() === "") {
    return { success: false, error: "email is required" };
  }

  try {
    const reset = await resetPassword(email);

    // console.log("Reset successful", reset);

    return { success: true, data: reset.data };
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return { success: false, error: error.message };
  }
}

export async function completeResetUserPassword(
  email: string,
  password: string,
  code: string,
) {
  // if (!email || email.trim() === "") {
  //   return { success: false, error: "Email or username is required" };
  // }

  if (!email || email.trim() === "") {
    return { success: false, error: "email is required" };
  }

  try {
    const reset = await completeResetPassword(email, password, code);

    // console.log("Reset successful", reset);

    return { success: true, data: reset.data };
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return { success: false, error: error.message };
  }
}
