import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import Link from "next/link";

type ContactLinksProps = {
  text?: boolean;
};

export default function ContactLinks({ text }: ContactLinksProps) {
  return (
    <div className="text-gray-600 flex flex-col gap-3 text-xs">
      {text ?? <p>Você também pode me encontrar nessas plataformas!</p>}
      <div className="flex items-center gap-3 justify-center">
        <Link href={"https://github.com/samueloliveiraa"} target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"}
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href={"https://t.me/Samuka_oliveira0"} target="_blank">
          <Send />
        </Link>
      </div>
    </div>
  );
}
