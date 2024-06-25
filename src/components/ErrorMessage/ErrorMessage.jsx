// src/components/ErrorMessage/ErrorMessage.jsx
import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorBox}>
                <div className={styles.errorTitle}>Something went wrong</div>
                <div className={styles.errorMessage}>{message}</div>
            </div>
        </div>
    );
}

export default ErrorMessage;
