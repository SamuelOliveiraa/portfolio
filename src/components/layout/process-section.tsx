import { ClipboardList, PenSquare, Rocket, Terminal } from "lucide-react";
import Text from "../common/text";
import ProcessItem from "../common/process-item";
import FramerProvider from "@/provider.tsx/framer-provider";

const PROCESS_ITENS = [
  {
    number: "01",
    title: "Alinhamento",
    description:
      "Conversa para entender o modelo de negócio, objetivos e escopo completo do projeto.",
    Icon: ClipboardList
  },
  {
    number: "02",
    title: "Design & Protótipo",
    description:
      "Criação visual do fluxo e layout para aprovação antes de qualquer linha de código.",
    Icon: PenSquare
  },

  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Codificação limpa com Next.js, React e Prisma, com atualizações constantes de progresso",
    Icon: Terminal
  },

  {
    number: "04",
    title: "Entrega & Suporte",
    description:
      "Deploy em produção, onboarding completo e 30 dias de suporte gratuito incluídos.",
    Icon: Rocket
  }
];

export default function ProcessSection() {
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="commitment">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Text size="textSmall" className="text-emerald-500 uppercase">
              Meu Processo
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">Clareza em </span> cada etapa.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_ITENS.map(item => (
              <ProcessItem
                key={item.number}
                Icon={item.Icon}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
