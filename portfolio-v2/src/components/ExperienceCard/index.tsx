import Image from "next/image";

type ExperienceCardProps = {
  date: string;
  title: string;
  itens: string[];
};

export default function ExperienceCard({
  date,
  title,
  itens
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl bg-gray-200 text-gray-900 gap-8 md:gap-8 p-8 rounded-md ">
      <div className="flex justify-center items-center text-center rounded-md   md:w-1/4">
        <Image
          className="w-3/4 md:w-full text-center"
          src={"/blue-tree-hotels.png"}
          alt="Blue tree"
          width={300}
          height={400}
          loading="lazy"
        />
      </div>

      <p className="md:hidden text-gray-700">{date}</p>

      <div className="max-w-96 flex flex-col gap-3">
        <h2 className="font-bold">{title}</h2>
        <ul className="list-disc px-5 text-gray-700">
          {itens.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="hidden md:block text-gray-700">{date}</p>
    </div>
  );
}
