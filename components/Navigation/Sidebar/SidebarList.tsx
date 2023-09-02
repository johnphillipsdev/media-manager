// COMPONENTS
import SidebarHeading from './SidebarHeading';
import SidebarLink from './SidebarLink';

// ICONS
import {
  BookOpenIcon,
  FilmIcon,
  FireIcon,
  HomeIcon,
  PlayIcon,
  RectangleStackIcon,
  SparklesIcon,
  StarIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

const sidebarItems = [
  // DISCOVER BLOCK
  { type: 'heading', label: 'Discover' },
  {
    type: 'link',
    link: '#',
    label: 'Dashboard',
    icon: <HomeIcon className='icon__size' />,
  },
  {
    type: 'link',
    link: '#',
    label: 'Discover',
    icon: <SparklesIcon className='icon__size' />,
  },
  {
    type: 'link',
    link: '#',
    label: 'Genres',
    icon: <RectangleStackIcon className='icon__size' />,
    badgeColor: 'indigo-50',
    badgeText: 'Upcoming',
  },

  // LIBRARY BLOCK
  { type: 'heading', label: 'Library' },
  {
    type: 'link',
    link: '#',
    label: 'Trending',
    icon: <FireIcon className='icon__size' />,
  },
  {
    type: 'link',
    link: '#',
    label: 'Top Rated',
    icon: <StarIcon className='icon__size' />,
  },
  {
    type: 'link',
    link: '#',
    label: 'In Cinemas',
    icon: <TicketIcon className='icon__size' />,
    badgeColor: 'green-50',
    badgeText: 'New',
  },

  // PROFILE BLOCK
  { type: 'heading', label: 'Profile Lists' },
  {
    type: 'link',
    link: '#',
    label: 'Trending',
    icon: <FilmIcon className='icon__size' />,
    badgeColor: 'indigo-50',
    badgeText: 'New',
  },
  {
    type: 'link',
    link: '#',
    label: 'Top Rated',
    icon: <BookOpenIcon className='icon__size' />,
    badgeColor: 'indigo-50',
    badgeText: 'Upcoming',
  },
  {
    type: 'link',
    link: '#',
    label: 'In Cinemas',
    icon: <PlayIcon className='icon__size' />,
    badgeColor: 'indigo-50',
    badgeText: 'Upcoming',
  },
];

export function SidebarList(): JSX.Element {
  const menuElements = sidebarItems.map(
    ({ type, label, link, icon, badgeColor, badgeText }, index) => {
      return type === 'link' ? (
        <SidebarLink
          key={index}
          label={label}
          link={link}
          icon={icon}
          badgeColor={badgeColor}
          badgeText={badgeText}
        />
      ) : (
        <>
          <hr className='my-6 mx-4' />
          <SidebarHeading key={index} label={label} />
        </>
      );
    }
  );
  return (
    <ul className='sidebar__list overflow-y-scroll h-screen custom__scrollbar'>
      {menuElements}
    </ul>
  );
}

export function SidebarMobileList(): JSX.Element {
  const menuElements = sidebarItems.map(({ type, link, icon }, index) => {
    return type === 'link' ? (
      <SidebarLink key={index} link={link} icon={icon} />
    ) : (
      <>
        <hr className='my-6 mx-4' />
      </>
    );
  });
  return (
    <ul className='sidebar__list overflow-y-scroll h-screen custom__scrollbar mt-6'>
      {menuElements}
    </ul>
  );
}
