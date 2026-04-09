import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const data = await req.formData()

  try {
    await resend.emails.send({
      from: "Roomforia <onboarding@resend.dev>",
      to: "roomforia.spb@gmail.com",
      subject: "Новая заявка партнёра",
      html: `
        <h2>Новая заявка</h2>
        <p><b>Компания:</b> ${data.get("company")}</p>
        <p><b>Контакт:</b> ${data.get("name")}</p>
        <p><b>Телефон:</b> ${data.get("phone")}</p>
        <p><b>Email:</b> ${data.get("email")}</p>
        <p><b>Сообщение:</b> ${data.get("message")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 })
  }
}