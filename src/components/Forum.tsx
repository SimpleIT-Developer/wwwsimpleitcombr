import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Forum: React.FC = () => {
  const stats = [
    { icon: Users, value: '5.2k+', label: 'Membros Ativos' },
    { icon: MessageSquare, value: '12k+', label: 'Discussões' },
    { icon: TrendingUp, value: '98%', label: 'Respostas' },
    { icon: Star, value: '4.9/5', label: 'Avaliação' },
  ];

  const topics = [
    {
      title: 'Como otimizar relatórios no RM?',
      author: 'João Silva',
      replies: 24,
      views: 342,
    },
    {
      title: 'Integração com API externa',
      author: 'Maria Santos',
      replies: 18,
      views: 256,
    },
    {
      title: 'Melhores práticas de customização',
      author: 'Pedro Costa',
      replies: 31,
      views: 489,
    },
  ];

  const handleForumClick = (action: string) => {
    toast({
      title: `🚧 ${action}`,
      description: "Esta funcionalidade será implementada em breve. Solicite na próxima mensagem! 🚀",
    });
  };

  return (
    <section id="forum" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Fórum da Comunidade</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se com outros profissionais, tire dúvidas e compartilhe experiências
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-4 md:p-6 text-center border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-card-foreground mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-6 md:p-8 mb-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground text-center sm:text-left">Discussões em Destaque</h3>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleForumClick(topic.title)}
                className="bg-card rounded-xl p-4 md:p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">{topic.title}</h4>
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between text-sm text-muted-foreground">
                  <span>Por {topic.author}</span>
                  <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span>{topic.replies} resps</span>
                    <span>{topic.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            onClick={() => handleForumClick('Acessar Fórum')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 md:px-8 py-4 md:py-6 shadow-lg w-full sm:w-auto"
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            Acessar Fórum Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Forum;
