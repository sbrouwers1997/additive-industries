import { useEffect, useState, useContext } from 'react';
import GoBack from '../../components/common/GoBack';
import { aiData } from '../../store/aiData';
import NavIndication from '../../components/common/NavIndication';
import GlobalContext from '../../store/GlobalContext';
import FinalSelection from '../../components/selection/FinalSelection';
import FinalButtons from '../../components/selection/FinalButtons';

export default function AutomotiveMain() {
  const globalCtx = useContext(GlobalContext);
  const [activeItem, setActiveItem] = useState([]);

  useEffect(() => {
    const filteredItem = aiData.find((item) => item.link === '/automotive');
    setActiveItem(filteredItem);
    globalCtx.setActiveCategorie(filteredItem);
    console.log(globalCtx);
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
        <h2 className='mb-6 text-3xl '>Finalize selection</h2>

        <div className='relative pt-3 pb-32 overflow-scroll h-108'>
          <FinalSelection
            title={'Blueprint'}
            content={globalCtx.blueprint?.name}
            link={'/blueprints'}
          />
          <FinalSelection
            title={'Material'}
            content={globalCtx.material?.name}
            link={'/materials'}
          />
          <FinalSelection
            title={'Printer'}
            content={globalCtx.printer?.name}
            link={'/printers'}
          />
          <FinalSelection
            title={'Strategy'}
            content={globalCtx.strategy?.name}
            link={'/strategies'}
          />
        </div>
      </div>
      <FinalButtons />
    </div>
  );
}
