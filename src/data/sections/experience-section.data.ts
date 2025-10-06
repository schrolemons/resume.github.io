import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {  website } from '../helpers/links';
import {
c,code,think,create,users,person
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Competition & Job Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'National Gold Award,The 49th ACM-ICPC International Collegiate Programming Contest - National Invitational Tournament (Kunming)',
      company: '',
      image: import('@/assets/logos/acm-icpc.png'),
      dates: [new Date('2024-05'), null],
      description: `
     `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), think(), create(), users()],
      },
      links: [website({ url: 'https://icpc.global/' })],
    },
    {
      role: 'Second Prize,The 16th Blue Bridge Cup C/C++ Programming Competition, University Group A',
      company: ' ',
      image: import('@/assets/logos/lanqiao.png'),
      dates: [new Date('2025-06'), null],
      description: `
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(),person()],
      },
      links: [website({ url: 'https://dasai.lanqiao.cn/' })],
    },
    {
      role: 'First Prize,Programming Skills Competition of the RAICOM Contest',
      company: '',
      image: import('@/assets/logos/raicom.png'),
      dates: [new Date('2025-08'), null],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(),person()],
      },
      links: [website({ url: 'https://www.raicom.com.cn/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
