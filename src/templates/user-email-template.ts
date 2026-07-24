interface UserEmailTemplateParams {
  name: string;
}

export function getUserEmailTemplate({
  name
}: UserEmailTemplateParams): string {
  return `
    <div style="background-color: #fafafa; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">

        <!-- Mensagem de Boas-vindas -->
        <h2 style="color: #10b981; font-size: 20px; font-weight: 600; margin: 0 0 16px 0;">
          Olá, ${name}! 👋
        </h2>

        <p style="font-size: 14px; line-height: 1.6; color: #18181b; margin: 0 0 12px 0;">
          Obrigado pelo contato e pelo interesse em trabalharmos juntos.
        </p>

        <p style="font-size: 14px; line-height: 1.6; color: #18181b; margin: 0 0 20px 0;">
          Sua mensagem foi recebida com sucesso. Vou analisar os detalhes da sua ideia e te dou um retorno em <strong>até 24 horas</strong>.
        </p>

        <p style="font-size: 14px; color: #71717a; margin: 0 0 12px 0;">
          Caso seja algo urgente, você também pode falar comigo pelos contatos abaixo.
        </p>

        <p style="font-size: 14px; color: #71717a; margin: 0 0 24px 0;">
          Atenciosamente,
        </p>

        <!-- ASSINATURA ORIGINAL INTCTA -->
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="540"
          bgcolor="rgb(29, 93, 71)"
          style="
            width: 540px;
            background-color: rgb(29, 93, 71);
            border-right: 12px solid rgb(142, 251, 170);
            border-radius: 6px;
            font-family: Arial, sans-serif;
          "
        >
          <tbody valign="middle">
            <tr valign="inherit">
              <td align="center" valign="inherit" style="padding: 20px; width: 200px">
                <a href="https://samuel-oliveira.com/" style="text-decoration: none" target="_blank">
                  <img
                    src="https://avatars.githubusercontent.com/u/86499135?v=4"
                    width="140"
                    height="140"
                    alt="Samuel Oliveira"
                    style="
                      border-radius: 50%;
                      border: 3px solid rgb(41, 189, 142);
                      display: block;
                    "
                  />
                </a>
              </td>
              <td valign="inherit" style="padding: 20px 20px 20px 0px">
                <h2
                  style="
                    color: rgb(125, 225, 161);
                    margin: 0px;
                    font-size: 20px;
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                  "
                >
                  Samuel Oliveira de Araujo
                </h2>
                <h3
                  style="
                    color: rgb(255, 255, 255);
                    margin: 5px 0px 15px;
                    font-size: 15px;
                    font-weight: normal;
                  "
                >
                  Desenvolvedor Web Full Stack
                </h3>
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody valign="middle">
                    <tr valign="inherit">
                      <td valign="inherit" style="padding-bottom: 8px">
                        <a
                          href="tel:+5511968989860"
                          style="
                            text-decoration: none;
                            color: rgb(255, 255, 255);
                            font-size: 13px;
                            display: block;
                          "
                          target="_blank"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/455/455705.png"
                            width="14"
                            height="14"
                            style="vertical-align: middle"
                          />&nbsp;<span style="margin-left: 8px">(11) 96898-9860</span>&nbsp;
                        </a>
                      </td>
                    </tr>
                    <tr valign="inherit">
                      <td valign="inherit" style="padding-bottom: 8px">
                        <a
                          href="mailto:samuel.oliveira.developer@gmail.com"
                          style="
                            text-decoration: none;
                            color: rgb(255, 255, 255);
                            font-size: 13px;
                            display: block;
                          "
                          target="_blank"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                            width="14"
                            height="14"
                            style="vertical-align: middle"
                          />&nbsp;<span style="margin-left: 8px">samuel.oliveira.developer@gmail.com</span>&nbsp;
                        </a>
                      </td>
                    </tr>
                    <tr valign="inherit">
                      <td valign="inherit" style="padding-bottom: 20px">
                        <a
                          href="https://samuel-oliveira.com/"
                          style="
                            text-decoration: none;
                            color: rgb(255, 255, 255);
                            font-size: 13px;
                            display: block;
                          "
                          target="_blank"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png"
                            width="14"
                            height="14"
                            style="vertical-align: middle"
                          />&nbsp;<span style="margin-left: 8px">samuel-oliveira.com</span>&nbsp;
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody valign="middle">
                    <tr valign="inherit">
                      <td
                        bgcolor="#FFFFFF"
                        valign="inherit"
                        style="border-radius: 4px; padding: 5px 10px"
                      >
                        <a
                          href="https://samuel-oliveira.com/"
                          style="
                            color: rgb(0, 0, 0);
                            text-decoration: none;
                            font-size: 12px;
                            font-weight: bold;
                          "
                          target="_blank"
                        >Portfolio</a>
                      </td>
                      <td valign="inherit" style="width: 8px"><br /></td>
                      <td
                        bgcolor="#0077B5"
                        valign="inherit"
                        style="border-radius: 4px; padding: 5px 10px"
                      >
                        <a
                          href="https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"
                          style="
                            color: rgb(255, 255, 255);
                            text-decoration: none;
                            font-size: 12px;
                            font-weight: bold;
                          "
                          target="_blank"
                        >LinkedIn</a>
                      </td>
                      <td valign="inherit" style="width: 8px"><br /></td>
                      <td
                        bgcolor="#000000"
                        valign="inherit"
                        style="border-radius: 4px; padding: 5px 10px"
                      >
                        <a
                          href="https://github.com/SamuelOliveiraa"
                          style="
                            color: rgb(255, 255, 255);
                            text-decoration: none;
                            font-size: 12px;
                            font-weight: bold;
                          "
                          target="_blank"
                        >GitHub</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <!-- Rodapé Discreto -->
      <div style="max-width: 600px; margin: 16px auto 0 auto; text-align: center; font-size: 12px; color: #71717a;">
        Esta é uma resposta automática enviada para confirmar o recebimento do seu contato.
      </div>
    </div>
  `;
}
