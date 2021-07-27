import React from 'react'
import styles from '../inputs/Input.module.css';
export const Input = ({label, type ,name}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input id={name} name={name} className={styles.input} type={type} />
        </div>
    )
}