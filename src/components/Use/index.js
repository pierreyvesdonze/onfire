import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import texts from './texts.json';
import useScrollFadeIn from '../../functions/useScrollFadeIn';

const numModals = 10; // Nombre total de modales

export default function Use() {
    const [modals, setModals] = useState(
        Array.from({ length: numModals }, () => false)
    );

    const handleOpenModal = (index) => () => {
        const newModals = [...modals];
        newModals[index] = true;
        setModals(newModals);
    };

    const handleCloseModal = (index) => () => {
        const newModals = [...modals];
        newModals[index] = false;
        setModals(newModals);
    };

    const isVisible = useScrollFadeIn();

    return (
        <section className={`use-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Utilisation</h1>
            {/* Boutons */}
            {Array.from({ length: numModals }, (_, index) => (
                <Button
                    key={index}
                    onClick={handleOpenModal(index)}
                    id={`use-btn${index}`}
                    className="use-btn"
                >
                    {texts.title[index]}
                </Button>
            ))}

            {/* Modales */}
            {Array.from({ length: numModals }, (_, index) => (
                <Modal
                    key={index}
                    className="modal"
                    open={modals[index]}
                    onClose={handleCloseModal(index)}
                >
                    <Box sx={{ width: 300, bgcolor: 'background.paper', p: 2 }}>
                        {texts[`text${index + 1}`]}
                    </Box>
                </Modal>
            ))}
        </section>
    );
}
