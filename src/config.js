module.exports = {
  email: 'kathleenepovadora@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kaeri-gg',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/kaeri-gg/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kaeri__gg/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kathleenpovadora/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#03040e',
    darkNavy: '#03040e',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
