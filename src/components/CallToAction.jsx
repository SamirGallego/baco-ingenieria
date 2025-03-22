import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const CTASection = styled.section`
  padding: 100px 5%;
  background: var(--color-light);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FloatingCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--color-accent);
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  
  svg {
    font-size: 1.3rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  opacity: 0.1;
  font-size: 12rem;
  color: var(--color-primary);
  transform: rotate(-15deg);
`;

const CallToAction = () => {
  const { t } = useTranslation();
  
  return (
    <CTASection>
      <Container>
        <FloatingCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <IconContainer>
            <FaFileDownload />
          </IconContainer>
          
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('callToAction.title', 'Descarga nuestro catálogo')}
          </CTATitle>
          
          <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('callToAction.description', 'Conoce todos nuestros productos y servicios de ingeniería en un solo documento. Descarga ahora nuestro catálogo completo.')}
          </CTADescription>
          
          <CTAButton
            href="/files/catalogo-baco-ingenieria.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload />
            {t('callToAction.button', 'Descargar Catálogo')}
          </CTAButton>
        </FloatingCard>
      </Container>
    </CTASection>
  );
};

export default CallToAction; 