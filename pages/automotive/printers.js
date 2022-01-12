import { useEffect, useState, useContext } from 'react';
import GoBack from '../../components/common/GoBack';
import { aiData } from '../../store/aiData';
import NavIndication from '../../components/common/NavIndication';
import GlobalContext from '../../store/GlobalContext';
import ListItem from '../../components/printers/ListItem';
import { printers } from '../../store/printers';
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
        <h2 className='mb-6 text-3xl'>Select printer</h2>

        <div className='relative pt-3 pb-32 overflow-scroll h-108'>
          {printers.map((item, index) => {
            return (
              <ListItem
                item={item}
                key={index}
                name={item.name}
                cores={item.cores}
              />
            );
          })}
        </div>

        <NextButton link='/automotive/strategies' active={globalCtx.printer} />
      </div>
    </div>
  );
}
