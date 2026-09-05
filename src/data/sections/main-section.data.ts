import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { bilibili, github, steam } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Lemons Schro',
  role: 'Pure World Explorer',
  details: [
    { label: 'Wechat', value: 'schrolemons' },
    { label: 'Email', value: 'schrolemons@foxmail.com' },
    { label: 'Hometown', value: 'Hunan,China' },
    { label: 'Now', value: 'Anhui,China' },
  ],
  pdfDetails: [
    { label: 'Wechat', value: 'schrolemons' },
    { label: 'Email', value: 'schrolemons@foxmail.com' },
    { label: 'GitHub', value: '/schrolemons', url: 'https://github.com' },
    { label: 'Website', value: 'resume.sch-nie.com', url: '/', fullRow: true },
  ],
  description:
    "&emsp;&emsp;Welcome to my personal page. I am currently pursuing a research-based master's degree in Computer Science and Technology at the University of Science and Technology of China (USTC), and I completed my undergraduate studies in Cyberspace Security at Jilin University. " +
    '\n' +
    " &emsp;&emsp;My primary research area at the Intelligent Networks and Systems Laboratory (INT Lab) at the University of Science and Technology of China (USTC) is network intelligence, with a specific focus on the deployment optimisation of small models. I would be delighted to discuss topics related to this field with you.",
  tags: [{ name: 'ACM "Amateur"' }, { name: 'Lover of fictional worlds' }, { name: 'Continuous balanced learner' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Schro_Lemons.pdf',
  },
  links: [
    bilibili({ url: 'https://space.bilibili.com/437533062?spm_id_from=333.1007.0.0' }),
    github({ url: 'https://github.com/schrolemons' }),
    steam({ url: 'https://steamcommunity.com/profiles/76561199550506404/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
