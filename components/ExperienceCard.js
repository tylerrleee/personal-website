import Image from 'next/image'

export default function ExperienceCard({ 
  institution, 
  position, 
  status, 
  image, 
  imageAlt, 
  link,
  className,
  description
}) {
  return (
    <div className={`cafe-table ${className}`}>
      <div className="content-header">
        <div className="text-items">
          <div className="flex items-center gap-2">
            <div className="institution">{institution}</div>
            <span className="tag-present">{status}</span>
          </div>
          <div className="position-name">{position}</div>
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-image-container">
        <Image src={image} alt={imageAlt} className="card-image" width={400} height={200} />
      </a>
      <div className="project-description-container"> 
        {description}
      </div>

    </div>
  )
}