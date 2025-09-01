import Tag from "@/components/Tag";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-gray-100 flex flex-col justify-center items-center py-16 md:py-20 px-4 text-gray-900 gap-12">
      <Tag text="Sobre mim" />
      <div className="flex items-center justify-center flex-col md:flex-row max-w-7xl mx-auto gap-20">
        <div className="relative flex items-center  ">
          <div className="absolute w-full -inset-1 -translate-x-2 translate-y-3 bg-gray-300 md:-inset-2 md:-translate-x-5 md:translate-y-4 " />

          <Image
            className=" relative"
            src={"/me-2.jpg"}
            alt="Uma foto minha"
            width={300}
            height={300}
          />
        </div>

        <div className="max-w-xl flex flex-col gap-3 text-gray-700">
          <h2 className="font-bold text-2xl text-gray-900">
            Quer saber mais sobre mim? Aqui vai:
          </h2>

          <p>
            Sou Desenvolvedor Front-End Júnior, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por criar experiências
            digitais. Tenho experiência prática com{" "}
            <strong>HTML, CSS, JavaScript, React.js e React Native</strong>,
            além de projetos pessoais e de bootcamp que me permitiram aplicar na
            prática o que aprendi.
          </p>

          <p>
            Nos últimos anos, venho me aprofundando cada vez mais em tecnologias
            modernas como{" "}
            <strong>TypeScript, TailwindCSS, Next.Js Node.js e Express</strong>,
            sempre buscando unir boas práticas de código a um design funcional e
            acessível.
          </p>

          <p>
            Acredito no aprendizado contínuo e no trabalho colaborativo. Tenho
            familiaridade com metodologias ágeis como Kanban e Scrum, e valorizo
            muito a organização, a clareza na comunicação e a atenção aos
            detalhes em cada projeto que participo.
          </p>

          <p>
            Fora do modo {"desenvolvedor"}, gosto de aprender novas tecnologias,
            andar de bicicleta com minha esposa e conhecer lugares novos. Também
            compartilho meus aprendizados e projetos no{" "}
            <a
              href="https://github.com/SamuelOliveiraa"
              target="_blank"
              className="hover:opacity-70 underline"
            >
              GitHub
            </a>{" "}
            e no{" "}
            <a
              href="https://www.linkedin.com/in/samuel-oliveiraa-de-araujo"
              target="_blank"
              className="hover:opacity-70 underline"
            >
              LinkedIn
            </a>
            .
          </p>

          <span>Alguns pontos rápidos sobre mim:</span>
          <ul className="list-disc ml-6">
            <li>
              Formação em andamento: Análise e Desenvolvimento de Sistemas
            </li>
            <li>Experiência em Front-End com React.js e React Native</li>
            <li>Conhecimentos em Back-End com Node.js e Express</li>
            <li>Prática com Git, GitHub e metodologias ágeis</li>
            <li>
              Idiomas: Português (nativo), Inglês (básico) e Espanhol (básico)
            </li>
          </ul>

          <p>
            Ah, e uma última coisa: estou aberto a oportunidades de{" "}
            <strong>freelance</strong> ou colaborações em projetos. Se quiser
            trocar uma ideia ou tiver um projeto em mente, sinta-se à vontade
            para me chamar 😉
          </p>
        </div>
      </div>
    </section>
  );
}
