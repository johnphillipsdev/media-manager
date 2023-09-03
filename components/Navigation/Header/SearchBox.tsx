import { useState } from 'react';

type Props = {
  setSearchData: React.Dispatch<React.SetStateAction<ISearchData>>;
};

const url = 'https://api.themoviedb.org/3/search/movie';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.MOVIE_TOKEN}`,
  },
};

export default function SearchBox({ setSearchData }: Props): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const searchHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`${url}?query=${searchQuery}`, options);
    const data = await response.json();

    setSearchData(data);
  };

  return (
    <form onSubmit={searchHandler}>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50'
          placeholder='Search Mockups, Logos...'
          required
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const inputElement = e.currentTarget as HTMLInputElement;
            setSearchQuery(inputElement.value);
          }}
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-600 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  );
}
