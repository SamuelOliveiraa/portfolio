import { ScrollLink } from "./scroll-link";
import Text from "./text";

export const LinkItem = ({
  children,
  link
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <ScrollLink targetId={link}>
      <Text
        as="li"
        size="textMedium"
        className="hover:text-zinc-950 transition-colors duration-200 text-zinc-500/80"
      >
        {children}
      </Text>
    </ScrollLink>
  );
};
