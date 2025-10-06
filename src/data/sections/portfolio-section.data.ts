import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {  github, website } from '../helpers/links';
import {
  nextJs,
  css,
  html,
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
        tags: [nextJs(), css(),html()],
      },
      links: [github({ url: 'https://github.com/schrolemons/' }), website({ url: 'https://zero.sch-nie.com' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
