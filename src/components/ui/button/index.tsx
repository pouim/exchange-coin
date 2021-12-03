import React, { DetailedHTMLProps, FC } from 'react';
import LoadingSpin from '../loading';

export interface ButtonProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: string;
    classBtn?: string;
    loading?: boolean;
}
const Button: FC<ButtonProps> = ({ children, classBtn, loading, ...otherProps }) => {
    return (
        <button
            className={`bg-gradient-to-r whitespace-nowrap from-main-green to-main-green-500 hover:opacity-90 focus:outline-none btn flex text-center justify-center items-center ${classBtn}`}
            data-test="custom-button"
            {...otherProps}
        >
            {loading && <LoadingSpin w={10} data-test="custom-button-loading" />}
            {children}
        </button>
    );
};

export default Button;
