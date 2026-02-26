import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Rocket, Settings, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SupportModal from '@/components/SupportModal';
import ImplantationModal from '@/components/ImplantationModal';
import RmModal from '@/components/RmModal';
import FluigModal from '@/components/FluigModal';

const Services: React.FC = () => {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [implantationModalOpen, setImplantationModalOpen] = useState(false);
  const [rmModalOpen, setRmModalOpen] = useState(false);
  const [fluigModalOpen, setFluigModalOpen] = useState(false);

  const services = [
    {
      icon: <Headphones className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
      title: 'Suporte Técnico',
      description: 'Atendimento especializado para resolver suas dúvidas e problemas técnicos com agilidade.',
      action: () => setSupportModalOpen(true),
      buttonText: 'Saiba Mais'
    },
    {
      icon: <Rocket className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
      title: 'Implantação e Customização',
      description: 'Implementação completa e personalização do sistema de acordo com suas necessidades.',
      action: () => setImplantationModalOpen(true),
      buttonText: 'Saiba Mais'
    },
    {
      icon: <Settings className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
      title: 'RM',
      description: 'Soluções completas para gestão empresarial com o sistema TOTVS RM.',
      action: () => setRmModalOpen(true),
      buttonText: 'Saiba Mais'
    },
    {
      icon: <FileText className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
      title: 'Fluig',
      description: 'Plataforma de gestão de processos e colaboração empresarial.',
      action: () => setFluigModalOpen(true),
      buttonText: 'Saiba Mais'
    },
  ];

  return (
    <>
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="text-blue-400">Soluções</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as necessidades da sua empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group h-full flex flex-col"
              >
                <div className="bg-blue-500/10 rounded-lg p-4 w-fit mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button
                  onClick={service.action}
                  variant="outline"
                  className="w-full border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10 mt-auto"
                >
                  {service.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SupportModal open={supportModalOpen} onOpenChange={setSupportModalOpen} />
      <ImplantationModal open={implantationModalOpen} onOpenChange={setImplantationModalOpen} />
      <RmModal open={rmModalOpen} onOpenChange={setRmModalOpen} />
      <FluigModal open={fluigModalOpen} onOpenChange={setFluigModalOpen} />
    </>
  );
};

export default Services;
