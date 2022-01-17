import { useEffect, useState, useContext } from 'react';
import GoBack from '../../components/common/GoBack';
import { aiData } from '../../store/aiData';
import NavIndication from '../../components/common/NavIndication';
import GlobalContext from '../../store/GlobalContext';
import ListItem from '../../components/strategies/ListItem';
import { strategies } from '../../store/strategies';
import NextButton from '../../components/common/NextButton';

export default function AutomotiveMain() {
  const globalCtx = useContext(GlobalContext);
  const [activeItem, setActiveItem] = useState([]);

  useEffect(() => {
    const filteredItem = aiData.find((item) => item.link === '/automotive');
    setActiveItem(filteredItem);
    globalCtx.setActiveCategorie(filteredItem);
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='flex justify-between'>
        <GoBack back />
        <NavIndication
          color={activeItem.color}
          categorie={activeItem.categorie}
        />
      </div>

      <div className='mt-8'>
        <h2 className='mb-6 text-3xl '>Select strategy</h2>

        <div className='w-screen -ml-6 border-b'>
          <div className='grid items-center grid-cols-12 pb-3 mx-6 text-xs font-light opacity-70'>
            <h5 className='col-span-5'>Strategy</h5>
            <p className='col-span-3'>Times used</p>
            <p className='col-span-3'>Success rate</p>
          </div>
        </div>
        <div className='relative py-8 overflow-scroll h-108'>
          <h2 className='mb-2 text-xl '>Recommended</h2>
          <>
            {strategies.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  item={item}
                  name={item.name}
                  quality={item.quality}
                  speed={item.speed}
                  recommended={true}
                />
              );
            })}
          </>
          <h2 className='mt-8 mb-2 text-xl '>Other strategies</h2>
          <>
            {strategies.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  item={item}
                  name={item.name}
                  quality={item.quality}
                  speed={item.speed}
                />
              );
            })}
          </>
        </div>
        <div className='h-20'></div>

        <NextButton link='/automotive/selection' active={globalCtx.strategy} />
      </div>
    </div>
  );
}
