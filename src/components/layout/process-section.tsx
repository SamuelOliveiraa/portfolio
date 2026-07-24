import Text from "../common/text";
import ProcessItem from "./components/process-item";
import FramerProvider from "@/provider.tsx/framer-provider";
import { PROCESS_ITEMS } from "@/mocks/process-items";

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
            {PROCESS_ITEMS.map(item => (
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
