import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Wave from 'react-wavify';

const HeroSection = styled.section`
  height: 100vh;
  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-light);
  position: relative;
  padding: 0 1rem;
  overflow: hidden;
  background-color: var(--color-primary); /* Color de fondo durante las transiciones */
`;

// Cambiando el enfoque para usar un componente de imagen real en lugar de background-image
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(12, 60, 89, 0.75), rgba(11, 67, 89, 0.85));
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 10; /* Aseguramos que esté por encima de las imágenes y el overlay */
  position: relative;
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

const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 15; /* Incrementamos para asegurar que las olas estén por encima de todo */
  pointer-events: none;
  transform: translateY(1px);
`;

const WaveWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: ${props => props.position || 0}px;
  opacity: ${props => props.opacity || 1};
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 170px; /* Justo encima de las olas */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 20; /* Incrementado para asegurar visibilidad */
`;

const SlideIndicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, ${props => props.active ? '1' : '0.5'});
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const SlideArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [imageStatus, setImageStatus] = useState("cargando");
  
  // Rutas correctas a las imágenes en public/images/hero
  const backgroundImages = [
    '/images/hero/heroimg01.jpg',
    '/images/hero/heroimg02.jpg',
    '/images/hero/heroimg03.jpg'
  ];
  
  const startAutoSlide = () => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000); // Cambiar cada 8 segundos
    
    setIntervalId(id);
    return id;
  };
  
  useEffect(() => {
    const id = startAutoSlide();
    
    return () => clearInterval(id);
  }, []);
  
  const resetTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    startAutoSlide();
  };
  
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
    resetTimer();
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    resetTimer();
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
    resetTimer();
  };
  
  const handleImageLoad = () => {
    setImageStatus("cargada");
  };

  const handleImageError = () => {
    setImageStatus("error");
  };
  
  return (
    <HeroSection id="home">
      {/* Panel de depuración - quitar en producción */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '20px',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        Imagen: {backgroundImages[currentImageIndex]}<br/>
        Estado: {imageStatus}
      </div>
      
      <BackgroundContainer>
        <AnimatePresence mode="wait">
          <BackgroundImage
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </AnimatePresence>
        <BackgroundOverlay />
      </BackgroundContainer>
      
      <SlideArrow direction="left" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </SlideArrow>
      
      <SlideArrow direction="right" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </SlideArrow>
      
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
      
      <SlideIndicators>
        {backgroundImages.map((_, index) => (
          <SlideIndicator 
            key={index} 
            active={index === currentImageIndex}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </SlideIndicators>
      
      <WavesContainer>
        {/* Tercera onda - sólida en frente (abajo) */}
        <WaveWrapper position={0} opacity={1}>
          <Wave 
            fill="var(--color-light)"
            paused={false}
            options={{
              height: 20,
              amplitude: 25,
              speed: 0.09,
              points: 5
            }}
            style={{ height: '100%' }}
          />
        </WaveWrapper>
        
        {/* Segunda onda - ligeramente más pequeña (en medio) */}
        <WaveWrapper position={15} opacity={0.5}>
          <Wave 
            fill="url(#waveGradient2)"
            paused={false}
            options={{
              height: 25,
              amplitude: 30,
              speed: 0.18,
              points: 4
            }}
            style={{ height: '100%' }}
          >
            <defs>
              <linearGradient id="waveGradient2" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="var(--color-light)" />
                <stop offset="100%" stopColor="var(--color-light)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </Wave>
        </WaveWrapper>
        
        {/* Primera onda - más grande y más transparente (arriba) */}
        <WaveWrapper position={30} opacity={0.25}>
          <Wave 
            fill="url(#waveGradient1)"
            paused={false}
            options={{
              height: 30,
              amplitude: 25,
              speed: 0.13,
              points: 3
            }}
            style={{ height: '100%' }}
          >
            <defs>
              <linearGradient id="waveGradient1" gradientTransform="rotate(0)">
                <stop offset="0%" stopColor="var(--color-light)" />
                <stop offset="100%" stopColor="var(--color-light)" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </Wave>
        </WaveWrapper>
      </WavesContainer>
    </HeroSection>
  );
};

export default Hero; 