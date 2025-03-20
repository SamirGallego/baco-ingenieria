import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SwitcherContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  display: flex;
  gap: 10px;
`;

const LanguageButton = styled(motion.button)`
  background-color: ${({ active }) => active ? 'var(--color-accent)' : 'var(--color-primary)'};
  color: var(--color-light);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <SwitcherContainer>
      <LanguageButton 
        active={i18n.language === 'es'} 
        onClick={() => changeLanguage('es')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ES
      </LanguageButton>
      <LanguageButton 
        active={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        EN
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher; 