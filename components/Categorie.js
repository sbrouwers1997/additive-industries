import Arrow from './icons/Arrow';
import Link from 'next/link';

const Categorie = ({ href, title, color }) => {
  return (
    <Link href={href ? href : '/'}>
      <div className='relative mb-4 overflow-hidden rounded-lg'>
        <div className='w-full h-full p-3 border rounded-lg border-ai-main-gray'>
          <p className='text-lg font-medium'>{title}</p>
        </div>
        <div
          className={`absolute right-0 top-0 h-full w-16 bg-ai-${color} z-10 flex justify-center items-center`}
        >
          <Arrow className='w-5 text-white rotate-90' />
        </div>
      </div>
    </Link>
  );
};

export default Categorie;
