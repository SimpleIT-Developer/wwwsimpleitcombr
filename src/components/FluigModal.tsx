import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, Workflow, Share2, Cloud } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface FluigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FluigModal: React.FC<FluigModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();

  const features = [
    { icon: <Workflow className="w-5 h-5" />, name: 'Gestão de Processos', description: 'BPM completo e intuitivo' },
    { icon: <Share2 className="w-5 h-5" />, name: 'Colaboração', description: 'Trabalho em equipe facilitado' },
    { icon: <Cloud className="w-5 h-5" />, name: 'ECM', description: 'Gestão de conteúdo empresarial' },
  ];

  const handleContact = () => {
    toast({
      title: "Interessado em Fluig?",
      description: "Nossa equipe entrará em contato para apresentar a plataforma.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-card to-card/95 border-blue-500/30">
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-blue-500/10 rounded-lg p-3">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <DialogTitle className="text-2xl font-bold">Fluig</DialogTitle>
          </div>
          <DialogDescription className="text-base text-muted-foreground">
            Plataforma completa de gestão de processos e colaboração.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Principais Recursos:</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-500/10 rounded-lg p-2 text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.name}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-foreground">Vantagens:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Automatização de processos empresariais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Redução de custos operacionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Melhoria na comunicação interna</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Gestão documental centralizada</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Mobilidade e acesso em qualquer lugar</span>
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleContact}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Conhecer Fluig
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FluigModal;
