export async function fetchExistingUsersEmails() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users");
    const data = await response.json();
    const emails = data.map((user: any) => user.email);
    return emails;
  } catch (error) {
    return Error("Error fetching existing users emails");
  }
}

interface ResetPasswordProps {
  email: string;
  password: string;
}

export async function resetPassword({ email, password }: ResetPasswordProps) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status !== 200) {
      throw new Error("Error resetting password");
    }
  } catch (error) {
    throw new Error("Error resetting password");
  }
}
