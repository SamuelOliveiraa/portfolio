import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import Text from "./text";

type InputFormProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  className?: string;
};

const InputVariants = tv({
  base: "transition-colors rounded-sm duration-200 py-2 px-4 w-full border border-zinc-500/50 bg-zinc-925 dark:bg-zinc-800 focus:outline-none focus:border-emerald-500 disabled:bg-transparent text-sm placeholder:text-zinc-500/50",
  variants: {
    hasError: {
      true: "border-red-500"
    }
  },
  defaultVariants: {
    hasError: false
  }
});

export default function Input({
  label,
  error,
  placeholder,
  register,
  className,
  ...rest
}: InputFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <Text
        size="textSmall"
        className={error ? "text-red-500" : "text-zinc-400"}
      >
        {label}
      </Text>

      <input
        {...register}
        className={twMerge(
          InputVariants({
            hasError: !!error
          }),
          className
        )}
        placeholder={placeholder}
        {...rest}
      />

      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
}
