import { Text } from "../common";
import { NumberTicker } from "../ui/number-ticker";

export default function MetricsComponent() {
  return (
    <section className="flex flex-row flex-wrap border-t mt-10">
      <div className="flex flex-col items-center min-w-52 sm:w-auto flex-1 py-5 border lg:border-l-0">
        <Text size="titleMedium">
          <NumberTicker value={2} startValue={40} />
          {"+"}
        </Text>

        <Text className="uppercase">Anos de experiência</Text>
      </div>

      <div className="flex flex-col items-center min-w-52 sm:w-auto flex-1 py-5 border">
        <Text size="titleMedium">
          <NumberTicker value={8} />
          {"+"}
        </Text>

        <Text className="uppercase">Projetos Feitos</Text>
      </div>

      <div className="flex flex-col items-center min-w-52 sm:w-auto flex-1 py-5 border">
        <Text size="titleMedium">
          <NumberTicker value={50} />
          {"+"}
        </Text>

        <Text className="uppercase">Clientes Felizes</Text>
      </div>

      <div className="flex flex-col items-center min-w-52 sm:w-auto flex-1 py-5 border lg:border-r-0">
        <Text size="titleMedium">
          <NumberTicker value={97} />
          {"%"}
        </Text>

        <Text className="uppercase">Taxa de Satisfação</Text>
      </div>
    </section>
  );
}
