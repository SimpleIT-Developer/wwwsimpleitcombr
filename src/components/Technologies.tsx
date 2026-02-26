import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import RmModal from '@/components/RmModal';
import FluigModal from '@/components/FluigModal';

const Technologies: React.FC = () => {
  const [isRmModalOpen, setRmModalOpen] = useState(false);
  const [isFluigModalOpen, setFluigModalOpen] = useState(false);

  const technologies = [
    {
      id: 'rm',
      title: 'RM',
      description: 'Soluções completas para gestão empresarial com o sistema TOTVS RM.',
      color: 'from-blue-500 to-blue-700',
      buttonText: 'Saiba mais',
      buttonAction: () => setRmModalOpen(true),
    },
    {
      id: 'simpledfe',
      title: 'SimpleDFe',
      description: 'Simplifique a emissão e gestão de documentos fiscais eletrônicos.',
      color: 'from-green-500 to-green-700',
      buttonText: 'Saiba mais',
      buttonAction: () => {
        window.open('https://www.simpledfe.com.br', '_blank');
      },
    },
    {
      id: 'fluig',
      title: 'Fluig',
      description: 'Plataforma de produtividade e colaboração para sua empresa.',
      color: 'from-purple-500 to-purple-700',
      buttonText: 'Saiba mais',
      buttonAction: () => setFluigModalOpen(true),
    },
  ];

  return (
    <>
      <section id="technologies" className="py-20 px-4 bg-transparent relative overflow-hidden z-10">
        <div className="container mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Especialidades</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dominamos as principais tecnologias para otimizar a gestão e produtividade da sua empresa.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-md border border-blue-500/20 bg-slate-900/40 group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-3xl -z-10`}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 70%)`,
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <h3 className="text-3xl font-bold mb-4 text-white">{tech.title}</h3>
                <p className="text-slate-400 mb-6 h-20">{tech.description}</p>
                <Button
                  variant="outline"
                  className="text-blue-400 border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300 w-full sm:w-auto bg-transparent"
                  onClick={tech.buttonAction}
                >
                  {tech.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <RmModal open={isRmModalOpen} onOpenChange={setRmModalOpen} />
      <FluigModal open={isFluigModalOpen} onOpenChange={setFluigModalOpen} />
    </>
  );
};

export default Technologies;
