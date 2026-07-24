import { ClipboardList, PenSquare, Terminal, Rocket } from "lucide-react";

export const PROCESS_ITEMS = [
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
