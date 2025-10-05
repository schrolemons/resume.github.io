import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {  website } from '../helpers/links';
import {
react
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Competition Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'The 49th ACM-ICPC International Collegiate Programming Contest - National Invitational Tournament (Kunming)',
      company: 'National Gold Award',
      image: import('@/assets/logos/acm-icpc.png'),
      dates: [new Date('2024-05'), null],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react()],
      },
      links: [ website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
