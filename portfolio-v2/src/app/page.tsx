import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center text-white text-4xl">
      <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
      Ola, mundo
    </div>
  );
}
