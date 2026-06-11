interface HeroImageProps {
  image?: string
  imageAlt?: string
  video?: string
}

function HeroImage({ image, imageAlt = '', video }: HeroImageProps) {
  if (!image && !video) {
    return null
  }

  return (
    <div className="hero__visual">
      {video ? (
        <iframe
          src={video}
          title="Vídeo de apresentação"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img src={image} alt={imageAlt} />
      )}
    </div>
  )
}

export default HeroImage
