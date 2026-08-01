import { ButtonComponent, Text } from "@/components/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="flex flex-col flex-1 min-h-full items-center justify-center gap-4 my-20 md:my-32 text-center">
      <Image
        src="/error-ilustration-2.svg"
        alt="Ilustration error 404"
        width={300}
        height={200}
        style={{ height: "auto" }}
        className="w-52  md:w-75"
      />
      <Text as="h2" size="titleSmall">
        {t("title")}
      </Text>
      <Text as="p" className="max-w-xs md:max-w-md text-zinc-500">
        {t("message")}
      </Text>
      <ButtonComponent className="w-fit">
        <Link href="/">{t("button")}</Link>
      </ButtonComponent>
    </div>
  );
}
