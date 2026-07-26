import { Text } from "@/components/common";
import { FramerProvider } from "@/providers";
import BackLink from "@/components/common/back-link";
import { getTranslations } from "next-intl/server";

type LegalItem = { label?: string; body: string };
type LegalSection = { title: string; body: string; items?: LegalItem[] };

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("privacy.sections") as LegalSection[];
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
              {t("privacy.title")}
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
                {section.items && (
                  <ul className="list-disc pl-5 text-zinc-500 space-y-2 leading-relaxed">
                    {section.items.map((item, index) => (
                      <li key={index}>
                        <Text
                          size="textMedium"
                          className="font-normal text-zinc-500"
                        >
                          {item.label && (
                            <strong className="text-zinc-950 font-semibold">
                              {item.label}{" "}
                            </strong>
                          )}
                          {item.body}
                        </Text>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>
    </FramerProvider>
  );
}
