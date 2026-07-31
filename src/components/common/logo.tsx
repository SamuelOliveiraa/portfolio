import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="w-fit">
      <Image
        alt="Logo"
        src="/favicon.ico"
        width={100}
        height={100}
        className="size-12"
        loading="eager"
      />
    </Link>
  );
}
