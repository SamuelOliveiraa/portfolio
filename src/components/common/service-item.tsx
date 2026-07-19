import Text from "./text";

interface ServiceItemProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceItem({
  Icon,
  title,
  description
}: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-4 p-6 border hover:scale-105 transition-all duration-200">
      <Icon className="text-emerald-500" />

      <Text className="text-zinc-950">{title}</Text>

      <Text size="textSmall" className="text-zinc-500 max-w-lg">
        {description}
      </Text>
    </div>
  );
}
