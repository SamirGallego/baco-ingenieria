import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import treatmentImg from '../assets/services/treatment.jpg';
import irrigationImg from '../assets/services/irrigation.jpg';
import heatImg from '../assets/services/heat.jpg';
import poolImg from '../assets/services/pool.jpg';

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  cursor: ${props => props.$isMobile ? 'default' : 'pointer'};
  position: relative;
  flex: ${props => props.$isExpanded ? '2' : '1'};
  min-height: 400px;
  max-height: ${props => props.$isMobile ? 'none' : '600px'};
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    height: auto;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: background-color 0.4s cubic-bezier(0.33, 1, 0.68, 1);
`;

const ServiceContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  z-index: 2;
  pointer-events: none; /* Permite que los clics pasen a través al card */
  justify-content: ${props => props.$isExpanded || props.$isMobile ? 'center' : 'flex-end'};
  transition: justify-content 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  
  @media (max-width: 768px) {
    position: relative;
    padding-top: 0;
    height: auto;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ServiceIcon = styled.div`
  font-size: ${props => props.$isExpanded || props.$isMobile ? '3rem' : '2.5rem'};
  color: white;
  margin-bottom: 0.5rem;
  width: ${props => props.$isExpanded || props.$isMobile ? '70px' : '50px'};
  height: ${props => props.$isExpanded || props.$isMobile ? '70px' : '50px'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  
  @media (max-width: 768px) {
    margin-top: -35px;
    background-color: var(--color-primary);
    border: 3px solid white;
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.$isExpanded || props.$isMobile ? '2rem' : '1.5rem'};
  margin-bottom: ${props => props.$isExpanded || props.$isMobile ? '1.5rem' : '0.5rem'};
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
`;

const ServiceDescription = styled(motion.div)`
  color: white;
  line-height: 1.7;
  overflow: hidden;
  text-align: center;
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  max-width: 400px;
  
  @media (max-width: 768px) {
    opacity: 1 !important;
    height: auto !important;
    margin-top: 1rem !important;
  }
`;

const overlayVariants = {
  collapsed: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 70%)'
  },
  expanded: {
    background: 'rgba(0, 0, 0, 0.7)'
  },
  mobile: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: 'auto', marginTop: '1rem' }
};

const Services = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Chequear al inicio
    checkMobile();
    
    // Agregar event listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleCardClick = (index) => {
    if (!isMobile) {
      setExpandedCard(expandedCard === index ? null : index);
    }
  };
  
  const serviceItems = [
    {
      icon: "fas fa-water",
      image: treatmentImg,
      title: t('services.treatmentPlants.title'),
      description: t('services.treatmentPlants.description')
    },
    {
      icon: "fas fa-seedling",
      image: irrigationImg,
      title: t('services.irrigationSystems.title'),
      description: t('services.irrigationSystems.description')
    },
    {
      icon: "fas fa-hot-tub",
      image: heatImg,
      title: t('services.waterHeaters.title'),
      description: t('services.waterHeaters.description')
    },
    {
      icon: "fas fa-swimming-pool",
      image: poolImg,
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
              onClick={() => handleCardClick(index)}
              $isExpanded={expandedCard === index}
              $isMobile={isMobile}
              layoutId={`service-card-${index}`}
            >
              <ServiceImage>
                <img src={service.image} alt={service.title} />
                <ImageOverlay 
                  variants={overlayVariants}
                  initial={isMobile ? "mobile" : "collapsed"}
                  animate={isMobile ? "mobile" : (expandedCard === index ? "expanded" : "collapsed")}
                  transition={{ duration: 0.4 }}
                />
              </ServiceImage>
              
              <ServiceContent $isExpanded={expandedCard === index} $isMobile={isMobile}>
                <ServiceIcon $isExpanded={expandedCard === index} $isMobile={isMobile}>
                  <i className={service.icon}></i>
                </ServiceIcon>
                
                <ServiceTitle $isExpanded={expandedCard === index} $isMobile={isMobile}>
                  {service.title}
                </ServiceTitle>
                
                {(isMobile || expandedCard === index) && (
                  <ServiceDescription
                    variants={!isMobile ? descriptionVariants : {}}
                    initial={!isMobile ? "hidden" : {}}
                    animate={!isMobile ? "visible" : {}}
                    exit={!isMobile ? "hidden" : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </ServiceDescription>
                )}
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 