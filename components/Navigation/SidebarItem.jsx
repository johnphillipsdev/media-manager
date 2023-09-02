export default function SidebarItem({ icon, text, badgeText, badgeColor }) {
  return (
    <li>
      <a href='#' class='sidebar-item'>
        <span class='inline-flex justify-center items-center ml-4'>{icon}</span>
        <span class='ml-2 text-sm tracking-wide truncate'>{text}</span>
        {badgeText && (
          <span
            className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-${badgeColor}0 bg-${badgeColor} rounded-full`}
          >
            {badgeText}
          </span>
        )}
      </a>
    </li>
  );
}
