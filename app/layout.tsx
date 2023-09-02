'use client';
import './globals.scss';

import GridLayout from '../components/Layout/GridLayout';
import Siderbar from '../components/Layout/Siderbar';
import SidebarContextProvider from '../context/SiderbarContext';

// Components
import { useContext, useState } from 'react';

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
