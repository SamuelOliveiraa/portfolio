import FramerProvider from "@/provider.tsx/framer-provider";
import Text from "../common/text";
import TestimonialsItem from "./components/testimonials-items";
import { testimonialsItemsMock } from "@/mocks/testimonials-items-mock";

export function Testimonials() {
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="contact">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:justify-center gap-4">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              Clientes
            </Text>
            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">Quem já trabalhou</span> comigo
              diz.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {testimonialsItemsMock.map(
              ({ description, title, subtitle }, index) => (
                <TestimonialsItem
                  key={index}
                  description={description}
                  title={title}
                  subtitle={subtitle}
                />
              )
            )}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
