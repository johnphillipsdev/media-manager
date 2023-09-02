import { PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function MovieCard() {
  return (
    <div className='relative rounded-xl overflow-hidden'>
      <figure className='w-full h-fit'>
        <Image
          className='w-full h-full'
          src='/backdrop-example.jpg'
          width='1920'
          height='1080'
          objectFit='cover'
          alt=''
        />
        <span className='custom-gradient'></span>
      </figure>
      <div className='w-full flex flex-col justify-end p-4 h-full absolute top-0 left-0 z-10'>
        <h2 className='text-white text-lg font-bold leading-tight max-w-[200px]'>
          Fantastic Beast: The Secrets of Dumbledore
        </h2>
        <div className='flex gap-2 text-gray-300 items-center text-sm mt-1'>
          <p>Fantasy</p>
          <span className='w-1 h-1 mt-1 bg-gray-300 block rounded-full'></span>
          <p>Adventure</p>
        </div>
        <button className='grid place-items-center w-6 h-6 bg-white rounded-full absolute right-4 bottom-4'>
          <PlusIcon className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
}
