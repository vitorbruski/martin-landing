import './TimelineItem.css'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  side: 'left' | 'right'
}

function TimelineItem({
  year,
  title,
  description,
  side,
}: TimelineItemProps) {
  return (
    <article className={`timeline-item timeline-item--${side}`}>
      <div className="timeline-item__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="timeline-item__marker" aria-hidden="true" />
      <span className="timeline-item__year">{year}</span>
    </article>
  )
}

export default TimelineItem
