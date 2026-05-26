import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';
import { PROJECTS } from '../data';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects" className="bg-[#050505] border-t border-white/5 py-32">
      <SectionHeader 
        title="Featured Work" 
        subtitle="A selection of my best projects demonstrating my digital capabilities."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group block"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-white/30 transition-all duration-500">
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Featured</h3>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">2024</span>
                </div>

                <h3 className="text-2xl font-serif italic text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-pink-400 opacity-50"></div>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.githubUrl} className="text-[10px] uppercase font-bold tracking-widest border-b border-transparent hover:border-white/20 transition-all text-gray-400 hover:text-white flex items-center gap-1">
                      <Github size={12} /> Code
                    </a>
                    <a href={project.liveUrl} className="text-[10px] uppercase font-bold tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all text-white flex items-center gap-1">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
