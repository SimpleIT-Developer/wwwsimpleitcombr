import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DevSection: React.FC = () => {
  return (
    <section id="dev-evolution" className="py-20 md:py-32 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-blue-500/20">
              A Próxima Evolução
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              SimpleIT agora é <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Dev</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Expandimos nossos horizontes. Além da nossa expertise em sistemas RM, agora criamos produtos digitais do zero. Desenvolvemos sites, aplicativos e sistemas sob medida para levar seu negócio ao próximo nível.
            </p>
            <div className="flex justify-center md:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold group w-full sm:w-auto shadow-[0_0_20px_rgba(37,99,235,0.4)] border-none">
                  <Link to="/produtos-digitais">
                    Conheça Nossos Produtos Digitais
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center mt-12 md:mt-0"
          >
            <Link to="/produtos-digitais" className="group relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute inset-0"
              >
                {/* Medal Shape - Asymmetric */}
                <div className="absolute w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full transform -rotate-12 border border-slate-700" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)' }}></div>
                <div className="absolute w-full h-full bg-gradient-to-tr from-blue-600 to-blue-900 rounded-full transform rotate-6 border border-blue-500/50" style={{ clipPath: 'polygon(0% 25%, 50% 0%, 100% 25%, 100% 100%, 0% 100%)' }}></div>
                
                {/* Inner Circle & Icon */}
                <div className="absolute inset-[10%] bg-slate-950/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-blue-500/40">
                   <Code className="w-20 h-20 md:w-24 md:h-24 text-blue-400 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-2xl group-hover:bg-blue-600/30 transition-all duration-300"></div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevSection;
