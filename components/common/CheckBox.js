import { useContext } from 'react';
import Check from '../icons/Check';
import GlobalContext from '../../store/GlobalContext';

const CheckBox = ({ activeCheckBox, name, onClick }) => {
  const globalCtx = useContext(GlobalContext);

  return (
    <button
      className={`w-5 h-5 border border-black border-opacity-25 transition-colors duration-300 flex items-center justify-center ${
        activeCheckBox === name &&
        `bg-ai-${globalCtx.activeCategorie.color} border-none`
      } rounded-full focus:outline-none`}
      onClick={onClick}
    >
      {/* <Check className={'w-3 text-white mt-1'} /> */}
    </button>
  );
};

export default CheckBox;
