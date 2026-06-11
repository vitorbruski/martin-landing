import type { LucideIcon } from 'lucide-react'
import './SocialButton.css'

interface SocialButtonProps {
  href: string
  label: string
  icon: LucideIcon
}

function SocialButton({ href, label, icon: Icon }: SocialButtonProps) {
  return (
    <a
      className="social-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon aria-hidden="true" size={24} strokeWidth={2} />
      <span>{label}</span>
    </a>
  )
}

export default SocialButton
