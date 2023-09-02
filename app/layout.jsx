'use client';

import GridLayout from '@/components/Layout/GridLayout';
import './globals.scss';

// Components
import Siderbar from '@/components/Layout/Siderbar';
import { useContext, useState } from 'react';
import SidebarContextProvider, {
  SidebarContext,
} from '@/context/SiderbarContext';

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
