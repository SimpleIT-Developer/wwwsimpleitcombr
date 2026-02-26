import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Layers, ChevronDown, type LucideIcon } from 'lucide-react';
// import { cn } from '@/lib/utils'; // Not strictly used in the provided code, but good practice if we needed it.

interface TransformationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const TransformationCard: React.FC<TransformationCardProps> = ({ icon: Icon, title, description, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <motion.div layout="position" className="flex flex-col items-center text-center">
        <div className="bg-primary/10 p-4 rounded-xl mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-muted-foreground text-center leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Transformation: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(0); // Open first card by default on mobile

  const handleCardClick = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const modalities = [
    {
      icon: UserCheck,
      title: 'Body Shop',
      description: 'Alocamos especialistas capacitados para atuar diretamente no seu projeto, seja em atualizações, diagnósticos ou suporte, garantindo a melhor aderência e extraindo o máximo do seu sistema.',
    },
    {
      icon: Layers,
      title: 'Projeto Fechado ou Sob Demanda',
      description: 'Ideal para demandas pontuais. Nossa equipe define o escopo completo, horas e especialistas necessários, oferecendo controle e previsibilidade para sua consultoria TOTVS RM.',
    },
  ];

  return (
    <section id="transformation" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Transformação
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Transformar é Simples</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformar é reconhecer a necessidade de mudança, aceitar o desafio e permitir que cada transformação nos conduza a um processo de evolução constante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground">Conheça as nossas modalidades de entregas de serviços:</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {modalities.map((modality, index) => (
            <TransformationCard
              key={index}
              {...modality}
              isOpen={openCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
