import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

type TextProps = {
  as?: React.HTMLElementType;
  children: React.ReactNode;
  size?:
    "textSmall" | "textMedium" | "titleSmall" | "titleMedium" | "titleLarge";
  className?: string;
  asChild?: boolean;
};

const textVariants = tv({
  base: "text-base leading-5 font-bold font-inter antialiased",
  variants: {
    size: {
      textSmall: "text-xs font-medium font-geist-mono",
      textMedium: "text-sm font-normal",
      titleSmall: "text-sm font-semibold",
      titleMedium: "text-2xl md:text-5xl text-title-medium",
      titleLarge: "text-3xl md:text-7xl text-title-large"
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
