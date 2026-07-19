import Text from "../common/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Qual o prazo médio de um projeto?",
    content:
      "Depende da complexidade. Uma landing page leva de 7 a 14 dias. Um SaaS completo, de 6 a 12 semanas. Defino um cronograma detalhado na fase de Alinhamento antes de iniciar qualquer desenvolvimento."
  },
  {
    value: "item-2",
    trigger: "Como funciona o suporte post-entrega?",
    content:
      "Todo projeto inclui 30 dias de suporte gratuito após o lançamento. Corrijo bugs, tiro dúvidas e realizo pequenos ajustes sem custo adicional nesse período."
  },
  {
    value: "item-3",
    trigger: "Voce faz manutenção contínua?",
    content:
      "Sim. Ofereço planos mensais de manutenção e evolução para clientes que precisam de atualizações regulares, novos recursos ou monitoramento contínuo."
  },
  {
    value: "item-4",
    trigger: "Como são definidos os custos?",
    content:
      "Cada projeto tem um orçamento personalizado com base no escopo, prazo e complexidade técnica. Trabalho com valores fixos por projeto — sem surpresas na fatura."
  },
  {
    value: "item-5",
    trigger: "Posso ver o progresso durante o desenvolvimento?",
    content:
      "Sim. Utilizo um ambiente de staging acessível durante todo o desenvolvimento, com atualizações regulares e comunicação direta via WhatsApp."
  }
];

export default function FaqSection() {
  return (
    <section className="border-y py-20 px-4 xl:px-0" id="faq">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <Text size="textSmall" className="text-emerald-500 uppercase">
            Dúvidas frequentes
          </Text>

          <Text size="titleMedium" className="max-w-3xl">
            <span className="text-zinc-950">Respondo antes</span> de você
            perguntar.
          </Text>
        </div>

        <Accordion defaultValue={["item-1"]}>
          {items.map(item => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border py-2 px-6"
            >
              <AccordionTrigger className="cursor-pointer">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-500 max-w-2xl">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
