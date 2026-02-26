import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Settings, Database, BarChart, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface RmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RmModal: React.FC<RmModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();

  const modules = [
    { icon: <Database className="w-5 h-5" />, name: 'Gestão de Pessoas', description: 'RH completo e integrado' },
    { icon: <BarChart className="w-5 h-5" />, name: 'Gestão Financeira', description: 'Controle financeiro total' },
    { icon: <Users className="w-5 h-5" />, name: 'Gestão Educacional', description: 'Soluções para instituições de ensino' },
  ];

  const handleContact = () => {
    toast({
      title: "Vamos conversar!",
      description: "Entre em contato para conhecer todas as soluções TOTVS RM.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-slate-950/95 backdrop-blur-xl border-blue-500/30 text-white">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-500/15 rounded-xl p-4 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Settings className="w-12 h-12 md:w-14 md:h-14 text-blue-400" />
            </div>
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white">TOTVS RM</DialogTitle>
              <DialogDescription className="text-base text-slate-400">
                Sistema completo de gestão empresarial integrado.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-100">Principais Módulos:</h3>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-500/10 rounded-lg p-2 text-blue-400">
                    {module.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">{module.name}</h4>
                    <p className="text-sm text-slate-400">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 px-1">
            <h3 className="font-semibold text-lg text-blue-100">Benefícios:</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">•</span>
                <span>Integração completa entre todos os módulos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">•</span>
                <span>Relatórios e dashboards personalizados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">•</span>
                <span>Conformidade com legislação brasileira</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">•</span>
                <span>Atualizações constantes e suporte técnico</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">•</span>
                <span>Escalabilidade para crescimento do negócio</span>
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleContact}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Conhecer Soluções RM
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RmModal;
