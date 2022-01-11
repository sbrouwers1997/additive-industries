import { useContext } from 'react';
import GlobalContext from '../../store/GlobalContext';

const NavIndication = ({ categorie, color }) => {
  const globalCtx = useContext(GlobalContext);

  return (
    <div className='flex items-center h-12'>
      <div className='flex flex-col'>
        <p className='text-xs font-light text-right'>{categorie}</p>
        <p className='text-xs font-light text-right'>
          {globalCtx.material?.name}
        </p>
        <p className='text-xs font-light text-right'>
          {globalCtx.printer?.name}
        </p>
      </div>
      <div className={`w-1 h-full ml-2 rounded-sm bg-ai-${color}`}></div>
    </div>
  );
};

export default NavIndication;
