import Edit from '../icons/Edit';
import Link from 'next/link';

const FinalSelection = ({ title, content, link }) => {
  return (
    <div className='flex items-center justify-between w-full p-3 mb-2 border rounded-lg'>
      <div className='flex flex-col'>
        <h4 className='mb-1 text-lg font-medium '>{title}</h4>
        <h6 className='opacity-70 text-md'>{content}</h6>
      </div>
      <Link href={`/automotive${link}`}>
        <div>
          <Edit className={'w-6'} />
        </div>
      </Link>
    </div>
  );
};

export default FinalSelection;
