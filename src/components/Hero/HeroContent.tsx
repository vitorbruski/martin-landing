interface HeroContentProps {
  label?: string
  title?: string
  description?: string
  achievements?: {
    title: string
    description: string
  }[]
  buttonLabel?: string
  buttonHref?: string
}

function HeroContent({
  label,
  title,
  description,
  achievements,
  buttonLabel,
  buttonHref,
}: HeroContentProps) {
  return (
    <div className="hero__content">
      {label && <p className="hero__label">{label}</p>}
      {title && <h2>{title}</h2>}
      {description && <p className="hero__description">{description}</p>}
      {achievements && (
        <ul className="hero__achievements">
          {achievements.map((achievement) => (
            <li key={achievement.title}>
              <strong>{achievement.title}</strong>
              <span>{achievement.description}</span>
            </li>
          ))}
        </ul>
      )}
      {buttonLabel && buttonHref ? (
        <a
          className="hero__cta"
          href={buttonHref}
          target="_blank"
          rel="noreferrer"
        >
          {buttonLabel}
        </a>
      ) : buttonLabel ? (
        <button className="hero__cta" type="button">
          {buttonLabel}
        </button>
      ) : null}
    </div>
  )
}

export default HeroContent
