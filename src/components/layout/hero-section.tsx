import { ArrowRight } from "lucide-react";
import ButtonComponent from "../common/button-component";
import Text from "../common/text";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-6 max-w-6xl mx-auto mb-10">
      <Text size="textSmall" className="text-emerald-100 uppercase">
        Desenvolvedor Web Full-Stack
      </Text>

      <Text size="titleLarge" as="h1" className="">
        <span className="text-zinc-950 block">Desenvolvimento web</span>
        sob medida que{" "}
        <span className="text-emerald-100">gera resultados.</span>
      </Text>

      <Text size="textMedium" className="max-w-lg text-zinc-500">
        Do back-end ao front. Código que escala, entrega que não atrasa e
        comunicação que não deixa dúvidas.
      </Text>

      <div className="flex flex-row gap-5">
        <ButtonComponent className="w-fit">
          Fazer Orçamento
          <ArrowRight className="size-4 text-white" />
        </ButtonComponent>

        <ButtonComponent variant="outline" className="w-fit">
          Ver Projetos
        </ButtonComponent>
      </div>
    </section>
  );
}
