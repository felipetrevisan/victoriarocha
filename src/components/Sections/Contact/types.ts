export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ResendErrors = {
  message: string,
  name: string,
  statusCode: number;
}