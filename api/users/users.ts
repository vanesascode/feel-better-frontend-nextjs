interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

export async function fetchExistingUsersEmails() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users");
    const data = await response.json();
    const emails = data.map((user: User) => user.email);
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

interface currentUserAccountDetailsProps {
  name?: string;
  email?: string;
  password?: string;
  _id: string | null;
}

export async function editCurrentUserAccountDetails({
  name,
  email,
  password,
  _id,
}: currentUserAccountDetailsProps) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteCurrentUserAccount(_id: string | null) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
