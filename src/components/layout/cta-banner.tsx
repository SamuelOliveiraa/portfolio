import Link from "next/link";
import { ButtonComponent, Text } from "@/components/common";
import { CalendarCheck } from "lucide-react";
import FramerProvider from "@/provider.tsx/framer-provider";
import { WHATSAPP_LINK } from "@/mocks";

export default function CtaBanner() {
  return (
    <FramerProvider>
      <section className="py-6 px-4 xl:px-0 md:py-10 border-y" id="cta-banner">
        <div className="max-w-6xl mx-auto border rounded-md px-6 py-10 md:p-14 flex flex-col md:items-center md:flex-row justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-4">
            <Text className="text-emerald-500 uppercase" size="textGeist">
              Diagnóstico gratuito
            </Text>

            <Text size="titleSmall" as="h2" className="text-zinc-950">
              Não sabe por onde começar?
            </Text>

            <Text as="p" className="max-w-md text-zinc-500">
              Vamos montar um plano juntos em uma conversa de 15 minutos. Sem
              compromisso, sem pitch de vendas.
            </Text>
          </div>

          <Link href={WHATSAPP_LINK} rel="noopener noreferrer" target="_blank">
            <ButtonComponent className="w-fit p-3 gap-2">
              <CalendarCheck className="size-4" />
              <Text className="text-xs">Agendar Diagnostico</Text>
            </ButtonComponent>
          </Link>
        </div>
      </section>
    </FramerProvider>
  );
}
