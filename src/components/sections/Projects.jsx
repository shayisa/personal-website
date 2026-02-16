import ScrollReveal from '../ui/ScrollReveal'
import ProjectCard from '../ui/ProjectCard'
import projects from '../../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Projects</h2>
          <div className="section-divider" />
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mb-12">
            A selection of recent AI projects — from developer infrastructure and full-stack platforms to business automation and education.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
