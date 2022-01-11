import Link from 'next/link';

const Nav = () => {
  return (
    <div className='flex items-center justify-between w-full h-20 px-6 mb-8'>
      <Link href='/'>
        <img src='/logo.png' className='h-10' />
      </Link>
      <div className='flex flex-col justify-center transform scale-75'>
        <div className='w-12 h-1 mb-2 bg-black rounded-sm'></div>
        <div className='w-12 h-1 mb-2 bg-black rounded-sm'></div>
        <div className='w-12 h-1 bg-black rounded-sm'></div>
      </div>
    </div>
  );
};

export default Nav;
