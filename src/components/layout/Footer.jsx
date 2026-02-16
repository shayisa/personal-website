export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Shay Isa
        </p>
        <p className="text-secondary/60 text-xs">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
