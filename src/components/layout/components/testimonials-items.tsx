import Text from "@/components/common/text";

export interface TestimonialsItemProps {
  description: string;
  title: string;
  subtitle: string;
}

export default function TestimonialsItem({
  description,
  title,
  subtitle
}: TestimonialsItemProps) {
  return (
    <div className="flex flex-col gap-4 p-6 border">
      <Text className="text-zinc-400">{`"${description}"`}</Text>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center size-8 rounded-full border">
          <Text size="textSmall" className="text-emerald-900">
            {title.split(" ")[0].charAt(0) + title.split(" ")[1].charAt(0)}
          </Text>
        </div>

        <div className="flex flex-col justify-center">
          <Text>{title}</Text>

          <Text size="textSmall" className="text-zinc-500">
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  );
}
