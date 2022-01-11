import { useState } from 'react';
const FilterMenu = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className='relative w-screen -ml-6'>
      <div className='flex px-6 py-6 overflow-x-scroll text-lg whitespace-nowrap'>
        <p
          className={`${
            activeFilter === 'soft metals'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent background-none'
          } transition-all duration-500 pb-1 mr-8`}
          onClick={() => setActiveFilter('soft metals')}
        >
          soft metals
        </p>
        <p
          className={`${
            activeFilter === 'hard metals'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent background-none'
          }  mr-8 transition-all duration-500 pb-1`}
          name='hard metals'
          onClick={() => setActiveFilter('hard metals')}
        >
          hard metals
        </p>
        <p
          className={` ${
            activeFilter === 'aluminiums'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent background-none'
          }  mr-8 transition-all duration-500 pb-1`}
          onClick={() => setActiveFilter('aluminiums')}
        >
          aluminiums
        </p>
        <p
          className={`${
            activeFilter === 'multiplex'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent background-none'
          }  mr-8 transition-all duration-500 pb-1`}
          onClick={() => setActiveFilter('multiplex')}
        >
          multiplex
        </p>
        <div className='mr-8'></div>
        <div>
          <div
            className='absolute top-0 left-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to right,  white, white, rgba(255,255,255,0))',
            }}
          ></div>
          <div
            className='absolute top-0 left-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to right, white, rgba(255,255,255,0))',
            }}
          ></div>
          <div
            className='absolute top-0 left-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to right, white, rgba(255,255,255,0))',
            }}
          ></div>
        </div>
        <div>
          <div
            className='absolute top-0 right-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to left,  white, white, rgba(255,255,255,0))',
            }}
          ></div>
          <div
            className='absolute top-0 right-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to left, white, rgba(255,255,255,0))',
            }}
          ></div>
          <div
            className='absolute top-0 right-0 w-6 h-20'
            style={{
              background:
                'linear-gradient(to left, white, rgba(255,255,255,0))',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
