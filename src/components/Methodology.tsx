import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GitBranch, HeartHandshake as Handshake, ClipboardList, Rocket, Cog, Award, BadgeCheck, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: GitBranch, title: 'Diagnóstico', description: 'Análise profunda para entender suas necessidades e desafios.' },
  { icon: Handshake, title: 'Proposta', description: 'Desenho de uma solução personalizada e transparente.' },
  { icon: ClipboardList, title: 'Planejamento', description: 'Definição de escopo, cronograma e recursos do projeto.' },
  { icon: Rocket, title: 'Execução', description: 'Implementação da solução com nossa equipe de especialistas.' },
  { icon: Cog, title: 'Ajustes', description: 'Refinamentos e otimizações com base no seu feedback.' },
  { icon: Award, title: 'Validação', description: 'Garantia de que a solução atende a todos os requisitos.' },
  { icon: BadgeCheck, title: 'Entrega Final', description: 'Go-live do projeto com suporte total da nossa equipe.' },
];

interface StepItemProps {
  step: Step;
  index: number;
}

const StepItem: React.FC<StepItemProps> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -100 : 100, 0, index % 2 === 0 ? 100 : -100]);
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="flex items-start w-full my-4"
      >
        <div className="z-10 bg-blue-600 border border-blue-400/50 rounded-full p-3 shadow-[0_0_15px_rgba(59,130,246,0.5)] mr-4 mt-1 flex-shrink-0">
          <step.icon className="w-6 h-6 text-white" />
        </div>
        <div className="p-4 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl flex-1">
          <h3 className="font-bold text-lg text-white mb-1">{step.title}</h3>
          <p className="text-base text-slate-400">{step.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={cn(
        "flex items-center w-full my-4",
        index % 2 === 0 ? "justify-start" : "justify-end"
      )}
    >
      <div className={cn("w-5/12", index % 2 === 0 ? "order-2" : "order-0")}></div>
      <div className="w-2/12 flex justify-center order-1">
        <div className="z-10 bg-blue-600 border border-blue-400/50 rounded-full p-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <step.icon className="w-7 h-7 text-white" />
        </div>
      </div>
      <div className={cn(
        "w-5/12 p-6 bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl",
        index % 2 === 0 ? "order-0 text-right" : "order-2 text-left"
      )}>
        <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
        <p className="text-base text-slate-400">{step.description}</p>
      </div>
    </motion.div>
  );
};

const Methodology: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <section id="methodology" className="py-20 px-4 overflow-x-hidden bg-transparent relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-blue-500/20">
            Metodologia
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Metodologia SimpleIT</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Fazemos o projeto do seu jeito, desde o diagnóstico inicial e atendimento personalizado até a implementação e entrega final.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 w-1 h-full bg-blue-600/50 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block"
          />
          <div className="flex flex-col items-center">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
