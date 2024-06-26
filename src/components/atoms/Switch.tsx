import React from 'react';
import { ChangeEvent as ReactChangeEvent } from 'react';
import styles from "../../styles/switch.module.css"

interface SwitchProps {
    handleChange: (event: ReactChangeEvent<HTMLInputElement>) => void;
    value: string;
    valueToBeChecked: string;
}

const Switch: React.FC<SwitchProps> = ({handleChange, value, valueToBeChecked }) => {
    return (
        <div>
            <label className={styles.switch}>
                <input type="checkbox" onChange={handleChange} checked={value === valueToBeChecked} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
};

export default Switch;
