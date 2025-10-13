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
      role: 'National Gold Award,The 2024 ICPC China Kunming National Invitational Programming Contest',
      company: 'ICPC Foundation',
      image: import('@/assets/logos/acm-icpc.png'),
      dates: [new Date('2024-05'), null],
      description: `
        - This competition can be said to be the starting point of my programming competitions. 
        - It gives me a lot of confidence and advantages in the fultrue.
        - Not only did I further cultivate my innovative abilities, team spirit and collaboration skills, but I also developed the capacity to write programmes, analyse and solve problems under pressure.
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), think(), create(), users()],
      },
      links: [website({ url: 'https://icpc.global/' })],
    },
    {
      role: 'National Second Prize,The 16th Lan Qiao Cup C/C++ Programming Competition, University Group A',
      company: ' ',
      image: import('@/assets/logos/lanqiao.png'),
      dates: [new Date('2025-06'), null],
      description: `
        - The Blue Bridge Cup competition places greater emphasis on assessing fundamental coding skills, whilst its individual format allows for a more comprehensive demonstration of personal capabilities.
        - Moreover, the post-event standardised assessment approach it employs places heightened demands on the one-off accuracy and rigour of the code.
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), person()],
      },
      links: [website({ url: 'https://dasai.lanqiao.cn/' })],
    },
    {
      role: 'National First Prize,Programming Skills Competition of the RAICOM Contest',
      company: '',
      image: import('@/assets/logos/raicom.png'),
      dates: [new Date('2025-08'), null],
      description: `
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), person()],
      },
      links: [website({ url: 'https://www.raicom.com.cn/' })],
    },
    {
      role: 'National Third Prize,China College Computing Contest - Group Programming Ladder Tournament ',
      company: '',
      image: import('@/assets/logos/gplt.png'),
      dates: [new Date('2025-04'), null],
      description: `
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), person(), users()],
      },
      links: [website({ url: 'https://gplt.patest.cn/regulation' })],
    },
    {
      role: 'National Third Prize,CCF China Computer Application Technology Competition ',
      company: '',
      image: import('@/assets/logos/cat.png'),
      dates: [new Date('2025-08'), null],
      description: `
      `,
      tagsList: {
        title: 'Tags',
        tags: [c(), code(), users()],
      },
      links: [website({ url: 'https://cat.ccf.org.cn/' })],
    },

    {
      role: 'Piano Grade 10 Certificate ,China Musicians Association',
      company: '',
      image: import('@/assets/logos/music.png'),
      dates: [new Date('2015-08'), null],
      description: `
        - Note: An “amateur” Grade 10 piano certificate is merely the beginning of one's “performance” journey.
        - This is my first national certificate; moreover, I began practising from kindergarten onwards.
        - I performed a piano duet of Marche Militaire and the Carmen Overture in middle school and a solo of Clouds Chasing the Moon in high school, respectively.
      `,
      tagsList: {
        title: 'Tags',
        tags: [person()],
      },
      links: [website({ url: 'https://chnmusic.org.cn/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
