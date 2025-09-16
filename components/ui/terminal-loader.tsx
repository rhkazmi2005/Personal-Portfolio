"use client";

import React from 'react';
import styles from './terminal-loader.module.css';

interface TerminalLoaderProps {
  text?: string;
  title?: string;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({
  text = "Loading...",
  title = "Terminal"
}) => {
  return (
    <div className={styles['terminal-loader']}>
      <div className={styles['terminal-header']}>
        <div className={styles['terminal-title']}>{title}</div>
        <div className={styles['terminal-controls']}>
          <span className={`${styles.control} ${styles.minimize}`}></span>
          <span className={`${styles.control} ${styles.maximize}`}></span>
          <span className={`${styles.control} ${styles.close}`}></span>
        </div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default TerminalLoader;