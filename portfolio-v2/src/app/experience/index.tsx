import ExperienceCard from "@/components/ExperienceCard";
import HeaderSection from "@/components/HeaderSection";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="w-full bg-gray-100 flex flex-col gap-12 px-4 py-16 my-24 md:py-24"
    >
      <HeaderSection
        title="Experiências"
        description="Aqui está um rápido resumo das minhas experiências mais recentes:"
      />

      <div className="flex flex-col gap-12 px-4 justify-center items-center ">
        <ExperienceCard
          title="Agente de Serviços Pleno"
          date="Set 2024 - Jun 2025"
          itens={[
            "Atendimento como recepcionista administrativo, com foco em suporte ao cliente e organização de processos.",
            "Gestão de e-mails e reservas de hóspedes e grupos.",
            "Controle financeiro utilizando planilhas e execução de encerramento de contas de grupos."
          ]}
        />

        <ExperienceCard
          title="Agente de Serviços Noturno"
          date="Out 2023 - Set 2024"
          itens={[
            "Atuação como auditor noturno, realizando conferências financeiras e encerramento de contas.",
            "Emissão de relatórios gerenciais e cobrança de pendências financeiras.",
            "Atendimento a hóspedes em check-ins, check-outs e suporte operacional noturno."
          ]}
        />

        <ExperienceCard
          title="Mensageiro"
          date="Ago 2022 - Out 2023"
          itens={[
            "Auxílio a hóspedes com bagagens, entregas e solicitações diversas.",
            "Organização do lobby e apoio à recepção.",
            "Prestação de atendimento cordial e ágil, garantindo uma boa experiência ao cliente."
          ]}
        />
      </div>
    </section>
  );
}
