import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CheckBox from '../common/CheckBox';
import GlobalContext from '../../store/GlobalContext';
import Modal from '../common/Modal';

const ListItem = ({ item, name, cores }) => {
  const globalCtx = useContext(GlobalContext);
  const [warning, setWarning] = useState(false);

  // const toggleCheckBox = () => {

  //   // if (globalCtx.printer?.id === id) {
  //   //   globalCtx.setPrinter('');
  //   // } else {
  //   //   if (differentMaterials) {
  //   //     setWarning(true);
  //   //   }
  //   //   globalCtx.setPrinter(item);
  //   // }
  // };
  const toggleCheckBox = (item) => {
    console.log(item);
    if (globalCtx.printer?.id === item.id) {
      globalCtx.setPrinter('');
    } else {
      if (item.differentMaterials) {
        setWarning(true);
      }
      globalCtx.setPrinter(item);
    }
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='flex flex-col w-full p-3 mb-2 border rounded-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className='mb-3 text-lg font-medium'>{name}</h5>

          <div className='grid grid-cols-12 pb-3 mx-2 text-xs font-light opacity-70'>
            <h5 className='col-span-4'>Name</h5>
            <p className='col-span-3'>Material</p>
            <p className='col-span-4 '>available in</p>
          </div>
          {cores.map((item) => (
            <div
              className='grid w-full grid-cols-12 p-3 mb-2 border rounded-lg'
              onClick={() => toggleCheckBox(item)}
            >
              <p className='col-span-4 text-xs font-light font-semibold'>
                {item.name}
              </p>
              <p className='col-span-3 text-xs font-light'>{item.material}</p>
              <p className='col-span-4 text-xs font-light'>{item.available}</p>
              <CheckBox name={item.id} activeCheckBox={globalCtx.printer?.id} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Modal open={warning} onClose={setWarning}>
        <h3 className='mb-2 text-xl font-medium'>
          Printer is using different materials
        </h3>
        <p className='text-md'>
          The printer you selected is using different materials from the one
          you’ve selected. Please confirm with a superior that this is the right
          option.
        </p>
        <div className='grid grid-cols-2 gap-2 mt-8'>
          <button
            className='w-full py-4 font-medium text-white rounded-lg bg-ai-main-darkblue'
            onClick={() => {
              setWarning(false), globalCtx.setPrinter('');
            }}
          >
            Choose other
          </button>
          <button
            className='w-full py-4 font-medium text-black text-opacity-50 rounded-lg bg-ai-main-buttongray'
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
