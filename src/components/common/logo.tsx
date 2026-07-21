import { ScrollLink } from "./scroll-link";
import Text from "./text";

export default function Logo() {
  return (
    <Text size="textSmall" asChild className="uppercase w-fit">
      <ScrollLink targetId="root">DEV.SAMUEL</ScrollLink>
    </Text>
  );
}
