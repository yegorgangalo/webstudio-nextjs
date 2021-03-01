import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({onClose, children}) {

    const modalRef = useRef(null);

    useEffect(() => {
        modalRef.current.focus();
        modalRef.current.style.outline = 'none';
        const keydownCloseModal = ({ code }) => { code === "Escape" && onClose() };
        window.addEventListener('keydown', keydownCloseModal);
        return () => window.removeEventListener('keydown', keydownCloseModal);
    }, [onClose])

    const backdropCloseModal = ({ target, currentTarget }) => {
        target === currentTarget  && onClose();
    }

    return createPortal(
        <div className="backdrop" onClick={backdropCloseModal}>
          <div className="modal" tabIndex="0" ref={modalRef}>
            <button className="modal__close-btn" onClick={onClose}>
              <svg className="modal__close-x">
                <use href="./images/sprite.svg#modal-close-x" />
              </svg>
            </button>
            {children}
          </div>
        </div>
    , document.querySelector('#modal-root'))
}