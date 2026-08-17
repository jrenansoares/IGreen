import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface LeadPayload {
  plate: string;
  vehicleType: string;
  name: string;
  whatsapp: string;
  email?: string;
  planName?: string;
  estimatedPrice?: string;
  utms?: Record<string, string | undefined>;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy creation of email transporter
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  return null;
}

// Format lead email HTML template
function generateEmailHtml(lead: LeadPayload): string {
  const dateStr = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const cleanPhone = lead.whatsapp.replace(/\D/g, "");
  const waLink = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(`Olá ${lead.name}! Recebi sua cotação de seguro para o veículo ${lead.plate} (${lead.vehicleType}). Vamos finalizar a contratação?`)}`;

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #180033 0%, #2A0845 50%, #00A651 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0 0 8px; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; color: #a7f3d0; font-weight: 600; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; padding: 6px 14px; background-color: #e6f7ef; color: #008744; border-radius: 20px; font-weight: 700; font-size: 12px; margin-bottom: 20px; }
    .card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 20px; }
    .card-title { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 12px; }
    .field-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #e2e8f0; font-size: 14px; }
    .field-row:last-child { border-bottom: none; }
    .field-label { color: #64748b; font-weight: 500; }
    .field-value { color: #0f172a; font-weight: 700; text-align: right; }
    .highlight-plate { font-size: 22px; font-weight: 900; color: #00A651; letter-spacing: 2px; }
    .btn-whatsapp { display: block; text-align: center; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 16px 24px; border-radius: 12px; font-size: 16px; font-weight: 800; margin: 24px 0 12px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); }
    .btn-whatsapp:hover { background-color: #1da851; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; background-color: #fafafa; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚗 Nova Simulação de Seguro Auto</h1>
      <p>iGreen Seguros • Parceria BP Seguradora</p>
    </div>
    
    <div class="content">
      <div style="text-align: center;">
        <span class="badge">LEAD RECEBIDO EM ${dateStr}</span>
      </div>

      <div class="card">
        <div class="card-title">Dados do Veículo</div>
        <div class="field-row">
          <span class="field-label">Placa do Veículo:</span>
          <span class="field-value highlight-plate">${lead.plate}</span>
        </div>
        <div class="field-row">
          <span class="field-label">Tipo de Veículo:</span>
          <span class="field-value">${lead.vehicleType}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Dados de Contato do Cliente</div>
        <div class="field-row">
          <span class="field-label">Nome:</span>
          <span class="field-value">${lead.name}</span>
        </div>
        <div class="field-row">
          <span class="field-label">WhatsApp:</span>
          <span class="field-value">${lead.whatsapp}</span>
        </div>
        ${lead.email ? `
        <div class="field-row">
          <span class="field-label">E-mail:</span>
          <span class="field-value">${lead.email}</span>
        </div>
        ` : ''}
      </div>

      ${lead.utms && Object.keys(lead.utms).length > 0 ? `
      <div class="card">
        <div class="card-title">Origem e Rastreamento (UTM)</div>
        ${Object.entries(lead.utms).map(([k, v]) => v ? `
          <div class="field-row">
            <span class="field-label">${k}:</span>
            <span class="field-value">${v}</span>
          </div>
        ` : '').join('')}
      </div>
      ` : ''}

      <a href="${waLink}" class="btn-whatsapp" target="_blank">
        💬 Chamar Cliente no WhatsApp Agora
      </a>
    </div>

    <div class="footer">
      <p>Notificação automática enviada pelo portal iGreen Seguros.</p>
    </div>
  </div>
</body>
</html>
  `;
}

