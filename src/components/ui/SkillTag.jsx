import { motion } from 'framer-motion'

export default function SkillTag({ label, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(0, 102, 204, 0.06)' }}
      className="inline-block px-4 py-2 text-sm font-medium text-primary/80 bg-white rounded-full border border-gray-200/80 transition-colors cursor-default"
    >
      {label}
    </motion.span>
  )
}
