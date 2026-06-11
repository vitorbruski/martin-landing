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
          label="Martin Kalkmann"
          title="Uma vida dedicada a cuidar das pessoas."
          description="Antes de administrar uma cidade, Martin escolheu cuidar de pessoas. Enfermeiro, mestre em enfermagem e servidor público, construiu sua trajetória ouvindo, acolhendo e buscando soluções para melhorar a vida da comunidade."
          buttonLabel="Conheça sua história"
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
