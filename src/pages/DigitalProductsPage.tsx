import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const products = [
  {
    logo: 'https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/b58845b57c4693fe61f7f87a91287ff1.png',
    name: 'SimpleDFe',
    description: 'Captura inteligente de documentos fiscais para automação e conformidade. Simplifique sua gestão fiscal com nossa solução completa.',
    url: 'https://www.simpledfe.com.br',
    borderColor: 'hover:border-indigo-400/50',
  },
  {
    logo: 'https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/da172403beb1b88fbd3b51502a857e9c.png',
    name: 'Palavra Viva',
    description: 'Uma plataforma para estudo e meditação na Bíblia, acessível em qualquer lugar. Fortaleça sua fé com ferramentas e planos de leitura.',
    url: 'https://palavraviva.simpleit.app.br',
    borderColor: 'hover:border-blue-400/50',
  },
  {
    logo: '/portalRM.png',
    name: 'PortalRM',
    description: 'O TOTVS RM como você nunca viu na WEB. Transforme a complexidade do RM em uma experiência visual incrível, intuitiva e rápida. Acesse seus processos de qualquer lugar com uma interface moderna e unificada.',
    url: 'https://portalrm.simpleit.app.br/',
    borderColor: 'hover:border-orange-400/50',
    logoClass: 'h-32',
  },
  {
    logo: '/simpleimob.png',
    name: 'Simple Imob',
    description: 'Gestão Imobiliária Inteligente e Simples. Controle total de aluguéis, contratos e repasses. Elimine planilhas e automatize sua imobiliária com a plataforma mais completa do mercado.',
    url: 'https://simpleimob.simpleit.app.br/',
    borderColor: 'hover:border-purple-400/50',
    logoClass: 'h-32',
  },
  {
    logo: 'https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/ff6dc3296a8099c2ef9fa00d961051d5.png',
    name: 'gastei!',
    description: 'Seu novo gerenciador financeiro pessoal. Controle seus gastos, crie orçamentos e alcance suas metas financeiras com facilidade.',
    url: '#', // Placeholder link
    borderColor: 'hover:border-green-400/50',
  },
];

const DigitalProductsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nossos Produtos Digitais - SimpleIT Dev</title>
        <meta name="description" content="Conheça os produtos digitais desenvolvidos pela SimpleIT: SimpleDFe, Palavra Viva, PortalRM, Simple Imob, gastei! e mais." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background text-foreground"
      >
        <section className="pt-32 pb-16 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Nossos <span className="gradient-text">Produtos Digitais</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Da ideia ao lançamento, criamos soluções inovadoras que resolvem problemas reais e impulsionam negócios e pessoas.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.a
                  key={product.name}
                  href={product.url !== '#' ? product.url : undefined}
                  target={product.url !== '#' ? "_blank" : undefined}
                  rel={product.url !== '#' ? "noopener noreferrer" : undefined}
                  onClick={product.url === '#' ? (e) => e.preventDefault() : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={product.url !== '#' ? { y: -8 } : {}}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 300 }}
                  className={`group block bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 ${product.borderColor} ${product.url === '#' ? 'cursor-default' : ''}`}
                >
                  <img src={product.logo} alt={`Logo ${product.name}`} className={`${(product as any).logoClass || 'h-24'} mx-auto mb-6 object-contain`} />
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                   {product.url !== '#' && (
                    <span className="font-semibold text-blue-400 inline-flex items-center">
                      Visitar Site
                      <ArrowUpRight className="w-4 h-4 ml-1 transform transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  )}
                  {product.url === '#' && (
                     <span className="font-semibold text-muted-foreground/80 inline-flex items-center">
                       Lançamento em breve
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-card/50 border border-dashed border-border rounded-2xl p-8 md:p-16 max-w-3xl mx-auto"
            >
              <div className="bg-blue-500/10 rounded-full p-4 w-fit mx-auto mb-6">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Novidades a Caminho</h2>
              <p className="text-lg text-muted-foreground">
                Estamos sempre inovando. Fique de olho, pois novos produtos e funcionalidades incríveis estão sendo preparados em nosso laboratório de desenvolvimento!
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default DigitalProductsPage;
