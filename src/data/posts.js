export const posts = [
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
