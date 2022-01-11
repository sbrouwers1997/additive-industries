import Link from 'next/link';
import Arrow from '../icons/Arrow';
import { useRouter } from 'next/router';

const GoBack = ({ link, back }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  if (back) {
    return (
      <button
        className='flex items-center focus:outline-none'
        onClick={() => goBack()}
      >
        <Arrow className='w-3 text-black transform rotate-270' />
        <p className='ml-3 text-lg font-light'>Go back</p>
      </button>
    );
  }
  return (
    <Link href={link ? link : '/'}>
      <div className='flex items-center focus:outline-none'>
        <Arrow className='w-3 text-black transform rotate-270' />
        <p className='ml-3 text-lg font-light'>Go back</p>
      </div>
    </Link>
  );
};

export default GoBack;
