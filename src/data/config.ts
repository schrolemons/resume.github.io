import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Lemons Schro - Pure World Explorer',
    description:
      "Welcome to my profile. I am currently pursuing a Bachelor's degree in Cyberspace Security at Jilin University and shall soon commence my Master's studies at the School of Computer Science and Technology, University of Science and Technology of China. My research within the USTC Intelligent Network and System Group (INT) will focus on distributed computing, including AI × Communications. I warmly invite you to engage in discussions on related fields.",
    faviconPath: '/src/assets/my-image.jpg',
  },
  pdf: {
    footer:
      'I hereby declare that the above information shall not be used without authorisation until I update this statement.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
