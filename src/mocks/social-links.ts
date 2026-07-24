import { MessageCircle } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const WHATSAPP_LINK =
  "https://wa.me/5511968989860?text=Ol%C3%A1!%20Vi%20seu%20perfil/trabalho%20e%20gostei%20muito.%20Gostaria%20de%20saber%20se%20voc%C3%AA%20est%C3%A1%20com%20disponibilidade%20para%20conversarmos%20sobre%20uma%20parceria%20ou%20para%20desenvolvermos%20um%20projeto/site%20juntos%3F";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/";

export const GITHUB_LINK = "https://github.com/SamuelOliveiraa";

export const EMAIL_LINK =
  "mailto:samuel.oliveira.developer@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Contato%20-%20Projeto%20Web&body=Prezado(a)%2C%0A%0AEntrei%20em%20contato%20para%20avaliar%20seu%20interesse%20em%20colaborar%20no%20desenvolvimento%20de%20um%20novo%20projeto/site.%0A%0ACaso%20tenha%20disponibilidade%2C%20gostaria%20de%20agendar%20uma%20breve%20reuni%C3%A3o/chamada%20para%20alinhar%20objetivos%20e%20verificar%20como%20podemos%20trabalhar%20juntos.%0A%0ADesde%20j%C3%A1%2C%20agrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%20e%20fico%20%C3%A0%20disposi%C3%A7%C3%A3o.%0A%0AAtenciosamente%2C";

export const SOCIAL_LINKS: { Icon: React.ElementType; link: string }[] = [
  {
    Icon: MessageCircle,
    link: WHATSAPP_LINK
  },
  {
    Icon: FaLinkedin,
    link: LINKEDIN_LINK
  },
  { Icon: FaGithub, link: GITHUB_LINK },
  {
    Icon: FaEnvelope,
    link: EMAIL_LINK
  }
];
