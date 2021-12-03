import React, { ChangeEvent, FC } from 'react';
import { ErrorInterface } from 'src/interfaces';
import styles from './style.module.css';

interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    labelClassName?: string;
    register?: any;
    error?: ErrorInterface | null;
}

const Input: FC<InputProps> = ({ placeholder, labelClassName, register, error, ...oderProps }) => {
    return (
        <>
            <label className={`${styles.field} ${styles.field_v2} ${labelClassName}`}>
                <input
                    className={`${styles.field__input} outline-none focus-within:bg-main`}
                    placeholder={placeholder}
                    ref={register}
                    {...oderProps}
                    autoComplete="off"
                />
                <span className={`${styles.field__label_wrap} left-0`}>
                    <span className={`${styles.field__label} left-0 text-gray-500`}>
                        {placeholder}
                    </span>
                </span>
            </label>
            {error && (
                <div className="w-full flex justify-start">
                    <small className={`text-xs text-red-400`}>{error?.message}</small>
                </div>
            )}
        </>
    );
};

export default Input;
