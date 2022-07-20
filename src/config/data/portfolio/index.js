import {
  AgScout1,
  AgScout2,
  Agsales,
  Superlender1,
  Superlender2,
  Toni,
  Ecommerce,
  Pokemon,
  Theril1,
  Theril2
} from '../../../images';

export const portfolioData = [
  {
    id: 1,
    name: "Agsales Backoffice",
    description:
      "Agsales backoffice is a CROWDE web app for displaying contract, leads, comodity, etc.",
    role: 'Frontend Engineer',
    stack: 'React Typescript',
    demo: "https://leads-sandbox.crowde.co/",
    image: [Agsales],
  },
  {
    id: 2,
    name: 'AgScout Backoffice',
    description:
      'AgScout backoffice is a CROWDE web app for assign tasks, displaying task lists, monitoring, version control app, dashboard data, etc.',
    role: 'Frontend Engineer',
    stack: 'React JS',
    demo: 'https://agent.crowde.co/',
    image: [AgScout1, AgScout2],
  },
  {
    id: 3,
    name: 'Superlender',
    description:
      'Superlender is a CROWDE web app for funding into several projects.',
    role: 'Frontend Engineer',
    stack: 'React JS',
    demo: 'https://superlender-sandbox.crowde.co/',
    image: [Superlender1, Superlender2],
  },
  {
    id: 4,
    name: 'Toni CMS',
    description:
      'Toni CMS is a CROWDE web app for viewing farmer store.',
    role: 'Frontend Engineer',
    stack: 'React JS',
    image: [Toni],
  },
  {
    id: 5,
    name: 'Pokemon',
    description:
      'Pokemon web app is a web that display pokemon card.',
    role: 'Frontend Engineer',
    demo: 'https://pokemon-tcg-new.web.app/',
    stack: 'React JS',
    image: [Pokemon],
  },
  {
    id: 6,
    name: 'Ecommerce',
    description:
      'Ecommerce web app is a web that show stuff that can be buy by user.',
    role: 'Frontend Engineer',
    demo: 'https://ecommerce-980c6.web.app/login',
    stack: 'Vue',
    image: [Ecommerce],
  },
  {
    id: 7,
    name: 'Theril',
    description:
      'Theril is a game web app for multiplayer.',
    role: 'Fullstack',
    demo: 'https://theril-518ea.web.app/',
    stack: 'Vue, Web Socket',
    image: [Theril1, Theril2],
  },
];
