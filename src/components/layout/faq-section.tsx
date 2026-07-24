import FramerProvider from "@/provider.tsx/framer-provider";
import Text from "../common/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import { FAQ_ITEMS } from "@/mocks/faq-section-mock";

export default function FaqSection() {
  return (
    <FramerProvider>
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
            {FAQ_ITEMS.map(item => (
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
    </FramerProvider>
  );
}
