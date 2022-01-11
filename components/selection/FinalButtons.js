import { useContext } from 'react';
import Link from 'next/link';
import GlobalContext from '../../store/GlobalContext';

const FinalButtons = () => {
  const globalCtx = useContext(GlobalContext);

  return (
    <div className='fixed bottom-0 flex items-center justify-center w-screen -ml-6 h-28'>
      <div className='grid w-full grid-cols-2 gap-6 mx-6'>
        <Link href='/'>
          <button
            className={`
         bg-ai-green text-white w-full h-14 font-medium text-xl rounded-lg  focus:outline-none `}
            onClick={() => {
              globalCtx.setBlueprint(''),
                globalCtx.setMaterial(''),
                globalCtx.setPrinter('');
              globalCtx.setStrategy('');
            }}
          >
            Confirm
          </button>
        </Link>
        <Link href='/'>
          <button
            className={`
         bg-ai-red text-white w-full h-14 font-medium text-xl rounded-lg  focus:outline-none`}
            onClick={() => {
              globalCtx.setBlueprint(''),
                globalCtx.setMaterial(''),
                globalCtx.setPrinter('');
              globalCtx.setStrategy('');
            }}
          >
            Reset
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinalButtons;
