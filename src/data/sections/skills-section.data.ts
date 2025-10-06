import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { c, python, mongoDb, nextJs,css } from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        c({
          level: 5,
          description:
            'Achieved 415/500 points in the CCF-CSP Computer Software Capability Certification, ranking within the top 0.6% nationally.',
        }),
        python({
          level: 1,
        }),
      ],
    },
    {
      title: 'I want to learn（Provisional）',
      skills: [mongoDb(), nextJs(),css()],
    },
    {
      title: 'language',
      skills: [
        { icon: 'circle-flags:cn', name: 'Chinese - native' },
        { icon: 'circle-flags:us', name: 'English - CET6:540' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
