import { MessageCircle } from "lucide-react";
import ButtonComponent from "./button-component";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS: { Icon: React.ElementType; link: string }[] = [
  { Icon: MessageCircle, link: "http://localhost:3000/" },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"
  },
  { Icon: FaGithub, link: "https://github.com/SamuelOliveiraa" },
  { Icon: FaEnvelope, link: "http://localhost:3000/" }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map(({ Icon, link }, index) => (
        <ButtonComponent
          key={index}
          variant="outline"
          className="size-8 p-0 opacity-50 hover:scale-110"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon className="size-4" />
          </a>
        </ButtonComponent>
      ))}
      {/*
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
      </ButtonComponent>*/}
    </div>
  );
}
