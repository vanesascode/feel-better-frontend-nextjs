"use server";

import { RecoveryEmailTemplate } from "@/components/recovery/recoveryEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postRecoveryEmail(userEmail: string) {
  const data = await resend.emails.send({
    from: "FeelBetter <no-reply@mejoraconfeelbetter.online>",
    to: userEmail,
    subject: "Password reset for your FeelBetter account",
    react: RecoveryEmailTemplate({ userEmail: userEmail }),
    text: "",
  });
  console.log(data);
  if (data.error !== null) {
    return Error("Error sending recovery email");
  }
}
