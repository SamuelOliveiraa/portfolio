import Image from "next/image";
import SocialLinks from "./social-links";
import { FramerProvider } from "@/providers";
import { Text } from "@/components/common";
import { useTranslations } from "next-intl";

export default function PersonalCard() {
  const t = useTranslations("PersonalCard");
  return (
    <FramerProvider>
      <section className="w-full my-10 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-160 mx-4 sm:mx-0 border rounded-xl sm:flex-row items-center px-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5 py-6 border-border">
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full border-2 dark:border-zinc-400/50 hover:border-emerald-500 dark:hover:border-emerald-500/60 transition-all duration-200 cursor-pointer dark:hover:shadow-[0_0_20px_rgba(4,120,87,0.6)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    width={80}
                    height={80}
                    priority
                    src="https://avatars.githubusercontent.com/u/86499135?v=4"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex absolute -bottom-0.5 right-0 h-6 w-6 items-center justify-center">
                <span className="absolute inline-flex h-1/2 w-1/2 animate-ping rounded-full duration-2000 bg-emerald-400 opacity-75" />
                <span className="rounded-full w-2 h-2 bg-emerald-500" />
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-border shrink-0" />

            <div className="text-center sm:text-left flex flex-col gap-1">
              <Text as="p" size="textMedium">
                Samuel Oliveira
              </Text>
              <Text as="p" size="textSmall" className="text-zinc-500">
                {t("message")}
              </Text>
            </div>

            <SocialLinks />
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
