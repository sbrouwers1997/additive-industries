import React, { useEffect, useRef } from 'react';
import CloseIcon from '../icons/CloseIcon';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, children, onClose, small, medium, large }) => {
  const ref = useRef();

  const modal = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      } else {
        onClose(false);
      }
    }

    document.body.addEventListener('mousedown', handleOutsideClick);

    return () =>
      document.body.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <>
          <div className='fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50 '></div>
          <div
            className={`fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full`}
          >
            <div
              ref={ref}
              className={`bg-white dark:bg-ui-dark_modal mx-6 px-4 py-6 flex flex-col rounded-lg relative ${
                small ? 'w-1/3' : medium ? 'w-1/2' : large ? 'w-3/4' : ''
              }`}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
