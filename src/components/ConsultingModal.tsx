import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface ConsultingModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ConsultingModal: React.FC<ConsultingModalProps> = ({ isOpen, setIsOpen }) => {
  const serviceModels = [
    {
      title: 'Entregas sob demanda',
      description: 'Nesse modelo de entrega você tem o controle do seu próprio projeto, conduzindo as demandas sempre com o acompanhamento de um especialista em projetos nível sênior da SimpleIT. Nosso time será responsável por todos os pontos relacionados à execução dos trabalhos. Entendimento do escopo, avaliação de impacto, planejamento, alocação de equipe, acompanhamento, integrações e entregas.',
    },
    {
      title: 'Body Shop',
      description: 'Com o Body Shop SimpleIT, a pessoa especialista chega em sua empresa totalmente capacitada e preparada para atuar no seu projeto, seja em atualização, diagnóstico, revitalização ou suporte técnico. Além disso, nossos profissionais são amplamente experientes em processos, ajudando a sua empresa no aumento da aderência da solução e a extrair o melhor dos sistemas.',
    },
    {
      title: 'Projeto Fechado',
      description: 'Essa modalidade é perfeita para quem precisa resolver alguma demanda pontual com seu sistema TOTVS RM de forma ágil e eficaz. A equipe de especialistas da SimpleIT fará todo o levantamento necessário para montar um escopo completo, incluindo a quantidade de horas e pessoas especialistas para a entrega do projeto. Muito mais controle e previsibilidade na sua Consultoria TOTVS RM!',
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card border-border text-foreground sm:max-w-4xl p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-secondary p-8 flex flex-col justify-center items-start relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
             <div className="absolute left-2 top-0 bottom-0 w-2 bg-gray-600"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold text-left text-gray-100 leading-tight">
                  Algumas formas de Atendimento
                </DialogTitle>
              </DialogHeader>
            </motion.div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 space-y-8 overflow-y-auto max-h-[80vh]">
            {serviceModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultingModal;
