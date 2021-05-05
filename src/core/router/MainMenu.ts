import { TFunction } from 'i18next';

interface Menu {
  label: string;
  path: string;
}

export const mainMenu = (t: TFunction): Menu[] => [
  {
    label: t('episodesIntersection'),
    path: '/',
  },
];
