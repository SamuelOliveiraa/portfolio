import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonComponent from "../common/button-component";
import { LinkItem } from "../common/link-item";
import Logo from "../common/logo";
import Text from "../common/text";
import { ChevronUp, MessageCircle } from "lucide-react";
import { ScrollLink } from "../common/scroll-link";
import FramerProvider from "@/provider.tsx/framer-provider";

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

              <div className="flex gap-2">
                <ButtonComponent
                  variant="outline"
                  className="size-8 p-0 opacity-50 hover:scale-110"
                >
                  <MessageCircle className="size-4" />
                </ButtonComponent>

                <ButtonComponent
                  variant="outline"
                  className="size-8 p-0 opacity-50 hover:scale-110"
                >
                  <FaLinkedin className="size-4" />
                </ButtonComponent>

                <ButtonComponent
                  variant="outline"
                  className="size-8 p-0 opacity-50 hover:scale-110"
                >
                  <FaGithub className="size-4" />
                </ButtonComponent>

                <ButtonComponent
                  variant="outline"
                  className="size-8 p-0 opacity-50 hover:scale-110"
                >
                  <FaEnvelope className="size-4" />
                </ButtonComponent>
              </div>
            </div>

            <div className="text-zinc-500 flex flex-col md:flex-row gap-10">
              <nav>
                <ul className="flex flex-col gap-3">
                  <Text as="li" className="text-xs text-zinc-700 select-none">
                    Navegação
                  </Text>
                  <LinkItem link="root">Home</LinkItem>
                  <LinkItem link="services">Serviços</LinkItem>
                  <LinkItem link="contact">Contato</LinkItem>
                  <LinkItem link="about">Sobre</LinkItem>
                  <LinkItem link="faq">FAQ</LinkItem>
                  <LinkItem link="projects">Projetos</LinkItem>
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
            <ButtonComponent
              variant="outline"
              className="size-7 p-0 opacity-40"
            >
              <ScrollLink targetId="root">
                <ChevronUp className="size-4" />
              </ScrollLink>
            </ButtonComponent>
          </div>
        </div>
      </footer>
    </FramerProvider>
  );
}
