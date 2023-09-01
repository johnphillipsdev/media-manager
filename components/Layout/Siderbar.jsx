import { Bars3Icon, HomeIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function Siderbar({ isSidebarClosed, setIsSidebarClosed }) {
  return (
    <>
      {/* Closed Sidebar */}
      <aside className={`${isSidebarClosed ? 'w-16' : 'w-0'} min-h-screen fixed left-0 overflow-hidden border-r flex flex-col `}>
        {/* Logo & Control */}
        <div className='grid place-items-center border-b p-4'>
          <button
            onClick={() => {
              setIsSidebarClosed(!isSidebarClosed);
            }}
          >
            <Bars3Icon className='w-6 h-6' />
          </button>
        </div>

        <ul className='mt-6'>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'></div>
          </li>
          <li>
            <a href='#' class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
              <span class='inline-flex justify-center items-center ml-4'>
                <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href='#' class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
              <span class='inline-flex justify-center items-center ml-4'>
                <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Open Sidebar */}
      <aside className={`${isSidebarClosed ? 'w-0' : 'w-64'} min-h-screen fixed left-0 overflow-hidden border-r flex flex-col`}>
        {/* Logo & Control */}
        <div className='flex justify-between p-4 border-b'>
          <h1>Media Manager</h1>
          <button
            onClick={() => {
              setIsSidebarClosed(!isSidebarClosed);
            }}
          >
            <ChevronLeftIcon className='w-4 h-4' />
          </button>
        </div>

        <ul className='mt-6'>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'>
              <div class='text-sm font-light tracking-wide text-gray-500'>Menu</div>
            </div>
          </li>
          <li>
            <a href='#' class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
              <span class='inline-flex justify-center items-center ml-4'>
                <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='#' class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
              <span class='inline-flex justify-center items-center ml-4'>
                <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'></path>
                </svg>
              </span>
              <span class='ml-2 text-sm tracking-wide truncate'>Inbox</span>
              <span class='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full'>New</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
