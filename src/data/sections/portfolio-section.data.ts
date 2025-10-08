import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {  github, website } from '../helpers/links';
import {
  nextJs,
  css,
  html,
  code,
  c,
  c2,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects & Webs',
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
        { label: 'Tools', value: ['Hexo', 'npm', 'Github', 'Vercel'] },
        { label: 'Category', value: ['Personal blog', 'Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/', url: '#' }],
      screenshots: [
        { src: import('@/assets/portfolio/zero.png'), alt: 'www.sch-nie.com' },
        { src: import('@/assets/portfolio/world.png'), alt: 'world.sch-nie.com' },
        { src: import('@/assets/portfolio/blog.png'), alt: 'blog.sch-nie.com' },
      ],
      description:
        '&emsp;&emsp;I have divided my personal blog into three sections: the main site and core content, personal information and learning experiences, and fictional world-building.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), css(), html()],
      },
      links: [github({ url: 'https://github.com/schrolemons/' }), website({ url: 'https://www.sch-nie.com' })],
    },
    {
      name: 'Astro CV',
      image: import('@/assets/logos/astro.png'),
      dates: [new Date('2025-10'), null],
      details: [
        { label: 'CV Count', value: '1 main' },
        { label: 'Theme', value: ['Devscard'] },
        { label: 'Tools', value: ['Astro', 'npm', 'Github', 'Vercel'] },
        { label: 'Category', value: ['Personal resume', 'Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/resume', url: '#' }],
      description:
        '&emsp;&emsp;This is my personal resume. As you can see, even if a class cannot contain itself, containing a pointer to itself is a simple matter.',
      tagsList: {
        title: 'Technologies',
        tags: [html()],
      },
      links: [github({ url: 'https://github.com/schrolemons/resume' }), website({ url: 'https://resume.sch-nie.com' })],
    },
    {
      name: 'Unity-3D_FPS',
      image: import('@/assets/logos/unity.png'),
      dates: [new Date('2025-03'), null],
      details: [
        { label: 'Tools', value: ['Unity', 'Visual Studio 2022'] },
        { label: 'Category', value: ['Personal entertainment'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/3D_FPS', url: '#' }],

      description:
        '&emsp;&emsp;The School of Computer Science and Technology at Jilin University has partnered with Dalian Neusoft Ruidao Education Information Technology Co., Ltd. and Liaoning Xinyun Zhichuang Technology Co., Ltd. to establish a Unity enterprise training programme.',
      tagsList: {
        title: 'Technologies',
        tags: [c2(), code()],
      },
      links: [github({ url: 'https://github.com/schrolemons/3D_FPS' })],
    },
    {
      name: 'Mahjong AI Battle Program',
      image: import('@/assets/logos/ecode.png'),
      dates: [new Date('2024-04'), null],
      details: [
        { label: 'Team', value: '2 members' },
        { label: 'Tools', value: ['Windows', 'Clion', 'BotZone'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://e.coding.net/g-ocbn7685/mahjong/Mahjong.git', url: '#' }],

      description:
        '&emsp;&emsp;The project developed a mahjong bot programme for the Botzone platform, employing search, pruning, and evaluation strategies to realise an AI mahjong combat system capable of operating under conditions of opaque information and complex game states.',
      tagsList: {
        title: 'Technologies',
        tags: [c(), code()],
      },
      links: [website({ url: 'https://e.coding.net/g-ocbn7685/mahjong/Mahjong.git' })],
    },
    {
      name: 'Waline Comment System',
      image: import('@/assets/logos/waline.png'),
      dates: [new Date('2024-09'), null],
      details: [
        { label: 'Tools', value: ['Waline', 'Github'] },
        { label: 'Category', value: ['Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/remark', url: '#' }],

      description:
        "&emsp;&emsp;I've implemented the Waline commenting system, which is free and straightforward to set up.",
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [github({ url: 'https://github.com/schrolemons/remark' }), website({ url: 'https://remark.sch-nie.com' })],
    },
    {
      name: 'Uptimeflare',
      image: import('@/assets/logos/cloud.jpg'),
      dates: [new Date('2025-010'), null],
      details: [
        { label: 'Tools', value: ['Cloudflare', 'Github'] },
        { label: 'Category', value: ['Open source'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/schrolemons/monitor', url: '#' }],

      description:
        '&emsp;&emsp;A project hosted on Cloudflare that enables website monitoring without requiring a server.',
      tagsList: {
        title: 'Technologies',
        tags: [],
      },
      links: [github({ url: 'https://github.com/schrolemons/monitor' }), website({ url: 'monitor.sch-nie.com' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
