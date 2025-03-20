import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CTASection = styled.section`
  padding: 100px 5%;
  background: url('/images/cta-background.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(12, 60, 89, 0.85);
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.8rem;
  color: var(--color-light);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--color-light);
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all var(--transition-medium);
  box-shadow: 0 8px 25px rgba(242, 76, 61, 0.3);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(242, 76, 61, 0.5);
  }
`;

const CallToAction = () => {
  const { t } = useTranslation();
  
  return (
    <CTASection>
      <Container>
        <CTATitle
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('callToAction.title')}
        </CTATitle>
        
        <CTADescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('callToAction.description')}
        </CTADescription>
        
        <CTAButton
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('callToAction.button')}
        </CTAButton>
      </Container>
    </CTASection>
  );
};

export default CallToAction; 