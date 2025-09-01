import ContactLinks from "@/components/ContactLinks";
import Tag from "@/components/Tag";
import { Copy, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-96 flex-col gap-5 text-center sm:py-24 px-4 sm:px-20"
    >
      <Tag text="Get in touch" />
      <p className="text-gray-600 max-w-xl w-full ">
        What’s next? Feel free to reach out to me if you’re looking for a
        developer, have a query, or simply want to connect.
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
