'use client';

import GridLayout from '@/components/Layout/GridLayout';
import './globals.scss';

// Components
import Siderbar from '@/components/Layout/Siderbar';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  return (
    <html className={`overflow-x-clip ${isSidebarClosed ? 'overflow-y-auto' : 'overflow-y-hidden md:overflow-y-auto'}`} lang='en'>
      <body className='flex overflow-x-clip text-gray-800 custom-scrollbar'>
        <header>
          <Siderbar isSidebarClosed={isSidebarClosed} setIsSidebarClosed={setIsSidebarClosed} />
        </header>
        <GridLayout isSidebarClosed={isSidebarClosed}>{children}</GridLayout>
        <footer></footer>
      </body>
    </html>
  );
}
