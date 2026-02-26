import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Nossa Missão",
      description: "Atender com soluções eficazes, buscando satisfazer as necessidades e contribuindo para o crescimento dos nossos clientes."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Nossa Equipe",
      description: "Profissionais com mais de 15 anos de experiência em soluções de Gestão ERP Linha RM e Business Intelligence."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Nossa Expertise",
      description: "Atuação completa em todos os módulos Linha RM, desde implantação até customização e suporte contínuo."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Nosso Compromisso",
      description: "Inovação constante em processos e negócios, sempre focados nas necessidades específicas de cada cliente."
    }
  ];

  return (
    <section id="about-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça a <span className="text-blue-400">SimpleIT</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nascemos da união de profissionais com vasta experiência, focados em inovação e melhoria contínua para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full"
            >
              <div className="bg-blue-500/10 rounded-lg p-3 w-fit mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Nossa História</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A SimpleIT surgiu da união de profissionais com vasta experiência nas soluções de Gestão ERP Linha RM. Buscamos constantemente atender às necessidades dos clientes com soluções inovadoras em processos e negócios.
              </p>
              <p className="text-lg text-muted-foreground">
                Contamos com equipes de consultores experientes, atuando com todos os módulos Linha RM e Business Intelligence (BI), atendendo desde a implantação, customização, melhorias e suporte ao sistema.
              </p>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">+15 anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Especialistas certificados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Suporte completo 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">Soluções personalizadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
