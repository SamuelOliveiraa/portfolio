import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import Link from "next/link";

type ContactLinksProps = {
  text?: boolean;
};

export default function ContactLinks({ text }: ContactLinksProps) {
  return (
    <div className="text-gray-600 flex flex-col gap-3 text-xs">
      {text ?? <p>You may also find me on these platforms!</p>}
      <div className="flex items-center gap-3 justify-center">
        <Link href={"https://github.com/samueloliveiraa"}>
          <GithubIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"}>
          <LinkedinIcon />
        </Link>
        <Link href={"https://t.me/Samuka_oliveira0"}>
          <Send />
        </Link>
      </div>
    </div>
  );
}
