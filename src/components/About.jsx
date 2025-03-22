import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBuilding, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import logoB from '../assets/logos/svgs/Bblue.svg';
import logoT from '../assets/logos/svgs/Tblue.svg';

const AboutSection = styled.section`
  padding: 20px 5% 150px;
  background-color: var(--color-light);
  position: relative;
  margin-top: -1px;
  box-shadow: 0 -5px 30px rgba(0,0,0,0.03);
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 992px) {
    padding-bottom: 40px;
  }
`;

const FloatingCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;
  z-index: ${props => props.zIndex || 1};
  

  }
`;

const AboutCard = styled(FloatingCard)`
  width: 90%;
  padding: 3.5rem;
  margin-bottom: 80px;
  z-index: 1;
  
  @media (max-width: 1200px) {
    padding: 2.5rem;
    width: 80%;
  }
  
  @media (max-width: 576px) {
    padding: 2rem;
    margin-bottom: 60px;
    width: 100%;
  }
`;

const MissionCard = styled(FloatingCard)`
  width: 65%;
  padding: 0;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  margin-bottom:0;
  z-index: 2;
  top: -7em;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  
  @media (max-width: 1200px) {
    width: 70%;
    margin-left: auto;
    margin-right: 0;
  }
  
  @media (max-width: 992px) {
    width: 70%;
    top: -5em;
    margin-bottom: 50px;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    top: -25px;
    margin-bottom: 40px;
  }
`;

const StatsCard = styled(FloatingCard)`
  width: 90%;
  position: relative;
  margin: auto;
  z-index: 1;
  margin-top: 0;
  top: -4em;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  margin-bottom: -4em;
  text-align: center;
  
  @media (max-width: 992px) {
    width: 100%;
    top: -2em;

  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100px;
    height: 4px;
    background-color: var(--color-accent);
  }
  
  .logo-b {
    height: 80px;
    margin-right: 30px;
  }
  
  .logo-t {
    height: 65px;
  }
  
  @media (max-width: 576px) {
    .logo-b {
      height: 65px;
    }
    
    .logo-t {
      height: 50px;
    }
  }
`;

const AboutDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 0;
  color: var(--color-dark);
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;
`;

const MissionTitle = styled.h3`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 3px;
    background-color: var(--color-accent);
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const MissionText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.95;
  text-align: justify;
  hyphens: auto;
  margin-bottom: 0;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const MissionContent = styled.div`
  background-color: var(--color-primary);
  padding: 2.5rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background-color: var(--color-accent);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(50%, -50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: var(--color-accent);
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(-30%, 30%);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 2rem;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

// Animación de shimmer
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const StatCardStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0.5rem;
  flex: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      rgba(255, 255, 255, 0) 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &.is-loading::before {
    opacity: 1;
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 1px;
    background-color: #e0e0e0;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
`;

const StatSymbol = styled.span`
  font-weight: 700;
  color: var(--color-primary);
  margin-left: 2px;
`;

const StatIcon = styled.div`
  font-size: 1.8rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${StatCardStyled}:hover & {
    transform: scale(1.2);
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Componente para animación de conteo
const Counter = ({ end, duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    let animationFrame;
    
    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      const easedProgress = easeOutCubic(progressPercent);
      setCount(Math.floor(easedProgress * end));
      
      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);
  
  return <span ref={counterRef}>{isVisible ? count : 0}</span>;
};

const StatCardComponent = ({ children, delay, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay + 500);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <StatCardStyled 
      className={!isLoaded ? 'is-loading' : ''}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </StatCardStyled>
  );
};

const About = () => {
  const { t } = useTranslation();
  
  const statCards = [
    { 
      icon: faClock,
      number: 15, 
      symbol: '+', 
      label: 'about.stats.yearsExperience', 
      delay: 500 
    },
    { 
      icon: faBuilding,
      number: 200, 
      symbol: '+', 
      label: 'about.stats.projectsCompleted', 
      delay: 650 
    },
    { 
      icon: faUsers,
      number: 50, 
      symbol: '+', 
      label: 'about.stats.clientsServed', 
      delay: 800 
    },
    { 
      icon: faThumbsUp,
      number: 98, 
      symbol: '%', 
      label: 'about.stats.satisfactionRate', 
      delay: 950 
    }
  ];
  
  return (
    <AboutSection id="about-section">
      <AboutContainer>
        <AboutCard 
          accentColor="var(--color-accent)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <LogoContainer>
            <img src={logoB} alt="Logo B" className="logo-b" />
            <img src={logoT} alt="Logo T" className="logo-t" />
          </LogoContainer>
          
          <AboutDescription
            dangerouslySetInnerHTML={{ __html: t('about.description') }}
          />
        </AboutCard>
        
        <MissionCard 
          accentColor="var(--color-primary)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <MissionContent>
            <MissionTitle>{t('about.missionTitle')}</MissionTitle>
            <MissionText>{t('about.mission')}</MissionText>
          </MissionContent>
        </MissionCard>
        
        <StatsCard 
          accentColor="var(--color-accent-secondary, #ffa500)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <StatsContainer>
            {statCards.map((card, index) => (
              <StatCardComponent key={index} delay={card.delay}>
                <StatIcon>
                  <FontAwesomeIcon icon={card.icon} />
                </StatIcon>
                <StatNumber>
                  <Counter end={card.number} /><StatSymbol>{card.symbol}</StatSymbol>
                </StatNumber>
                <StatLabel>{t(card.label)}</StatLabel>
              </StatCardComponent>
            ))}
          </StatsContainer>
        </StatsCard>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 