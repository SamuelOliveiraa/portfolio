import { COMMITMENT_ITEMS } from "@/mocks/commitment-section-mock";
import ServiceItem from "../common/service-item";
import Text from "../common/text";
import FramerProvider from "@/provider.tsx/framer-provider";

export default function CommitmentSection() {
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="commitment">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Text size="textSmall" className="text-emerald-500 uppercase">
              Meu compromisso
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">Construído para</span> durar.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMITMENT_ITEMS.map((item, index) => (
              <ServiceItem
                key={index}
                Icon={item.icon}
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
