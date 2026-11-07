export const tagline =
  'Architecture decisions are bets. I make them explicit, test the risky ones, and write down what would change my mind.';

export const about = {
  lead: 'Most of the work happens before the code: naming the constraint that actually matters, laying the options side by side, and finding the cheapest way to check the riskiest assumption.',
  paragraphs: [
    "I'm Kaio, a software architect at Bloqit, where I design and build the platform behind its smart lockers. About a decade of hands-on engineering, from early-stage products to systems that have to keep running while the company grows. Current focus: distributed systems reliability, ML foundations, and AI engineering (foundation models, RAG, evaluation).",
    "Outside work I study the classics in public, one repository at a time. Away from the screen I'm usually lifting, training jiu-jitsu and MMA, or out for a run.",
  ],
};

export const howIWork = [
  'Quality attributes (latency, availability, cost) come first and drive the design.',
  'Significant decisions get a record: the options, the trade-offs, and the conditions for revisiting them.',
  'Risky assumptions get a prototype, a load test, or a fault-injection run before they get a roadmap.',
  'AI-assisted code goes through the same tests and review as any other change.',
];

export type Work = {
  title: string;
  href: string;
  author: string;
  book: string;
  description: string;
  tags: string[];
};

export const work: Work[] = [
  {
    title: 'Refactoring',
    href: 'https://github.com/kaiosilveira/refactoring',
    author: 'Fowler',
    book: 'Refactoring',
    description: "Fowler's 61 refactorings (2nd ed.) step by step, with diffs and tests.",
    tags: ['JavaScript', 'Testing'],
  },
  {
    title: 'Stability patterns',
    href: 'https://github.com/kaiosilveira/stability-patterns',
    author: 'Nygard',
    book: 'Release It!',
    description:
      'Release It! patterns in TypeScript, with load tests and fault injection for circuit breaker and let it crash.',
    tags: ['TypeScript', 'Reliability'],
  },
  {
    title: 'Design patterns',
    href: 'https://github.com/kaiosilveira/design-patterns',
    author: 'Gamma et al.',
    book: 'Design Patterns',
    description: 'All 23 GoF patterns in C#, with diagrams and tests.',
    tags: ['C#', 'OO design'],
  },
  {
    title: 'Test-driven development',
    href: 'https://github.com/kaiosilveira/test-driven-development',
    author: 'Beck',
    book: 'TDD by Example',
    description: "Beck's TDD by Example, one pull request per chapter.",
    tags: ['JavaScript', 'TDD'],
  },
];

export const comingSoon = {
  title: 'Architecture katas',
  description: 'Case studies on event-driven systems, AI and ML platforms, and legacy modernization.',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/kaiosilveira', handle: 'github.com/kaiosilveira' },
  {
    label: 'CV / LinkedIn',
    href: 'https://www.linkedin.com/in/kaio-silveira/',
    handle: 'linkedin.com/in/kaio-silveira',
  },
  { label: 'Medium', href: 'https://medium.com/@kaiosilveira', handle: '@kaiosilveira' },
  { label: 'X', href: 'https://twitter.com/kaio_dev', handle: '@kaio_dev' },
];
