import ScrollReveal from '../ui/ScrollReveal'
import profile from '../../data/profile.json'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">About</h2>
          <div className="section-divider" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-5 max-w-2xl">
            {profile.about.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-secondary text-lg leading-relaxed text-balance">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
            {profile.highlights.map((item, i) => (
              <div key={item.label}>
                <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="font-display font-semibold text-primary text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
