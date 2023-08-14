import { useEffect, useMemo, useState } from 'react';
import { type Links } from '@/types';

/**
 * Returns a tuple containing the submenu and a boolean indicating whether the submenu has items or not.
 *
 * @param {string} link - The link to search for in the 'links' array.
 * @param {Links} links - The array of links to search through.
 * @returns {[Links | undefined, boolean]} - A tuple containing the submenu and a boolean indicating whether the submenu has items or not.
 */
export const useSubmenu = (link: string, links: Links) => {
  const [submenu, setSubmenu] = useState<Links | undefined>(undefined);
  const hasSubmenu = useMemo(() => !!submenu?.length, [submenu]);

  useEffect(() => {
    if (!links) return;
    const foundLink = links.find((m) => m.link === link);
    setSubmenu(foundLink?.submenu);
  }, [link, links]);

  return [submenu, hasSubmenu] as const;
};
