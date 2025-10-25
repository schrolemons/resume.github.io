import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-4.png'),
        title: 'SCHNIE:Seablue Revery',
        author: 'Lemons Schro',
        url: 'https://www.sch-nie.com/core/',
      },
      {
        image: import('@/assets/favorites/books/book-1.jpg'),
        title: 'Deep Dive into Competitive Programming',
        author: 'kkksc03',
        url: 'https://www.luogu.com.cn/discuss/979470',
      },
      {
        image: import('@/assets/favorites/books/book-2.png'),
        title: 'TERRA: A JOURNEY',
        author: 'Edgar Everett Erikson',
        url: 'https://prts.wiki/w/%E5%A4%A7%E5%9C%B0%E5%B7%A1%E6%97%85%EF%BC%9A%E3%80%8A%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E3%80%8B%E5%AE%98%E6%96%B9%E4%B8%96%E7%95%8C%E8%A7%82%E8%AE%BE%E5%AE%9A%E9%9B%86',
      },
      {
        image: import('@/assets/favorites/books/book-3.png'),
        title: 'The Art of Loving',
        author: 'Erich Fromm',
        url: 'https://www.bilibili.com/video/BV1HV411z7Lr/?vd_source=3f6309a98a89ba003f48ba58a398a6b6',
      },
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/alliy.jpg'),
        name: 'Alliy666',
        url: 'https://codeforces.com/profile/Alliy666',
      },
      {
        image: import('@/assets/favorites/people/orac1e.jpg'),
        name: 'Orac1e',
        url: 'https://orac1e.me',
      },
    ],
  },
  // videos: {
  //   title: 'Videos I watched',
  //   data: [
  //     {
  //       image: import('@/assets/favorites/videos/video-1.jpeg'),
  //       title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
  //       url: 'https://youtu.be/TqfbAXCCVwE',
  //     },
  //   ],
  // },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/schnie.jpeg'),
        title: '第九边缘SCHNIE',
        type: 'WeChat Public Account',
        url: '#',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
