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
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/person-1.jpg'),
        name: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/',
      },
      {
        image: import('@/assets/favorites/people/person-2.jpeg'),
        name: 'Kent Beck',
        url: 'https://www.kentbeck.com/',
      },
      {
        image: import('@/assets/favorites/people/person-3.jpeg'),
        name: 'Eric Evans',
        url: 'https://www.domainlanguage.com/',
      },
      {
        image: import('@/assets/favorites/people/person-4.jpeg'),
        name: 'Martin Fowler',
        url: 'https://martinfowler.com/',
      },
      {
        image: import('@/assets/favorites/people/person-5.jpg'),
        name: 'Robert C. Martin',
        url: 'http://cleancoder.com/',
      },
      {
        image: import('@/assets/favorites/people/person-6.jpeg'),
        name: 'Adam Dymitruk',
        url: 'https://eventmodeling.org/',
      },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
