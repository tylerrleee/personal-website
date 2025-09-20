import Image from 'next/image'

export default function ProjectCard({ 
  date,
  title,
  description,
  image, 
  imageAlt, 
  link,
  techStack = [],
  className 
}) {
  return (
    <div className={`project-table ${className}`}>
      <div className="content-header">
        <div className="text-items">
          <div className="flex items-center gap-2">
            <span className="tag-present">{date}</span>
          </div>
          <div className="project-name">{title}</div>
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-image-container">
        <Image src={image} alt={imageAlt} className="project-card-image" width={400} height={200} />
      </a>

      <div className="project-description-container"> 
        {description}
      </div>
      
      <div className="flex items-center gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="tag-techstack">{tech}</span>
        ))}
      </div>
    </div>
  )
}