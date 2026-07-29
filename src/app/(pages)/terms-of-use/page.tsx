import { Text } from "@/components/common";
import { FramerProvider } from "@/providers";
import BackLink from "@/components/common/back-link";
import { getTranslations } from "next-intl/server";

type LegalSection = { title: string; body: string };

export default async function TermsOfUsePage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("terms.sections") as LegalSection[];
  return (
    <FramerProvider>
      <main className="min-h-screen py-12 md:py-20 px-4 xl:px-0">
        <div className="max-w-3xl mx-auto">
          <BackLink />
          <header className="flex flex-col gap-2 mb-12 border-b pb-8">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              {t("label")}
            </Text>
            <Text
              size="titleMedium"
              as="h1"
              className="text-zinc-950 font-bold"
            >
              {t("terms.title")}
            </Text>
            <Text size="textSmall" className="text-zinc-500">
              {t("updated")}
            </Text>
          </header>
          <article className="flex flex-col gap-8">
            {sections.map(section => (
              <section key={section.title} className="flex flex-col gap-3">
                <Text size="titleSmall" as="h2" className="text-zinc-950">
                  {section.title}
                </Text>
                <Text
                  size="textMedium"
                  as="p"
                  className="text-zinc-500 leading-relaxed font-normal"
                >
                  {section.body}
                </Text>
              </section>
            ))}
          </article>
        </div>
      </main>
    </FramerProvider>
  );
}
