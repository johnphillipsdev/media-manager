import SidebarItem from '../Navigation/SidebarItem';

// Libraries
import { Bars3Icon, HomeIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import SidebarTitle from '../Navigation/SidebarTitle';

export default function Siderbar({ isSidebarClosed, setIsSidebarClosed }) {
  return (
    <>
      {/* Closed Sidebar */}
      <aside className={`${isSidebarClosed ? 'w-16' : 'w-0'} min-h-screen fixed left-0 overflow-hidden border-r flex flex-col `}>
        {/* Hamburger */}
        <div className='grid place-items-center border-b'>
          <button
            className='p-4'
            onClick={() => {
              setIsSidebarClosed(!isSidebarClosed);
            }}
          >
            <Bars3Icon className='inline w-5 h-5' />
          </button>
        </div>

        <ul className='mt-6'>
          <li class='px-5'>
            <div class='flex flex-row items-center h-8'></div>
          </li>
          <SidebarItem icon={<HomeIcon className='icon-size' />} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} />
        </ul>
      </aside>

      {/* Open Sidebar */}
      <aside className={`${isSidebarClosed ? 'w-0' : 'w-64'} min-h-screen fixed left-0 overflow-hidden border-r flex flex-col`}>
        {/* Logo & Control */}
        <div className='flex justify-between items-center pl-4 border-b'>
          <h1>Media Manager</h1>
          <button
            className='p-4'
            onClick={() => {
              setIsSidebarClosed(!isSidebarClosed);
            }}
          >
            <ChevronLeftIcon className='inline w-4 h-4' />
          </button>
        </div>

        <ul className='overflow-y-scroll bg-red-100 h-screen custom-scrollbar'>
          <SidebarTitle title={'Menu'} />

          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Dashboard'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Discover'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Genre'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Dashboard'} />

          <hr className='my-6 mx-4' />

          <SidebarTitle title={'Library'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Trending'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Top Rated'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Coming Soon'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Dashboard'} />

          <hr className='my-6 mx-4' />

          <SidebarTitle title={'Library'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Trending'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Top Rated'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Coming Soon'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Dashboard'} />

          <hr className='my-6 mx-4' />

          <SidebarTitle title={'Library'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Trending'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Top Rated'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Coming Soon'} />
          <SidebarItem icon={<HomeIcon className='icon-size' />} text={'Dashboard'} />
        </ul>
      </aside>
    </>
  );
}
