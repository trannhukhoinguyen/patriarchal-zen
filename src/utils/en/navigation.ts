// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/en" },
  { name: "Practise Zen", url: "/en/welcome-to-docs/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Documentation",
    links: [
      { name: "Documentation", url: "/en/welcome-to-docs/" },
    ],
  },
  {
    section: "Compositions",
    links: [
      { name: "Speeches", url: "/en/speeches" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "#",
  x: "https://twitter.com/@patriarchalzen",
  github: "https://github.com/trannhukhoinguyen/patriarchal-zen",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
