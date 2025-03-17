import React, { useEffect } from 'react';
import './NewDishModal.css';

interface NewDishModalProps {
  onClose: () => void;
}

const NewDishModal: React.FC<NewDishModalProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-fade-in">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src="https://images.pexels.com/photos/6210775/pexels-photo-6210775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="New Dish"
          className="modal-image"
        />
        <h2 className="modal-title">Try Our New Dish!</h2>
        <p className="modal-description">A delicious treat you won't forget. Available for a limited time only!</p>
      </div>
    </div>
  );
};

export default NewDishModal;
