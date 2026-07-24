import Text from "../common/text";
import ServiceItem from "../common/service-item";
import FramerProvider from "@/provider.tsx/framer-provider";
import { SERVICES_ITEMS } from "@/mocks/service-items";

export default function Services() {
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="services">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Text size="textSmall" className="text-emerald-500 uppercase">
              O que ofereço
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">Soluções que movem o</span>{" "}
              ponteiro do negócio.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_ITEMS.map((item, index) => (
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
