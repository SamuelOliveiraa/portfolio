import Text from "../common/text";

export default function HeroSection() {
  return (
    <section className="flex flex-col max-w-6xl mx-auto">
      <Text size="textSmall" className="text-emerald-100 uppercase">
        Desenvolvedor Web Full-Stack
      </Text>

      <Text size="titleLarge" as="h1" className="">
        <span className="text-zinc-950 block">Desenvolvimento web</span>
        sob medida que
        <span className="text-emerald-100">gera resultados.</span>
      </Text>
    </section>
  );
}
