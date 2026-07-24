import FramerProvider from "@/provider.tsx/framer-provider";
import { Marquee } from "../../ui/marquee";
import Text from "../../common/text";
import { MARQUEE_TECHS } from "@/mocks/marquee-mocks";

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
