import "./App.css";
import hero from "./assets/images/hero.jpeg";
import martinApresentacao from "./assets/images/martin-apresentacao.jpeg";
import FlagsSection from "./components/FlagsSection/FlagsSection";
import Hero from "./components/Hero/Hero";
import ProfessionalProfile from "./components/ProfessionalProfile/ProfessionalProfile";
import ProfileBanner from "./components/ProfileBanner/ProfileBanner";
import SocialLinksSection from "./components/SocialLinksSection/SocialLinksSection";
import TimelineSection from "./components/TimelineSection/TimelineSection";

function App() {
  return (
    <div className="page">
      <header className="page-intro">
        <p className="page-intro__eyebrow">Martin Kalkmann</p>
        <h1>
          Uma vida dedicada a<strong> cuidar das pessoas.</strong>
        </h1>
      </header>

      <main className="main-container">
        <Hero
          title="O que Martin fez por Ivoti?"
          achievements={[
            {
              title: "+3.500 pontos de iluminação LED instalados",
              description:
                "Mais segurança, economia e qualidade de vida para todos os bairros.",
            },
            {
              title: "3,2 km de ciclofaixa e passeio público",
              description:
                "Mais mobilidade, acessibilidade e incentivo à prática esportiva.",
            },
            {
              title: "Investimentos permanentes em saúde pública",
              description:
                "Planejamento, escuta da comunidade e fortalecimento dos serviços.",
            },
            {
              title: "Captação de recursos e novos investimentos para Ivoti",
              description:
                "Trabalho constante para trazer melhorias e preparar a cidade para o futuro.",
            },
            {
              title: "Planejamento responsável e visão de longo prazo",
              description:
                "Uma gestão focada em deixar resultados que permanecem além dos mandatos.",
            },
          ]}
          buttonLabel="Tire suas dúvidas sobre projetos comigo!"
          buttonHref="https://wa.me/555199627965?text=Bem-vindo%20eleitor!%0A%0AQual%20sua%20d%C3%BAvida%3F"
          image={hero}
          imageAlt="Martin Kalkmann junto à família e à comunidade"
        />

        <ProfileBanner />

        <Hero
          label="Quem é Martin?"
          title="Da saúde para a gestão pública."
          description="Muito antes de assumir a Prefeitura de Ivoti, Martin já dedicava sua vida ao serviço público. Foi trabalhando na saúde que aprendeu uma lição que levaria para toda sua vida pública: as melhores soluções nascem quando se escuta as pessoas."
          image={martinApresentacao}
          imageAlt="Martin Kalkmann em apresentação pública"
        />

        <ProfessionalProfile />
        <FlagsSection />
        <TimelineSection />
        <SocialLinksSection />
      </main>

      <footer className="footer-statement">Obrigado</footer>
    </div>
  );
}

export default App;
