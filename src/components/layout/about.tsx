import FramerProvider from "@/provider.tsx/framer-provider";
import { Text } from "../common";
import { AboutListItem } from "./components";
import { ABOUT_STACKS } from "@/mocks";

export default function About() {
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:justify-center gap-4">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              Sobre mim
            </Text>

            <Text size="titleMedium">
              <span className="text-zinc-950">Desenvolvimento focado </span> no
              que traz retorno.
            </Text>

            <Text size="textSmall" className="text-zinc-500 max-w-md">
              Desenvolvo software há mais de dois anos com foco em resolver
              problemas reais de negócio — não só em escrever código elegante.
              Sou responsável por 100% do ciclo: design, código e entrega,
              garantindo atenção exclusiva ao seu projeto.
            </Text>

            <Text size="textSmall" className="text-zinc-500 max-w-md">
              Atendo pequenas e médias empresas que precisam de um parceiro
              técnico de verdade — sem intermediários, sem jargões
              desnecessários e sem surpresas no final.
            </Text>
          </div>

          <div className="flex flex-col gap-6 border md:border-0 md:border-l p-4 md:pl-8 md:pr-0 md:py-0">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              Stacks principais
            </Text>

            {ABOUT_STACKS.map((stack, index) => (
              <div className="flex flex-col gap-3" key={`${stack}-${index}`}>
                <Text size="textGeist" className="text-zinc-500 uppercase">
                  {stack.title}
                </Text>

                <ul className="flex gap-2">
                  {stack.stacks.map((item, index) => (
                    <AboutListItem key={`${stack.title}-${index}`}>
                      {item}
                    </AboutListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
