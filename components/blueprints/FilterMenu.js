const FilterMenu = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className='relative w-screen -ml-6'>
      <div className='flex px-6 py-6 overflow-x-scroll text-lg whitespace-nowrap'>
        <p
          className={`${
            activeFilter === 'formula1'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent'
          } transition-all duration-500 pb-1 background-none mr-8`}
          onClick={() => setActiveFilter('formula1')}
        >
          formula 1
        </p>
        <p
          className={`${
            activeFilter === 'engines'
              ? 'border-b opacity-100  border-black '
              : 'opacity-50 border-b border-transparent'
          }  mr-8 transition-all duration-500 pb-1 background-none`}
          onClick={() => setActiveFilter('engines')}
        >
          engines
        </p>
        <p
          className={` ${
            activeFilter === 'others'
              ? 'border-b opacity-100 mr-8 border-black '
              : 'opacity-50 border-b border-transparent'
          }  mr-8 transition-all duration-500 pb-1 background-none`}
          onClick={() => setActiveFilter('others')}
        >
          others
        </p>

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
