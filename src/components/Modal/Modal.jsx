import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  
    useEffect(() => {
      window.addEventListener('keydown', handleEscape);
  
      return () => {
        window.removeEventListener('keydown', handleEscape);
      }
    })
  
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
        document.body.style.overflow = 'visible';
      }
    };
  
    const handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        onClose();
        document.body.style.overflow = 'visible';
      }
    };

    document.body.style.overflow = 'hidden';
      
      return createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
          <div className={css.modal}>
          {children}
          </div>
        </div>,
        modalRoot
      );
    
  }
  
  Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };