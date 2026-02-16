import { useCallback } from 'react'

export default function useScrollTo() {
  const scrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return scrollTo
}
