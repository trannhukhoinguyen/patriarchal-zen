// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Practise Zen", url: "/welcome-to-docs/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Documentation",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
    ],
  },
  {
    section: "Compositions",
    links: [
      { name: "Speeches", url: "/speeches" },
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
