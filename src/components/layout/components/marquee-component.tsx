import { FramerProvider } from "@/providers";
import { Marquee } from "../../ui/marquee";
import { Text } from "@/components/common";
import { MARQUEE_TECHS } from "@/constants";

export default function MarqueeComponent() {
  return (
    <FramerProvider>
      <Marquee className="bg-transparent border-y border-zinc-200 text-zinc-300 py-7 select-none">
        {MARQUEE_TECHS.map(tech => (
          <Text key={tech} size="textMedium" className="mx-5">
            {tech}
          </Text>
        ))}
      </Marquee>
    </FramerProvider>
  );
}
