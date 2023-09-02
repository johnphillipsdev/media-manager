import { SidebarContext } from '@/context/SiderbarContext';
import Header from './Header';
import { useContext } from 'react';

export default function GridLayout({ children }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <main
      className={`relative w-full ${
        isSidebarOpen
          ? 'ml-16'
          : 'translate-x-[256px] md:translate-x-0 md:ml-64'
      } transition-all`}
    >
      <Header />
      {children}
    </main>
  );
}
