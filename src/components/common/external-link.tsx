import Text from "./text";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  link: string;
  text: string;
  Icon: React.ElementType;
}

export default function ExternalLink({ link, text, Icon }: ExternalLinkProps) {
  return (
    <Text as="li" size="textMedium" className="w-fit">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-2 items-center cursor-pointer text-zinc-500 dark:hover:text-white transition-all duration-300"
      >
        <Icon className="size-4 text-emerald-500" fill="currentColor" />
        {text}
        <ExternalLinkIcon className="size-3" />
      </a>
    </Text>
  );
}
