import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';
import { Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="bg-[#050505] border-t border-white/5 py-32">
      <SectionHeader 
        title="Let's Connect" 
        subtitle="Ready to discuss your project? Drop me a message and let's bring it to life."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-serif italic text-white mb-6">Get In Touch</h3>
          <p className="text-gray-400 mb-10 leading-relaxed text-sm max-w-lg">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative touch, I'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:srishtidhoundiyal211@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-gray-500 w-24">Email</span>
              <span className="text-sm font-medium">srishtidhoundiyal211@gmail.com</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 pl-1">Name</label>
              <input type="text" id="name" className="w-full bg-transparent border-b border-white/20 px-1 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700" placeholder="John Doe" />
            </div>
            
            <div className="relative z-10 space-y-2">
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 pl-1">Email</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-white/20 px-1 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700" placeholder="john@example.com" />
            </div>
            
            <div className="relative z-10 space-y-2">
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 pl-1">Message</label>
              <textarea id="message" rows={4} className="w-full bg-transparent border-b border-white/20 px-1 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-gray-700" placeholder="How can I help you?"></textarea>
            </div>
            
            <button type="button" className="glow-btn mt-6 self-start flex items-center gap-3">
              Send Message <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
