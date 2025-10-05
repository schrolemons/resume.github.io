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
    { label: 'Wexin', value: 'schrolemons' },
    { label: 'Email', value: 'schrolemons@foxmail.com' },
    { label: 'From', value: 'Hunan,China' },
    { label: 'NOW', value: 'Jilin,China' },
  ],
  pdfDetails: [
    { label: 'Wexin', value: 'schrolemons' },
    { label: 'Email', value: 'schrolemons@foxmail.com' },
    { label: 'GitHub', value: '/schrolemons', url: 'https://github.com' },
    { label: 'Website', value: 'resume.sch-nie.com', url: '/', fullRow: true },
  ],
  description:
    "&emsp;&emsp;Welcome to my profile. I am currently pursuing a degree in Cyberspace Security at Jilin University and shall soon commence my Master's studies at the School of Computer Science and Technology, University of Science and Technology of China." +
    '\n' +
    ' &emsp;&emsp;My research within the USTC Intelligent Network and System Group (INT) will focus on distributed computing, including AI × Communications. I warmly invite you to engage in discussions on related fields.',
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
