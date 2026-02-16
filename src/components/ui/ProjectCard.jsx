import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500"
    >
      {/* Accent bar */}
      <div className="w-8 h-[3px] bg-accent/40 group-hover:bg-accent group-hover:w-12 transition-all duration-500 rounded-full mb-6" />

      <h3 className="font-display font-semibold text-xl text-primary mb-3">
        {title}
      </h3>

      <p className="text-secondary text-[15px] leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-accent/80 bg-accent/[0.06] px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
