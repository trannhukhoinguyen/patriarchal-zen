
const navBarLinks = [
  { name: "Trang chủ", url: "/vi" },
  { name: "Ngữ lục", url: "/vi/speeches" },
];

const footerLinks = [
  {
    section: "Tài liệu",
    links: [
      { name: "Tài liệu", url: "/vi/welcome-to-docs/" },
    ],
  },
  {
    section: "Thiền sư",
    links: [
      { name: "Thiền sư", url: "/vi/masters" },
    ],
  },
  {
    section: "Bộ sưu tập",
    links: [
      { name: "Ngữ lục", url: "/vi/speeches" },
      { name: "Công án", url: "/vi/koans" },
      { name: "Tất cả", url: "/vi/collections" },
    ],
  },
  {
    section: "Thiền đường",
    links: [
/*      { name: "Miền Nam", url: "/vi/monasteries/vietnam/south" },
      { name: "Miền Trung", url: "/vi/monasteries/vietnam/middle" },
      { name: "Miền Bắc", url: "/vi/monasteries/vietnam/north" },
      { name: "Hải ngoại", url: "/vi/monasteries/world" },*/
      { name: "(Đang xây dựng)", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/Nhohoivanhin",
  x: "#",
  github: "https://github.com/trannhukhoinguyen/patriarchal-zen",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
