import FramerProvider from "@/provider.tsx/framer-provider";
import { Marquee } from "../ui/marquee";
import Text from "./text";

const TECHN = [
  "React",
  "Prisma",
  "Node.Js",
  "Next.js",
  "PostgreSQL",
  "TypeScript",
  "Zustand",
  "Radix UI ",
  "Fastify",
  "Express",
  "Drizzle",
  "Docker",
  "Tailwind CSS"
];

export default function MarqueeComponent() {
  return (
    <FramerProvider>
      <Marquee className="bg-transparent border-y border-zinc-200 text-zinc-300 py-7 select-none">
        {TECHN.map(tech => (
          <Text key={tech} size="textMedium" className="mx-5">
            {tech}
          </Text>
        ))}
      </Marquee>
    </FramerProvider>
  );
}
