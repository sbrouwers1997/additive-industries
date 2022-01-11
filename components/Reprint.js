import Arrow from './icons/Arrow';
import Link from 'next/link';

const Reprint = ({ href, title, estTime, color }) => {
  return (
    <Link href={href ? href : '/'}>
      <div className='relative mb-8 overflow-hidden rounded-lg'>
        <div className='flex flex-col w-full h-full p-3 border rounded-lg border-ai-main-gray'>
          <p className='text-lg font-medium'>Reprint last task</p>
          <div className='text-sm font-light'>
            <p>{title}</p>
            <p>{estTime}</p>
          </div>
        </div>
        <div
          className={`absolute right-0 top-0 h-full w-16 bg-ai-${color} flex justify-center items-center`}
        >
          <Arrow className='w-5 text-white rotate-90' />
        </div>
      </div>
    </Link>
  );
};

export default Reprint;
