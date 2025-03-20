import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 4rem 5% 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled(motion.div)``;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span {
    color: var(--color-accent);
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIconLink = styled.a`
  color: var(--color-light);
  background-color: rgba(255, 255, 255, 0.1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-accent);
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--color-light);
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: var(--color-accent);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color var(--transition-fast);
    display: inline-flex;
    align-items: center;
    
    &:hover {
      color: var(--color-accent);
    }
    
    i {
      margin-right: 8px;
      font-size: 0.8rem;
    }
  }
`;

const FooterContact = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  
  i {
    margin-right: 10px;
    color: var(--color-accent);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  a {
    color: var(--color-accent);
    margin: 0 10px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FooterLogo>
              BACO <span>Ingeniería</span>
            </FooterLogo>
            <FooterText>
              Soluciones de ingeniería especializadas en sistemas de tratamiento de agua, riego, calentadores y equipos para piscina.
            </FooterText>
            <SocialIcons>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialIconLink>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FooterTitle>Enlaces Rápidos</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#home"><i className="fas fa-chevron-right"></i> {t('header.home')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#about"><i className="fas fa-chevron-right"></i> {t('header.aboutUs')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#services"><i className="fas fa-chevron-right"></i> {t('header.services')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#contact"><i className="fas fa-chevron-right"></i> {t('header.contact')}</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterTitle>Servicios</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#services"><i className="fas fa-chevron-right"></i> {t('services.treatmentPlants.title')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#services"><i className="fas fa-chevron-right"></i> {t('services.irrigationSystems.title')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#services"><i className="fas fa-chevron-right"></i> {t('services.waterHeaters.title')}</a>
              </FooterLink>
              <FooterLink>
                <a href="#services"><i className="fas fa-chevron-right"></i> {t('services.poolEquipment.title')}</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FooterTitle>Contacto</FooterTitle>
            <FooterContact>
              <i className="fas fa-map-marker-alt"></i>
              <span>Av. Principal #123, Ciudad de México, México</span>
            </FooterContact>
            <FooterContact>
              <i className="fas fa-phone-alt"></i>
              <span>+52 (55) 1234-5678</span>
            </FooterContact>
            <FooterContact>
              <i className="fas fa-envelope"></i>
              <span>info@bacoingenieria.com</span>
            </FooterContact>
            <FooterContact>
              <i className="fas fa-clock"></i>
              <span>Lun-Vie: 9:00 AM - 6:00 PM</span>
            </FooterContact>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          {t('footer.rights')}
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.terms')}</a>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 