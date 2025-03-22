import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logoB from '../assets/logos/svgs/Bwhite.svg';
import logoT from '../assets/logos/svgs/Twhite.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ $scrolled }) => $scrolled ? 'var(--color-primary)' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  z-index: 1000;
  transition: background-color var(--transition-medium);
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  .logo-b {
    height: 60px;
    margin-right: 10px;
    padding: auto;
  }
  
  .logo-t {
    margin-left: 10px;
    height: 50px;
    padding: auto;
  }
  
  @media (max-width: 576px) {
    .logo-b {
      height: 35px;
    }
    
    .logo-t {
      height: 35px;
    }
  }
`;

const NavLinks = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width var(--transition-medium);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: var(--color-light);
  font-weight: 500;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: var(--color-light);
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background-color: var(--color-primary);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1001;
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

const MobileNavItem = styled.li`
  margin: 1.5rem 0;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  color: var(--color-light);
  font-size: 1.5rem;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Logo>
        <img src={logoB} alt="BACO Logo" className="logo-b" />
        <img src={logoT} alt="BACO Ingeniería" className="logo-t" />
      </Logo>
      
      <NavLinks>
        <NavList>
          <NavItem>
            <NavLink href="#home">{t('header.home')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">{t('header.aboutUs')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">{t('header.services')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">{t('header.contact')}</NavLink>
          </NavItem>
        </NavList>
      </NavLinks>
      
      <MobileMenuButton onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </MobileMenuButton>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <CloseButton onClick={toggleMobileMenu}>
              <i className="fas fa-times"></i>
            </CloseButton>
            
            <MobileNavList>
              <MobileNavItem>
                <NavLink href="#home" onClick={toggleMobileMenu}>
                  {t('header.home')}
                </NavLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavLink href="#about" onClick={toggleMobileMenu}>
                  {t('header.aboutUs')}
                </NavLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavLink href="#services" onClick={toggleMobileMenu}>
                  {t('header.services')}
                </NavLink>
              </MobileNavItem>
              <MobileNavItem>
                <NavLink href="#contact" onClick={toggleMobileMenu}>
                  {t('header.contact')}
                </NavLink>
              </MobileNavItem>
            </MobileNavList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 