import Tag from "../Tag";

type HeaderSectionProps = {
  title: string;
  description: string;
};

export default function HeaderSection({
  title,
  description
}: HeaderSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-2">
      <Tag text={title} />

      <p className="text-gray-900">{description}</p>
    </div>
  );
}
