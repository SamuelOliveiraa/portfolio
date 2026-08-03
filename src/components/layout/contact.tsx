"use client";

import { FramerProvider } from "@/providers";
import { Text, ButtonComponent, Input, ExternalLink } from "../common";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { EMAIL_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { formatPhone } from "@/lib/mask";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const contactSchema = z.object({
    name: z.string().min(1, t("validation.name")),
    email: z.email(t("validation.email")),
    phone: z.string().min(14, t("validation.phone")),
    message: z.string().min(1, t("validation.message"))
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" }
  });
  async function submit(data: FormValues) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale })
      });
      if (response.ok) {
        toast.success(t("success"));
        reset();
      } else if (response.status === 429) toast.error(t("rateLimit"));
      else toast.error(t("error"));
    } catch (error) {
      console.error(error);
      toast.error(t("unexpectedError"));
    }
  }
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:justify-center gap-4">
            <Text
              as="h3"
              size="textGeist"
              className="text-emerald-500 uppercase"
            >
              {t("eyebrow")}
            </Text>
            <Text as="h2" size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">{t("title")}</span>{" "}
              {t("highlight")}
            </Text>
            <Text as="p" size="textMedium" className="text-zinc-500 max-w-xs">
              {t("description")}
            </Text>
            <nav>
              <ul className="flex flex-col gap-1">
                <ExternalLink
                  link={WHATSAPP_LINK}
                  text={t("whatsapp")}
                  Icon={MessageCircle}
                />
                <ExternalLink
                  link={EMAIL_LINK}
                  text={t("email")}
                  Icon={FaEnvelope}
                />
                <ExternalLink
                  link={LINKEDIN_LINK}
                  text="LinkedIn"
                  Icon={FaLinkedin}
                />
              </ul>
            </nav>
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-6 border md:border-0 md:border-l p-4 md:pl-8 md:pr-0 md:py-0"
          >
            <Input
              type="text"
              label={t("name")}
              placeholder={t("namePlaceholder")}
              register={register("name")}
              error={errors.name}
            />
            <Input
              type="text"
              label={t("emailLabel")}
              placeholder="you@email.com"
              register={register("email")}
              error={errors.email}
            />
            <Input
              type="text"
              maxLength={15}
              label={t("phone")}
              placeholder="(11) 99999-9999"
              register={register("phone", {
                onChange: e => {
                  e.target.value = formatPhone(e.target.value);
                }
              })}
              error={errors.phone}
            />

            <div className="flex flex-col gap-1">
              <Text
                size="textSmall"
                className={errors.message ? "text-red-400/90" : "text-zinc-400"}
              >
                {t("message")}
              </Text>
              <textarea
                className={twMerge(
                  "transition-colors rounded-sm duration-200 py-3 px-4 w-full border border-zinc-500/50 bg-zinc-925 dark:bg-zinc-800 focus:outline-none focus:border-emerald-500 disabled:bg-transparent text-sm resize-none placeholder:text-zinc-500/50 min-h-28",
                  errors.message ? "border-red-500" : ""
                )}
                placeholder={t("messagePlaceholder")}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-sm text-red-400/90">
                  {errors.message.message}
                </span>
              )}
            </div>

            <ButtonComponent type="submit" loading={isSubmitting}>
              {t("submit")}
              <ArrowRight className="size-3" />
            </ButtonComponent>
          </form>
        </div>
      </section>
    </FramerProvider>
  );
}
