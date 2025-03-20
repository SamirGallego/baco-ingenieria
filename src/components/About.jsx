import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 120px 5%;
  background-color: var(--color-light);
  position: relative;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background-color: var(--color-accent);
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--color-dark);
  line-height: 1.8;
`;

const AboutImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 4px solid var(--color-accent);
    z-index: 1;
  }
  
  @media (max-width: 992px) {
    min-height: 350px;
  }
`;

const AboutImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  box-shadow: 10px 10px 25px rgba(0,0,0,0.1);
`;

const AboutValueBox = styled(motion.div)`
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(12, 60, 89, 0.2);
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
`;

const About = () => {
  const { t } = useTranslation();
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <SectionTitle
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('about.title')}
          </SectionTitle>
          
          <AboutText
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.description')}
          </AboutText>
          
          <AboutValueBox
            className="animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ValueTitle>{t('about.mission')}</ValueTitle>
            <p>{t('about.values')}</p>
          </AboutValueBox>
        </AboutContent>
        
        <AboutImageWrapper
          className="animate-on-scroll"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutImage src="/images/about-image.jpg" alt="BACO Ingeniería" />
        </AboutImageWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 