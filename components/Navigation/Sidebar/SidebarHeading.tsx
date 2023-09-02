type Props = {
  label?: String;
};

export default function SidebarHeading({ label }: Props) {
  return (
    <li className='px-5 mt-4 mb-2'>
      <div className='flex flex-row items-center'>
        <div className='text-sm font-light tracking-wide text-gray-500'>
          {label}
        </div>
      </div>
    </li>
  );
}

/**
 * TODO LIST
 * - cleanup tailwind styles
 * - remove useless elements
 * - change styling
 */
