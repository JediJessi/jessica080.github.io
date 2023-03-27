// gitprofile.config.js

const config = {
  github: {
    username: 'jessica080', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false,
      projects: [],
    },
  },
  social: {
    linkedin: 'jéssica-alves-950a671a1',
    twitter: '',
    facebook: '',
    instagram: '_jessica_alves__',
    dribbble: '',
    behance: '',
    stackoverflow: '', // format: userid/username
    website: 'https://jessica080.github.io',
    phone: '+55 (11) 99222-4130',
    email: 'pro.jessicaalves@gmail.com',
  },
  resume: {
    fileUrl: 'Profile.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'TypeScript',
    'MySQL',
    'Git',
    'CSS',
    'Sass',
    'Gulp',
    'Trello',
  ],
  experiences: [
    {
      company: 'Grupo Akrk',
      position: 'Assistente Operacional',
      from: 'Jul 2021',
      to: 'Ago 2022',
      companyLink: 'https://grupoakrk.com.br',
    },
  ],
  education: [
    {
      institution: 'Unicid',
      degree: 'Graduação, Análise e Desenvolvimento de Sistemas',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Youtube Willian Justenx',
      degree: 'Mini-curso de TypeScript',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Rocketseat',
      degree: 'Trilha Conectar (Fundamentos de Lógica)',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Udemy',
      degree: 'React do Zero a Maestria Com (Hooks, Router, APIs e Projetos)',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Dio',
      degree: 'Introdução à Programação e Pensamento Computacional',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Udemy',
      degree: 'Desenvolvimento Web Completo 2022',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'Etec',
      degree: 'Ensino Médio',
      from: '2017',
      to: '2019',
    },
  ],
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-0F1ZGQBBTD', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3272304',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dracula'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
