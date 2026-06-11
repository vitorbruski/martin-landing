import './FlagCard.css'

interface FlagCardProps {
  title: string
  image: string
  imagePosition?: string
}

function FlagCard({ title, image, imagePosition }: FlagCardProps) {
  return (
    <article className="flag-card">
      <img src={image} alt={title} style={{ objectPosition: imagePosition }} />
      <h3>{title}</h3>
    </article>
  )
}

export default FlagCard
