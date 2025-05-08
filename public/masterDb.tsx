const masterDb = [
  {
    name_en: "Shakyamuni Buddha",
    teacher: "",
    sect: ""
  },
  {
    name_en: "Mahakasyapa",
    teacher: "Shakyamuni Buddha",
    sect: ""
  },
  {
    name_en: "Ananda",
    teacher: "Mahakasyapa",
    sect: ""
  },
  {
    name_en: "Sanakavasa",
    teacher: "Ananda",
    sect: ""
  },
  {
    name_en: "Upagupta",
    teacher: "Sanakavasa",
    sect: ""
  },
  {
    name_en: "Dhrtaka",
    teacher: "Upagupta",
    sect: ""
  },
  {
    name_en: "Miccaka",
    teacher: "Dhrtaka",
    sect: ""
  },
  {
    name_en: "Vasumitra",
    teacher: "Miccaka",
    sect: ""
  },
  {
    name_en: "Buddhanandi",
    teacher: "Vasumitra",
    sect: ""
  },
  {
    name_en: "Buddhamitra",
    teacher: "Buddhanandi",
    sect: ""
  },
  {
    name_en: "Parsvika",
    teacher: "Buddhamitra",
    sect: ""
  },
  {
    name_en: "Punyayasas",
    teacher: "Parsvika",
    sect: ""
  },
  {
    name_en: "Asvaghosha",
    teacher: "Punyayasas",
    sect: ""
  },
  {
    name_en: "Kapimala",
    teacher: "Asvaghosha",
    sect: ""
  },
  {
    name_en: "Nagarjuna",
    teacher: "Kapimala",
    sect: ""
  },
  {
    name_en: "Kanadeva",
    teacher: "Nagarjuna",
    sect: ""
  },
  {
    name_en: "Rahulata",
    teacher: "Kanadeva",
    sect: ""
  },
  {
    name_en: "Sanghanandi",
    teacher: "Rahulata",
    sect: ""
  },
  {
    name_en: "Gayasata",
    teacher: "Sanghanandi",
    sect: ""
  },
  {
    name_en: "Kumarata",
    teacher: "Gayasata",
    sect: ""
  },
  {
    name_en: "Jayata",
    teacher: "Kumarata",
    sect: ""
  },
  {
    name_en: "Vasubandhu",
    teacher: "Jayata",
    sect: ""
  },
  {
    name_en: "Manorhita",
    teacher: "Vasubandhu",
    sect: ""
  },
  {
    name_en: "Haklenayaśas",
    teacher: "Manorhita",
    sect: ""
  },
  {
    name_en: "Simhabodhi",
    teacher: "Haklenayaśas",
    sect: ""
  },
  {
    name_en: "Basiasita",
    teacher: "Simhabodhi",
    sect: ""
  },
  {
    name_en: "Dharmadha",
    teacher: "Simhabodhi",
    sect: ""
  },
  {
    name_en: "Punyamitra",
    teacher: "Basiasita",
    sect: ""
  },
  {
    name_en: "Nhân Đà La",
    teacher: "Dharmadha",
    sect: ""
  },
  {
    name_en: "Cù La Kỵ Lợi Bà",
    teacher: "Dharmadha",
    sect: ""
  },
  {
    name_en: "Prajnatara",
    teacher: "Punyamitra",
    sect: ""
  },
  {
    name_en: "Đạt Ma Thi Lợi Đế",
    teacher: "Nhân Đà La",
    sect: ""
  },
  {
    name_en: "Phá Lâu Cầu Đa La",
    teacher: "Nhân Đà La",
    sect: ""
  },
  {
    name_en: "Ba La Bạt Ma",
    teacher: "Cù La Kỵ Lợi Bà",
    sect: ""
  },
  {
    name_en: "Tăng Già La Xoa",
    teacher: "Cù La Kỵ Lợi Bà",
    sect: ""
  },
  {
    name_en: "Bodhidharma",
    teacher: "Prajnatara",
    sect: ""
  },
  {
    name_en: "Vinitaruci",
    teacher: "Jianzhi Sengcan",
    sect: "Miexi"
  },
  {
    name_en: "Tây Ấn Quật Đa Tam Tạng",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Dazu Huike",
    teacher: "Bodhidharma",
    sect: ""
  },
  {
    name_en: "Jianzhi Sengcan",
    teacher: "Dazu Huike",
    sect: ""
  },
  {
    name_en: "Zeng Na",
    teacher: "Dazu Huike",
    sect: ""
  },
  {
    name_en: "Xiangzhou Huiman",
    teacher: "Dazu Huike",
    sect: ""
  },
  {
    name_en: "cư sĩ Hướng",
    teacher: "Dazu Huike",
    sect: ""
  },
  {
    name_en: "Dayi Daoxin",
    teacher: "Jianzhi Sengcan",
    sect: ""
  },
  {
    name_en: "Cư sĩ Hoa Nhàn",
    teacher: "Xiangzhou Huiman",
    sect: ""
  },
  {
    name_en: "Daman Hongren",
    teacher: "Dayi Daoxin",
    sect: ""
  },
  {
    name_en: "Niutou Farong",
    teacher: "Dayi Daoxin",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Đàm Thúy",
    teacher: "Cư sĩ Hoa Nhàn",
    sect: ""
  },
  {
    name_en: "Dajian Huineng",
    teacher: "Daman Hongren",
    sect: ""
  },
  {
    name_en: "Niutou Zhiyan",
    teacher: "Niutou Farong",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Yuquan Shenxiu",
    teacher: "Daman Hongren",
    sect: "Northern"
  },
  {
    name_en: "Laoan Huian",
    teacher: "Daman Hongren",
    sect: ""
  },
  {
    name_en: "Zizhou Zhishen",
    teacher: "Daman Hongren",
    sect: ""
  },
  {
    name_en: "Dinglin Huigang",
    teacher: "Đàm Thúy",
    sect: ""
  },
  {
    name_en: "Thượng Nguyên Trí Thành",
    teacher: "Niutou Farong",
    sect: ""
  },
  {
    name_en: "Qingyuan Xingsi",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Nanyang Huizhong",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Nanyue Huairang",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Heze Shenhui",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thiều Châu Pháp Hải",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Yongjia Xuanjue",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Jizhou Zhicheng",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Giang Tây Chí Triệt",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Biandan Xiaoliao",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Hà Bắc Trí Hoàng",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Hongzhou Fada",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thọ Châu Trí Thông",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Tín Châu Trí Thường",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Quảng Châu Chí Đạo",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Quảng Châu Pháp Tánh Ấn Tông",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Vụ Châu Huyền Sách",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Daixiao Lingtao",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Ni Vô Tận Tạng",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Kỳ Đà La",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Tịnh An",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Tâm",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Định Chơn",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Kiên Cố",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Đạo Tiến",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thiện Khoái",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Duyên Tố",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Tông Nhất",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thiên Hiện",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Phạm Hạnh",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Tự Tại",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Hàm Thông",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thái Tường",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Pháp Tịnh",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Biện Tài",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Dạo Dung",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Ngô Đầu đà",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Đạo Anh",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Trí Bổn",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Pháp Chơn",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Huyền Giai",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Chung Sơn Đàm Thổi",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Thích sử Vi Cừ",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Yìfú",
    teacher: "Yuquan Shenxiu",
    sect: "Northern"
  },
  {
    name_en: "Songshan Puji",
    teacher: "Yuquan Shenxiu",
    sect: "Northern"
  },
  {
    name_en: "Đạo Lượng",
    teacher: "Laoan Huian",
    sect: ""
  },
  {
    name_en: "Po Zao Dui",
    teacher: "Laoan Huian",
    sect: ""
  },
  {
    name_en: "Jingzhong Zhixian",
    teacher: "Zizhou Chuji",
    sect: "Oxhead"
  },
  {
    name_en: "Niutou Huifang",
    teacher: "Niutou Zhiyan",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Mengshan Daoming",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Zizhou Chuji",
    teacher: "Zizhou Zhishen",
    sect: ""
  },
  {
    name_en: "Lục Hợp Đại Giác",
    teacher: "Dinglin Huigang",
    sect: ""
  },
  {
    name_en: "Định Châu",
    teacher: "Thượng Nguyên Trí Thành",
    sect: ""
  },
  {
    name_en: "Sikong Benjing",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Shitou Xiqian",
    teacher: "Dajian Huineng",
    sect: ""
  },
  {
    name_en: "Mazu Daoyi",
    teacher: "Nanyue Huairang",
    sect: ""
  },
  {
    name_en: "Danyuan Yingzhen",
    teacher: "Nanyang Huizhong",
    sect: ""
  },
  {
    name_en: "Cizhou Faru",
    teacher: "Heze Shenhui",
    sect: ""
  },
  {
    name_en: "Wutai Wuming",
    teacher: "Heze Shenhui",
    sect: ""
  },
  {
    name_en: "Dàoxuán",
    teacher: "Songshan Puji",
    sect: ""
  },
  {
    name_en: "Nangaku Myōsan",
    teacher: "Songshan Puji",
    sect: ""
  },
  {
    name_en: "Jingzhong Wuxiang",
    teacher: "Jingzhong Zhixian",
    sect: ""
  },
  {
    name_en: "峻極",
    teacher: "Po Zao Dui",
    sect: ""
  },
  {
    name_en: "Niutou Fazhi",
    teacher: "Niutou Huifang",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Chung Nam Duy Chính",
    teacher: "Songshan Puji",
    sect: ""
  },
  {
    name_en: "Jingzhong Wuxiang",
    teacher: "Zizhou Chuji",
    sect: ""
  },
  {
    name_en: "Cao Bưu Đàm Ảnh",
    teacher: "Lục Hợp Đại Giác",
    sect: ""
  },
  {
    name_en: "Kinh Nam Duy Trung",
    teacher: "Cizhou Faru",
    sect: ""
  },
  {
    name_en: "Yaoshan Weiyan",
    teacher: "Shitou Xiqian",
    sect: ""
  },
  {
    name_en: "Tianhuang Daowu",
    teacher: "Shitou Xiqian",
    sect: ""
  },
  {
    name_en: "Dadian Baotong",
    teacher: "Shitou Xiqian",
    sect: ""
  },
  {
    name_en: "Danxia Tianran",
    teacher: "Shitou Xiqian",
    sect: ""
  },
  {
    name_en: "Baizhang Huaihai",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Baotang Wuzhu",
    teacher: "Jingzhong Wuxiang",
    sect: ""
  },
  {
    name_en: "Chí Chân",
    teacher: "Chung Nam Duy Chính",
    sect: ""
  },
  {
    name_en: "Niutou Zhiwei",
    teacher: "Niutou Fazhi",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Ehu Dayi",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Damei Fachang",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Dazhu Huihai",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Xitang Zhizang",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Nanquan Puyuan",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Fenzhou Wuye",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Jingzhong Shenhui",
    teacher: "Jingzhong Wuxiang",
    sect: ""
  },
  {
    name_en: "Baotang Wuzhu",
    teacher: "Jingzhong Wuxiang",
    sect: ""
  },
  {
    name_en: "Thái sơn Minh Luyện",
    teacher: "Cao Bưu Đàm Ảnh",
    sect: ""
  },
  {
    name_en: "Zhangjing Huaihui",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Panshan Baoji",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Guizong Zhichang",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Gushan Lingjiao",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Tanzhou Dachuan",
    teacher: "Shitou Xiqian",
    sect: ""
  },
  {
    name_en: "Pangyun Jushi",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Yanguan Qian",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Shigong Huicang",
    teacher: "Mazu Daoyi",
    sect: ""
  },
  {
    name_en: "Đại Đức Đạo Viên",
    teacher: "Kinh Nam Duy Trung",
    sect: ""
  },
  {
    name_en: "Yunyan Tansheng",
    teacher: "Yaoshan Weiyan",
    sect: ""
  },
  {
    name_en: "Longtan Chongxin",
    teacher: "Tianhuang Daowu",
    sect: ""
  },
  {
    name_en: "Guishan Lingyou",
    teacher: "Tianhuang Daowu",
    sect: "Guiyang"
  },
  {
    name_en: "Sanping Yizhong",
    teacher: "Dadian Baotong",
    sect: ""
  },
  {
    name_en: "Cuiwei Wuxue",
    teacher: "Danxia Tianran",
    sect: ""
  },
  {
    name_en: "Huangbo Xiyun",
    teacher: "Baizhang Huaihai",
    sect: ""
  },
  {
    name_en: "Niutou Huizhong",
    teacher: "Niutou Zhiwei",
    sect: ""
  },
  {
    name_en: "Helin Xuansu",
    teacher: "Niutou Zhiwei",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Tuyên Châu Huyền Dĩnh",
    teacher: "Niutou Zhiwei",
    sect: ""
  },
  {
    name_en: "Daowu Yuanzhi",
    teacher: "Yaoshan Weiyan",
    sect: ""
  },
  {
    name_en: "Zhaozhou Congshen",
    teacher: "Nanquan Puyuan",
    sect: ""
  },
  {
    name_en: "Changsha Jingcen",
    teacher: "Nanquan Puyuan",
    sect: ""
  },
  {
    name_en: "Hangzhou Tianlong",
    teacher: "Damei Fachang",
    sect: ""
  },
  {
    name_en: "Baizhang Niepan",
    teacher: "Baizhang Huaihai",
    sect: ""
  },
  {
    name_en: "Guannan Daochang",
    teacher: "Baizhang Huaihai",
    sect: ""
  },
  {
    name_en: "Guishan Da’an",
    teacher: "Baizhang Huaihai",
    sect: ""
  },
  {
    name_en: "Wufeng Changguan",
    teacher: "Baizhang Huaihai",
    sect: ""
  },
  {
    name_en: "Zhenzhou Puhua",
    teacher: "Panshan Baoji",
    sect: ""
  },
  {
    name_en: "Chuanzi Decheng",
    teacher: "Yaoshan Weiyan",
    sect: ""
  },
  {
    name_en: "Gaoan Dayu",
    teacher: "Guizong Zhichang",
    sect: ""
  },
  {
    name_en: "Zihu Lizong",
    teacher: "Nanquan Puyuan",
    sect: ""
  },
  {
    name_en: "Guifeng Zongmi",
    teacher: "Đại Đức Đạo Viên",
    sect: ""
  },
  {
    name_en: "Dongshan Liangjie",
    teacher: "Yunyan Tansheng",
    sect: ""
  },
  {
    name_en: "Deshan Xuanjian",
    teacher: "Longtan Chongxin",
    sect: ""
  },
  {
    name_en: "Yangshan Huiji",
    teacher: "Guishan Lingyou",
    sect: "Guiyang"
  },
  {
    name_en: "Linji Yixuan",
    teacher: "Huangbo Xiyun",
    sect: "Linji"
  },
  {
    name_en: "Muzhou Daoming",
    teacher: "Huangbo Xiyun",
    sect: ""
  },
  {
    name_en: "Pei Xiu",
    teacher: "Huangbo Xiyun",
    sect: ""
  },
  {
    name_en: "Jingshan Faqin",
    teacher: "Helin Xuansu",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Shishuang Qingzhu",
    teacher: "Daowu Yuanzhi",
    sect: ""
  },
  {
    name_en: "Lingyun Zhiqin",
    teacher: "Guishan Lingyou",
    sect: ""
  },
  {
    name_en: "Xiangyan Zhixian",
    teacher: "Guishan Lingyou",
    sect: ""
  },
  {
    name_en: "Yanyang Shanxin",
    teacher: "Zhaozhou Congshen",
    sect: ""
  },
  {
    name_en: "Jinhua Juzhi",
    teacher: "Hangzhou Tianlong",
    sect: ""
  },
  {
    name_en: "Touzi Datong",
    teacher: "Cuiwei Wuxue",
    sect: ""
  },
  {
    name_en: "Jiashan Shanhui",
    teacher: "Chuanzi Decheng",
    sect: ""
  },
  {
    name_en: "Moshan Liaoran",
    teacher: "Gaoan Dayu",
    sect: ""
  },
  {
    name_en: "Xuedou Changtong",
    teacher: "Changsha Jingcen",
    sect: ""
  },
  {
    name_en: "Xingshan Jianghong",
    teacher: "Yunyan Tansheng",
    sect: ""
  },
  {
    name_en: "Thần Sơn Tăng Mật",
    teacher: "Yunyan Tansheng",
    sect: ""
  },
  {
    name_en: "Dasui Fazhen",
    teacher: "Guishan Da’an",
    sect: ""
  },
  {
    name_en: "Liu Tiemo",
    teacher: "Guishan Lingyou",
    sect: "Guiyang"
  },
  {
    name_en: "Jingzhao Mihu",
    teacher: "Guishan Lingyou",
    sect: "Guiyang"
  },
  {
    name_en: "Caoshan Benji",
    teacher: "Dongshan Liangjie",
    sect: "Caodong"
  },
  {
    name_en: "Xinghua Cunjiang",
    teacher: "Linji Yixuan",
    sect: "Linji"
  },
  {
    name_en: "Sansheng Huiran",
    teacher: "Linji Yixuan",
    sect: "Linji"
  },
  {
    name_en: "Muzhou Chen Cao",
    teacher: "Muzhou Daoming",
    sect: ""
  },
  {
    name_en: "Zhangzhuo Xiucai",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Jiufeng Daoqian",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Xuefeng Yicun",
    teacher: "Deshan Xuanjian",
    sect: ""
  },
  {
    name_en: "Niaoke Daolin",
    teacher: "Jingshan Faqin",
    sect: "Niutou (Oxhead)"
  },
  {
    name_en: "Yunju Daoying",
    teacher: "Dongshan Liangjie",
    sect: "Caodong"
  },
  {
    name_en: "Baoshou Yanzhao",
    teacher: "Linji Yixuan",
    sect: "Linji"
  },
  {
    name_en: "Daguang Juhui",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Yantou Quanhuo",
    teacher: "Deshan Xuanjian",
    sect: ""
  },
  {
    name_en: "Luopu Yuan’an",
    teacher: "Jiashan Shanhui",
    sect: ""
  },
  {
    name_en: "Yungai Zhiyuan",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Yongquan Jingxin",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Phúc Thuyền Hồng Tiến",
    teacher: "Shishuang Qingzhu",
    sect: ""
  },
  {
    name_en: "Sushan Kuangren",
    teacher: "Dongshan Liangjie",
    sect: "Caodong"
  },
  {
    name_en: "Yuezhou Qianfeng",
    teacher: "Dongshan Liangjie",
    sect: "Caodong"
  },
  {
    name_en: "Weifu Dajue",
    teacher: "Linji Yixuan",
    sect: "Linji"
  },
  {
    name_en: "Nanta Guangyong",
    teacher: "Yangshan Huiji",
    sect: "Guiyang"
  },
  {
    name_en: "Xita Guangmu",
    teacher: "Yangshan Huiji",
    sect: "Guiyang"
  },
  {
    name_en: "Wuzhu Wenxi",
    teacher: "Yangshan Huiji",
    sect: "Guiyang"
  },
  {
    name_en: "Miàoxìn",
    teacher: "Yangshan Huiji",
    sect: "Guiyang"
  },
  {
    name_en: "Nanyuan Huiyong",
    teacher: "Xinghua Cunjiang",
    sect: "Linji"
  },
  {
    name_en: "Heshan Wuyin",
    teacher: "Jiufeng Daoqian",
    sect: ""
  },
  {
    name_en: "Xuansha Shibei",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Yunmen Wenyan",
    teacher: "Xuefeng Yicun",
    sect: "Yunmen"
  },
  {
    name_en: "Baofu Congzhan",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Changqing Huileng",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Tongan Daopi",
    teacher: "Yunju Daoying",
    sect: "Caodong"
  },
  {
    name_en: "Xiyuan Siming",
    teacher: "Baoshou Yanzhao",
    sect: ""
  },
  {
    name_en: "Luoshan Daoxian",
    teacher: "Yantou Quanhuo",
    sect: ""
  },
  {
    name_en: "Ruiyan Shiyan",
    teacher: "Yantou Quanhuo",
    sect: ""
  },
  {
    name_en: "Huguo Shoucheng",
    teacher: "Sushan Kuangren",
    sect: "Caodong"
  },
  {
    name_en: "Gushan Shenyan",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Cuiyan Lingcan",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Taiyuan Fu",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Caoshan Huixia",
    teacher: "Caoshan Benji",
    sect: "Caodong"
  },
  {
    name_en: "Jingfeng Congzhi",
    teacher: "Caoshan Benji",
    sect: "Caodong"
  },
  {
    name_en: "Lumen Zhenchan",
    teacher: "Caoshan Benji",
    sect: "Caodong"
  },
  {
    name_en: "Heyu Kuanghui",
    teacher: "Caoshan Benji",
    sect: "Caodong"
  },
  {
    name_en: "Yuwang Hongtong",
    teacher: "Caoshan Benji",
    sect: "Caodong"
  },
  {
    name_en: "Zifu Rubao",
    teacher: "Xita Guangmu",
    sect: "Guiyang"
  },
  {
    name_en: "Bajiao Huiqing",
    teacher: "Nanta Guangyong",
    sect: "Guiyang"
  },
  {
    name_en: "Fengxue Yanzhao",
    teacher: "Nanyuan Huiyong",
    sect: "Linji"
  },
  {
    name_en: "Luohan Guichen",
    teacher: "Xuansha Shibei",
    sect: ""
  },
  {
    name_en: "Xianglin Chengyuan",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Dongshan Shouchu",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Deshan Yuanmi",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Shuangquan Renyu",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Baling Haojian",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Fengxian Daoshen",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Tongan Guanzhi",
    teacher: "Tongan Daopi",
    sect: "Caodong"
  },
  {
    name_en: "Mingzhao Deqian",
    teacher: "Luoshan Daoxian",
    sect: ""
  },
  {
    name_en: "Shuangquan Shikuang",
    teacher: "Yunmen Wenyan",
    sect: "Yunmen"
  },
  {
    name_en: "Guizhen Deshao",
    teacher: "Zifu Rubao",
    sect: "Guiyang"
  },
  {
    name_en: "Xingyang Qingrang",
    teacher: "Bajiao Huiqing",
    sect: "Guiyang"
  },
  {
    name_en: "Shoushan Xingnian",
    teacher: "Fengxue Yanzhao",
    sect: "Linji"
  },
  {
    name_en: "Fayan Wenyi",
    teacher: "Luohan Guichen",
    sect: "Fayan"
  },
  {
    name_en: "Zhimen Guangzuo",
    teacher: "Xianglin Chengyuan",
    sect: "Yunmen"
  },
  {
    name_en: "Deshan Huiyuan",
    teacher: "Shuangquan Renyu",
    sect: "Yunmen"
  },
  {
    name_en: "Wenshu Yingzhen",
    teacher: "Deshan Yuanmi",
    sect: "Yunmen"
  },
  {
    name_en: "Lianhua Fengxiang",
    teacher: "Shuangquan Renyu",
    sect: "Yunmen"
  },
  {
    name_en: "Liangshan Yuanguan",
    teacher: "Tongan Guanzhi",
    sect: "Caodong"
  },
  {
    name_en: "Wuzu Shijie",
    teacher: "Shuangquan Shikuang",
    sect: "Yunmen"
  },
  {
    name_en: "Fuyan Liangya",
    teacher: "Dongshan Shouchu",
    sect: "Yunmen"
  },
  {
    name_en: "Baoen Qicong",
    teacher: "Mingzhao Deqian",
    sect: ""
  },
  {
    name_en: "Sanjiao Zhiqian",
    teacher: "Guizhen Deshao",
    sect: "Guiyang"
  },
  {
    name_en: "Fenyang Shanzhao",
    teacher: "Shoushan Xingnian",
    sect: "Linji"
  },
  {
    name_en: "Tiantai Deshao",
    teacher: "Fayan Wenyi",
    sect: ""
  },
  {
    name_en: "Xuedou Chongxian",
    teacher: "Zhimen Guangzuo",
    sect: ""
  },
  {
    name_en: "Kaixian Shanxian",
    teacher: "Deshan Huiyuan",
    sect: "Yunmen"
  },
  {
    name_en: "Jiufeng Qin",
    teacher: "Zhimen Guangzuo",
    sect: ""
  },
  {
    name_en: "Shexian Guixing",
    teacher: "Shoushan Xingnian",
    sect: "Linji"
  },
  {
    name_en: "Dayang Jingxuan",
    teacher: "Liangshan Yuanguan",
    sect: "Caodong"
  },
  {
    name_en: "Sanjiao Zhisong",
    teacher: "Shoushan Xingnian",
    sect: "Linji"
  },
  {
    name_en: "Dongshan Xiaocong",
    teacher: "Wenshu Yingzhen",
    sect: "Yunmen"
  },
  {
    name_en: "Dongshan Zibao",
    teacher: "Wuzu Shijie",
    sect: "Yunmen"
  },
  {
    name_en: "Letan Huaicheng",
    teacher: "Wuzu Shijie",
    sect: "Yunmen"
  },
  {
    name_en: "Beichan Zhixian",
    teacher: "Fuyan Liangya",
    sect: "Yunmen"
  },
  {
    name_en: "Chongshou Qichou",
    teacher: "Fayan Wenyi",
    sect: ""
  },
  {
    name_en: "Guizong Cezhen",
    teacher: "Fayan Wenyi",
    sect: ""
  },
  {
    name_en: "Baoen Huiming",
    teacher: "Fayan Wenyi",
    sect: ""
  },
  {
    name_en: "Baizhang Daoheng",
    teacher: "Fayan Wenyi",
    sect: ""
  },
  {
    name_en: "Xingyang Ciduo",
    teacher: "Sanjiao Zhiqian",
    sect: "Guiyang"
  },
  {
    name_en: "Shishuang Chuyuan",
    teacher: "Fenyang Shanzhao",
    sect: "Linji"
  },
  {
    name_en: "Yongming Yanshou",
    teacher: "Tiantai Deshao",
    sect: "Fayan, Pure land"
  },
  {
    name_en: "Fuyin Liaoyuan",
    teacher: "Kaixian Shanxian",
    sect: "Yunmen"
  },
  {
    name_en: "Tianyi Yihuai",
    teacher: "Xuedou Chongxian",
    sect: ""
  },
  {
    name_en: "Chengtian Chuanzong",
    teacher: "Xuedou Chongxian",
    sect: ""
  },
  {
    name_en: "Thảo Đường",
    teacher: "Xuedou Chongxian",
    sect: ""
  },
  {
    name_en: "Fushan Fayuan",
    teacher: "Shexian Guixing",
    sect: "Linji"
  },
  {
    name_en: "Yuwang Huailian",
    teacher: "Letan Huaicheng",
    sect: "Yunmen"
  },
  {
    name_en: "Fori Qisong",
    teacher: "Dongshan Xiaocong",
    sect: "Yunmen"
  },
  {
    name_en: "Fachang Yiyu",
    teacher: "Beichan Zhixian",
    sect: "Yunmen"
  },
  {
    name_en: "Wuyun Zhifeng",
    teacher: "Tiantai Deshao",
    sect: "Fayan"
  },
  {
    name_en: "Yangqi Fanghui",
    teacher: "Shishuang Chuyuan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Huanglong Huinan",
    teacher: "Shishuang Chuyuan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Cuiyan Kezhen",
    teacher: "Shishuang Chuyuan",
    sect: "Linji"
  },
  {
    name_en: "Touzi Yiqing",
    teacher: "Fushan Fayuan",
    sect: "Linji, Caodong"
  },
  {
    name_en: "Baiyun Shouduan",
    teacher: "Yangqi Fanghui",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yungai Shouzhi",
    teacher: "Huanglong Huinan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Baofeng Kewen",
    teacher: "Huanglong Huinan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Huitang Zuxin",
    teacher: "Huanglong Huinan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Baoning Renyong",
    teacher: "Yangqi Fanghui",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Dagui Muzhe",
    teacher: "Cuiyan Kezhen",
    sect: "Linji"
  },
  {
    name_en: "Furong Daokai",
    teacher: "Touzi Yiqing",
    sect: "Caodong"
  },
  {
    name_en: "Donglin Changcong",
    teacher: "Huanglong Huinan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Letan Hongying",
    teacher: "Huanglong Huinan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Wuzu Fayan",
    teacher: "Baiyun Shouduan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Lumen Zijue",
    teacher: "Furong Daokai",
    sect: "Caodong"
  },
  {
    name_en: "Letan Wenzhun",
    teacher: "Baofeng Kewen",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Lingyuan Weiqing",
    teacher: "Huitang Zuxin",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Sixin Wuxin",
    teacher: "Huitang Zuxin",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Yuanwu Keqin",
    teacher: "Wuzu Fayan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Kaifu Daoning",
    teacher: "Wuzu Fayan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Puzhao Yibian",
    teacher: "Lumen Zijue",
    sect: "Caodong"
  },
  {
    name_en: "Foyan Qingyuan",
    teacher: "Wuzu Fayan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Changling Shouzhuo",
    teacher: "Lingyuan Weiqing",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Foxin Bencai",
    teacher: "Lingyuan Weiqing",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Zhìtōng",
    teacher: "Lingyuan Weiqing",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Huqiu Shaolong",
    teacher: "Yuanwu Keqin",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Huguo Jingyuan",
    teacher: "Yuanwu Keqin",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Dahui Zonggao",
    teacher: "Yuanwu Keqin",
    sect: "Linji, Yangqi, Dahui"
  },
  {
    name_en: "Xiatang Huiyuan",
    teacher: "Yuanwu Keqin",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yuehan Shanguo",
    teacher: "Kaifu Daoning",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Lingyan Sengbao",
    teacher: "Puzhao Yibian",
    sect: "Caodong"
  },
  {
    name_en: "Miyin Anmin",
    teacher: "Yuanwu Keqin",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wushi Jiechen",
    teacher: "Changling Shouzhuo",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Biefeng Zuzhen",
    teacher: "Foxin Bencai",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Yingan Tanhua",
    teacher: "Huqiu Shaolong",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wakuan Shitai",
    teacher: "Huguo Jingyuan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Zhuo’an Deguang",
    teacher: "Dahui Zonggao",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Lingyin Daoji",
    teacher: "Xiatang Huiyuan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yushan Shiti",
    teacher: "Lingyan Sengbao",
    sect: "Caodong"
  },
  {
    name_en: "Zishou Miaozong",
    teacher: "Dahui Zonggao",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wannian Tanguan",
    teacher: "Wushi Jiechen",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Mian Xianjie",
    teacher: "Yingan Tanhua",
    sect: ""
  },
  {
    name_en: "Xueyan Huiman",
    teacher: "Yushan Shiti",
    sect: "Caodong"
  },
  {
    name_en: "Xue'an Congjin",
    teacher: "Wannian Tanguan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Xu'an Huaichang",
    teacher: "Wannian Tanguan",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Poan Zuxian",
    teacher: "Mian Xianjie",
    sect: ""
  },
  {
    name_en: "Songyuan Chongyue",
    teacher: "Mian Xianjie",
    sect: ""
  },
  {
    name_en: "Tào Nguyên Đạo Sinh",
    teacher: "Mian Xianjie",
    sect: ""
  },
  {
    name_en: "Wansong Xingxiu",
    teacher: "Xueyan Huiman",
    sect: "Caodong"
  },
  {
    name_en: "Eisai Myōan",
    teacher: "Xu'an Huaichang",
    sect: "Linji, Huanglong"
  },
  {
    name_en: "Wuzhun Shifan",
    teacher: "Poan Zuxian",
    sect: ""
  },
  {
    name_en: "Xueting Fuyu",
    teacher: "Wansong Xingxiu",
    sect: "Caodong"
  },
  {
    name_en: "Xueyan Zuqin",
    teacher: "Wuzhun Shifan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Lingyin Wentai",
    teacher: "Xueting Fuyu",
    sect: "Caodong"
  },
  {
    name_en: "Gaofeng Yuanmiao",
    teacher: "Xueyan Zuqin",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Huanyuan Fuyu",
    teacher: "Xueyan Zuqin",
    sect: "Caodong"
  },
  {
    name_en: "Zhongfeng Mingben",
    teacher: "Gaofeng Yuanmiao",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Chunzuo Wencai",
    teacher: "Huanyuan Fuyu",
    sect: "Caodong"
  },
  {
    name_en: "Tianru Weize",
    teacher: "Zhongfeng Mingben",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Qianyan Yuanzhang",
    teacher: "Zhongfeng Mingben",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Songting Ziyan",
    teacher: "Chunzuo Wencai",
    sect: "Caodong"
  },
  {
    name_en: "Ningran Liaogai",
    teacher: "Songting Ziyan",
    sect: "Caodong"
  },
  {
    name_en: "Wanfeng Shiwei",
    teacher: "Qianyan Yuanzhang",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Jukong Qibin",
    teacher: "Ningran Liaogai",
    sect: "Caodong"
  },
  {
    name_en: "Baozang Puchi",
    teacher: "Wanfeng Shiwei",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wufang Kecong",
    teacher: "Jukong Qibin",
    sect: "Caodong"
  },
  {
    name_en: "Dongming Huichan",
    teacher: "Baozang Puchi",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yuezhou Wenzai",
    teacher: "Wufang Kecong",
    sect: "Caodong"
  },
  {
    name_en: "Haizhou Puci",
    teacher: "Dongming Huichan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Zongjing Zongshu",
    teacher: "Yuezhou Wenzai",
    sect: "Caodong"
  },
  {
    name_en: "Baofeng Mingxuan",
    teacher: "Haizhou Puci",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yunkong Changzhong",
    teacher: "Zongjing Zongshu",
    sect: "Caodong"
  },
  {
    name_en: "Tianqi Benrui",
    teacher: "Baofeng Mingxuan",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wuming Huijing",
    teacher: "Yunkong Changzhong",
    sect: "Caodong"
  },
  {
    name_en: "Wuwen Mingcong",
    teacher: "Tianqi Benrui",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Wuyi Yuanlai",
    teacher: "Wuming Huijing",
    sect: "Caodong, Boshan Line (博山糸)"
  },
  {
    name_en: "Huitai Yuanjing",
    teacher: "Wuming Huijing",
    sect: "Caodong"
  },
  {
    name_en: "Yuanjue Yuanxian",
    teacher: "Wuming Huijing",
    sect: "Caodong, Gushan Line (鼓山糸)"
  },
  {
    name_en: "Xiaoyan Debao",
    teacher: "Wuwen Mingcong",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Yunqi Zhuhong",
    teacher: "Xiaoyan Debao",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Huanyou Zhengchuan",
    teacher: "Xiaoyan Debao",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Langhui Shirong",
    teacher: "",
    sect: "Linji"
  },
  {
    name_en: "Yuelang Quanding",
    teacher: "Langhui Shirong",
    sect: "Linji"
  },
  {
    name_en: "Chuchan Quanzhen",
    teacher: "Langhui Shirong",
    sect: "Linji"
  },
  {
    name_en: "Mingxuan Xirui",
    teacher: "Yuelang Quanding",
    sect: "Linji"
  },
  {
    name_en: "Tienan",
    teacher: "",
    sect: ""
  },
  {
    name_en: "Laiguo Miaoshu",
    teacher: "Mingxuan Xirui",
    sect: "Linji"
  },
  {
    name_en: "Yuexi Xinyuan",
    teacher: "Mingxuan Xirui",
    sect: ""
  },
  {
    name_en: "Deqing Yanche",
    teacher: "",
    sect: "Linji, Yangqi, Guiyang, Yunmen, Fayan, Caodong"
  },
  {
    name_en: "Laiguo Miaoshu",
    teacher: "Mingxuan Xirui",
    sect: "Linji"
  },
  {
    name_en: "Yuexi Xinyuan",
    teacher: "Mingxuan Xirui",
    sect: ""
  },
  {
    name_en: "行表",
    teacher: "Dàoxuán (道璿)",
    sect: ""
  },
  {
    name_en: "Tối Trừng",
    teacher: "Hành Biểu (行表)",
    sect: ""
  },
  {
    name_en: "Duệ Sơn Giác A",
    teacher: "Shi Huiyuan",
    sect: ""
  },
  {
    name_en: "Kohō Kakumyō",
    teacher: "Zhongfeng Mingben",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Kosen Ingen",
    teacher: "Zhongfeng Mingben",
    sect: "Linji, Yangqi"
  },
  {
    name_en: "Bankei Yotaku",
    teacher: "Bokuō Sogyū",
    sect: "Linji, Yangqi, "
  },
  {
    name_en: "Zhongshan Faxian",
    teacher: "Vinitaruci",
    sect: ""
  },
  {
    name_en: "Weili Juekai",
    teacher: "Thích Hoằng Tu",
    sect: ""
  },
  {
    name_en: "Chŏlgam Toyun",
    teacher: "Nanquan Puyuan",
    sect: ""
  },
  {
    name_en: "Chinghyo Choljung",
    teacher: "Chŏlgam Toyun",
    sect: ""
  },
  {
    name_en: "Longhua Lingzhao",
    teacher: "Xuefeng Yicun",
    sect: ""
  },
  {
    name_en: "Tongjin Kyŏngbo",
    teacher: "Sushan Kuangren",
    sect: "Caodong"
  },
  {
    name_en: "Pŏpgyŏng Hyŏnhwi",
    teacher: "Letan Kuangwu",
    sect: ""
  }
]
export default masterDb;
