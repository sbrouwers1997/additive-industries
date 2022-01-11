import Link from 'next/link';
import { useRouter } from 'next/router';

const NextButton = ({ link, active }) => {
  const router = useRouter();
  return (
    <div className='fixed bottom-0 flex items-center justify-center w-screen -ml-6 h-28'>
      <div
        className='absolute z-0 w-full h-16 -top-8 btn-gradient'
        style={{
          background:
            'linear-gradient(to top,  white, white, rgba(255,255,255,0))',
        }}
      ></div>
      <Link href={`${active ? link : router.asPath}`}>
        <button
          className={`${
            active === ''
              ? 'bg-ai-main-buttongray text-black text-opacity-40'
              : 'bg-ai-main-darkblue text-white'
          } w-full h-14 mx-6 font-medium text-xl  rounded-lg z-10 relative transition-all duration-300`}
        >
          Next step
        </button>
      </Link>
      <div className='absolute bottom-0 w-full h-10 bg-white'></div>
    </div>
  );
};

export default NextButton;
