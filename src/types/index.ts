export type Direction = 'left' | 'right';

export type Link = {
  id: number;
  title: string;
  link: string;
  submenu: Link[];
};

export type Links = Link[];

export type STEP_LINKS = {
  step: number;
  links: Link[];
};
