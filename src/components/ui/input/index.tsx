import React, { FC } from 'react';
import { ErrorInterface } from 'src/interfaces';
import styles from './style.module.css';

interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    labelClassName?: string;
    error?: ErrorInterface | null;
}

const Input: FC<InputProps> = ({ placeholder, labelClassName, error, ...otherProps }) => {
    return (
        <>
            <label className={`${styles.field} ${styles.field_v2} ${labelClassName}`}>
                <input
                    {...otherProps}
                    className={`${styles.field__input} outline-none focus-within:bg-main`}
                    placeholder={placeholder}
                    autoComplete="off"
                    data-test="custom-input"
                />
                <span className={`${styles.field__label_wrap} left-0`}>
                    <span
                        className={`${styles.field__label} left-0 text-gray-500`}
                        data-test="custom-input-placeholder"
                    >
                        {placeholder}
                    </span>
                </span>
            </label>
            {error && (
                <div className="w-full flex justify-start">
                    <small className={`text-xs text-red-400`} data-test="custom-input-error">
                        {error?.message}
                    </small>
                </div>
            )}
        </>
    );
};

export default Input;
