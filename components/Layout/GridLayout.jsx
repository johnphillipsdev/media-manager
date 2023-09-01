import Header from './Header';

export default function GridLayout({ children, isSidebarClosed }) {
  return (
    <main className={`relative w-full ${isSidebarClosed ? 'ml-16' : 'translate-x-[256px] md:translate-x-0 md:ml-64'} transition-all`}>
      <Header />
      {children}
    </main>
  );
}
