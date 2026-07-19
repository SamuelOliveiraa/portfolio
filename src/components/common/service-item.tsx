import { twMerge } from "tailwind-merge";
import Text from "./text";

interface ServiceItemProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceItem({
  Icon,
  title,
  description,
  className
}: ServiceItemProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 p-6 border hover:scale-105 transition-all duration-200",
        className
      )}
    >
      <Icon className="text-emerald-500" />

      <Text className="text-zinc-950">{title}</Text>

      <Text size="textSmall" className="text-zinc-500 max-w-lg">
        {description}
      </Text>
    </div>
  );
}
