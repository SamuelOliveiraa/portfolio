import { Text } from "@/components/common";

export default function AboutListItem({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Text
      as="li"
      className="border hover:border-emerald-900 hover:scale-105 transition-all duration-200 opacity-70 hover:opacity-100 cursor-pointer rounded-md px-2 py-1 w-fit"
    >
      {children}
    </Text>
  );
}
