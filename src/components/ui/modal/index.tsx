import { FC, ReactNode } from 'react';
import cn from 'classnames';
interface ModalProps {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose, visible }) => {
    return (
        <>
            {visible && (
                <div
                    onClick={onClose}
                    className="bg-black opacity-25 right-0 left-0 top-0 bottom-0 z-20 w-screen h-screen fixed"
                    data-test="modal-cancel"
                ></div>
            )}
            <div
                className={cn(
                    'w-full absolute left-0  top-0  flex justify-center items-center',
                    visible && 'h-screen',
                )}
                data-test="modal-confirm"
            >
                {visible && (
                    <div className=" fixed animate-opacity z-50 " data-test="modal-container">
                        {children}
                    </div>
                )}
            </div>
        </>
    );
};

export default Modal;
