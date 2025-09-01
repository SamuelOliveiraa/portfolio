import ContactLinks from "@/components/ContactLinks";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row px-4 py-16 md:py-24 relative gap-10 md:gap-20 items-center justify-center">
        <div className="max-w-3xl text-gray-900 md:flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Ola, meu nome é Samuel👋</h1>
            <p>
              Sou desenvolvedor Front-End Júnior com experiência prática em
              <strong> React.js, React Native, TypeScript e Node.js</strong>.
              Apaixonado por tecnologia e por criar interfaces modernas,
              acessíveis e funcionais, estou sempre em busca de aprender novas
              ferramentas e transformar ideias em soluções digitais.
            </p>
          </div>

          <div className="flex flex-col gap-2 my-8">
            <div className="flex  items-center gap-3">
              <MapPin />
              Espirito Santo, Brasil
            </div>

            <div className="flex items-center gap-3">
              <div className="flex relative h-6 w-6 items-center justify-center">
                <span className="absolute inline-flex h-1/2 w-1/2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="rounded-full w-2 h-2 bg-green-500"></span>
              </div>

              <span>Disponível para novos projetos</span>
            </div>
          </div>

          <div className="w-fit">
            <ContactLinks text />
          </div>
        </div>

        <div className="relative flex items-center ">
          <div className="absolute w-full -inset-1 -translate-x-2 translate-y-3 bg-gray-300 md:-inset-2 md:-translate-x-5 md:translate-y-4 " />

          <Image
            className=" relative"
            src={"/me.jpg"}
            alt="A photo about me"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
