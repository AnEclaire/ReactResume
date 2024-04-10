import { NextResponse } from 'next/server';
import { Resend } from 'resend'; 

import ContactEmail from '../../../emails/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  
  const {name, email, message} = await request.json();

  await resend.emails.send({
    from: email,
    to: 'contact@emmagutierrez.net',
    subject: name + ' Contact Form Submission',
    react: ContactEmail({
      message
    })
  });

  return NextResponse.json({
    message
  })
}