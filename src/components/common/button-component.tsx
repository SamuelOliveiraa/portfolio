"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { LoaderCircle } from "lucide-react";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  variant?: "outline" | "default";
  asChild?: boolean;
}

const buttonVariants = tv({
  base: "w-full py-1 px-5 border rounded-sm cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 text-sm font-normal leading-5 font-inter antialiased text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
  variants: {
    variant: {
      outline: "bg-transparent border-zinc-500 hover:bg-zinc-100 text-zinc-950",
      default: "bg-emerald-900 hover:bg-emerald-500 border-transparent"
    },
    loading: {
      true: "opacity-50 cursor-not-allowed"
    }
  }
});

export default function ButtonComponent({
  children,
  className,
  loading = false,
  variant = "default",
  asChild = false,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      disabled={loading}
      className={buttonVariants({ className, variant, loading })}
      {...rest}
    >
      {loading && <LoaderCircle className="size-4 mr-0.5 animate-spin" />}
      <Slottable>{children}</Slottable>
    </Component>
  );
}
