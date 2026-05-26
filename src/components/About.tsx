import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';

export function About() {
  return (
    <Section id="about" className="bg-[#050505] border-t border-white/5 py-32">
      <SectionHeader 
        title="About Me" 
        subtitle="Get to know me and the technologies I use"
      />
      
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <motion.div 
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative glass-card p-10 rounded-3xl">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Hello, I'm <span className="text-primary">Srishti</span></h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-serif italic text-2xl">
              Building modern, responsive, and user-friendly websites. 
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              My focus is on clean UI, smooth user experience, and creating visually appealing designs using cutting-edge web technologies. I thrive in transforming complex problems into elegant, intuitive, and highly functional digital experiences.
            </p>
            
            <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <span className="text-4xl text-white font-light">2+</span>
                 <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Years Exp.</span>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-4xl text-white font-light">15+</span>
                 <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Projects</span>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
           <div className="grid grid-cols-2 gap-4">
             <div className="h-64 rounded-2xl overflow-hidden glass p-2 hover:scale-[1.02] transition-transform duration-500 border border-white/10">
               <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Code" className="w-full h-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300" />
             </div>
             <div className="h-64 rounded-2xl overflow-hidden glass p-2 mt-12 hover:scale-[1.02] transition-transform duration-500 border border-white/10">
               <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Design" className="w-full h-full object-cover rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300" />
             </div>
           </div>
        </motion.div>
      </div>
    </Section>
  );
}
