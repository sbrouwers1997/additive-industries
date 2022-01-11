import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CheckBox from '../common/CheckBox';
import GlobalContext from '../../store/GlobalContext';
import Modal from '../common/Modal';

const ListItem = ({ item, name, core, available, id, differentMaterials }) => {
  const globalCtx = useContext(GlobalContext);
  const [warning, setWarning] = useState(false);

  const toggleCheckBox = () => {
    if (globalCtx.printer?.id === id) {
      globalCtx.setPrinter('');
    } else {
      if (differentMaterials) {
        setWarning(true);
      }
      globalCtx.setPrinter(item);
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='grid items-center w-full grid-cols-12 p-3 mb-2 border rounded-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={toggleCheckBox}
        >
          <h5 className='col-span-5 text-sm font-medium'>{name}</h5>
          <p className='col-span-3 text-xs font-light'>{core}</p>
          <p className='col-span-3 text-xs font-light'>{available}</p>
          <CheckBox name={id} activeCheckBox={globalCtx.printer?.id} />
        </motion.div>
      </AnimatePresence>
      <Modal open={warning} onClose={setWarning}>
        <h3 className='text-lg font-medium'>
          Printer is using different materials
        </h3>
        <p className='text-sm'>
          The printer you selected is using different materials from the one
          you’ve selected. Please confirm with a superior that this is the right
          option.
        </p>
        <div className='grid grid-cols-2 gap-2 mt-4'>
          <button
            className='w-full py-3 font-medium text-white rounded-lg bg-ai-main-darkblue'
            onClick={() => {
              setWarning(false), globalCtx.setPrinter('');
            }}
          >
            Choose other
          </button>
          <button
            className='w-full py-3 font-medium text-black text-opacity-50 rounded-lg bg-ai-main-buttongray'
            onClick={() => setWarning(false)}
          >
            Use printer
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ListItem;