// Format customer copy HTML template
function generateCustomerEmailHtml(lead: LeadPayload): string {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #180033 0%, #2A0845 50%, #00A651 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0 0 8px; font-size: 22px; font-weight: 900; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; color: #a7f3d0; }
    .content { padding: 28px 24px; }
    .card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 20px; }
    .benefit-item { display: flex; align-items: center; gap: 8px; padding: 6px 0; font-size: 14px; color: #334155; }
    .btn-action { display: block; text-align: center; background-color: #00A651; color: #ffffff; text-decoration: none; padding: 16px 24px; border-radius: 12px; font-size: 16px; font-weight: 800; margin: 24px 0 12px; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Olá, ${lead.name}! 🛡️</h1>
      <p>Sua simulação de seguro auto foi realizada com sucesso</p>
    </div>
    
    <div class="content">
      <p style="font-size: 15px; line-height: 1.6; color: #475569;">
        Recebemos sua solicitação de cotação para o veículo de placa <strong>${lead.plate}</strong> (${lead.vehicleType}).
      </p>

      <div class="card">
        <h3 style="margin-top: 0; font-size: 16px; color: #1e293b;">O que está incluso na sua proteção:</h3>
        <div class="benefit-item">✅ Cobertura Total contra Roubo, Furto e Colisão</div>
        <div class="benefit-item">✅ Proteção contra Fenômenos da Natureza e Incêndio</div>
        <div class="benefit-item">✅ Guincho 24 Horas com Cobertura Nacional</div>
        <div class="benefit-item">✅ Assistência a Terceiros e Carro Reserva</div>
        <div class="benefit-item">✅ Clube de Benefícios com até 70% de Desconto</div>
      </div>

      <p style="font-size: 14px; color: #64748b;">
        Nosso consultor entrará em contato pelo seu WhatsApp (<strong>${lead.whatsapp}</strong>) para apresentar os valores exatos e finalizar a emissão da sua apólice sem burocracia.
      </p>

      <a href="https://wa.me/5521984458464?text=${encodeURIComponent(`Olá! Sou ${lead.name} e acabei de simular o seguro da placa ${lead.plate}. Quero saber os valores de contratação!`)}" class="btn-action">
        Falar com Consultor no WhatsApp
      </a>
    </div>

    <div class="footer">
      <p>iGreen Seguros & BP Seguradora • Proteção inteligente e descomplicada</p>
    </div>
  </div>
</body>
</html>
  `;
}

// API Route: Send Quote Lead and Dispatch Email
app.post("/api/send-quote-email", async (req, res) => {
  try {
    const { plate, vehicleType, name, whatsapp, email, planName, estimatedPrice, utms } = req.body as LeadPayload;

    if (!plate || !name || !whatsapp) {
      return res.status(400).json({ 
        success: false, 
        error: "Campos obrigatórios ausentes: placa, nome e whatsapp são necessários." 
      });
    }

    const recipientEmail = process.env.NOTIFICATION_EMAIL || "jrenansoares@gmail.com";
    const leadPayload: LeadPayload = { plate, vehicleType, name, whatsapp, email, planName, estimatedPrice, utms };

    console.log("==========================================");
    console.log("📥 NOVA SIMULAÇÃO DE SEGURO AUTO RECEBIDA:");
    console.log(`- Nome: ${name}`);
    console.log(`- WhatsApp: ${whatsapp}`);
    console.log(`- Placa: ${plate} (${vehicleType})`);
    console.log(`- E-mail cliente: ${email || "Não informado"}`);
    console.log(`- Destinatário de notificação: ${recipientEmail}`);
    console.log("==========================================");

    let emailSentToAdmin = false;
    let emailSentToCustomer = false;

    // 1. Check Resend API if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.SMTP_FROM || "iGreen Seguros <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: `🚗 Nova Simulação de Seguro: ${plate} - ${name}`,
            html: generateEmailHtml(leadPayload),
          }),
        });

        if (resendRes.ok) {
          emailSentToAdmin = true;
          console.log(`✅ E-mail enviado com sucesso via Resend para ${recipientEmail}`);
        }

        // If customer provided an email
        if (email && email.includes("@")) {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.SMTP_FROM || "iGreen Seguros <onboarding@resend.dev>",
              to: [email],
              subject: `Sua Cotação de Seguro Auto iGreen - Placa ${plate}`,
              html: generateCustomerEmailHtml(leadPayload),
            }),
          });
          emailSentToCustomer = true;
        }
      } catch (resendErr) {
        console.error("Erro ao enviar e-mail via Resend:", resendErr);
      }
    }

    // 2. Check SMTP Transporter if not yet sent via Resend
    if (!emailSentToAdmin) {
      const transporter = createTransporter();
      if (transporter) {
        try {
          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"iGreen Seguros" <${process.env.SMTP_USER || "contato@igreenseguros.com.br"}>`,
            to: recipientEmail,
            subject: `🚗 Nova Simulação de Seguro Auto: ${plate} - ${name}`,
            html: generateEmailHtml(leadPayload),
          });
          emailSentToAdmin = true;
          console.log(`✅ E-mail enviado com sucesso via SMTP para ${recipientEmail}`);

          if (email && email.includes("@")) {
            await transporter.sendMail({
              from: process.env.SMTP_FROM || `"iGreen Seguros" <${process.env.SMTP_USER || "contato@igreenseguros.com.br"}>`,
              to: email,
              subject: `Sua Cotação de Seguro Auto iGreen - Placa ${plate}`,
              html: generateCustomerEmailHtml(leadPayload),
            });
            emailSentToCustomer = true;
          }
        } catch (smtpErr) {
          console.error("Erro ao enviar e-mail via SMTP:", smtpErr);
        }
      }
    }

    return res.json({
      success: true,
      emailSentToAdmin,
      emailSentToCustomer,
      recipientEmail,
      message: emailSentToAdmin 
        ? `Cotação enviada com sucesso para ${recipientEmail}!`
        : `Simulação registrada com sucesso para o consultor (${recipientEmail}).`,
    });
  } catch (error) {
    console.error("Erro ao processar cotação:", error);
    return res.status(500).json({ success: false, error: "Falha interna ao processar simulação." });
  }
});

// Health endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    service: "iGreen Full-Stack Server",
    notificationEmail: process.env.NOTIFICATION_EMAIL || "jrenansoares@gmail.com"
  });
});

// Vite & Static file serving
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 iGreen Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupViteOrStatic();
