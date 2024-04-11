interface SaveThoughtsProps {
  user: string;
  positiveThought: string | null | undefined;
  negativeThought: string | null | undefined;
  feeling: string;
  token: string | null | undefined;
}

export async function saveThoughtsForFollowup({
  user,
  positiveThought,
  negativeThought,
  feeling,
  token,
}: SaveThoughtsProps) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/userthoughts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user,
          positiveThought,
          negativeThought,
          feeling,
        }),
      }
    );
    if (response.status !== 201) {
      throw new Error("Error saving thoughts");
    }
  } catch (error) {
    throw new Error("Error saving thoughts");
  }
}
