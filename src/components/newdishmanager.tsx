import React, { useState, useEffect } from 'react';
import NewDishModal from './NewDishModal';

const NewDishPopupManager: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && <NewDishModal onClose={closeModal} />}
    </>
  );
};

export default NewDishPopupManager;
