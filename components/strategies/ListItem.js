import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CheckBox from '../common/CheckBox';
import GlobalContext from '../../store/GlobalContext';

const ListItem = ({ item, name, timesUsed, successRate }) => {
  const globalCtx = useContext(GlobalContext);

  const toggleCheckBox = () => {
    if (globalCtx.strategy?.name === name) {
      globalCtx.setStrategy('');
    } else {
      globalCtx.setStrategy(item);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className='grid items-center w-full grid-cols-12 p-3 mb-2 border rounded-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleCheckBox}
      >
        <h5 className='col-span-5 text-lg font-medium'>{name}</h5>
        <p className='col-span-4 text-sm font-light'>{timesUsed}</p>
        <p className='col-span-2 text-sm font-light'>{successRate}</p>
        <CheckBox name={name} activeCheckBox={globalCtx.strategy?.name} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ListItem;
