import { isEmpty } from 'src/helper';
import Toastify from 'toastify-js';

interface ShowErrorParams {
    error: string;
    config: {
        gravity?: 'top' | 'bottom';
        position?: 'center' | 'left' | 'right';
        color: string;
    };
}

/**
 * @function showError
 * @param { ShowErrorParams } params
 * @returns { void }
 */
export const showError = ({
    error,
    config = { gravity: 'bottom', position: 'center', color: '#ff4154' },
}: ShowErrorParams): void => {
    if (!isEmpty(error)) {
        Toastify({
            text: error,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: config?.gravity, // `top` or `bottom`
            position: config?.position, // `left`, `center` or `right`
            backgroundColor: config?.color,
            stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
    } else return;
};
