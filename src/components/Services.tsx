import { motion } from 'motion/react';
import { Section, SectionHeader } from './Section';
import { SERVICES } from '../data';

export function Services() {
  return (
    <Section id="services" className="border-t border-white/5">
      <SectionHeader 
        title="My Services" 
        subtitle="Specialized front-end offerings customized for modern digital brands."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-white/60 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-serif italic text-white mb-4">{service.title}</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors leading-[1.8]">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
