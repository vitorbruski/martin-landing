import { Camera, Globe, Video } from 'lucide-react'
import SocialButton from '../SocialButton/SocialButton'
import './SocialLinksSection.css'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Camera },
  { label: 'YouTube', href: 'https://youtube.com', icon: Video },
  { label: 'Site', href: 'https://example.com', icon: Globe },
]

function SocialLinksSection() {
  return (
    <section className="social-links-section" aria-labelledby="social-title">
      <p>Acompanhe os próximos passos</p>
      <h2 id="social-title">Me encontre na internet</h2>

      <div className="social-links-section__links">
        {socialLinks.map((socialLink) => (
          <SocialButton key={socialLink.label} {...socialLink} />
        ))}
      </div>
    </section>
  )
}

export default SocialLinksSection
