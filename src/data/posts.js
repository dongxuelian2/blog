export const posts = [
  {
    slug: 'zhouyi-abc-conjecture',
    title: '周易六十四卦直断甲乙丙三数根命：兼证西人所谓 abc 猜想',
    date: '2026-07-27',
    excerpt: '一篇以《周易》六十四卦解读 abc 猜想及甲、乙、丙三数关系的文章。',
    tags: ['yi-jing', 'mathematics', 'essay'],
    pdfPath: 'articles/zhouyi-abc-conjecture.pdf',
    content: [
      '本文从卦序、卦象与爻义出发，讨论甲、乙、丙三数关系及 abc 猜想的另一种解读路径。',
      '全文以 PDF 形式发布，正文、页码与原有注释均已保留。',
    ],
  },
  {
    slug: 'sexual-selection-preference-modeling',
    title: '性选择偏好的形成机制：费希尔过程的前置条件与生物建模',
    date: '2026-05-26',
    excerpt: '把性选择偏好视为可建模的多维权重系统，讨论偏好形成、选择反馈与群体性状分布之间的关系。',
    tags: ['biology', 'modeling', 'sexual-selection'],
    pdfPath: 'articles/sexual-selection-preference-modeling.pdf',
    content: [
      '本文把性选择偏好作为一个生物建模问题处理：偏好如何形成，如何影响选择，选择又如何反馈到群体性状分布之中。',
      '文章从费希尔过程的前置条件出发，将偏好拆解为可建模的权重向量，并讨论遗传、发育、经验学习与文化环境共同作用的可能路径。',
      'PDF 版本保留正文注释与脚注，并已移除首页个人信息。',
    ],
  },
  {
    slug: 'shipping-first-post',
    title: 'Shipping the First Version of This Blog',
    date: '2026-04-16',
    excerpt: 'How I scoped the smallest possible release and still kept quality high.',
    tags: ['product', 'frontend', 'planning'],
    content: [
      'This first version is intentionally simple. It focuses on reading posts clearly and navigating with as little friction as possible.',
      'I chose to start with static mock data, then split UI into small reusable pieces so future data sources can plug in without rewriting pages.',
      'The next milestone is search and filtering by tags, but I wanted to launch quickly with a reliable baseline first.',
    ],
  },
  {
    slug: 'designing-for-reading',
    title: 'Designing a Blog That Is Comfortable to Read',
    date: '2026-04-12',
    excerpt: 'A few layout and typography choices that make long posts easier to scan.',
    tags: ['design', 'ux', 'typography'],
    content: [
      'Readable line length and consistent spacing matter more than flashy UI when your product is mostly text.',
      'I used a centered content column and high contrast in both light and dark themes to improve legibility.',
      'Small, predictable navigation elements keep the focus on the article itself.',
    ],
  },
  {
    slug: 'dark-mode-without-overthinking',
    title: 'Dark Mode Without Overthinking It',
    date: '2026-04-05',
    excerpt: 'A practical localStorage-based approach to theme persistence in React.',
    tags: ['react', 'accessibility', 'theming'],
    content: [
      'A theme toggle does not need a complex state manager. A custom hook with localStorage is enough for many projects.',
      'I apply the theme on the document root to simplify CSS and avoid style duplication.',
      'The implementation remains easy to test and reason about because all theme logic lives in one place.',
    ],
  },
]
