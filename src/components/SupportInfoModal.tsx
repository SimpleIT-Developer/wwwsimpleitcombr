import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

interface SupportInfoModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

const SupportInfoModal: React.FC<SupportInfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-card border-border">
        <DialogHeader>
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <Ticket className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-card-foreground text-center pt-4">Portal de Suporte</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2 text-center">
            Você está sendo redirecionado para o nosso portal de suporte TomTicket. Lá você poderá abrir novos chamados e acompanhar suas solicitações.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center text-sm text-muted-foreground py-2">
          <p>Se a nova guia não abriu, <a href="https://simpleit.tomticket.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">clique aqui</a>.</p>
        </div>
        <DialogFooter className="justify-center">
          <Button onClick={() => onClose(false)} variant="outline" className="w-full sm:w-auto">Entendido</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SupportInfoModal;
