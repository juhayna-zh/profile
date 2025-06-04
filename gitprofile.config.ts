// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'juhayna-zh', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Repo',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: "Projects I've worked on",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Qinyue Large Music Model',
          description:
            'Qinyue Large Music Model is an AI music generation system developed by Tencent AI lab and Tencent Music Entertainment Group (TME). You can click this block to view the details by trying this AI model and learn about our contributions.',
          imageUrl:
            'https://img.freepik.com/premium-vector/seamless-pattern-music-instruments-equipment-electronics-icons_48369-12781.jpg',
          link: 'https://ailab.tencent.com/ailab/en/news/detial/?id=143',
        },
        {
          title: 'SLAM-LLM',
          description:
            'SLAM-LLM is a deep learning toolkit that allows researchers and developers to train custom multimodal large language model (MLLM), focusing on Speech, Language, Audio, Music processing. In this project, I contributed the code for the music captioning task.',
          imageUrl:
            'https://img.freepik.com/premium-vector/alpaca-background_23-2147877348.jpg',
          link: 'https://github.com/X-LANCE/SLAM-LLM',
        },
      ],
    },
  },
  seo: {
    title: 'Haina Zhu | Profile',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'medium.com/@juhayna',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '', // https://www.arifszn.com
    phone: '',
    email: 'hainazhu@sjtu.edu.cn',
    zhihu: '',
    bilibili: '636526505',
  },
  resume: {
    fileUrl: 'https://bit.ly/hainaCV', // Empty fileUrl will hide the `Download Resume` button.
    selfIntro: 'Hello👋, I am Haina Zhu. A researcher in music and artificial intelligence.'
  },
  introduction: {
    contents: [
      'I am Haina Zhu, a master student in Shanghai Jiao Tong University (SJTU). I am currently a member of <a href="https://x-lance.github.io/"><u>X-LANCE Lab</u></a>, under the guidance of <a href="https://chenxie95.github.io/"><u>Prof. Xie Chen</u></a>. Before entering SJTU, I received my bachelor degree from Central South University in 2024.',
      'My major is computer science and technology, and I focus on the research of artificial intelligence application in audio and music processing. My current research interests include music generation, music understanding, self-supervised learning, speech and audio signal processing, and multimodal AI applications.',
      `Besides, I'm also an amateur poet (writing <a href="https://en.wikipedia.org/wiki/Chinese_poetry"><i>shici</i></a> and <a href="https://en.wikipedia.org/wiki/Haiku"><i>haiku</i></a>), a lover of classical and rock music, and an anime enthusiast fond of visual novels.`,
      '<b>Dedicated to solving critical problems in music AI, </b>',
      '<b>by integrating engineering and innovative approaches. </b>'
    ],
  },
  skills: [
    'AI for Speech, Audio & Music',
    'Music Generation',
    'Self-Supervised Learning',
    'Machine Learning',
  ],
  experiences: [
    {
      company: 'Shanghai Jiao Tong University',
      position: 'Master student @ Computer Science and Technology major',
      from: 'Sept 2024',
      to: 'Present',
      companyLink: 'https://en.sjtu.edu.cn/',
    },
    {
      company: 'Tencent AI Lab',
      position: 'Internship @ Multimodal Generation Research Group',
      from: 'Sept 2023',
      to: 'Present',
      companyLink: 'https://ailab.tencent.com/ailab/en/index/',
    },
    {
      company: 'Central South University',
      position: 'Bachelor of Engineering @ Computer Science and Technology major',
      from: 'Sept 2020',
      to: 'July 2024',
      companyLink: 'https://en.csu.edu.cn/',
    },
  ],
  certifications: [
    {
      name: 'CET-6 passed',
      body: 'College English Test, 601 points',
      year: '2021.06',
      link: '',
    },
    {
      name: 'RoboCup China Open, National Second Prize',
      body: 'held by Chinese Association of Automation',
      year: '2022.11',
      link: '',
    },
    {
      name: 'CCF-CSP scores 315',
      body: 'Certified Software Professional, Program Language: C/C++',
      year: '2023.09',
      link: '',
    },
  ],
  educations: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    // {
    //   institution: 'Central South University',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [
    {
      title: 'MuQ: Self-Supervised Music Representation Learning with Mel Residual Vector Quantization',
      conferenceName: '',
      journalName: '',
      authors: '<b>Haina Zhu</b>, Yizhi Zhou, Hangting Chen, Jianwei Yu, Ziyang Ma, Rongzhi Gu, Yi Luo, Wei Tan, Xie Chen',
      link: 'https://github.com/tencent-ailab/MuQ',
      description:
        'We propose a self-supervised music representation learning model for music understanding. MuQ, is trained to predict tokens generated by Mel Residual Vector Quantization (Mel-RVQ).',
    },
    {
      title: 'SongEditor: Adapting Zero-Shot Song Generation Language Model as a Multi-Task Editor',
      conferenceName: '',
      journalName: '',
      authors: 'Chenyu Yang, Shuai Wang, Hangting Chen, Jianwei Yu, Wei Tan, Rongzhi Gu, Yaoxun Xu, Yizhi Zhou, <b>Haina Zhu</b>, Haizhou Li',
      link: 'https://arxiv.org/pdf/2412.13786',
      description:
        'In this paper, we present SongEditor, the first song editing paradigm that introduces the editing capabilities into language-modeling song generation approaches, facilitating both segment-wise and track-wise modifications.',
    },
    {
      title: 'Socially Aware Object Goal Navigation With Heterogeneous Scene Representation Learning',
      conferenceName: '',
      journalName: 'IEEE Robotics and Automation Letters (RA-L)',
      authors: 'Bolei Chen, <b>Haina Zhu</b>, Shengkang Yao, Siyi Lu, Ping Zhong, Yu Sheng, Jianxin Wang',
      link: 'https://ieeexplore.ieee.org/abstract/document/10556584/',
      description:
        'This paper proposes a novel Heterogeneous Scene Representation (HSR) method to learn HRO ternary interaction features. In particular, a novel Heterogeneous Graph Attention Network (HGAN) is proposed.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'juhayna', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
