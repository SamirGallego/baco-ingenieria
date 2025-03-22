import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 20px 5% 120px;
  background-color: var(--color-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-primary);
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-family: inherit;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-family: inherit;
  height: 150px;
  resize: vertical;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-medium);
  border: none;
  
  &:hover {
    background-color: var(--color-accent);
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.3rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    
    i {
      margin-right: 10px;
      color: var(--color-accent);
      font-size: 1.5rem;
    }
  }
`;

const MapContainer = styled.div`
  height: 300px;
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g. sending an email
    console.log('Form data submitted:', formData);
    // Reset form or show a success message
    alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('contact.title')}
        </SectionTitle>
        
        <ContactContainer>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel>{t('contact.name')}</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.email')}</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.phone')}</FormLabel>
              <FormInput 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.subject')}</FormLabel>
              <FormInput 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>{t('contact.message')}</FormLabel>
              <FormTextarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contact.send')}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactInfoItem>
              <h3>{t('contact.address')}</h3>
              <p><i className="fas fa-map-marker-alt"></i> Av. Principal #123, Ciudad de México, México</p>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <h3>{t('contact.phoneNumber')}</h3>
              <p><i className="fas fa-phone-alt"></i> +52 (55) 1234-5678</p>
              <p><i className="fas fa-mobile-alt"></i> +52 (55) 8765-4321</p>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <h3>{t('contact.emailAddress')}</h3>
              <p><i className="fas fa-envelope"></i> info@bacoingenieria.com</p>
              <p><i className="fas fa-envelope"></i> ventas@bacoingenieria.com</p>
            </ContactInfoItem>
            
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6610866921894!2d-99.18098708509359!3d19.42702798688526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1623423968086!5m2!1ses!2smx"
                allowFullScreen=""
                loading="lazy"
                title="BACO Ingeniería ubicación"
              ></iframe>
            </MapContainer>
          </ContactInfo>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact; 