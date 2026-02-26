import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageSquare, LogIn, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Check if the link is an internal anchor link
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on the home page, navigate to home and then scroll
        navigate('/', { state: { scrollTo: href } });
      } else {
        // Already on the home page, just scroll
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
    } else {
      // If it's not an anchor, it's a full path
      navigate(href);
    }
  };

  // Effect to handle scrolling to section after navigation to home page
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const { scrollTo } = location.state as any;
      // Timeout to ensure the page has rendered before trying to scroll
      setTimeout(() => {
        const element = document.querySelector(scrollTo);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          // Clear the state so it doesn't try to scroll again on subsequent renders
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 100);
    }
  }, [location, navigate]);


  const handleExternalLink = (url: string) => {
    setIsMobileMenuOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const handleToastLink = (featureName: string) => {
    setIsMobileMenuOpen(false);
    toast({
      title: `🚧 ${featureName}`,
      description: "Esta funcionalidade será implementada em breve. Solicite na próxima mensagem! 🚀",
    });
  };

  const handleWhatsAppClick = () => {
    setIsMobileMenuOpen(false);
    handleExternalLink('https://wa.me/5511944987584');
  };

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Produtos', href: '/produtos-digitais' },
    { label: 'Academia', href: '#academia' },
    { label: 'Contato', href: '#contact-form' }, // Changed to #contact-form to match ID in ContactForm
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/bfb9776d-d169-492a-b1f0-7b06b82ba499/1905948d27e5a66b120fbf663bc94d0c.webp" 
                alt="SimpleIT Logo - Soluções em Tecnologia" 
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={(e) => item.href ? handleNavClick(e, item.href) : undefined}
                className="text-foreground/80 hover:text-foreground font-semibold"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-10 w-10 rounded-full bg-green-900/50 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-900/80 hover:text-green-300 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="h-5 w-5" />
            </motion.button>
            <Button onClick={() => handleToastLink('Sistema')} variant="outline" className="border-foreground/30 hover:bg-secondary">
              <LogIn className="w-4 h-4 mr-2" />
              Sistema
            </Button>
            <Button onClick={() => handleToastLink('Portal do Cliente')} className="bg-slate-300 text-slate-900 hover:bg-slate-200 font-bold">
              <Users className="w-4 h-4 mr-2" />
              Portal do Cliente
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pt-2 pb-4">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={(e) => item.href ? handleNavClick(e, item.href) : undefined}
                    className="justify-start text-lg py-6"
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="border-t border-border my-2"></div>
                <Button onClick={() => handleExternalLink('https://simpleit.tomticket.com/')} variant="ghost" className="justify-start text-lg py-6">Suporte</Button>
                <Button onClick={() => handleToastLink('Sistema')} variant="ghost" className="justify-start text-lg py-6">Sistema</Button>
                <Button onClick={() => handleToastLink('Portal do Cliente')} variant="ghost" className="justify-start text-lg py-6">Portal do Cliente</Button>
                <Button onClick={handleWhatsAppClick} variant="ghost" className="justify-start text-lg py-6 text-green-400">WhatsApp</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
