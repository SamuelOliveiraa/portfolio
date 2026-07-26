import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "./text";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group"
    >
      <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
      <Text size="textSmall" className="font-semibold">
        Voltar para o início
      </Text>
    </Link>
  );
}
