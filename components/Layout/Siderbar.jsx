import SidebarItem from '../Navigation/SidebarItem';

// Libraries
import {
  Bars3Icon,
  HomeIcon,
  ChevronLeftIcon,
  FireIcon,
  StarIcon,
  FilmIcon,
  ListBulletIcon,
  PlayIcon,
  BookOpenIcon,
  SparklesIcon,
  TicketIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline';
import SidebarTitle from '../Navigation/SidebarTitle';

export default function Siderbar({ isSidebarClosed, setIsSidebarClosed }) {
  return (
    <>
      <aside
        className={`${
          isSidebarClosed ? 'w-16' : 'w-0'
        } min-h-screen fixed left-0 overflow-hidden border-r flex flex-col `}
      >
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

      <aside
        className={`${
          isSidebarClosed ? 'w-0' : 'w-64'
        } min-h-screen fixed left-0 overflow-hidden border-r flex flex-col`}
      >
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

        <ul className='overflow-y-scroll h-screen custom-scrollbar'>
          <SidebarTitle title={'Discover'} />

          <SidebarItem
            icon={<HomeIcon className='icon-size' />}
            text={'Dashboard'}
          />
          <SidebarItem
            icon={<SparklesIcon className='icon-size' />}
            text={'Discover'}
          />
          <SidebarItem
            icon={<RectangleStackIcon className='icon-size' />}
            text={'Genres'}
            badgeText={'Upcoming'}
            badgeColor={'indigo-50'}
          />

          <hr className='my-6 mx-4' />

          <SidebarTitle title={'Library'} />
          <SidebarItem
            icon={<FireIcon className='icon-size' />}
            text={'Trending'}
          />
          <SidebarItem
            icon={<StarIcon className='icon-size' />}
            text={'Top Rated'}
          />
          <SidebarItem
            icon={<TicketIcon className='icon-size' />}
            text={'In Cinemas'}
          />

          <hr className='my-6 mx-4' />

          <SidebarTitle title={'Profile Lists'} />
          <SidebarItem
            icon={<FilmIcon className='icon-size' />}
            text={'Watch List'}
            badgeText={'New'}
            badgeColor={'green-50'}
          />
          <SidebarItem
            icon={<BookOpenIcon className='icon-size' />}
            text={'Reading List'}
            badgeText={'Upcoming'}
            badgeColor={'indigo-50'}
          />
          <SidebarItem
            icon={<PlayIcon className='icon-size' />}
            text={'Gaming List'}
            badgeText={'Upcoming'}
            badgeColor={'indigo-50'}
          />
        </ul>
      </aside>
    </>
  );
}
