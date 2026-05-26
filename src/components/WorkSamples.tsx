import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';
import { WORK_SAMPLES } from '../data';
import { Quote } from 'lucide-react';

export function WorkSamples() {
  return (
    <Section id="work-samples" className="bg-[#050505] border-t border-white/5 py-32">
      <SectionHeader 
        title="Work Samples" 
        subtitle="Exploring aesthetic precision through recent design narratives."
      />
      
      <div className="flex flex-col gap-24 lg:gap-32">
        {WORK_SAMPLES.map((sample, index) => (
          <motion.div
            key={sample.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-3/5 group">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-4 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] md:aspect-[16/10]">
                  <img 
                    src={sample.image} 
                    alt={sample.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  
                  {/* Decorative Project Number */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center backdrop-blur-md">
                     <span className="text-white font-mono text-sm tracking-widest">0{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className="mb-6 flex gap-3 flex-wrap">
                 {sample.tags.map(tag => (
                   <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-full">
                     {tag}
                   </span>
                 ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-tight leading-tight">
                {sample.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
                {sample.description}
              </p>
              
              {/* Review Block */}
              <div className="bg-white/[0.03] border-l-2 border-primary/50 p-6 md:p-8 rounded-r-2xl relative">
                <Quote className="absolute top-4 right-4 text-white/5 w-12 h-12" />
                <p className="text-gray-300 font-serif italic text-sm md:text-base leading-relaxed relative z-10">
                  {sample.review}
                </p>
              </div>
              
              <div className="mt-10">
                <a href={sample.link} className="inline-flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                   View Project Case
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
