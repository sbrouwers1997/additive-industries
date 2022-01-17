import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className='flex items-center justify-between w-full h-20 px-6 mb-8'>
      <Link href='/'>
        <img src='/logo.png' className='relative z-30 h-10' />
      </Link>
      <div
        className='relative z-30 flex flex-col justify-center transform scale-75'
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className='w-12 h-1 mb-2 bg-black rounded-sm'></div>
        <div className='w-12 h-1 mb-2 bg-black rounded-sm'></div>
        <div className='w-12 h-1 bg-black rounded-sm'></div>
      </div>

      <AnimatePresence>
        {menuActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 right-0 z-20 w-full h-screen bg-white'
          >
            <div className='flex flex-col items-center justify-center h-full text-3xl'>
              <Link href='/'>
                <p className='mb-8' onClick={() => setMenuActive(false)}>
                  Home
                </p>
              </Link>
              <p className='mb-8' onClick={() => setMenuActive(false)}>
                Advanced interface
              </p>
              <p className='mb-8' onClick={() => setMenuActive(false)}>
                Cloud uploading
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
