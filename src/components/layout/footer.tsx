import ButtonComponent from "../common/button-component";
import { LinkItem } from "../common/link-item";
import Logo from "../common/logo";
import Text from "../common/text";
import { ChevronUp } from "lucide-react";
import FramerProvider from "@/provider.tsx/framer-provider";
import SocialLinks from "../common/social_links";
import { ScrollLink } from "../common/scroll-link";

const SECTIONS_LINKS = [
  { name: "Home", link: "root" },
  { name: "Projetos", link: "projects" },
  { name: "Serviços", link: "services" },
  { name: "Contato", link: "contact" },
  { name: "Sobre", link: "about" },
  { name: "FAQ", link: "faq" }
];

export default function Footer() {
  return (
    <FramerProvider>
      <footer className="px-4 xl:p-0" id="footer">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex flex-col gap-10 md:flex-row justify-between px-4 lg:px-0 py-10">
            <div className="flex flex-col gap-4">
              <Logo />

              <Text className="text-zinc-600 max-w-56">
                Desenvolvimento web para PMEs que querem crescer.
              </Text>

              <Text size="textSmall" className="text-zinc-700">
                Samuel Oliveira de Araujo · CNPJ 12.345.678/0001-90
              </Text>

              <SocialLinks />
            </div>

            <div className="text-zinc-500 flex flex-col md:flex-row gap-10">
              <nav>
                <ul className="flex flex-col gap-3">
                  <Text as="li" className="text-xs text-zinc-700 select-none">
                    Navegação
                  </Text>
                  {SECTIONS_LINKS.map(({ name, link }) => (
                    <LinkItem key={link} link={link}>
                      {name}
                    </LinkItem>
                  ))}
                </ul>
              </nav>
              <nav>
                <ul className="flex flex-col gap-3">
                  <Text as="li" className="text-xs text-zinc-700 select-none">
                    Legal
                  </Text>

                  <LinkItem link="/politica-privacidade">
                    Politica de Privacidade
                  </LinkItem>

                  <LinkItem link="/termos-uso">Termos de uso</LinkItem>

                  <LinkItem link="/termos-uso">
                    CNPJ: 12.345.678/0001-90
                  </LinkItem>
                </ul>
              </nav>
            </div>
          </div>
          <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <Text size="textSmall" className="text-zinc-800">
              © 2026 Samuel Oliveira. Todos os direitos reservados.
            </Text>

            <ScrollLink targetId="root">
              <ButtonComponent
                variant="outline"
                className="size-7 p-0 opacity-40"
              >
                <ChevronUp className="size-4" />
              </ButtonComponent>
            </ScrollLink>
          </div>
        </div>
      </footer>
    </FramerProvider>
  );
}
