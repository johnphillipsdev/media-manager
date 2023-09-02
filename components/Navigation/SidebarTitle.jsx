export default function SidebarTitle({ title }) {
  return (
    <li class='px-5 mt-4 mb-2'>
      <div class='flex flex-row items-center'>
        <div class='text-sm font-light tracking-wide text-gray-500'>{title}</div>
      </div>
    </li>
  );
}
