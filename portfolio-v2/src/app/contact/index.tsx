import ContactLinks from "@/components/ContactLinks";
import Tag from "@/components/Tag";
import { Copy, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex bg-gray-100 justify-center items-center min-h-80 flex-col gap-5 text-center mt-20 py-12 sm:py-24 px-4 sm:px-20"
    >
      <Tag text="Entre em contato" />
      <p className="text-gray-600 max-w-xl w-full ">
        O que vem a seguir? Sinta-se à vontade para entrar em contato comigo se
        estiver procurando um desenvolvedor, tiver alguma dúvida ou simplesmente
        quiser se conectar.
      </p>

      <div className="flex items-center gap-2">
        <Mail className="text-gray-600" />
        <Link
          className="text-gray-900 text-sm sm:text-xl md:text-3xl text-wrap"
          href={
            "mailto:samuel.oliveira.developer@gmail.com?subject=Contato%20profissional&body=Olá%2C%0D%0A%0D%0AGostaria%20de%20entrar%20em%20contato%20sobre%20seu%20portfólio.%0D%0A%0D%0AAtenciosamente%2C"
          }
        >
          samuel.oliveira.developer@gmail.com
        </Link>

        <Copy className="text-gray-600" />
      </div>

      <div className="flex items-center gap-2">
        <Mail className="text-gray-600" />
        <Link
          className="text-gray-900 text-sm sm:text-xl md:text-3xl text-balance"
          href={"tel:+5511968989860"}
        >
          {"+55 (11) 96898-9860"}
        </Link>

        <Copy className="text-gray-600" />
      </div>

      <ContactLinks />
    </section>
  );
}
