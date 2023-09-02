type Props = {
  label?: String;
};

export default function SidebarHeading({ label }: Props) {
  return (
    <li className='px-5 mt-4 mb-2'>
      <p className='text-sm font-light tracking-wide text-gray-500'>{label}</p>
    </li>
  );
}
