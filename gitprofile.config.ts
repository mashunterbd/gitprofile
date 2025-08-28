// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mashunterbd', // GitHub username
  },
  base: '/mashunter/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Helpful Video Content',
          description:
            'I have a YouTube channel through which I create content and distribute it to everyone so that everyone can benefit from it.',
          imageUrl:
            'https://raw.githubusercontent.com/mashunterbd/mashunter/main/image/Picsart_24-03-06_16-17-15-331.jpg',
          link: 'https://www.youtube.com/@mashunter',
        },
        {
          title: 'Problem Solving Community',
          description:
            'Many problems related to Android, Linux, and Windows are constantly encountered by our community with some solutions and updated over time.',
          imageUrl:
            'https://raw.githubusercontent.com/mashunterbd/mashunter/main/image/Picsart_24-03-06_16-20-26-775.jpg',
          link: 'https://mashunterbd.github.io/mashunter',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of MD. Abu Bakar Siddik', 
    description: 'Ethical Hacker | Cyber Security | Content Creator | Journalist | SEO Specialist', 
    imageURL: 'https://raw.githubusercontent.com/mashunterbd/mashunter/main/image/Picsart_24-03-06_16-17-15-331.jpg' 
  },
  social: {
    linkedin: 'mashunter',
    x: 'mashunterofficial',
    facebook: 'mashunterofficial',
    instagram: 'mashunterofficial',
    youtube: 'mashunterofficial',
    medium: 'mashunter',
    dev: '',
    stackoverflow: '',
    telegram: 'mashunterofficial',
    website: 'https://mashunterbd.github.io/mashunter',
    email: 'pentester.mas@gmail.com',
    phone: '+8801875489971',
    tiktok: 'mashunteroffical',
    tryhackme: 'mashunter',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1zrWA5V43GUe_gKSDo3fcmOnSmQe_DyIW/view?usp=drivesdk', // তুমি চাইলে রেজিউম PDF লিংক বসাতে পারো
  },
  skills: [
    'Ethical Hacking',
    'Penetration Testing',
    'Linux',
    'Python',
    'Bash',
    'Networking',
    'Metasploit',
    'Nessus',
    'SQL Injection',
    'XSS',
    'Video Editing',
    'SEO',
    'Content Creation',
    'Digital Marketing',
  ],
  experiences: [
    {
      company: 'Byte Capsule',
      position: 'Cybersecurity Intern',
      from: 'February 2024',
      to: 'May 2024',
      companyLink: '',
    },
    {
      company: 'Team Matrix',
      position: 'Ethical Hacker',
      from: '2022',
      to: '2023',
      companyLink: '',
    },
    {
      company: 'Freelance',
      position: 'Video Editor & Content Creator',
      from: '2020',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'VOD Bangla',
      position: 'Journalist',
      from: 'May 2025',
      to: 'August 2025',
      companyLink: 'https://www.facebook.com/vodbangla',
    },
    {
      company: 'VOD Bangla',
      position: 'SEO Specialist',
      from: 'August 2025',
      to: 'Present',
      companyLink: 'https://www.facebook.com/vodbangla',
    },
  ],
  certifications: [
    {
      name: 'CERTIFIED ETHICAL HACKER',
      body: 'Team Matrix - Elite Hacker',
      year: '30 August 2023',
      link: 'https://drive.google.com/file/d/1b5ehHZJfdEkXbrUvPZSZnglkRsELpjhi/view',
    },
    {
      name: 'Cyber Security Fundamentals',
      body: 'Udemy',
      year: '8 March 2024',
      link: 'https://drive.google.com/file/d/1-c8TeSq4gVPIeyARMXe7Z1esQi-yyDDB/view',
    },
    {
      name: 'Ethical Hacking for Professionals',
      body: 'Byte Capsule',
      year: '20 February 2024',
      link: 'https://drive.google.com/file/d/1w9CgoVDU3VF4jQEjVFQJdRlbPCOHsfJg/view',
    },
    {
      name: 'Linux 100: Fundamentals',
      body: 'TCM SECURITY',
      year: '6 October 2024',
      link: 'https://drive.google.com/file/d/14lrswARptGnZyhZXQ89kVDmkSKJ5rm6l/view',
    },
    {
      name: 'Digital Marketing',
      body: 'Dreamland IT Institute',
      year: '20 April 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Diploma in Computer Science and Engineering (CSE)',
      degree: 'Running',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'Secondary School Certificate (Science)',
      degree: 'SSC',
      from: '2019',
      to: '2020',
    },
  ],
  blog: {
    source: 'medium',
    username: 'mashunter',
    limit: 2,
  },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light','dark','lofi','dracula','night','coffee','winter','cyberpunk','dim','luxury'
    ],
  },
  footer: `${new Date().toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
  })}`,
  enablePWA: true,
};

export default CONFIG;
