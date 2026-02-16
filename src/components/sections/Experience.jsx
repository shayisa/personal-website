import ScrollReveal from '../ui/ScrollReveal'
import TimelineItem from '../ui/TimelineItem'
import experience from '../../data/experience.json'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Experience</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="max-w-2xl mt-4">
          {experience.map((item, index) => (
            <TimelineItem
              key={`${item.company}-${item.title}`}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
