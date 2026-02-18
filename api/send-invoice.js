import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, name, invoiceNumber, imageBase64 } = req.body;

    // Validate required fields
    if (!email || !invoiceNumber || !imageBase64) {
        return res.status(400).json({
            error: 'Missing required fields: email, invoiceNumber, imageBase64'
        });
    }

    // SMTP config from environment variables
    const {
        SMTP_HOST = 'smtp.gmail.com',
        SMTP_PORT = '587',
        SMTP_USER,
        SMTP_PASS,
        SMTP_FROM
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
        return res.status(500).json({
            error: 'SMTP credentials not configured. Set SMTP_USER and SMTP_PASS environment variables.'
        });
    }

    const fromAddress = SMTP_FROM || `PadosiAgent ServTech <${SMTP_USER}>`;

    // Create transporter
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: parseInt(SMTP_PORT) === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });

    // Strip the data:image/png;base64, prefix if present
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');

    // Build email
    const mailOptions = {
        from: fromAddress,
        to: email,
        subject: `Your Invoice ${invoiceNumber} — PadosiAgent ServTech Pvt Ltd`,
        html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px;">
                <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #2563eb;">
                    <h2 style="color: #1e40af; margin: 0;">PadosiAgent ServTech Pvt Ltd</h2>
                    <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0;">Invoice Notification</p>
                </div>
                <div style="padding: 25px 0;">
                    <p style="color: #374151; font-size: 16px;">Dear <strong>${name || 'Valued Customer'}</strong>,</p>
                    <p style="color: #4b5563; font-size: 15px; line-height: 1.6;">
                        Please find attached your invoice <strong>${invoiceNumber}</strong>.
                    </p>
                    <p style="color: #4b5563; font-size: 15px; line-height: 1.6;">
                        If you have any questions regarding this invoice, please don't hesitate to contact us.
                    </p>
                </div>
                <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px;">
                        PadosiAgent ServTech Pvt Ltd<br>
                        This is an auto-generated invoice. Please do not reply to this email.
                    </p>
                </div>
            </div>
        `,
        attachments: [
            {
                filename: `${invoiceNumber}.png`,
                content: imageBuffer,
                contentType: 'image/png'
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({
            success: true,
            messageId: info.messageId,
            to: email
        });
    } catch (err) {
        console.error('Email send error:', err);
        return res.status(500).json({
            error: 'Failed to send email',
            details: err.message
        });
    }
}
