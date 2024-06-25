import React from 'react';
import { ChangeEvent as ReactChangeEvent } from 'react';
import "../../styles/switch.css"

interface SwitchProps {
    text : string, 
    handleChange: (event: ReactChangeEvent<HTMLInputElement>) => void;
    value: string;
    valueToBeChecked: string;
}

const Switch: React.FC<SwitchProps> = ({ text, handleChange, value, valueToBeChecked }) => {
    return (
        <div className="container-switch">
            <span> {text} </span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={value === valueToBeChecked} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Switch;
