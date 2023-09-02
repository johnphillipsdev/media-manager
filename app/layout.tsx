'use client';

// IMPORTS
import './globals.scss';

// CONTEXT
import SidebarContextProvider from '../context/SiderbarContext';

// COMPONENTS
import GridLayout from '../components/Layout/GridLayout';
import Siderbar from '../components/Layout/Siderbar';

export default function RootLayout({ children }) {
  return (
    <SidebarContextProvider>
      <html lang='en'>
        <body className='flex overflow-x-clip text-gray-800 custom-scrollbar'>
          <header>
            <Siderbar />
          </header>
          <GridLayout>{children}</GridLayout>
          <footer></footer>
        </body>
      </html>
    </SidebarContextProvider>
  );
}
