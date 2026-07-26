import { Text } from "@/components/common";
import FramerProvider from "@/provider.tsx/framer-provider";
import BackLink from "@/components/common/back-link";

// export const metadata = {
//   title: "Política de Privacidade | Samuel Oliveira",
//   description: "Política de Privacidade do site institucional e portfólio de Samuel Oliveira."
// };

export default function PrivacyPolicyPage() {
  return (
    <FramerProvider>
      <main className="min-h-screen py-12 md:py-20 px-4 xl:px-0">
        <div className="max-w-3xl mx-auto">
          <BackLink />

          <header className="flex flex-col gap-2 mb-12 border-b pb-8">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              Legal
            </Text>
            <Text
              size="titleMedium"
              as="h1"
              className="text-zinc-950 font-bold"
            >
              Política de Privacidade
            </Text>
            <Text size="textSmall" className="text-zinc-500">
              Última atualização: 26 de Julho de 2026
            </Text>
          </header>

          <article className="flex flex-col gap-8">
            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                1. Introdução
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Esta Política de Privacidade descreve como nós, Samuel Oliveira
                de Araujo (sob o CNPJ 12.345.678/0001-90), coletamos, usamos e
                protegemos as suas informações ao utilizar o nosso website e
                portfólio profissional. A sua privacidade é de extrema
                importância para nós, e estamos comprometidos em proteger os
                dados pessoais que você possa compartilhar conosco.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                2. Coleta de Informações
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Coletamos apenas as informações estritamente necessárias para
                fornecer e aprimorar nossos serviços:
              </Text>
              <ul className="list-disc pl-5 text-zinc-500 space-y-2 leading-relaxed">
                <li>
                  <Text size="textMedium" className="font-normal text-zinc-500">
                    <strong className="text-zinc-950 font-semibold">
                      Dados de Contato:
                    </strong>{" "}
                    Coletamos seu nome, e-mail, número de telefone e quaisquer
                    outras informações que você optar por enviar voluntariamente
                    através do nosso formulário de contato para solicitação de
                    orçamentos ou dúvidas.
                  </Text>
                </li>
                <li>
                  <Text size="textMedium" className="font-normal text-zinc-500">
                    <strong className="text-zinc-950 font-semibold">
                      Dados de Navegação:
                    </strong>{" "}
                    Coletamos dados estatísticos anonimizados sobre o uso do
                    site, tais como páginas visitadas, tempo de permanência,
                    tipo de navegador e origem do tráfego, através do Google
                    Analytics, com a finalidade exclusiva de otimizar a
                    experiência do usuário.
                  </Text>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                3. Uso dos Dados
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Utilizamos os seus dados coletados estritamente para os
                seguintes propósitos:
              </Text>
              <ul className="list-disc pl-5 text-zinc-500 space-y-2 leading-relaxed">
                <li>
                  <Text size="textMedium" className="font-normal text-zinc-500">
                    Responder às suas mensagens, dúvidas ou solicitações de
                    orçamento.
                  </Text>
                </li>
                <li>
                  <Text size="textMedium" className="font-normal text-zinc-500">
                    Prestar suporte técnico ou esclarecimentos relativos a
                    projetos contratados.
                  </Text>
                </li>
                <li>
                  <Text size="textMedium" className="font-normal text-zinc-500">
                    Análise e melhoria contínua do desempenho e usabilidade do
                    nosso portfólio.
                  </Text>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                4. Compartilhamento e Armazenamento
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Não vendemos, alugamos, trocamos ou compartilhamos suas
                informações de identificação pessoal com terceiros para fins
                comerciais. Os seus dados são armazenados de forma segura em
                ambientes operacionais protegidos e são mantidos apenas pelo
                tempo necessário para cumprir as finalidades para as quais foram
                coletados ou conforme exigido por obrigações legais.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                5. Segurança da Informação
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Implementamos medidas de segurança técnicas e administrativas
                razoáveis para proteger os seus dados contra perda, roubo,
                acesso não autorizado, divulgação ou alteração. No entanto,
                lembre-se de que nenhum método de transmissão pela Internet ou
                armazenamento eletrônico é 100% seguro.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                6. Seus Direitos (LGPD)
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD) do
                Brasil, você tem o direito de, a qualquer momento, solicitar a
                confirmação da existência do tratamento de seus dados, acessar
                os dados armazenados, corrigir dados incompletos ou inexatos, ou
                solicitar a exclusão de suas informações de nossa base de dados.
                Para exercer esses direitos, entre em contato conosco através
                dos nossos canais de atendimento.
              </Text>
            </section>

            <section className="flex flex-col gap-3 ">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                7. Contato
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Se você tiver dúvidas, sugestões ou preocupações sobre esta
                Política de Privacidade ou sobre o tratamento dos seus dados,
                entre em contato através do formulário na página inicial ou
                diretamente pelo e-mail de suporte institucional.
              </Text>
            </section>
          </article>
        </div>
      </main>
    </FramerProvider>
  );
}
