import { motion } from 'framer-motion'
import profile from '../../data/profile.json'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full animate-float opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,204,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,204,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '-10s',
          }}
        />
      </div>

      <div className="section-container text-center relative z-10">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 inline-block"
        >
          <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full ring-2 ring-accent/20 ring-offset-4 ring-offset-surface shadow-xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/shay-isa.jpg`}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display font-bold text-hero text-primary mb-6"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          {profile.title}
          {profile.company && (
            <> at <span className="text-primary font-medium">{profile.company}</span></>
          )}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-body text-secondary/70 text-base max-w-lg mx-auto"
        >
          {profile.tagline}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
