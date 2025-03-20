import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 120px 5%;
  background-color: var(--color-primary);
  background-image: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-light);
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    width: 80px;
    height: 4px;
    background-color: var(--color-accent);
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2.5rem;
  transition: transform var(--transition-medium);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: var(--color-accent);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-light);
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`;

const Services = () => {
  const { t } = useTranslation();
  
  const serviceItems = [
    {
      icon: "fas fa-water",
      title: t('services.treatmentPlants.title'),
      description: t('services.treatmentPlants.description')
    },
    {
      icon: "fas fa-seedling",
      title: t('services.irrigationSystems.title'),
      description: t('services.irrigationSystems.description')
    },
    {
      icon: "fas fa-hot-tub",
      title: t('services.waterHeaters.title'),
      description: t('services.waterHeaters.description')
    },
    {
      icon: "fas fa-swimming-pool",
      title: t('services.poolEquipment.title'),
      description: t('services.poolEquipment.description')
    }
  ];
  
  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('services.title')}
        </SectionTitle>
        
        <ServicesGrid>
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>
                <i className={service.icon}></i>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 