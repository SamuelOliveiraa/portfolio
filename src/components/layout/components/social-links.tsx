import { SOCIAL_LINKS } from "@/constants";
import { ButtonComponent } from "@/components/common";

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map(({ Icon, link, name }, index) => (
        <ButtonComponent
          asChild
          variant="outline"
          key={`social-link-${index}`}
          className="size-8 p-0 opacity-50 transition-all duration-300 hover:opacity-100 hover:scale-110 focus-visible:opacity-100 focus-visible:scale-110"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar meu perfil no ${name}`}
          >
            <Icon className="size-4" fill="currentColor" aria-hidden="true" />
            <span className="sr-only">Acessar meu perfil no {name}</span>
          </a>
        </ButtonComponent>
      ))}
    </div>
  );
}
