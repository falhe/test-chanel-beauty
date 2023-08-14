import { useSubmenu } from '@/hooks/useSubmenu';
import { type Link as LinkType, type Direction } from '@/types';

/**
 * Renders a single link item.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - link {LinkType}: The link object to render.
 *   - currentLinks {LinkType[]}: The array of all link objects.
 *   - onClick {Function}: The callback function to handle link click.
 *   - handleDirection {Function}: The callback function to handle direction change.
 * @return {JSX.Element} The rendered link item.
 */
export const Link = ({
  link,
  onClick,
  currentLinks,
  handleDirection,
}: {
  link: LinkType;
  currentLinks: LinkType[];
  onClick: (link: LinkType) => void;
  handleDirection: (direction: Direction) => void;
}): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, hasSubmenu] = useSubmenu(link.link, currentLinks);

  const handleClick = () => {
    if (hasSubmenu) {
      handleDirection('right');
      onClick(link);
    }
  };

  return (
    <li
      key={link.id}
      className="flex cursor-pointer justify-between p-4 hover:bg-blue-100 hover:transition-all"
      onClick={handleClick}
    >
      <span>{link.title}</span>
      {hasSubmenu && (
        <span className="text-gray-400 hover:text-gray-800">{'\u2192'}</span>
      )}
    </li>
  );
};
