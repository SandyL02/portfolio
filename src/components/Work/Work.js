import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';

export default function Work({item}) {
   
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <article onClick={openModal}>
        <h3>{item.title}</h3>
        <p>Mission : {item.tasks}</p>
        <p>Problématiques rencontrées : {item.issues}</p>
        <p>Technologies utilisées : {item.techs}</p>
        <p>Lien vers <a href={item.link} target="blank">{item.website}</a></p>
        
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3>{item.title}</h3>
        <p>Mission : {item.tasks}</p>
        <p>Problématiques rencontrées : {item.issues}</p>
        <p>Technologies utilisées : {item.techs}</p>
        <p>Lien vers <a href={item.link} target="blank">{item.website}</a></p>
        </Modal>
      </article>
    );
  }