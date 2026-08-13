import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="w-fit">
      <Image
        alt="Logo"
        src="/icone.ico"
        width={50}
        height={50}
        className="size-9"
        loading="eager"
        priority
      />
    </Link>
  );
}
