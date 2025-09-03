import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Button() {
  const t = useTranslations("Button");
  return (
    <div className="bg-gray-900 hover:cursor-pointer hover:bg-gray-700 transition-all duration-300 rounded-xl px-4 py-1 text-center ">
      <Link
        href={"/CV Samuel Oliveira De Araujo.pdf"}
        download
        className="text-gray-50"
        aria-label={t("buttonText")}
        title={t("buttonText")}
      >
        {t("buttonText")}
      </Link>
    </div>
  );
}
