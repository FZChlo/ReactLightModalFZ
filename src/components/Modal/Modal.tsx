import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
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

const Modal: FunctionComponent<ModalProps> = ({
	closeBtnContent,
	canClose,
	footerContent,
	haveFooter,
	isOpen,
	modalContent,
	title,
	toggleModal,
}) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape" && isOpen) {
			toggleModal();
		}
	};
	useEffect(() => {
		document.addEventListener("keydown", onKeyDown, false);
		return () => {
			document.removeEventListener("keydown", onKeyDown, false);
		};
	}, [isOpen]);

	const getCloseContent = closeBtnContent ? closeBtnContent : "X";

	const modal = (
		<div className="overlay" onClick={toggleModal}>
			<div className="modal">
				<div className="modal-content" aria-modal aria-labelledby={title} tabIndex={-1} role="dialog">
					<h2>{title}</h2>
					<div>{modalContent}</div>
					{canClose ? (
						<button className="close-modal" onClick={toggleModal} data-dismiss="modal" aria-label="Close">
							{getCloseContent}
						</button>
					) : null}
					{haveFooter ? (
						<>
							<hr></hr>
							<footer className="modal-footer">{footerContent}</footer>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
	return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
