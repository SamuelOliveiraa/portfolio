import Link from "next/link";
import Text from "../common/text";
import ButtonComponent from "../common/button-component";
import { ThemeToggle } from "../common/theme-toggle";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto py-4 flex justify-between items-center">
      <Text size="textSmall" asChild className="uppercase">
        <Link href="/">DEV.SAMUEL</Link>
      </Text>

      <nav>
        <ul className="flex justify-between items-center gap-4 text-zinc-500 ">
          <li>
            <Text
              size="textMedium"
              className="hover:text-white transition-colors duration-200"
            >
              <Link href={"/services"}>Serviços</Link>
            </Text>
          </li>
          <li>
            <Text
              size="textMedium"
              className="hover:text-white transition-colors duration-200"
            >
              <Link href={"/services"}>Sobre</Link>
            </Text>
          </li>
          <li>
            <Text
              size="textMedium"
              className="hover:text-white transition-colors duration-200"
            >
              <Link href={"/services"}>Projetos</Link>
            </Text>
          </li>
          <li>
            <Text
              size="textMedium"
              className="hover:text-white transition-colors duration-200"
            >
              <Link href={"/services"}>Contato</Link>
            </Text>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <ButtonComponent className="w-fit">Fazer Orçamento</ButtonComponent>
      </div>
    </header>
  );
}
