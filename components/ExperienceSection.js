import ExperienceCard from './ExperienceCard'

export default function ExperienceSection() {
  const experiences = [
    {
      institution: "Gator Glaciology Lab",
      position: "Data Science Research Assistant",
      status: "Present",
      image: "/images/gatorglaciology.png",
      imageAlt: "Gator Glaciology Lab",
      link: "https://www.gatorglaciology.com/",
      className: "box-1",
      description: " Currently using neural networks and Markov Chain Monte Carlo modeling techniques to map the topography beneath ice sheets to help interpret ice sheet evolution."

    },

    {
      institution: "Blockchain Association Singapore",
      position: "Data Analyst Intern",
      status: "Aug 2024",
      image: "/images/singapore.png",
      imageAlt: "BAS",
      link: "https://www.linkedin.com/company/singaporeblockchain/?originalSubdomain=sg",
      className: "box-2",
      description: "I built data pipelines, webscrapers and dashboards for the Data & Marketing Strategy team, including an ETL system to track generative AI adoption in APAC (218% YoY growth), automated member data collection to improve targeted marketing, and an A/B testing dashboard that boosted email engagement by 24%. "
    },
        {
      institution: "Perplexity",
      position: "Campus Ambassador",
      status: "Present",
      image: "/images/perplexity.avif",
      imageAlt: "Perplexity",
      link: "https://www.perplexity.ai/comet",
      className: "box-3",
      description: "Promoting Perplexity's AI broswer, Comet, at UF by teaching students how to incorporate Comet in their workflow, coding and studying routines. My goal is to market Comet as an effective vibe coding, research and studying tool.  ",

    },
  ]

  return (
    <section id="experience">
      <div className="experience-signage">
        <h1> I have worked with</h1>
      </div>
      <div className="cafe-shop">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            institution={exp.institution}
            position={exp.position}
            status={exp.status}
            image={exp.image}
            imageAlt={exp.imageAlt}
            link={exp.link}
            className={exp.className}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  )
}