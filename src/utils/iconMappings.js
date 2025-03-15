import { 
    SiPython, 
    SiJavascript, 
    SiCplusplus, 
    SiLinux,
    SiReact,
    SiRust,
    SiGo,
    SiTypescript,
    SiGithub,
    SiLinkedin,
    SiMastodon,
    SiInstagram,
    SiFacebook,
    SiYoutube,
    SiTwitch,
    SiDiscord,
    SiReddit,
    SiStackoverflow,
    SiLeetcode, 
    SiHackerrank,
    SiCodeforces,
    SiMatrix,
    SiGmail,
    SiXing,
    SiKaggle,
    SiCodesandbox,
    SiProtonmail,
    SiSignal,
    SiZoom,
    SiObsidian,
    SiNotion,
    SiMarkdown,
    SiSubstack,
    SiThreads,
    SiOpenai,
    SiMysql,
    SiGnubash
} from 'react-icons/si';

import { 
    FaJava,
    FaEnvelope,
    FaRss,
    FaGitAlt,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaTelegramPlane,
    FaMedium,
    FaGlobe,
    FaDev,
    FaPinterest,
    FaWhatsapp,
    FaSlack,
    FaSkype,
    FaSnapchatGhost,
    FaTiktok,
    FaSteam,
    FaGitlab,
    FaBitbucket,
    FaKeybase,
    FaCodepen,
    FaJsSquare,
    FaHackerNews,
    FaVimeoV,
    FaFlickr,
    FaDribbble,
    FaBehance,
    FaPatreon,
    FaPaypal,
    FaEthereum,
    FaBitcoin,
    FaLaptopCode,
    FaCode,
    FaBlogger,
    FaWordpress,
    FaHashtag,
    FaUserCircle,
    FaUserSecret,
    FaBug,
    FaRobot,
    FaHtml5,
    FaCss3Alt,
    FaPhp,
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";



//--------- Icon mappings ---------

export const iconMap = {

  // Programming languages
  python: {
    icon: SiPython,
    color: '#3776AB'
  },
  javascript: {
    icon: SiJavascript,
    color: '#F7DF1E'
  },
  cpp: {
    icon: SiCplusplus,
    color: '#00599C'
  },
  linux: {
    icon: SiLinux,
    color: '#FCC624'
  },
  shell: {
    icon: SiGnubash,
    color: '#4EAA25'
  },
  bash: {
    icon: SiGnubash,
    color: '#4EAA25'
  },
  react: {
    icon: SiReact,
    color: '#61DAFB'
  },
  java: {
    icon: FaJava,
    color: '#007396'
  },
  rust: {
    icon: SiRust,
    color: '#ffffff'
  },
  go: {
    icon: SiGo,
    color: '#00ADD8'
  },
  typescript: {
    icon: SiTypescript,
    color: '#3178C6'
  },
  csharp: {
    icon: TbBrandCSharp,
    color: '#239120'
  },
  html: {
    icon: FaHtml5,
    color: '#E34F26'
  },
  css: {
    icon: FaCss3Alt,
    color: '#1572B6'
  },
  sql: {
    icon: SiMysql,
    color: '#4479A1'
  },
  php: {
    icon: FaPhp,
    color: '#777BB4'
  },
  
  // Social platforms
  github: {
    icon: SiGithub,
    color: '#181717'
  },
  git: {
    icon: FaGitAlt,
    color: '#F05032'
  },
  linkedin: {
    icon: SiLinkedin,
    color: '#0A66C2'
  },
  twitter: {
    icon: FaTwitter,
    color: '#1DA1F2'
  },
  x: {
    icon: FaTwitter,
    color: '#1DA1F2'
  },
  mastodon: {
    icon: SiMastodon,
    color: '#6364FF'
  },
  instagram: {
    icon: SiInstagram,
    color: '#E4405F'
  },
  insta: {
    icon: SiInstagram,
    color: '#E4405F'
  },
  facebook: {
    icon: SiFacebook,
    color: '#1877F2'
  },
  fb: {
    icon: SiFacebook,
    color: '#1877F2'
  },
  youtube: {
    icon: SiYoutube,
    color: '#FF0000'
  },
  yt: {
    icon: SiYoutube,
    color: '#FF0000'
  },
  twitch: {
    icon: SiTwitch,
    color: '#9146FF'
  },
  discord: {
    icon: SiDiscord,
    color: '#5865F2'
  },
  discordapp: {
    icon: SiDiscord,
    color: '#5865F2'
  },
  reddit: {
    icon: SiReddit,
    color: '#FF4500'
  },
  stackoverflow: {
    icon: SiStackoverflow,
    color: '#F58025'
  },
  email: {
    icon: FaEnvelope,
    color: '#EA4335'
  },
  mail: {
    icon: FaEnvelope,
    color: '#EA4335'
  },
  contact: {
    icon: FaEnvelope,
    color: '#EA4335'
  },
  rss: {
    icon: FaRss,
    color: '#FFA500'
  },
  
  website: {
    icon: FaGlobe,
    color: '#4285F4'
  },
  web: {
    icon: FaGlobe,
    color: '#4285F4'
  },
  homepage: {
    icon: FaGlobe,
    color: '#4285F4'
  },
  globe: {
    icon: FaGlobe,
    color: '#4285F4'
  },
  
  // Developer platforms
  gitlab: {
    icon: FaGitlab,
    color: '#FC6D26'
  },
  bitbucket: {
    icon: FaBitbucket,
    color: '#0052CC'
  },
  dev: {
    icon: FaDev,
    color: '#0A0A0A'
  },
  devto: {
    icon: FaDev,
    color: '#0A0A0A'
  },
  codepen: {
    icon: FaCodepen,
    color: '#000000'
  },
  leetcode: {
    icon: SiLeetcode,
    color: '#FFA116'
  },
  hackerrank: {
    icon: SiHackerrank,
    color: '#00EA64'
  },
  codeforces: {
    icon: SiCodeforces,
    color: '#1F8ACB'
  },
  codesandbox: {
    icon: SiCodesandbox,
    color: '#151515'
  },
  
  // Messaging platforms
  telegram: {
    icon: FaTelegramPlane,
    color: '#26A5E4'
  },
  tg: {
    icon: FaTelegramPlane,
    color: '#26A5E4'
  },
  whatsapp: {
    icon: FaWhatsapp,
    color: '#25D366'
  },
  wa: {
    icon: FaWhatsapp,
    color: '#25D366'
  },
  slack: {
    icon: FaSlack,
    color: '#4A154B'
  },
  skype: {
    icon: FaSkype,
    color: '#00AFF0'
  },
  matrix: {
    icon: SiMatrix,
    color: '#000000'
  },
  signal: {
    icon: SiSignal,
    color: '#3A76F0'
  },
  zoom: {
    icon: SiZoom,
    color: '#2D8CFF'
  },
  
  // Email platforms
  gmail: {
    icon: SiGmail,
    color: '#EA4335'
  },
  protonmail: {
    icon: SiProtonmail,
    color: '#8B89CC'
  },
  
  // Blog/writing platforms
  medium: {
    icon: FaMedium,
    color: '#000000'
  },
  blog: {
    icon: FaBlogger,
    color: '#FF5722'
  },
  wordpress: {
    icon: FaWordpress,
    color: '#21759B'
  },
  substack: {
    icon: SiSubstack,
    color: '#FF6719'
  },
  
  // Creative platforms
  dribbble: {
    icon: FaDribbble,
    color: '#EA4C89'
  },
  behance: {
    icon: FaBehance,
    color: '#1769FF'
  },
  flickr: {
    icon: FaFlickr,
    color: '#0063DC'
  },
  vimeo: {
    icon: FaVimeoV,
    color: '#1AB7EA'
  },
  
  // Payment/donation
  patreon: {
    icon: FaPatreon,
    color: '#F96854'
  },
  paypal: {
    icon: FaPaypal,
    color: '#00457C'
  },
  ethereum: {
    icon: FaEthereum,
    color: '#3C3C3D'
  },
  bitcoin: {
    icon: FaBitcoin,
    color: '#F7931A'
  },
  
  // Professional
  xing: {
    icon: SiXing,
    color: '#006567'
  },
  kaggle: {
    icon: SiKaggle,
    color: '#20BEFF'
  },
  
  // Knowledge/note-taking
  notion: {
    icon: SiNotion,
    color: '#000000'
  },
  obsidian: {
    icon: SiObsidian,
    color: '#7C3AED'
  },
  markdown: {
    icon: SiMarkdown,
    color: '#000000'
  },
  
  // Misc
  hackernews: {
    icon: FaHackerNews,
    color: '#FF6600'
  },
  hn: {
    icon: FaHackerNews,
    color: '#FF6600'
  },
  keybase: {
    icon: FaKeybase,
    color: '#33A0FF'
  },
  openai: {
    icon: SiOpenai,
    color: '#412991'
  },
  code: {
    icon: FaCode,
    color: '#007ACC'
  },
  programming: {
    icon: FaLaptopCode,
    color: '#333333'
  },
  user: {
    icon: FaUserCircle,
    color: '#4285F4'
  },
  anonymous: {
    icon: FaUserSecret,
    color: '#666666'
  },
  debug: {
    icon: FaBug,
    color: '#E91E63'
  },
  bot: {
    icon: FaRobot,
    color: '#00BCD4'
  },
  steam: {
    icon: FaSteam,
    color: '#000000'
  },
  jssquare: {
    icon: FaJsSquare,
    color: '#F7DF1E'
  },
  pinterest: {
    icon: FaPinterest,
    color: '#E60023'
  },
  snapchat: {
    icon: FaSnapchatGhost,
    color: '#FFFC00'
  },
  tiktok: {
    icon: FaTiktok,
    color: '#000000'
  },
  threads: {
    icon: SiThreads,
    color: '#000000'
  },
  falinkedin: {
    icon: FaLinkedin,
    color: '#0A66C2'
  },
  fagithub: {
    icon: FaGithub,
    color: '#181717'
  },
  fatelegramplane: {
    icon: FaTelegramPlane,
    color: '#26A5E4'
  },
  hashtag: {
    icon: FaHashtag,
    color: '#ffffff'
  }
};

