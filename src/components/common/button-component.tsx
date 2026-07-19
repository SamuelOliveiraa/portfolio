"use client";

import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "default";
}

const buttonVariants = tv({
  base: "w-full py-1 px-5 border rounded-sm cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 text-sm font-normal leading-5 font-inter antialiased text-white",
  variants: {
    variant: {
      outline:
        "bg-transparent border-zinc-500 opacity-70 hover:opacity-100 text-zinc-950",
      default: "bg-emerald-900 hover:bg-emerald-500 border-transparent"
    }
  }
});

export default function ButtonComponent({
  children,
  className,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonVariants({ className, variant })} {...rest}>
      {children}
    </button>
  );
}
