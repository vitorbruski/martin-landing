import TimelineItem from '../TimelineItem/TimelineItem'
import './TimelineSection.css'

const timelineItems = [
  {
    year: 'Etapa 01',
    title: 'Formação',
    description:
      'Graduação em Enfermagem, Educação Física e Mestrado em Enfermagem. Uma formação multidisciplinar que fortaleceu seu olhar sobre saúde, cuidado e qualidade de vida.',
  },
  {
    year: 'Etapa 02',
    title: 'Saúde Pública',
    description:
      'Atuação profissional na área da saúde e no serviço público. O trabalho próximo da comunidade consolidou seu compromisso com um atendimento humano e responsável.',
  },
  {
    year: 'Etapa 03',
    title: 'Gestão Municipal',
    description:
      'Secretário Municipal de Saúde e posteriormente Prefeito de Ivoti. A experiência ampliou sua capacidade de planejamento, diálogo e construção de soluções para o município.',
  },
  {
    year: 'Etapa 04',
    title: 'Novos Desafios',
    description:
      'Convite para assumir a Secretaria Municipal de Saúde de São Leopoldo, dando continuidade a uma trajetória de compromisso com as pessoas. Um novo desafio voltado ao fortalecimento da saúde pública e à busca constante por melhorias para a comunidade.',
  },
]

function TimelineSection() {
  return (
    <section className="timeline-section" aria-labelledby="timeline-title">
      <header className="timeline-section__heading">
        <p>Uma história de cuidado e serviço</p>
        <h2 id="timeline-title">Trajetória</h2>
      </header>

      <div className="timeline-section__items">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            title={item.title}
            description={item.description}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
