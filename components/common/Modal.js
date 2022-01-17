import React, { useEffect, useRef } from 'react';
import CloseIcon from '../icons/CloseIcon';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, children, onClose, small, medium, large }) => {
  const ref = useRef();

  const modal = {
    initial: {
      y: '100%',
    },
    animate: {
      y: 0,
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
        <motion.div>
          <motion.div
            className='fixed top-0 left-0 z-40 w-full h-full bg-black opacity-50 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          <motion.div
            variants={modal}
            initial='initial'
            animate='animate'
            exit='initial'
            ref={ref}
            className={`bg-white dark:bg-ui-dark_modal  px-4 py-6 flex flex-col rounded-lg fixed left-0 z-50 bottom-0 w-full`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
