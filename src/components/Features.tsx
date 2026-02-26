import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features: React.FC = () => {
  const handleSimpleDfeClick = () => {
    window.open('https://www.simpledfe.com.br', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4 border border-blue-500/20">
            Produto Destaque
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Conheça o <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">SimpleDFe</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 md:p-12 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="bg-blue-500/10 rounded-xl p-4 flex-shrink-0 mx-auto sm:mx-0 border border-blue-500/20">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-4 text-white">SimpleDFe</h3>
                <p className="text-lg text-slate-400 mb-6">
                  Solução completa para gestão de documentos fiscais eletrônicos. Simplifique o gerenciamento de NFe, NFCe, CTe e outros documentos fiscais com nossa plataforma intuitiva e eficiente.
                </p>
                <div className="space-y-3 mb-6 inline-block text-left">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-slate-300">Emissão e gerenciamento de documentos fiscais</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-slate-300">Integração com sistemas ERP</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-slate-300">Armazenamento seguro em nuvem</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-slate-300">Relatórios e dashboards personalizados</span>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={handleSimpleDfeClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto shadow-[0_0_15px_rgba(37,99,235,0.4)] border-none"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
