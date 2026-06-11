import './ProfessionalProfile.css'

const professionalItems = [
  {
    title: 'O profissional da saúde',
    description:
      'Enfermeiro, mestre em enfermagem e servidor público com longa atuação junto à comunidade.',
  },
  {
    title: 'Experiência em gestão',
    description:
      'Atuação como Secretário Municipal de Saúde e participação direta na construção de políticas públicas.',
  },
  {
    title: 'Gestão próxima das pessoas',
    description:
      'Uma trajetória marcada pelo diálogo, planejamento e compromisso com a população.',
  },
]

function ProfessionalProfile() {
  return (
    <section
      className="professional-profile"
      aria-labelledby="professional-profile-title"
    >
      <div className="professional-profile__heading">
        <p>Saúde, serviço e gestão</p>
        <h2 id="professional-profile-title">Perfil Profissional</h2>
      </div>

      <div className="professional-profile__card">
        {professionalItems.map((item) => (
          <div className="professional-profile__item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProfessionalProfile
