import ExperienceCard from "@/components/ExperienceCard";
import HeaderSection from "@/components/HeaderSection";
import { useTranslations } from "next-intl";

export default function Experiences() {
  const t = useTranslations("ExperienceSection");
  return (
    <section
      id="experiences"
      className="w-full bg-gray-100 flex flex-col gap-12 px-4 py-16 my-24 md:py-24"
    >
      <HeaderSection title={t("tagText")} description={t("title")} />

      <div className="flex flex-col gap-12 px-4 justify-center items-center ">
        <ExperienceCard
          image={t("jobs4.image")}
          title={t("jobs4.title")}
          date={t("jobs4.date")}
          itens={[
            t("jobs4.points.point1"),
            t("jobs4.points.point2"),
            t("jobs4.points.point3")
          ]}
        />

        <ExperienceCard
          image={t("jobs1.image")}
          title={t("jobs1.title")}
          date={t("jobs1.date")}
          itens={[
            t("jobs1.points.point1"),
            t("jobs1.points.point2"),
            t("jobs1.points.point3")
          ]}
        />

        <ExperienceCard
          image={t("jobs2.image")}
          title={t("jobs2.title")}
          date={t("jobs2.date")}
          itens={[
            t("jobs2.points.point1"),
            t("jobs2.points.point2"),
            t("jobs2.points.point3")
          ]}
        />

        <ExperienceCard
          image={t("jobs3.image")}
          title={t("jobs3.title")}
          date={t("jobs3.date")}
          itens={[
            t("jobs3.points.point1"),
            t("jobs3.points.point2"),
            t("jobs3.points.point3")
          ]}
        />
      </div>
    </section>
  );
}
