import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-2 py-5 w-full bg-gray-100 flex justify-center items-center text-gray-600 text-center gap-2 text-xs sm:text-sm">
      <p>
        <Link href={"https://github.com/shahsagarm"} className="underline">
          Designed
        </Link>{" "}
        by Sagar Shah and{" "}
        <Link href={"https://github.com/samueloliveiraa"} className="underline">
          coded
        </Link>{" "}
        with ❤️️ by Samuel Oliveira
      </p>
    </footer>
  );
}
