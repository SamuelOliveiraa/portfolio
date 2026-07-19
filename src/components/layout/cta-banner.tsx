import Link from "next/link";
import ButtonComponent from "../common/button-component";
import { CalendarCheck } from "lucide-react";
import Text from "../common/text";

export default function CtaBanner() {
  return (
    <section className="py-6 px-4 xl:px-0 md:py-10 border-y" id="cta-banner">
      <div className="max-w-6xl mx-auto border rounded-md px-6 py-10 md:p-14 flex flex-col md:items-center md:flex-row justify-between gap-10 md:gap-0">
        <div className="flex flex-col gap-4">
          <Text className="text-emerald-500 uppercase" size="textSmall">
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

        <Link href={"/"}>
          <ButtonComponent className="w-fit p-3 gap-2">
            <CalendarCheck className="size-4" />
            <Text className="text-xs">Agendar Diagnostico</Text>
          </ButtonComponent>
        </Link>
      </div>
    </section>
  );
}
