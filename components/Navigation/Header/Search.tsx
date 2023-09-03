// COMPONENTS
import { useState } from 'react';
import SearchBox from './SearchBox';

// ICONS
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function Search(): JSX.Element {
  const [searchData, setSearchData] = useState<ISearchData>();

  const searchElements = searchData?.results.map((item) => {
    return (
      <>
        <p className='mt-10' key={item.id}>
          {item.title}
        </p>
      </>
    );
  });

  return (
    <section className='w-full h-screen bg-white absolute top-0 left-0 z-50 px-6'>
      <div className='flex items-center justify-between'>
        <button className='p-6 pl-0 flex gap-2 place-items-center'>
          <ChevronLeftIcon className='icon__size' />
          <span className='uppercase'>Back</span>
        </button>
        <h2 className='font-bold uppercase'>Search Media</h2>
      </div>

      <SearchBox setSearchData={setSearchData} />

      <div className='mt-6'>
        {searchData ? searchElements : <p>Search Items...</p>}
      </div>
    </section>
  );
}
