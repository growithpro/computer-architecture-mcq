import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if(req.method !== 'POST'){
    return res.status(405).json({message:'Method not allowed'});
  }

  const { name, email, score } = req.body;

  try {

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'YOURMAIL@gmail.com',
      subject: 'New MCQ Test Result',
      html: `
        <h2>Student Result</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Score:</b> ${score}/20</p>
      `
    });

    return res.status(200).json({message:'Success'});

  } catch(error){
    return res.status(500).json({error:error.message});
  }
}
