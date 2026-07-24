interface AdminEmailTemplateParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function getAdminEmailTemplate({
  name,
  email,
  phone,
  message
}: AdminEmailTemplateParams): string {
  const rawPhone = phone.replace(/\D/g, "");

  return `
    <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-top: 4px solid #10b981; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">

        <div style="margin-bottom: 24px;">
          <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #059669; background-color: #f4f4f5; padding: 4px 8px; border-radius: 4px;">
            Nova Solicitação
          </span>
          <h2 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 600; color: #09090b;">
            Solicitação de Projeto Recebida
          </h2>
        </div>

        <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;" />

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; vertical-align: top; width: 120px;">
              <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #71717a;">Nome</span>
            </td>
            <td style="padding: 8px 0; font-size: 14px; font-weight: 500; color: #09090b;">
              ${name}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; vertical-align: top;">
              <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #71717a;">E-mail</span>
            </td>
            <td style="padding: 8px 0; font-size: 14px; color: #09090b;">
              <a href="mailto:${email}" style="color: #059669; text-decoration: none; font-weight: 500;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; vertical-align: top;">
              <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #71717a;">Telefone</span>
            </td>
            <td style="padding: 8px 0; font-size: 14px; color: #09090b;">
              +55${phone}
            </td>
          </tr>
        </table>

        <div style="margin-bottom: 28px;">
          <span style="display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #71717a; margin-bottom: 8px;">
            Mensagem
          </span>
          <div style="background-color: #f4f4f5; border-left: 4px solid #10b981; padding: 16px; border-radius: 0 6px 6px 0; font-size: 14px; line-height: 1.6; color: #18181b; white-space: pre-wrap;">${message}</div>
        </div>

        ${
          rawPhone
            ? `
          <div style="border-top: 1px solid #e4e4e7; padding-top: 20px; text-align: right;">
            <a href="https://wa.me/+55${rawPhone}" target="_blank" style="display: inline-block; background-color: #10b981; color: #ffffff; font-size: 13px; font-weight: 600; text-decoration: none; padding: 10px 16px; border-radius: 6px;">
              Responder no WhatsApp
            </a>
          </div>
        `
            : ""
        }

      </div>

      <div style="max-width: 560px; margin: 16px auto 0 auto; text-align: center; font-size: 12px; color: #71717a;">
        Notificação automática gerada pelo seu portfólio.
      </div>
    </div>
  `;
}
