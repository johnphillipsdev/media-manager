export default function SidebarItem({ icon, text }) {
  return (
    <li>
      <a href='#' class='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
        <span class='inline-flex justify-center items-center ml-4'>{icon}</span>
        <span class='ml-2 text-sm tracking-wide truncate'>{text}</span>
      </a>
    </li>
  );
}
