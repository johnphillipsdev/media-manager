import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='border-b sticky top-0 bg-white flex items-center pl-4 lg:pl-8 lg:px-4'>
      <ul className='flex gap-4 text-sm md:text-base md:gap-8'>
        <Link href='/'>Watch</Link>
        <Link href='/'>Read</Link>
        <Link href='/'>Game</Link>
      </ul>
      <button className='p-4 ml-auto'>
        <MagnifyingGlassIcon className='inline w-5 h-5' />
      </button>
    </div>
  );
}
