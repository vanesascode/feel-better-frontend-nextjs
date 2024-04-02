import { RecoveryEmailTemplate } from "@/components/recovery/recoveryEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postRecoveryEmail(userEmail: string) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vanesa.juarez.paris@gmail.com"],
      subject: "Password reset for your FeelBetter account",
      react: RecoveryEmailTemplate({ userEmail: userEmail }),
      text: "",
    });
    console.log(data);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}
