interface getAllCalendarThoughtsByUserProps {
  token: string | null;
  _id: string | null;
}

export async function fetchThoughtsByUser({
  token,
  _id,
}: getAllCalendarThoughtsByUserProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/userthoughts/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

interface getThoughtsByUserAndFeelingProps {
  token: string | null;
  _id: string | null;
  feeling: string;
}

export async function fetchThoughtsByUserAndFeeling({
  token,
  _id,
  feeling,
}: getThoughtsByUserAndFeelingProps) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/userthoughts/${_id}/${feeling}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

interface deleteCalendarThoughtProps {
  token: string | null;
  item_id: string | null;
}

export async function deleteCalendarThought({
  token,
  item_id,
}: deleteCalendarThoughtProps) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userthoughts/${item_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
}

interface editCalendarThoughtProps {
  token: string | null;
  item_id: string | null;
  positiveThought: string;
  negativeThought: string;
  feeling: string;
}

export async function editCalendarThought({
  token,
  item_id,
  positiveThought,
  negativeThought,
  feeling,
}: editCalendarThoughtProps) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userthoughts/${item_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ positiveThought, negativeThought, feeling }),
    });
  } catch (error) {
    throw error;
  }
}
