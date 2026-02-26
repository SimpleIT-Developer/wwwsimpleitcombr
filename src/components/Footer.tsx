import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Link as LinkIcon, Users, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFooterLinkClick = (href: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: href } });
        } else {
            const element = document.querySelector(href);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer id="contact" className="bg-card text-foreground py-16 px-4 border-t border-border">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src="https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/1905948d27e5a66b120fbf663bc94d0c.webp" 
                            alt="SimpleIT Logo" 
                            className="h-16 w-auto mb-4 mx-auto sm:mx-0"
                        />
                         <p className="text-muted-foreground mb-4">
                            Especialistas em TOTVS RM e desenvolvimento de produtos digitais.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="sm:col-start-2 lg:col-start-auto"
                    >
                        <h3 className="text-lg font-bold mb-4">Navegação</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleFooterLinkClick('#services')}>Serviços RM</li>
                             <li className="hover:text-primary transition-colors cursor-pointer"><Link to="/produtos-digitais">Produtos Digitais</Link></li>
                            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleFooterLinkClick('#academia')}>Academia</li>
                            <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => handleFooterLinkClick('#forum')}>Fórum</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer justify-center sm:justify-start" onClick={() => handleExternalLink('https://simpleit.tomticket.com/')}>
                                <FileText className="w-4 h-4" />
                                <span>Abrir Chamado</span>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer justify-center sm:justify-start">
                                <Users className="w-4 h-4" />
                                <span>Portal do Cliente</span>
                            </li>
                             <li className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer justify-center sm:justify-start" onClick={() => handleExternalLink('https://www.linkedin.com/company/simpleit-consultoria/')}>
                                <LinkIcon className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-center space-x-2 justify-center sm:justify-start">
                                <Mail className="w-4 h-4" />
                                <span>contato@simpleit.com.br</span>
                            </li>
                            <li className="flex items-center space-x-2 justify-center sm:justify-start">
                                <Phone className="w-4 h-4" />
                                <span>(11) 94498-7584</span>
                            </li>
                            <li className="flex items-center space-x-2 justify-center sm:justify-start">
                                <MapPin className="w-4 h-4" />
                                <span>Tatuí, SP</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-border pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-muted-foreground text-sm text-center">
                            © {new Date().getFullYear()} SimpleIT - Soluções em Tecnologia. Todos os direitos reservados.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
