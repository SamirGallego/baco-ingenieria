import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const SwitcherContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 100px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LanguageButton = styled(motion.button)`
  background-color: ${({ $active }) => $active ? 'var(--color-accent)' : 'var(--color-primary)'};
  color: var(--color-light);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };
  
  const toggleLanguageSelector = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <SwitcherContainer>
      <AnimatePresence>
        {isOpen && i18n.language === 'es' && (
          <LanguageButton 
            $active={false}
            onClick={() => changeLanguage('en')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            EN
          </LanguageButton>
        )}
        
        {isOpen && i18n.language === 'en' && (
          <LanguageButton 
            $active={false}
            onClick={() => changeLanguage('es')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ES
          </LanguageButton>
        )}
      </AnimatePresence>
      
      <LanguageButton 
        $active={true} 
        onClick={toggleLanguageSelector}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {i18n.language.toUpperCase()}
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher; 