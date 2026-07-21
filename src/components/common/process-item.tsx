import Text from "./text";

interface ProcessItemProps {
  title: string;
  number: string;
  description: string;
  Icon: React.ElementType;
}

export default function ProcessItem({
  title,
  number,
  description,
  Icon
}: ProcessItemProps) {
  return (
    <div className="flex flex-col gap-4 p-6 border transition-all duration-200">
      <div className="flex items-center gap-4 text-emerald-500">
        <Text size="textSmall" className="uppercase">
          {number}
        </Text>

        <div className="flex-1 w-px h-px border" />

        <Icon className="size-4" />
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-zinc-950">{title}</Text>
        <Text className="text-zinc-500">{description}</Text>
      </div>
    </div>
  );
}
