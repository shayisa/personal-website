import ScrollReveal from '../ui/ScrollReveal'
import SkillTag from '../ui/SkillTag'
import skills from '../../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
          {skills.categories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.08}>
              <div>
                <h3 className="font-display font-semibold text-primary text-lg mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      label={skill}
                      delay={catIndex * 0.08 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
