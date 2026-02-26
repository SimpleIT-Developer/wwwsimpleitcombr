import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const handleContact = () => {
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
      
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{ 
              x: Math.random() * 100 + 'vw', 
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              x: `calc(${Math.random() * 100}vw - 50%)`,
              y: `calc(${Math.random() * 100}vh - 50%)`,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.img
              src="https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/7461ff4fb12b31fa6cf4300ac16654ca.png"
              alt="Logo SimpleIT"
              className="h-16 md:h-20 mb-6 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-100">
              Simplifique a gestão com
              <br />
              <span className="gradient-text">Soluções TOTVS RM</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Solução completa para suporte, implantação e customização de sistemas TOTVS RM, com ou sem integração com seu ERP.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={handleContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg"
              >
                Começar agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleServices}
                className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10"
              >
                Nossos Serviços
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center h-full"
          >
            <motion.div
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 border-primary rounded-2xl flex items-center justify-center overflow-hidden"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px 5px rgba(0, 123, 255, 0.3)',
                  '0 0 40px 10px rgba(0, 123, 255, 0.5)',
                  '0 0 20px 5px rgba(0, 123, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img 
                  src="https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/29d36908103d2c7d2f22674f69120f0d.png" 
                  alt="Mascote SimpleIT" 
                  className="w-48 h-auto md:w-64 drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
