import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import DevSection from '@/components/DevSection';
import Transformation from '@/components/Transformation';
import Methodology from '@/components/Methodology';
import Technologies from '@/components/Technologies';
import Features from '@/components/Features';
import Academia from '@/components/Academia';
import Forum from '@/components/Forum';
import ContactForm from '@/components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SimpleIT - Soluções em Tecnologia | Consultoria TOTVS RM</title>
        <meta name="description" content="SimpleIT oferece suporte, implantação e customização de sistemas TOTVS RM. Agora também com desenvolvimento de produtos digitais. Academia de cursos, portal do cliente e fórum da comunidade." />
      </Helmet>
      <>
        <Hero />
        <AboutUs />
        <Services />
        <DevSection />
        <Transformation />
        <Methodology />
        <Technologies />
        <Features />
        <Academia />
        <Forum />
        <ContactForm />
      </>
    </>
  );
};

export default HomePage;
