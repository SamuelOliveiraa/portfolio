import { ArrowRight } from "lucide-react";
import ButtonComponent from "../common/button-component";
import Text from "../common/text";
import { TypingAnimation } from "../ui/typing-animation";
import MetricsComponent from "./metrics-component";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col px-4 xl:px-0 gap-6 max-w-6xl mx-auto my-10 lg:mt-16"
      id="/"
    >
      <div>
        <Text size="textSmall" className="text-emerald-500 uppercase">
          Desenvolvedor Web Full-Stack
        </Text>

        <Text size="titleLarge" as="h1" className="">
          <span className="text-zinc-950 block">Desenvolvimento web</span>
          sob medida que{" "}
          <span className="text-emerald-900 block">
            <TypingAnimation
              className="leading-10 sm:leading-5"
              words={[
                "gera resultados.",
                "vende mais.",
                "atrai clientes.",
                "escala seu negócio."
              ]}
            />
          </span>
        </Text>
      </div>

      <Text size="textMedium" className="max-w-lg text-zinc-500">
        Do back-end ao front. Código que escala, entrega que não atrasa e
        comunicação que não deixa dúvidas.
      </Text>

      <div className="flex flex-col sm:flex-row gap-5">
        <ButtonComponent className="w-fit">
          Fazer Orçamento
          <ArrowRight className="size-4 text-white" />
        </ButtonComponent>

        <ButtonComponent variant="outline" className="w-fit">
          Ver Projetos
        </ButtonComponent>
      </div>

      <MetricsComponent />
    </section>
  );
}
