import { useEffect, useState, useContext } from 'react';
import GoBack from '../../components/common/GoBack';
import { aiData } from '../../store/aiData';
import NavIndication from '../../components/common/NavIndication';
import GlobalContext from '../../store/GlobalContext';
import FilterMenu from '../../components/blueprints/FilterMenu';
import ListItem from '../../components/blueprints/ListItem';
import { blueprints } from '../../store/blueprints';
import NextButton from '../../components/common/NextButton';

export default function AutomotiveMain() {
  const globalCtx = useContext(GlobalContext);
  const [activeItem, setActiveItem] = useState([]);
  const [activeFilter, setActiveFilter] = useState('formula1');

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
        <h2 className='text-3xl '>Prepared blueprints</h2>

        <FilterMenu
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className='w-screen -ml-6 border-b'>
          <div className='grid items-center grid-cols-12 pb-3 mx-6 text-xs font-light opacity-70'>
            <h5 className='col-span-5'>Name</h5>
            <p className='col-span-4'>Formula</p>
            <p className='col-span-3'>Success rate</p>
          </div>
        </div>
        <div className='relative pt-3 pb-32 overflow-scroll h-108'>
          {blueprints.map((item, index) => {
            if (item.category === activeFilter) {
              return (
                <ListItem
                  item={item}
                  key={index}
                  name={item.name}
                  formula={item.formula}
                  successRate={item.successRate}
                  category={item.category}
                />
              );
            }
          })}
        </div>

        <NextButton link='/automotive/materials' active={globalCtx.blueprint} />
      </div>
    </div>
  );
}
