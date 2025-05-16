
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
      /*      { name: "Miền Nam", url: "/monasteries/vn/south" },
            { name: "Miền Trung", url: "/monasteries/vn/middle" },
            { name: "Miền Bắc", url: "/monasteries/vn/north" },
            { name: "Hải ngoại", url: "/monasteries/world" },*/
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
