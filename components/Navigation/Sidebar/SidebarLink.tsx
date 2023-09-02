import Link from 'next/link';

type SidebarLinkProps = {
  label?: string;
  link: String;
  icon: React.ReactElement;
  badgeText?: string;
  badgeColor?: string;
};

export default function SidebarLink({
  link,
  icon,
  label,
  badgeText,
  badgeColor,
}: SidebarLinkProps): JSX.Element {
  return (
    <li>
      <Link href={`${link}`} className='siderbar__item'>
        <span className='inline-flex justify-center items-center ml-4'>
          {icon}
        </span>
        <span className='ml-2 text-sm tracking-wide truncate'>{label}</span>
        {badgeText && (
          <span
            className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-${badgeColor}0 bg-${badgeColor} rounded-full`}
          >
            {badgeText}
          </span>
        )}
      </Link>
    </li>
  );
}

/**
 * TODO
 * - tidy component
 * - tidy useless styles
 */
