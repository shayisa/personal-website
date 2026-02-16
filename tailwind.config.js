/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1F',
        secondary: '#86868B',
        accent: '#0066CC',
        surface: '#FAFAFA',
        'surface-warm': '#F5F5F7',
        card: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': 'clamp(6rem, 12vw, 10rem)',
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.03)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 48px rgba(0,0,0,0.04)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
