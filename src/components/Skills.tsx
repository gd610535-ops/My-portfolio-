import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';
import { SKILLS } from '../data';

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="The tools and technologies I use to build robust modern experiences."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`mb-4 p-3 rounded-xl border border-white/5 bg-black/20 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                <Icon size={24} />
              </div>
              <p className="text-[10px] uppercase text-gray-400 mb-1 font-bold tracking-widest text-center">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
