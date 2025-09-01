import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-2 py-5 w-full flex justify-center items-center text-gray-600 text-center gap-2 text-xs sm:text-sm">
      <p>
        <Link href={"https://github.com/shahsagarm"} className="underline">
          Projetado
        </Link>{" "}
        por Sagar Shah e{" "}
        <Link href={"https://github.com/samueloliveiraa"} className="underline">
          codificado
        </Link>{" "}
        com ❤️️ por Samuel Oliveira
      </p>
    </footer>
  );
}
