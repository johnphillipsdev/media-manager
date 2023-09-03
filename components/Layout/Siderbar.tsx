// CONTEXT
import { useContext } from 'react';
import { SidebarContext } from '../../context/SiderbarContext';

// COMPONENTS
import {
  SidebarList,
  SidebarMobileList,
} from '../Navigation/Sidebar/SidebarList';

// ICONS
import { Bars3Icon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function Siderbar(): JSX.Element {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <aside
        className={`
        ${isSidebarOpen ? 'w-16' : 'w-0'} 
        min-h-screen fixed left-0 overflow-hidden border-r flex flex-col `}
      >
        <div className='grid place-items-center border-b'>
          <button className='p-4' onClick={toggleSidebar}>
            <Bars3Icon className='inline w-5 h-5' />
          </button>
        </div>

        <SidebarMobileList />
      </aside>

      <aside
        className={`${
          isSidebarOpen ? 'w-0' : 'w-64'
        } min-h-screen fixed left-0 overflow-hidden border-r flex flex-col`}
      >
        <div className='flex justify-between items-center pl-4 border-b'>
          <h1 className='uppercase font-bold'>Media Manager</h1>
          <button
            className='p-4'
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <ChevronLeftIcon className='inline w-5 h-5' />
          </button>
        </div>

        <SidebarList />
      </aside>
    </>
  );
}
