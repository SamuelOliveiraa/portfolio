"use client";

import { Text } from "../common";
import { NumberTicker } from "../ui/number-ticker";
import { useTranslations } from "next-intl";

export default function MetricsComponent() {
  const t = useTranslations("Hero.metrics");
  const metrics = [
    [2, "+", "experience", 40],
    [8, "+", "projects"],
    [50, "+", "clients"],
    [97, "%", "satisfaction"]
  ] as const;
  return (
    <section className="flex flex-row flex-wrap border-t mt-10">
      {metrics.map(([value, suffix, label, startValue], index) => (
        <div
          key={label}
          className={`flex flex-col items-center min-w-52 sm:w-auto flex-1 py-5 border ${index === 0 ? "lg:border-l-0" : ""} ${index === 3 ? "lg:border-r-0" : ""}`}
        >
          <Text size="titleMedium">
            <NumberTicker value={value} startValue={startValue} />
            {suffix}
          </Text>
          <Text className="uppercase">{t(label)}</Text>
        </div>
      ))}
    </section>
  );
}
