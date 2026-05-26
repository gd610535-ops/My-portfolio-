export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-8 md:gap-12 flex-col md:flex-row">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
            Based in New Delhi, India
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-purple-400 text-[10px] uppercase tracking-widest transition-colors">Dribbble</a>
          </div>
        </div>
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.2em] text-center md:text-right w-full md:w-auto">
          Designed & Developed by Srishti &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
