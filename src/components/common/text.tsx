import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

type TextProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?:
    | "textSmall"
    | "textGeist"
    | "textMedium"
    | "titleSmall"
    | "titleMedium"
    | "titleLarge";
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const textVariants = tv({
  base: "text-base leading-5 font-bold font-inter antialiased",
  variants: {
    size: {
      textGeist: "text-xs font-medium font-geist-mono tracking-[0.2em] uppercase",
      textSmall: "text-xs font-medium",
      textMedium: "text-sm font-normal",
      titleSmall: "text-2xl font-semibold",
      titleMedium: "text-2xl md:text-5xl text-title-medium",
      titleLarge: "text-2xl sm:text-3xl md:text-7xl text-title-large"
    }
  },
  defaultVariants: {
    size: "textMedium"
  }
});

export default function Text({
  asChild,
  size,
  className,
  as: Tag = "span",
  ...props
}: TextProps) {
  const Component = asChild ? Slot : Tag;

  return <Component className={textVariants({ size, className })} {...props} />;
}
