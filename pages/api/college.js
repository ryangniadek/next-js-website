// pages/api/sendConfirmationEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    //   if (req.method !== 'POST' || req.method != '') {
    //     return res.status(405).json({ error: 'Method Not Allowed' });
    //   }

    if (req.method == 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        try {
            // Create a Nodemailer transporter using your email service provider credentials
            const transporter = nodemailer.createTransport({
                host: 'your-smtp-host',
                port: 587,
                secure: false, // Set to true if using a secure connection (e.g., Gmail SMTP with SSL)
                auth: {
                    user: 'your-email@example.com',
                    pass: 'your-email-password',
                },
            });

            // Send the confirmation email
            await transporter.sendMail({
                from: 'your-email@example.com',
                to: email,
                subject: 'Confirmation Email',
                text: 'This is your confirmation email.',
                html: '<p>This is your confirmation email.</p>',
            });

            return res.status(200).json({ message: 'Confirmation email sent successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send the confirmation email' });
        }
    } else if (req.method == 'GET') {
        return res.status(200).json({ message: 'This endpoint sends emails :-)' });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }


}
