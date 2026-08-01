"use client";

import { ButtonComponent, Text } from "@/components/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col md:flex-row flex-1 min-h-full items-center justify-center gap-8 md:gap-2 my-20 md:my-32">
      <div className="flex flex-col gap-6 max-w-md text-center md:text-start items-center md:items-stretch">
        <Text as="h2" size="titleMedium" className="text-zinc-950">
          {t("title")}
        </Text>
        <Text as="p" className="text-zinc-500 max-w-xs md:max-w-md">
          {t("message")}
        </Text>
        <div className="flex gap-2">
          <ButtonComponent className="w-fit" onClick={() => reset()}>
            {t("button1")}
          </ButtonComponent>

          <ButtonComponent variant="outline" className="w-fit">
            <Link href="/">{t("button2")}</Link>
          </ButtonComponent>
        </div>
      </div>

      <Image
        src="/internal-error-ilustration.svg"
        alt="Ilustration error 500"
        width={500}
        height={300}
        style={{ height: "auto" }}
        className="w-60  md:w-75"
      />
    </div>
  );
}
