const base_url = 'https://soymadip.me';
const srt_url = `${base_url}/l`;


exports.configs = {

  base_url,
  srt_url,
  
  robots_txt: true,

  project_name: 'portfolio',
  tagline: 'FOSS Developer',
  favicon: 'favicon/favicon.ico',
  
  profile_pic: 'https://avatars.githubusercontent.com/u/84225810?v=4',

  about_me: {
    enable: true,
    title: "Soymadip",
    subtitle: null,
    image: 'https://avatars.githubusercontent.com/u/84225810?v=4',

    description: [
      "I'm a passionate FOSS developer with expertise in designing and building solutions for real-world problems.",
      "My journey in software development started with a simple desire to automate repetitive tasks, specially in my PC.",
      "I believe in the power of open-source software and the community around it. My goal is to contribute to FOSS and to continuously learn and improve my skills."
    ],
    skills: [
      "Python", "Bash", "Linux", "Git", "Docker",
      "C", "lua", "JavaScript", "CI/CD"
    ],
    resumeLink: `${srt_url}/resume`
  },

  projects: [
    {
      title:   "KireiSakura Kit",
      state:   'active',
      desc:    "A framework written in Bash for making powerful shell scripts.",
      image:   "https://raw.githubusercontent.com/soymadip/KireiSakura-Kit/refs/heads/main/Assets/social-card.png",
      website: "https://kireisakura.soymadip.me",
      github:  null,
      Demo: null,
      featured: true,
      tags: ["Bash", "Shell", "CLI"],
    },
    {
      title:   "StaticShort",
      state:   'active',
      featured: true,
      desc:    "A simple static URL shortener - no backend required, just static hosting.",
      image:   "https://raw.githubusercontent.com/soymadip/StaticShort/refs/heads/main/Assets/social%20card.png",
      website: "https://github.com/soymadip/StaticShort",
      github:  null,
      Demo:    "https://short.soymadip.me/demo",
      tags: ["shortener", "static"],
    },
    {
      title:   "Regis",
      state:   'archived',
      featured: true,
      desc:    "The Ultimate Group Admin - Smart Moderation, Auto Filters, File Storage & More.",
      image:   "https://raw.githubusercontent.com/soymadip/Regis/refs/heads/main/Assets/social%20card.png",
      website: "https://regis.soymadip.me",
      github:  null,
      Demo:    null,
      tags: ["python", "pyrogram", "bot"],
    },
    {
      title:   "SDMP",
      state:   'paused',
      featured: false,
      desc:    "Student record management system built with PHP and MySQL",
      image:   "https://raw.githubusercontent.com/soymadip/SDMP/refs/heads/main/app/src/images/social%20card.png",
      website: null,
      github:  "https://github.com/soymadip/SDMP",
      Demo:    null,
      tags: ["php", "crud", "sql"],
    },
    {
      title:  "Portosaurus",
      state:  'planned',
      featured: false,
      desc:   "Portfolio Website generator built upon Docusaurus",
      Demo:   null,
      github: null,
      website: null,
      // tags: ["node", "static", "docusaurus", "portfolio"],
    },
    {
      title: "autotitle.py",
      state: 'planned',
      desc: 'A python app + package for renaming episodes with proper titles ',
      github:  "https://github.com/soymadip/autotitle.py",
    }
  ],

  social_links: [
    {
      name: 'Email',
      icon: 'mail',
      desc: 'Send me an email',
      url: `${srt_url}/mail`,
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      desc: 'Connect on LinkedIn',
      url: `${srt_url}/linkedin`,
      pin: true
    },
    {
      name: 'Telegram',
      icon: 'telegram',
      desc: 'Reach me on Telegram',
      url: `${srt_url}/telegram`,
      pin: true
    },
    {
      name: 'Discord',
      icon: 'discord',
      desc: 'Become my friend',
      url: `${srt_url}/discord`,
    },
    {
      name: 'Twitter',
      icon: 'x',
      desc: 'Find me on Twitter',
      url:  `${srt_url}/twitter`
    },
    {
      name: 'GitHub',
      icon: 'githubalt',
      desc: 'Check out my git repos',
      url: `${srt_url}/github`,
      pin: true
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      desc: 'View my GitLab profile',
      url: `${srt_url}/gitlab`,
    },
    {
      name: 'Anilist',
      icon: 'anilist',
      desc: 'If you are otaku, check out!',
      url: `${srt_url}/anilist`,
    },
    {
      name: 'Simkl',
      icon: 'simkl',
      desc: 'I watch Movies & Series too!',
      url: `${srt_url}/simkl`,
    }
  ],
  
  shortener: {
    
    deploy_path: "/l",

    short_links: {
      "mail"         :  "mailto://soumadip377@gmail.com",
      "github"       :  "https://github.com/soymadip",
      "gitlab"       :  "https://gitlab.com/soymadip",
      "linkedin"     :  "https://linkedin.com/in/soymadip",
      "telegram"     :  "https://telegram.me/soymadip",
      "reddit"       :  "https://www.reddit.com/user/soymadip",
      "anilist"      :  "https://anilist.co/user/soymadip/",
      "mal"          :  "https://myanimelist.net/profile/soymadip",
      "twitter"      :  "https://x.com/soymadip",
      "mastodon"     :  "https://mastodon.online/@soymadip",
      "discord"      :  "https://discord.com/users/778278661811863592",
      "roadmap"      :  "https://roadmap.sh/u/soymadip",
      "replit"       :  "https://replit.com/@soymadip",
      "signal"       :  "https://signal.me/#eu/JxnJ32zIRQxm_lG4PWfkcasdR1zwGd2ln9lY8EXkzm-gy-gwj91PgZz4Qo1CiWpQ",
      "yt"           :  "https://youtube.com/@soymadip",
      "instagram"    :  "https://www.instagram.com/soymadip_",
      "simkl"        :  "https://simkl.com/5929351/"
    }
  }
};


exports.tasks = [
  {
    title: "Add more Callouts",
    description: "like question..",
    status: "pending",
    priority: "medium"
  },
  {
    title: "Add colors to Markdown Headings",
    description: "Take from Obsidian",
    status: "pending",
    priority: "high"
  },
  {
    title: "Improve the Note card Icon extractor",
    description: "make it strip number before dir name, currently It shows blank icon(default book).",
    status: "completed",
    priority: "high"
  },
  {
    title: "Improve Roadmap page",
    description: "add sub todos, shift from vibe code to orignal code, make mobile friendly",
    status: "pending",
    priority: "low"
  },
  {
    title: "Fix Mermaid Diagram support",
    description: "showing: Hook is called outside the <ColorModeProvider>. Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.",
    status: "pending",
    priority: "medium"
  },
  {
    title: "check prism js, dark and light background swap",
    status: "completed",
    description: "Looking better now.",
    priority: "low"
  },
  {
    title: "Make standalone Project.", 
    description: "Convert to Portosaurus project. remove personal stuff.",
    priority: "high",
    status: "active"
  },
  {
    title: "Separate portfolio config", 
    description: "Separate portfolio specific settings to config.js.",
    priority: "high",
    status: "completed"
  },
  {
    title: "make shortlinks icon field optional", 
    description: "lower the title, then match in mapping. if icon key is defined, use it.",
    priority: "low",
    status: "pending"
  }
];

