import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
        >
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={"https://t.me/Samuka_oliveira0"}
          target="_blank"
          className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
        >
          <Send />
        </Link>
      </div>
    </div>
  );
}
