import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Video, Award } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Academia: React.FC = () => {
  const courses = [
    {
      title: 'TOTVS RM - Fundamentos',
      type: 'Gratuito',
      duration: '8 horas',
      students: '1.2k',
      image: 'Estudantes assistindo curso online de TOTVS RM em laptop moderno',
    },
    {
      title: 'Customização Avançada',
      type: 'Pago',
      duration: '24 horas',
      students: '856',
      image: 'Desenvolvedor programando customizações em sistema TOTVS',
    },
    {
      title: 'Gestão de Processos',
      type: 'Pago',
      duration: '16 horas',
      students: '643',
      image: 'Profissional analisando processos empresariais em dashboard',
    },
  ];

  const handleCourseClick = (title: string) => {
    toast({
      title: `🚧 ${title}`,
      description: "Esta funcionalidade será implementada em breve. Solicite na próxima mensagem! 🚀",
    });
  };

  return (
    <section id="academia" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Academia SimpleIT</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda com especialistas e domine os sistemas TOTVS RM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCourseClick(course.title)}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden card-hover border border-border h-full">
                <div className="relative h-48 overflow-hidden">
                  <img alt={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.type === 'Gratuito' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {course.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Video className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{course.students} alunos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academia;
