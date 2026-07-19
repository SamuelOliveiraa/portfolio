import Text from "./text";
import { ScrollLink } from "./scroll-link";

export const LinkItem = ({
  children,
  link
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Text
      as="li"
      size="textMedium"
      className="hover:text-zinc-950 transition-colors duration-200"
    >
      <ScrollLink targetId={link}>{children}</ScrollLink>
    </Text>
  );
};
