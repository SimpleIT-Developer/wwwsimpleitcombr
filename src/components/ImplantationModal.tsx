import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Rocket, Target, Zap, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ImplantationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImplantationModal: React.FC<ImplantationModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();

  const phases = [
    { icon: <Target className="w-5 h-5" />, title: 'Planejamento', description: 'Análise detalhada das necessidades' },
    { icon: <Zap className="w-5 h-5" />, title: 'Implementação', description: 'Configuração e customização do sistema' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Go-Live', description: 'Acompanhamento na entrada em produção' },
  ];

  const handleContact = () => {
    toast({
      title: "Entre em contato!",
      description: "Nossa equipe está pronta para ajudar na implantação do seu sistema.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-card to-card/95 border-blue-500/30">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-blue-500/10 rounded-lg p-3">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            <DialogTitle className="text-2xl font-bold">Implantação e Customização</DialogTitle>
          </div>
          <DialogDescription className="text-base text-muted-foreground">
            Implementação completa e personalizada do sistema para sua empresa.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Fases do Projeto:</h3>
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-500/10 rounded-lg p-2 text-blue-400">
                    {phase.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground">Nossos Diferenciais:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Metodologia comprovada e documentada</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Equipe certificada e experiente</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Customizações alinhadas ao seu negócio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Treinamento completo para sua equipe</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Suporte pós-implantação garantido</span>
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleContact}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImplantationModal;
