import { Text } from "@/components/common";
import FramerProvider from "@/provider.tsx/framer-provider";
import BackLink from "@/components/common/back-link";

// export const metadata = {
//   title: "Termos de Uso | Samuel Oliveira",
//   description: "Termos de Uso do site institucional e portfólio de Samuel Oliveira."
// };

export default function TermsOfUsePage() {
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
              Termos de Uso
            </Text>
            <Text size="textSmall" className="text-zinc-500">
              Última atualização: 26 de Julho de 2026
            </Text>
          </header>

          <article className="flex flex-col gap-8">
            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                1. Aceitação dos Termos
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Ao acessar e utilizar este website (portfólio de Samuel Oliveira
                de Araujo), você concorda de forma integral e sem reservas com
                os presentes Termos de Uso. Caso não concorde com qualquer parte
                destes termos, solicitamos que não continue utilizando ou
                navegando em nosso site.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                2. Uso Permitido do Website
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Este site foi desenvolvido com o propósito de apresentar os
                serviços de desenvolvimento de software de Samuel Oliveira,
                exibir cases, projetos e possibilitar o contato direto para a
                prestação de serviços. Você se compromete a utilizar o site
                apenas para fins lícitos e de maneira que não infrinja os
                direitos de terceiros ou restrinja o uso e aproveitamento do
                site por outros usuários.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                3. Propriedade Intelectual
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Todo o conteúdo disponibilizado neste site — incluindo, mas não
                se limitando a, textos, gráficos, logotipos, ícones, imagens,
                códigos-fonte, layout e design do site — é de propriedade
                exclusiva de Samuel Oliveira de Araujo (sob o CNPJ
                12.345.678/0001-90) ou foi devidamente licenciado. É proibida a
                reprodução, distribuição, modificação ou uso comercial de
                qualquer parte do conteúdo sem nossa expressa autorização por
                escrito.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                4. Isenção de Responsabilidade
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Nos empenhamos para manter o site atualizado e livre de erros,
                mas não oferecemos garantias implícitas ou explícitas de que o
                funcionamento do site será ininterrupto, livre de vírus, falhas
                ou atrasos. Samuel Oliveira de Araujo não se responsabiliza por
                quaisquer danos diretos ou indiretos decorrentes do uso ou da
                impossibilidade de uso deste website.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                5. Links para Terceiros
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Nosso site pode conter links para websites ou serviços de
                terceiros (como GitHub, LinkedIn, etc.) que não são controlados
                ou mantidos por nós. Não temos qualquer responsabilidade pelo
                conteúdo, políticas de privacidade ou práticas de quaisquer
                sites ou serviços de terceiros que você venha a acessar por meio
                desses links.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                6. Modificações dos Termos
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Reservamo-nos o direito de revisar e alterar estes Termos de Uso
                a qualquer momento, sem aviso prévio. A versão mais recente
                estará sempre disponível no rodapé deste site, com a data da
                última atualização. O uso continuado do site após quaisquer
                alterações constituirá sua aceitação tácita de tais mudanças.
              </Text>
            </section>

            <section className="flex flex-col gap-3">
              <Text size="titleSmall" as="h2" className="text-zinc-950">
                7. Lei Aplicável e Foro
              </Text>
              <Text
                size="textMedium"
                as="p"
                className="text-zinc-500 leading-relaxed font-normal"
              >
                Estes Termos de Uso são regidos e interpretados de acordo com as
                leis da República Federativa do Brasil. Para qualquer
                controvérsia decorrente do uso deste site, fica eleito o foro da
                comarca de domicílio do desenvolvedor, com exclusão de qualquer
                outro, por mais privilegiado que seja.
              </Text>
            </section>
          </article>
        </div>
      </main>
    </FramerProvider>
  );
}
