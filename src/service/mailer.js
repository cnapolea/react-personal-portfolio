import { config } from 'dotenv';
import { SMTPClient } from 'smtp-client';

config();

let s = new SMTPClient({
  host: 'smtp.gmail.com',
  port: 25
});

export async function mailer(visitorEmail, message) {
  await s.connect();
  await s.greet({ hostname: 'smtp.gmail.com' }); // runs EHLO command or HELO as a fallback
  await s.authPlain({
    username: process.env.GMAIL_EMAIL,
    password: process.env.GMAIL_PASSWORD
  }); // authenticates a user
  await s.mail({ from: process.env.GMAIL_EMAIL }); // runs MAIL FROM command
  await s.rcpt({ to: process.env.GMAIL_EMAIL }); // runs RCPT TO command (run this multiple times to add more recii)
  await s.data(`${message} - ${visitorEmail}`); // runs DATA command and streams email source
  await s.quit(); // runs QUIT command
}
