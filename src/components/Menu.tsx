import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { type Link as LinkType, type Links, type Direction } from '@/types';

/**
 * Renders the Menu component.
 *
 * @param {object} props - The component props.
 * @param {Links} props.currentLinks - The current links.
 * @param {number} props.step - The step number.
 * @param {Function} props.handlePreviousArrowClick - The function to handle previous arrow click.
 * @param {Function} props.onClick - The function to handle link click.
 * @return {JSX.Element} The rendered Menu component.
 */
export const Menu = ({
  currentLinks,
  step,
  handlePreviousArrowClick,
  onClick,
}: {
  currentLinks: Links;
  step: number;
  handlePreviousArrowClick: () => void;
  onClick: (link: LinkType) => void;
}): JSX.Element => {
  const [direction, setDirection] = useState<Direction>('right');

  const handleDirection = (direction: Direction) => {
    setDirection(direction);
  };

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.ul
        className="w-60 bg-slate-50"
        key={step}
        initial={{
          opacity: 0,
          x: direction === 'left' ? -100 : 100,
          type: 'spring',
        }}
        animate={{ opacity: 1, x: 0, type: 'spring' }}
        exit={{
          opacity: 0,
          x: direction === 'left' ? 100 : -100,
          type: 'spring',
        }}
      >
        {step > 1 && (
          <span
            className="flex cursor-pointer p-4"
            onClick={() => {
              setDirection('left');
              handlePreviousArrowClick();
            }}
          >{`\u2190`}</span>
        )}
        {currentLinks &&
          currentLinks.map((link) => (
            <Link
              key={link.id}
              onClick={onClick}
              link={link}
              currentLinks={currentLinks}
              handleDirection={handleDirection}
            />
          ))}
      </motion.ul>
    </AnimatePresence>
  );
};
