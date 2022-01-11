import Nav from '../components/common/Nav';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import ActivateColors from './ActivateColors';

const Layout = ({ children }) => {
  const router = useRouter();
  const pageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.175,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className='w-screen h-screen font-main'>
      <ActivateColors />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.pathname}
          variants={pageTransition}
          initial='initial'
          animate='animate'
          exit='exit'
          className='px-6'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
