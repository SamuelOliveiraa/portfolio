import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h2 className="text-gray-900 text-xl md:text-4xl font-bold">
        {"<SO />"}
      </h2>
    </Link>
  );
}
