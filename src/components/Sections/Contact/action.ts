"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/Email";
import { ContactForm, ResendErrors } from "./types";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: ContactForm): Promise<CreateEmailResponse> {
  const data = await resend.emails.send({
    from: `${name} <${email}>`,
    to: [process.env.SENDER_EMAIL!],
    subject: "Nova mensagem de contato (Victória Rocha)",
    react: EmailTemplate({ name, email, subject, message }),
  });

  return data.id ? data as CreateEmailResponse : data;
}
