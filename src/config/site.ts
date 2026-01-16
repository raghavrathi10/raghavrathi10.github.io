import { resume } from "react-dom/server";

// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Astro Blog",
  title: "Astro Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    // comments: "Comments",
    resume: "Resume",
  },
  
  // Hero Section
  hero: {
    prefix: "Hi there 👋🏼, I am",
    name: "Raghav Rathi",
    intro: "A cybersecurity engineer and researcher specializing in Information Security, Wireless and Satellite communications. ",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/raghavrathi" },
      // { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/raghavrathi10" },
      { name: "ResearchGate", icon: "/svg/researchgate.svg", url: "https://www.researchgate.net/profile/Raghav-Rathi" },
      { name: "GoogleScholar", icon: "/svg/googlescholar.png", url: "https://scholar.google.com/citations?user=gzsN9f8AAAAJ&hl=en" },
      { name : "Email", icon: "public/svg/email1.png", url: "mailto:raghav_rathi@outlook.com" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Raghav Rathi, a passionate cybersecurity engineer and researcher specializing in Information Security, Wireless Communication, and Satellite Systems. I enjoy tackling complex problems, working across teams, and translating technical depth into actionable security outcomes.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "raghav_rathi@outlook.com",
        link: "mailto:raghav_rathi@outlook.com",
      },
      // phone: {
      //   label: "Phone",
      //   value: "+1 (234) 567-890",
      //   link: "tel:+1 (234) 567-890",
      // },
      // location: {
      //   label: "Location",
      //   value: "Tallahassee, FL",
      // },
    },
    followMe: {
      title: "Follow Me",
      links: [
        // { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/raghavrathi" },
        // { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/raghavrathi10" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Raghav Rathi. All rights reserved.",
    links: [
      // { text: "Privacy Policy", url: "#" },
      // { text: "Terms of Service", url: "#" },
      // { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/raghavrathi10",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore the latest articles, insights, and stories on cybersecurity, wireless communication, and more.",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

