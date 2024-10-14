import { Resend } from "resend";

import { NextResponse } from "next/server";
import WelcomeTemplate from "@/email/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "khantkokozawstudy@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Mario" />,
  });

  return NextResponse.json({});
}
