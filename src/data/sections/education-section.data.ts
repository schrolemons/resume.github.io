import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'University of Science and Technology of China',
      institution: 'Computer Science and Technology',
      image: import('@/assets/logos/ustc.jpg'),
      dates: [new Date('2026.09'), new Date('2029.06')],
      description: 'Master degree. ',
      links: [website({ url: 'https://www.ustc.edu.cn/' })],
    },
    {
      title: 'Jilin University ',
      institution: 'Cyberspace Security',
      image: import('@/assets/logos/JLU.jpg'),
      dates: [new Date('2022.09'), new Date('2026.06')],
      description: "Bachelor's degree. ",
      links: [website({ url: 'https://www.jlu.edu.cn/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
