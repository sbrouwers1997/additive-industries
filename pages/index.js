import GoBack from '../components/common/GoBack';
import Categorie from '../components/Categorie';
import Reprint from '../components/Reprint';
import { aiData } from '../store/aiData';

export default function Home() {
  return (
    <div className='w-full h-full overflow-scroll'>
      <GoBack />

      <div className='mt-12'>
        <h2 className='mb-8 text-3xl'>Categories</h2>

        <Reprint
          title='Space industry, rocket engine'
          estTime='Estimated time: 4d 12h'
          color='purple'
        />

        {aiData.map((item) => (
          <Categorie
            title={item.categorie}
            color={item.color}
            href={`${item.link}/blueprints`}
            key={item.categorie}
          />
        ))}

        {/* <div className='relative w-full mt-16'>
          <Categorie
            title={'Custom setup'}
            color={'black'}
            href={`custom/blueprints`}
          />
        </div> */}
      </div>
    </div>
  );
}
