import Link from "next/link";
import Text from "./text";

export default function Logo() {
  return (
    <Text size="textGeist" className="uppercase w-fit">
      <Link href="/">DEV.SAMUEL</Link>
    </Text>
  );
}
