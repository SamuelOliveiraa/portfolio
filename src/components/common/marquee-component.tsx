import { Marquee } from "../ui/marquee";
import Text from "./text";

export default function MarqueeComponent() {
  return (
    <Marquee className="bg-transparent border-y border-zinc-200 mt-20 text-zinc-300 py-5 select-none">
      <Text size="textSmall" className="mx-3">
        Next.js
      </Text>
      <Text size="textSmall" className="mx-3">
        React
      </Text>
      <Text size="textSmall" className="mx-3">
        Node.Js
      </Text>
      <Text size="textSmall" className="mx-3">
        TypeScript
      </Text>
      <Text size="textSmall" className="mx-3">
        Tailwind CSS
      </Text>
      <Text size="textSmall" className="mx-3">
        PostgreSQL
      </Text>
      <Text size="textSmall" className="mx-3">
        Prisma
      </Text>
    </Marquee>
  );
}
