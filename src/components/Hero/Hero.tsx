import './Hero.css'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

interface HeroProps {
  label?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  image?: string
  imageAlt?: string
  video?: string
}

function Hero({
  label,
  title,
  description,
  buttonLabel,
  buttonHref,
  image,
  imageAlt,
  video,
}: HeroProps) {
  return (
    <section className="hero" aria-label={title}>
      <HeroContent
        label={label}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        buttonHref={buttonHref}
      />
      <HeroImage image={image} imageAlt={imageAlt} video={video} />
    </section>
  )
}

export default Hero
