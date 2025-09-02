import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("AboutSection");
  return (
    <section
      id="about"
      className="w-full bg-gray-100 flex flex-col justify-center items-center py-16 md:py-20 px-4 text-gray-900 gap-12"
    >
      <Tag text={t("tagText")} />
      <div className="flex items-center justify-center flex-col md:flex-row max-w-7xl mx-auto gap-20">
        <div className="relative flex items-center  ">
          <div className="absolute w-full -inset-1 -translate-x-2 translate-y-3 bg-gray-300 md:-inset-2 md:-translate-x-5 md:translate-y-4 " />

          <Image
            className=" relative"
            src={"/me-2.jpg"}
            alt="Uma foto minha"
            width={300}
            height={300}
          />
        </div>

        <div className="max-w-xl flex flex-col gap-3 text-gray-700">
          <h2 className="font-bold text-2xl text-gray-900">{t("title")}</h2>

          <p>
            {t("paragraph1")}
            <strong>{t("technologies1")}</strong>
            {t("paragraph2")}
          </p>

          <p>
            {t("paragraph3")}
            <strong>{t("technologies2")}</strong>
            {t("paragraph4")}
          </p>

          <p>{t("paragraph5")}</p>

          <p>
            {t("paragraph6")}
            <a
              href="https://github.com/SamuelOliveiraa"
              target="_blank"
              className="hover:opacity-70 underline"
            >
              GitHub
            </a>
            {t("paragraph7")}
            <a
              href="https://www.linkedin.com/in/samuel-oliveiraa-de-araujo"
              target="_blank"
              className="hover:opacity-70 underline"
            >
              LinkedIn
            </a>
            .
          </p>

          <span>{t("quickPointsTitle")}</span>

          <ul className="list-disc ml-6">
            {t("quickPoints")
              .split("|")
              .map((point, i) => (
                <li key={i}>{point}</li>
              ))}
          </ul>

          <p>
            {t("closing")}
            <strong>{t("highlightClosing")}</strong>
            {t("closingEnd")}
          </p>
        </div>
      </div>
    </section>
  );
}
