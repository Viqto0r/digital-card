interface ExperienceSeed {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  achievements: string[];
}

const experience: ExperienceSeed[] = [
  {
    company: 'Инфомаксимум',
    position: 'Frontend-разработчик (React, TypeScript)',
    startDate: new Date('2024-02-01'),
    endDate: null,
    achievements: [
      'Развивал визуальный low-code редактор сценариев: drag & drop, графовые структуры, сложные UI-состояния',
      'Развивал систему триггеров и маппинга данных для настройки бизнес-процессов',
      'Реализовывал сложную асинхронную логику и управление состоянием в высоконагруженных UI-компонентах',
      'Разработал DSL-редактор для E2E-тестов с подсветкой синтаксиса, автодополнением и запуском сценариев',
      'Участвовал в разработке AI-ассистента в продукте: чат-интерфейс, обработка сценариев, интеграция с backend',
      'Занимался редизайном и развитием корпоративных продуктов на Next.js',
      'Оптимизировал производительность интерфейсов (Lighthouse, рендеринг) и адаптировал их под мобильные устройства',
      'Координировал работу команды из двух разработчиков: декомпозиция задач, code review',
      'Использовал Claude Code для шаблонного кода, прототипов и рутинных задач',
    ],
  },
  {
    company: 'Агат',
    position: 'Программист',
    startDate: new Date('2023-05-01'),
    endDate: new Date('2024-02-01'),
    achievements: [
      'Развивал и поддерживал корпоративный интернет-магазин на PHP/Smarty',
      'Реализовал многоуровневую структуру категорий и подкатегорий товаров',
      'Сделал адаптивную версию магазина для мобильных устройств и планшетов',
      'Переработал сетку каталога и карточки товаров',
      'Добавил оформление заказа для товаров, которых нет на складе, и блок рекомендованных товаров',
      'Внедрил поддержку 3D-моделей в формате GLB на Three.js',
    ],
  },
];

export const profile = {
  name: 'Виктор Александров',
  description:
    'Frontend-разработчик (React, TypeScript, Next.js), 3,5 года опыта. Саранск, готов работать удалённо.',
  links: [
    { label: 'GitHub', url: 'https://github.com/Viqto0r' },
    { label: 'Email', url: 'mailto:viqto0r@gmail.com' },
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'MobX',
    'GraphQL',
    'WebSocket',
    'React-Diagrams',
    'Jest',
    'React Testing Library',
    'Three.js',
    'HTML5',
    'CSS3',
    'PHP',
    'Smarty',
    'SQL',
    'Git',
  ],
  experience,
  projects: [
    {
      name: 'Digital card backend',
      url: 'https://github.com/Viqto0r/digital-card',
    },
  ],
};
