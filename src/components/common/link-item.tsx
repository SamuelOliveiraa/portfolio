import ScrollLink from "./scroll-link";
import Text from "./text";

interface LinkItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  link: string;
}

export default function LinkItem({ children, link, ...rest }: LinkItemProps) {
  return (
    <Text
      as="li"
      size="textMedium"
      className="hover:text-zinc-950 transition-colors duration-200 text-zinc-500/80"
      {...rest}
    >
      <ScrollLink targetId={link} className="block w-full">
        {children}
      </ScrollLink>
    </Text>
  );
}
