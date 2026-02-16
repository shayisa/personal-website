import ScrollReveal from './ScrollReveal'

export default function TimelineItem({ company, title, period, description, current, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="relative pl-8 pb-12 last:pb-0 group">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-0 w-[1px] bg-gray-200 group-last:hidden" />

        {/* Timeline dot */}
        <div className={`absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${
          current
            ? 'border-accent bg-accent shadow-[0_0_0_4px_rgba(0,102,204,0.12)]'
            : 'border-gray-300 bg-surface group-hover:border-accent'
        }`} />

        {/* Content */}
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-display font-semibold text-primary text-lg">
              {company}
            </h3>
            <span className={`text-xs font-medium tracking-wide uppercase ${
              current ? 'text-accent' : 'text-secondary'
            }`}>
              {period}
            </span>
          </div>
          <p className="text-secondary font-medium text-[15px]">{title}</p>
          <p className="text-secondary/80 text-[15px] leading-relaxed pt-1 max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
