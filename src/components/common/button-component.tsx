"use client";

import { LoaderCircle } from "lucide-react";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  variant?: "outline" | "default";
}

const buttonVariants = tv({
  base: "w-full py-1 px-5 border rounded-sm cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 text-sm font-normal leading-5 font-inter antialiased text-white",
  variants: {
    variant: {
      outline:
        "bg-transparent border-zinc-500 opacity-70 hover:opacity-100 text-zinc-950",
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
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={buttonVariants({ className, variant, loading })}
      {...rest}
    >
      {loading && <LoaderCircle className="size-4 mr-0.5 animate-spin" />}
      {children}
    </button>
  );
}
