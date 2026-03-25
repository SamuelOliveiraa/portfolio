import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ContactLinksProps = {
  text?: boolean;
};

export default function ContactLinks({ text }: ContactLinksProps) {
  const t = useTranslations("ContactLinks");
  return (
    <div className="text-gray-600 flex flex-col gap-3 text-xs">
      {text ?? <p>{t("text")}</p>}
      <div className="flex items-center justify-center ">
        <Link
          href={"https://github.com/samueloliveiraa"}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
          aria-label="Link para o meu Github | Link to my Github"
        >
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
          aria-label="Link para o meu Linkedin | Link to my Linkedin"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={
            "mailto:contact@samuel-oliveira.com?subject=Solicitação%20de%20Orçamento%20-%20Projeto%20Digital&body=Olá,%20Samuel!%0D%0A%0D%0AEstou%20entrando%20em%20contato%20pois%20tenho%20interesse%20em%20desenvolver%20um%20projeto%20(ou%20uma%20Landing%20Page)%20com%20você.%0D%0A%0D%0APoderia%20me%20passar%20mais%20informações%20sobre%20seus%20prazos%20e%20como%20funciona%20seu%20processo%20de%20trabalho?%0D%0A%0D%0AAguardamos%20seu%20retorno."
          }
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
          aria-label="Link para me enviar um email | Link to send me an email"
        >
          <Mail />
        </Link>
      </div>
    </div>
  );
}
