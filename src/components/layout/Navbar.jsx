import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollTo from '../../hooks/useScrollTo'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'focus', label: 'Focus' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-semibold text-primary text-[15px] tracking-tight hover:text-accent transition-colors"
        >
          Shay Isa
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-[13px] font-medium text-secondary hover:text-primary transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[2.5px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-left text-[15px] font-medium text-secondary hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
