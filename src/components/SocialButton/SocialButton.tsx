import './SocialButton.css'

interface SocialButtonProps {
  href: string
  label: string
  icon: string
}

function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <a
      className="social-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <img className="social-button__icon" src={icon} alt="" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

export default SocialButton
