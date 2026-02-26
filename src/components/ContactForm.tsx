import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Contato de ${name}`;
    const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0ATelefone: ${formData.phone || 'Não informado'}%0D%0A%0D%0AMensagem:%0D%0A${message}`;
    window.location.href = `mailto:site@simpleit.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Preparando seu e-mail!",
      description: "Seu aplicativo de e-mail será aberto para enviar a mensagem.",
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou quer iniciar um projeto? Preencha o formulário abaixo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-2xl border border-border space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (Opcional)</Label>
              <Input id="phone" placeholder="(11) 99999-9999" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Resumo / Mensagem</Label>
              <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} value={formData.message} onChange={handleChange} />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-4 md:py-6 shadow-lg"
            >
              Enviar Mensagem
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
