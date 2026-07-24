import { SOCIAL_LINKS } from "@/mocks/social-links";
import ButtonComponent from "../../common/button-component";

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map(({ Icon, link }, index) => (
        <a
          key={`link-${index}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonComponent
            variant="outline"
            className="size-8 p-0 opacity-50 hover:scale-110"
          >
            <Icon className="size-4" fill="currentColor" />
          </ButtonComponent>
        </a>
      ))}
    </div>
  );
}
