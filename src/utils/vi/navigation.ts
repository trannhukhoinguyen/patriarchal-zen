
const navBarLinks = [
  { name: "Trang chủ", url: "/" },
  { name: "Ngữ lục", url: "/speeches" },
  { name: "Thiền sư", url: "/masters" },
  { name: "Công án", url: "/speeches" },
  { name: "Tài liệu", url: "/welcome-to-docs/" },
];

const footerLinks = [
  {
    section: "Tham Thiền",
    links: [
      { name: "Tham Thiền", url: "/welcome-to-docs/" },
    ],
  },
  {
    section: "Thiền sư",
    links: [
      { name: "Thiền sư", url: "/masters" },
    ],
  },
  {
    section: "Bộ sưu tập",
    links: [
      { name: "Ngữ lục", url: "/speeches" },
      { name: "Tất cả", url: "/collections" },
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
