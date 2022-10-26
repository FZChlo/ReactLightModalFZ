import { FunctionComponent } from "react";
import "./Modal.css";
export interface ModalProps {
    canClose: boolean;
    closeBtnContent: JSX.Element;
    footerContent: JSX.Element;
    haveFooter: boolean;
    isOpen: boolean;
    modalContent: JSX.Element;
    title: string;
    toggleModal: () => void;
}
declare const Modal: FunctionComponent<ModalProps>;
export default Modal;
