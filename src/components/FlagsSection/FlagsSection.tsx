import FlagCard from "../FlagCard/FlagCard";
import "./FlagsSection.css";
import flagsLideranca from "../../assets/images/flags-lideranca.jpeg";
import flagsSaude from "../../assets/images/flags-saude.jpeg";
import flagsComunidade from "../../assets/images/flags-comunidade.jpeg";
import flagsGestao from "../../assets/images/flags-gestao.jpeg";
import flagsParcerias from "../../assets/images/flags-parcerias.png";
import flagsReconhecimento from "../../assets/images/flags-reconhecimento.jpg";

const flags = [
  {
    title: "Saúde e Cuidado com as Pessoas",
    image: flagsSaude,
  },
  {
    title: "Gestão Pública",
    image: flagsGestao,
  },
  {
    title: "Liderança e Articulação",
    image: flagsLideranca,
  },
  {
    title: "Comunidade",
    image: flagsComunidade,
  },
  {
    title: "Reconhecimento e Resultados",
    image: flagsReconhecimento,
  },
  {
    title: "Parcerias e Oportunidades",
    image: flagsParcerias,
    imagePosition: "center 25%",
  },
];

function FlagsSection() {
  return (
    <section className="flags-section" aria-labelledby="flags-title">
      <div className="flags-section__intro">
        <p>Compromissos com as pessoas</p>
        <h2 id="flags-title">Bandeiras</h2>
      </div>

      {flags.map((flag) => (
        <FlagCard
          key={flag.title}
          title={flag.title}
          image={flag.image}
          imagePosition={flag.imagePosition}
        />
      ))}
    </section>
  );
}

export default FlagsSection;
