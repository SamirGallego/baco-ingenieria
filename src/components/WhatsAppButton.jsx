import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhatsAppContainer = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  display: flex;
  align-items: center;
`;

const WhatsAppLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #25D366;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  color: white;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Tooltip = styled(motion.div)`
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-right: 10px;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

const WhatsAppButton = ({ phoneNumber = "5512345678", message = "Hola, me gustaría obtener más información sobre sus servicios." }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  // Formatea el número para WhatsApp (sin espacios, paréntesis, etc.)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  // Codificar el mensaje para la URL
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <WhatsAppContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {showTooltip && (
        <Tooltip
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          Contáctanos por WhatsApp
        </Tooltip>
      )}
      <WhatsAppLink 
        href={`https://wa.me/${formattedNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctanos por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <i className="fab fa-whatsapp"></i>
      </WhatsAppLink>
    </WhatsAppContainer>
  );
};

export default WhatsAppButton; 