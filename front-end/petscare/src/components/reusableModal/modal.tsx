import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import styles from './modal.module.css';

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
  title: string;
  message: string;
  acceptButtonText: string;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  title,
  message,
  acceptButtonText,
}) => {
 
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={styles.modalContainer}>
        <Typography variant="h4" className={styles.dialogTitle}>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6" className={styles.dialogContent}>
          {message}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={onAccept} color="primary" className={styles.acceptButton}>
            {acceptButtonText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReusableModal;

