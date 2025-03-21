import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import './i18n/i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import WhatsAppButton from './components/WhatsAppButton';

const theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    light: 'var(--color-light)',
    dark: 'var(--color-dark)'
  }
};

function App() {
  // Efecto para las animaciones basadas en scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="app">
          <LanguageSwitcher />
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <CallToAction />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton 
            phoneNumber="5212345678" 
            message="Hola, estoy interesado en sus servicios de ingeniería. ¿Podría proporcionarme más información?"
          />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App; 