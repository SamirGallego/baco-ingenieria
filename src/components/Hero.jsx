import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(12, 60, 89, 0.8), rgba(11, 67, 89, 0.9)), 
              url('/images/hero-background.jpg') no-repeat center center;
  background-size: cover;
  color: var(--color-light);
  position: relative;
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--color-light);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all var(--transition-medium);
  box-shadow: 0 4px 15px rgba(242, 76, 61, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(242, 76, 61, 0.4);
    background-color: rgba(242, 76, 61, 0.9);
  }
`;

const WaveAnimation = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 121px;
  }
  
  .shape-fill {
    fill: var(--color-light);
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('hero.title')}
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('hero.subtitle')}
        </HeroSubtitle>
        
        <HeroButton
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
        </HeroButton>
      </HeroContent>
      
      <WaveAnimation>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </WaveAnimation>
    </HeroSection>
  );
};

export default Hero; 