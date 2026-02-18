import nodemailer from 'nodemailer';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env file manually for local dev
try {
    const envPath = resolve(process.cwd(), '.env');
    const envContent = readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                process.env[key.trim()] = valueParts.join('=').trim();
            }
        }
    });
    console.log('✅ Loaded .env file');
} catch (e) {
    console.warn('⚠️  No .env file found. Create one from .env.example');
}

const PORT = 3001;

const server = createServer(async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/api/send-invoice') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
            try {
                const { email, name, invoiceNumber, imageBase64 } = JSON.parse(body);

                if (!email || !invoiceNumber || !imageBase64) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Missing required fields' }));
                    return;
                }

                const { SMTP_HOST = 'smtp.gmail.com', SMTP_PORT = '587', SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

                if (!SMTP_USER || !SMTP_PASS) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'SMTP credentials not configured. Create a .env file from .env.example' }));
                    return;
                }

                const transporter = nodemailer.createTransport({
                    host: SMTP_HOST,
                    port: parseInt(SMTP_PORT),
                    secure: parseInt(SMTP_PORT) === 465,
                    auth: { user: SMTP_USER, pass: SMTP_PASS }
                });

                const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
                const imageBuffer = Buffer.from(base64Data, 'base64');

                const info = await transporter.sendMail({
                    from: SMTP_FROM || `PadosiAgent ServTech <${SMTP_USER}>`,
                    to: email,
                    subject: `Your Invoice ${invoiceNumber} — PadosiAgent ServTech Pvt Ltd`,
                    html: `
                        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:auto;padding:30px;">
                            <div style="text-align:center;padding:20px 0;border-bottom:2px solid #2563eb;">
                                <h2 style="color:#1e40af;margin:0;">PadosiAgent ServTech Pvt Ltd</h2>
                                <p style="color:#6b7280;font-size:14px;margin:5px 0 0;">Invoice Notification</p>
                            </div>
                            <div style="padding:25px 0;">
                                <p style="color:#374151;font-size:16px;">Dear <strong>${name || 'Valued Customer'}</strong>,</p>
                                <p style="color:#4b5563;font-size:15px;line-height:1.6;">
                                    Please find attached your invoice <strong>${invoiceNumber}</strong>.
                                </p>
                                <p style="color:#4b5563;font-size:15px;line-height:1.6;">
                                    If you have any questions, please don't hesitate to contact us.
                                </p>
                            </div>
                            <div style="border-top:1px solid #e5e7eb;padding-top:20px;text-align:center;">
                                <p style="color:#9ca3af;font-size:12px;">
                                    PadosiAgent ServTech Pvt Ltd<br>
                                    This is an auto-generated invoice. Please do not reply to this email.
                                </p>
                            </div>
                        </div>
                    `,
                    attachments: [{
                        filename: `${invoiceNumber}.png`,
                        content: imageBuffer,
                        contentType: 'image/png'
                    }]
                });

                console.log(`✅ Email sent to ${email} (${invoiceNumber})`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, messageId: info.messageId, to: email }));

            } catch (err) {
                console.error('❌ Email error:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to send email', details: err.message }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`📧 Email API server running at http://localhost:${PORT}`);
    console.log(`   POST http://localhost:${PORT}/api/send-invoice`);
});
