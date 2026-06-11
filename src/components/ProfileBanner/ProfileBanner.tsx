import "./ProfileBanner.css";
import martinPerfilProfissional from "../../assets/images/martin-perfil-profissional.jpeg";

function ProfileBanner() {
  return (
    <section className="profile-banner" aria-labelledby="profile-name">
      <div className="profile-banner__photo">
        <img
          src={martinPerfilProfissional}
          alt="Martin Kalkmann em perfil profissional"
        />
      </div>

      <div className="profile-banner__content">
        <div className="profile-banner__social">
          <span>@martinkalkmann</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Seguir no Instagram
          </a>
        </div>

        <h2 id="profile-name">Martin Kalkmann</h2>

        <ul>
          <li>Enfermeiro</li>
          <li>Mestre em Enfermagem</li>
          <li>Bacharel em Educação Física</li>
          <li>Servidor Público</li>
        </ul>
      </div>
    </section>
  );
}

export default ProfileBanner;
