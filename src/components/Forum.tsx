import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
// import { fetchLatestTopics, type DiscourseTopic } from '@/services/discourseApi';

const Forum: React.FC = () => {
  // const [topics, setTopics] = useState<DiscourseTopic[]>([]);
  // const [loading, setLoading] = useState(false);

  // Exemplo de como carregaríamos os tópicos reais
  // useEffect(() => {
  //   const loadTopics = async () => {
  //     setLoading(true);
  //     // Descomente a linha abaixo para testar a integração simulada:
  //     // const data = await fetchLatestTopics();
  //     // setTopics(data);
  //     setLoading(false);
  //   };
    
  //   loadTopics(); 
  // }, []);
  const stats = [
    { icon: Users, value: 'Em Breve', label: 'Membros Ativos' },
    { icon: MessageSquare, value: 'Em Breve', label: 'Discussões' },
    { icon: TrendingUp, value: 'Em Breve', label: 'Respostas' },
    { icon: Star, value: 'Em Breve', label: 'Avaliação' },
  ];



  // TODO: Integração Completa com Discourse (Headless Forum)
  // Para permitir postar e ver respostas sem sair do site, utilizamos a API do Discourse.
  // O arquivo @/services/discourseApi.ts contém a estrutura inicial para essa integração.
  // Quando o fórum estiver ativo:
  // 1. Configure o SSO (Single Sign-On) para autenticar usuários do site no Discourse.
  // 2. Use os endpoints da API para listar tópicos, criar posts e renderizar conteúdo.
  
  const handleForumClick = (action: string) => {
    // Quando o fórum estiver pronto, redirecione o usuário:
    // window.open('https://forum.simpleit.app.br', '_blank');
    
    toast({
      title: `🚧 ${action}`,
      description: "O Fórum Discourse está sendo configurado. Em breve estará disponível! 🚀",
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

        <div className="bg-background rounded-2xl p-6 md:p-8 mb-8 border border-border text-center">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground">Discussões em Destaque</h3>
          <div className="py-8">
            <span className="text-xl text-muted-foreground font-semibold">EM BREVE</span>
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
            onClick={() => handleForumClick('Acessar Comunidade')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 md:px-8 py-4 md:py-6 shadow-lg w-full sm:w-auto"
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            Acessar Comunidade
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Forum;
