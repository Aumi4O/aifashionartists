// Simple Resend test script to send a single email via SDK
// Usage: node scripts/send-test-email.js "re_...API_KEY..." "to@example.com"

import { Resend } from 'resend';

const apiKey = process.argv[2] || process.env.RESEND_API_KEY;
const to = process.argv[3] || 'support@aumi4.com';

if (!apiKey) {
  console.error('Missing RESEND_API_KEY. Pass as arg or env var.');
  process.exit(1);
}

const resend = new Resend(apiKey);

try {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
  if (error) {
    console.error('Resend error:', error);
    process.exit(1);
  }
  console.log('Sent. id =', data?.id || 'unknown');
} catch (e) {
  console.error('Failed:', e?.message || e);
  process.exit(1);
}


