"use client";

import FramerProvider from "@/provider.tsx/framer-provider";
import Text from "../common/text";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ArrowRight, MessageCircle } from "lucide-react";
import ExternalLink from "../common/external-link";
import Input from "../common/input";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import ButtonComponent from "../common/button-component";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { EMAIL_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from "@/mocks/social-links";

const contactSchema = z.object({
  name: z.string().min(1, "O nome do usuário é obrigatório"),
  email: z.email("Digite um e-mail válido"),
  phone: z.string().min(1, "O telefone é obrigatório"),
  message: z.string().min(1, "A mensagem é obrigatória")
});

type FormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function handleSubmitForm(data: FormValues) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! Em breve entrarei em contato."
        );
        reset();
      } else if (response.status === 429) {
        toast.error(
          "Você atingiu o limite de envios. Tente novamente mais tarde."
        );
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao tentar enviar o formulário.");
    }
  }

  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Text size="textSmall" className="text-emerald-500 uppercase">
              Contato
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">Tem um projeto</span> em mente?
            </Text>

            <Text size="textMedium" className="text-zinc-500 max-w-xs">
              Respondo em até 24 horas. Sem compromisso — me conte o que você
              precisa e te digo exatamente como posso ajudar.
            </Text>

            <nav>
              <ul className="flex flex-col gap-1">
                <ExternalLink
                  link={WHATSAPP_LINK}
                  text="WhatsApp Profissional"
                  Icon={MessageCircle}
                />
                <ExternalLink
                  link={EMAIL_LINK}
                  text="E-mail Profissional"
                  Icon={FaEnvelope}
                />
                <ExternalLink
                  link={LINKEDIN_LINK}
                  text="Linkedin"
                  Icon={FaLinkedin}
                />
              </ul>
            </nav>
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-6 border-l px-8"
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Seu nome"
              register={register("name", {
                required: "O nome do usuario é obrigatorio"
              })}
              error={errors.name}
            />

            <Input
              type="text"
              label="Email"
              placeholder="seu@email.com"
              register={register("email", {
                required: "O email é obrigatorio"
              })}
              error={errors.email}
            />

            <Input
              type="text"
              label="Telefone"
              placeholder="(11) 99999-9999"
              register={register("phone", {
                required: "O telefone é obrigatorio"
              })}
              error={errors.phone}
            />

            <div className="flex flex-col gap-1">
              <Text
                size="textSmall"
                className={errors.message ? "text-red-500" : "text-zinc-400"}
              >
                Mensagem
              </Text>

              <textarea
                className={twMerge(
                  "transition-colors rounded-sm duration-200 py-3 px-4 w-full border border-zinc-500/50 bg-zinc-925 dark:bg-zinc-800 focus:outline-none focus:border-emerald-500 disabled:bg-transparent text-sm resize-none placeholder:text-zinc-500/50 min-h-28",
                  errors.message ? "border-red-500" : ""
                )}
                placeholder="Descreva seu projeto ou ideia..."
                {...register("message", {
                  required: "A mensagem é obrigatoria"
                })}
              />

              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}
            </div>

            <ButtonComponent type="submit" loading={isSubmitting}>
              Enviar Mensagem
              <ArrowRight className="size-3" />
            </ButtonComponent>
          </form>
        </div>
      </section>
    </FramerProvider>
  );
}
