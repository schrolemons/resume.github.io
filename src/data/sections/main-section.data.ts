import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

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
    downloadedFileName: 'CV-Mark_Freeman.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
