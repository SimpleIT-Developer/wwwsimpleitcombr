import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Headphones, Clock, Users, CheckCircle, ExternalLink } from 'lucide-react';

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ open, onOpenChange }) => {
  const handleOpenSupport = () => {
    window.open('https://simpleit.tomticket.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-card to-card/95 border-blue-500/30">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-blue-500/10 rounded-lg p-3">
              <Headphones className="w-8 h-8 text-blue-400" />
            </div>
            <DialogTitle className="text-2xl font-bold">Suporte Técnico</DialogTitle>
          </div>
          <div className="text-base text-muted-foreground">
            Conte com nossa equipe especializada para resolver qualquer desafio técnico.
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">O que oferecemos:</h3>
            <div className="space-y-3">
              {[
                { icon: <Clock className="w-5 h-5" />, text: 'Atendimento 24/7' },
                { icon: <Users className="w-5 h-5" />, text: 'Equipe especializada' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Resolução rápida' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground">Nossos Serviços:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Suporte técnico especializado para sistemas TOTVS RM</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Resolução de problemas e dúvidas operacionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Orientação sobre melhores práticas de uso</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Acompanhamento contínuo e proativo</span>
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleOpenSupport}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Acessar Portal de Suporte
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
