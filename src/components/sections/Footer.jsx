import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="footer-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="footer-left" style={{ marginBottom: '10px' }}>
          <p>&copy; 2023. Todos los derechos reservados.</p>
        </div>
        <div className="footer-center" style={{ display: 'flex' }}>
          <Link to="/nosotros" className="footer-link" style={{ marginRight: '20px' }}>Acerca de</Link>
          <Link to="/contacto" className="footer-link" style={{ marginRight: '20px' }}>Contacto</Link>
          <Link to="/politica-privacidad" className="footer-link">Política de privacidad</Link>
        </div>
        <div className="footer-right" style={{ marginTop: '10px' }}>
          <a href="#" className="footer-icon" style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="footer-icon" style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="footer-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
