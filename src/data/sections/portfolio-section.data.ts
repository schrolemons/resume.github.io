import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {  github, website } from '../helpers/links';
import {
  nextJs,
  css,
  html,
  code,
  c,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Hexo Blog',
      image: import('@/assets/logos/hexo.jpg'),
      dates: [new Date('2024-09'), null],
      details: [
        { label: 'Blog Count', value: '3 main' },
        { label: 'Theme', value: ['Butterfly', 'nexT', 'Cactus'] },
        { label: 'Team', value: 'None' },
        { label: 'Category', value: ['Personal blog', 'Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/', url: '#' }],
      screenshots: [
        { src: import('@/assets/portfolio/zero.png'), alt: 'zero.sch-nie.com' },
        { src: import('@/assets/portfolio/world.png'), alt: 'world.sch-nie.com' },
        { src: import('@/assets/portfolio/blog.png'), alt: 'blog.sch-nie.com' },
      ],
      description:
        'I have divided my personal blog into three sections: the main site and core content, personal information and learning experiences, and fictional world-building.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), css(), html()],
      },
      links: [github({ url: 'https://github.com/schrolemons/' }), website({ url: 'https://zero.sch-nie.com' })],
    },
    {
      name: 'Waline Comment System',
      image: import('@/assets/logos/waline.png'),
      dates: [new Date('2024-09'), null],
      details: [
        { label: 'Team', value: 'None' },
        { label: 'Category', value: ['Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/remark', url: '#' }],

      description: "I've implemented the Waline commenting system, which is free and straightforward to set up.",
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [github({ url: 'https://github.com/schrolemons/remark' }), website({ url: 'https://remark.sch-nie.com' })],
    },
    {
      name: 'Unity-3D_FPS',
      image: import('@/assets/logos/unity.png'),
      dates: [new Date('2025-03'), null],
      details: [
        { label: 'Team', value: 'None' },
        { label: 'Category', value: [' '] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/3D_FPS', url: '#' }],

      description: ' ',
      tagsList: {
        title: 'Technologies',
        tags: [code()],
      },
      links: [github({ url: 'https://github.com/schrolemons/3D_FPS' })],
    },
    {
      name: 'Mahjong AI Battle Program',
      image: import('@/assets/logos/ecode.png'),
      dates: [new Date('2024-04'), null],
      details: [
        { label: 'Team', value: '3' },
        { label: 'Category', value: [' '] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://e.coding.net/g-ocbn7685/mahjong/Mahjong.git', url: '#' }],

      description: ' ',
      tagsList: {
        title: 'Technologies',
        tags: [c(),code()],
      },
      links: [website({ url: 'https://e.coding.net/g-ocbn7685/mahjong/Mahjong.git' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
