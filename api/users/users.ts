export async function fetchExistingUsersEmails() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users");
    const data = await response.json();
    const emails = data.map((user: any) => user.email);
    return emails;
  } catch (error) {
    console.error("Error fetching existing users' emails:", error);
  }
}
