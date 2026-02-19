import ScrollReveal from '../ui/ScrollReveal'
import ProjectCard from '../ui/ProjectCard'
import projectData from '../../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Projects</h2>
          <div className="section-divider" />
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mb-16">
            A selection of things I've built and explored — organized by what
            they do rather than when I made them.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {projectData.categories.map((category) => (
            <div key={category.name}>
              <ScrollReveal delay={0.05}>
                <div className="mb-8">
                  <h3 className="font-display font-semibold text-primary text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="text-secondary text-sm">
                    {category.description}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
