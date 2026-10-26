import type { Lang } from '@/i18n/LanguageContext';

type Bilingual = { zh: string; en: string };

export type CategorySlug = 'disposable' | 'latex' | 'fashion' | 'work' | 'sports';

export type Category = {
  slug: CategorySlug;
  labelZh: string;
  labelEn: string;
  oldPath: string;
  description: Bilingual;
  image: string;
};

export const brandLogo: string =
  'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/guardnar/Ka2.jpeg';

export const brandName: Bilingual = {
  zh: '加德纳',
  en: 'Guardnar',
};

export const companyFullName: Bilingual = {
  zh: '嘉鴻手套實業有限公司',
  en: 'Ka Hung Gloves Industrial Company Limited',
};

export const tagline: Bilingual = {
  zh: '精密手部防护，为建设世界的人而造',
  en: 'Precision hand protection, engineered for the people who build the world',
};

export const heroCopy: Bilingual = {
  zh: '30余年专业个人安全防护装备制造经验，涵盖头面部、手部、足部、工装及坠落防护，产品远销亚洲、北美、欧洲、南美及中东。',
  en: 'Over 30 years of expertise in personal protective equipment — covering head, hand, foot, apparel and fall protection. Our products serve markets across Asia, the Americas, Europe, the Middle East and beyond.',
};

export const navItems: { labelZh: string; labelEn: string; to: string }[] = [
  { labelZh: '首页', labelEn: 'Home', to: '/' },
  { labelZh: '产品', labelEn: 'Products', to: '/products' },
  { labelZh: '关于我们', labelEn: 'About', to: '/about' },
  { labelZh: '联系我们', labelEn: 'Contact', to: '/contact' },
];

export const categoryNav: { labelZh: string; labelEn: string; to: string }[] = [
  { labelZh: '一次性无粉手套', labelEn: 'Disposable Powder-Free', to: '/category/disposable' },
  { labelZh: '乳胶手套', labelEn: 'Latex Gloves', to: '/category/latex' },
  { labelZh: '时款手套', labelEn: 'Fashion Gloves', to: '/category/fashion' },
  { labelZh: '劳动手套', labelEn: 'Work Gloves', to: '/category/work' },
  { labelZh: '运动手套', labelEn: 'Sports Gloves', to: '/category/sports' },
];

export const productTiles: CategorySlug[] = ['disposable', 'latex', 'fashion', 'work', 'sports'];

export const categories: Category[] = [
  {
    slug: 'disposable',
    labelZh: '一次性无粉手套',
    labelEn: 'Disposable Powder-Free Gloves',
    oldPath: '/%e4%b8%80%e6%ac%a1%e6%80%a7%e6%97%a0%e7%b2%89%e6%89%8b%e5%a5%97/',
    image: 'https://images.pexels.com/photos/4021267/pexels-photo-4021267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: {
      zh: '一次性无粉手套专为需要高度洁净和避免过敏风险的场合设计。通过氯洗或聚合物涂层等技术，内壁光滑，即使没有粉末也能轻松穿戴。这不仅杜绝了粉末可能造成的交叉污染（如食品处理、实验室样本），更关键的是避免了粉末吸附和传播过敏原（如乳胶蛋白），大大降低使用者的过敏几率。常见材质包括丁腈（Nitrile）、乳胶（Latex）和PVC，广泛应用于医疗护理、食品加工、电子及精密仪器行业，是现代讲求安全与卫生的主流选择。',
      en: 'Disposable powder-free gloves are designed for environments demanding high cleanliness and minimal allergy risk. Through chlorinated or polymer-coating processes, the interior remains smooth and easy to don without powder. This eliminates cross-contamination risks (e.g. food handling, lab samples) and, critically, prevents powder from absorbing and transmitting allergens such as latex proteins — significantly reducing allergic reactions. Common materials include nitrile, latex and PVC. Widely used in medical care, food processing, electronics and precision instrumentation, they are the mainstream choice for modern safety and hygiene standards.',
    },
  },
  {
    slug: 'latex',
    labelZh: '乳胶手套',
    labelEn: 'Latex Gloves',
    oldPath: '/%e4%b9%b3%e8%83%b6%e6%89%8b%e5%a5%97-latex-gloves/',
    image: 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/guardnar/bb.webp',
    description: {
      zh: '乳胶手套由天然橡胶制成，以其无与伦比的弹性和贴合度著称，能像第二层皮肤般紧贴双手，提供极佳的触感灵敏度和操作灵活性。这使其成为医疗检查、牙科、实验室精密操作等领域的传统首选。乳胶材质对多种病毒、细菌及水性化学品具有可靠的防护屏障作用。然而，其最显著的缺点是天然乳胶蛋白可能引发部分使用者过敏反应，且其耐油性和抗刺穿能力相对较弱，不适合用于处理油性物质。',
      en: 'Latex gloves are made from natural rubber and are renowned for their unparalleled elasticity and fit — conforming to the hand like a second skin to provide exceptional tactile sensitivity and dexterity. This makes them the traditional choice for medical examinations, dental work and precision laboratory operations. Latex provides a reliable barrier against many viruses, bacteria and water-based chemicals. However, their most notable drawback is that natural latex proteins can trigger allergic reactions in some users, and their oil resistance and puncture strength are relatively limited, making them unsuitable for handling oily substances.',
    },
  },
  {
    slug: 'fashion',
    labelZh: '时款手套',
    labelEn: 'Fashion Gloves',
    oldPath: '/%e6%97%b6%e6%ac%be%e6%89%8b%e5%a5%97-fashion-gloves/',
    image: 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/guardnar/761587.jpg',
    description: {
      zh: '时款手套融合时尚设计与日常防护功能，适用于户外休闲、都市通勤及生活方式场景。采用优质面料与精细工艺，在保证手部舒适与基础防护的同时，注重外观美感与佩戴体验，满足现代消费者对品质生活的多元化需求。',
      en: 'Fashion gloves combine stylish design with everyday protection, suited for outdoor leisure, urban commuting and lifestyle scenarios. Using premium fabrics and fine craftsmanship, they balance hand comfort and basic protection with an emphasis on aesthetics and wearing experience — meeting the diverse needs of modern consumers for quality living.',
    },
  },
  {
    slug: 'work',
    labelZh: '劳动手套',
    labelEn: 'Work Gloves',
    oldPath: '/%e5%8a%b3%e5%8a%a8%e6%89%8b%e5%a5%97-work-gloves/',
    image: 'https://images.pexels.com/photos/11427400/pexels-photo-11427400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: {
      zh: '劳动手套专为工业生产、建筑施工、机械操作等高强度作业环境设计。采用耐磨、防割、抗穿刺材料，有效保护双手免受切割、磨损、撞击等伤害。部分产品兼具防滑、耐油、耐高温等特性，适用于通用工业、农业、建筑、电力等特种行业，为一线劳动者提供可靠的手部安全保障。',
      en: 'Work gloves are engineered for high-intensity environments such as industrial production, construction and mechanical operation. Using wear-resistant, cut-resistant and puncture-resistant materials, they effectively protect hands from cuts, abrasion and impact. Certain models also feature anti-slip, oil-resistant and heat-resistant properties — suitable for general industry, agriculture, construction, utilities and other specialised sectors, providing reliable hand protection for frontline workers.',
    },
  },
  {
    slug: 'sports',
    labelZh: '运动手套',
    labelEn: 'Sports Gloves',
    oldPath: '/%e8%bf%90%e5%8a%a8%e6%89%8b%e5%a5%97-sports-gloves/',
    image: 'https://images.pexels.com/photos/6296109/pexels-photo-6296109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: {
      zh: '运动手套针对户外运动、健身训练、骑行、登山等运动场景开发。注重透气性、灵活性与抓握力，采用吸湿排汗面料与人体工学设计，在提供手部保护的同时不影响运动表现。产品涵盖高级户外运动及军警战术等专业领域，满足不同运动等级的防护需求。',
      en: 'Sports gloves are developed for outdoor activities, fitness training, cycling, climbing and other athletic scenarios. They prioritise breathability, flexibility and grip, using moisture-wicking fabrics and ergonomic design to protect the hands without compromising performance. The range covers premium outdoor sports as well as military, police and tactical applications — meeting protection requirements across different levels of activity.',
    },
  },
];

export type Feature = {
  icon: string;
  title: Bilingual;
  body: Bilingual;
};

export const whyChooseUs: Feature[] = [
  {
    icon: 'ShieldCheck',
    title: { zh: '30余年专业经验', en: 'Over 30 Years of Expertise' },
    body: {
      zh: '自1993年创办以来，专注个人安全防护领域，集设计、研发、生产、销售及服务为一体。',
      en: 'Founded in 1993 and dedicated to personal protective equipment — integrating design, R&D, production, sales and service under one roof.',
    },
  },
  {
    icon: 'Globe',
    title: { zh: '全球化布局', en: 'Global Footprint' },
    body: {
      zh: '在中国内地、香港、美国、印度、孟加拉、马来西亚、缅甸等地设有工厂或区域销售中心，产品远销五大洲。',
      en: 'Factories and regional sales centres across mainland China, Hong Kong, the USA, India, Bangladesh, Malaysia and Myanmar — with products exported across five continents.',
    },
  },
  {
    icon: 'BadgeCheck',
    title: { zh: '权威认证体系', en: 'Authoritative Certifications' },
    body: {
      zh: '通过企业AAA级信用等级、ISO 9001/14001/45001体系认证、CTC标准测试、BSCI认证及欧标认证。',
      en: 'Certified with AAA enterprise credit rating, ISO 9001/14001/45001 management systems, CTC standard testing, BSCI compliance and European standards.',
    },
  },
  {
    icon: 'Users',
    title: { zh: '专业团队', en: 'Expert Team' },
    body: {
      zh: '核心管理、技术及销售团队均具备扎实的专业知识与丰富的个人安全防护行业经验。',
      en: 'Core management, technical and sales teams with deep professional knowledge and extensive PPE industry experience.',
    },
  },
];

export type ValueItem = {
  title: Bilingual;
  body: Bilingual;
};

export const qualityPromise: ValueItem[] = [
  {
    title: { zh: '企业定位', en: 'Positioning' },
    body: {
      zh: '注重研发与技术投入，保障大众的心灵手巧，得心应手。',
      en: 'Committed to R&D and technical investment, protecting dexterity and enabling confident work.',
    },
  },
  {
    title: { zh: '企业使命', en: 'Mission' },
    body: {
      zh: '稳健、创新、超越。做好"手"的文章。通过共融共赢，共享美好未来。',
      en: 'Steadiness, innovation, transcendence. Mastering the craft of hand protection. Sharing a better future through mutual growth.',
    },
  },
  {
    title: { zh: '企业愿景', en: 'Vision' },
    body: {
      zh: '敬业乐业，以人为本，面向未来，实现人性化管理和制度相结合的现代化管理新模式。',
      en: 'Dedication, people-first, future-oriented — realising a modern management model that integrates human-centred values with systematic governance.',
    },
  },
];

export const innovationItems: ValueItem[] = [
  {
    title: { zh: '多品牌矩阵', en: 'Multi-Brand Portfolio' },
    body: {
      zh: '拥有"加德纳（Guardnar）"、"嘉鸿防护（KA HUNG）"、"劳虎"等多个商标专有权。',
      en: 'Owns multiple registered trademarks including Guardnar, KA HUNG and LAOHU.',
    },
  },
  {
    title: { zh: '国际验厂审核', en: 'International Audits' },
    body: {
      zh: '通过沃尔玛、家得宝、劳氏、塔吉、TSC、Big Lots等大型外资企业验厂审核。',
      en: 'Passed factory audits from major global retailers including Walmart, The Home Depot, Lowe\'s, Target, TSC and Big Lots.',
    },
  },
  {
    title: { zh: '全领域覆盖', en: 'Full-Sector Coverage' },
    body: {
      zh: '产品贯穿通用工业、农业、建筑、运动、生活及军队、警察、消防、环保、电力等特种行业。',
      en: 'Products span general industry, agriculture, construction, sports, lifestyle — and specialised sectors including military, police, firefighting, environmental protection and power.',
    },
  },
];

export const certificationList: string[] = [
  '企业AAA级信用等级',
  'ISO 9001 质量管理',
  'ISO 14001 环境管理',
  'ISO 45001 职业安全',
  'CTC 标准测试',
  'BSCI 商业社会标准',
  '欧标认证',
];

export const aboutParagraphs: Bilingual[] = [
  {
    zh: '嘉鴻手套實業有限公司创办于1993年，坐落于中国古代"海上丝绸之路"起点—泉州，专注个人安全防护领域，集设计、研发、生产、销售及服务为一体的专业个人安全防护装备生产厂家、品牌商及个人安全防护用品供应商，涵盖头面部防护（安全帽、安全眼镜、安全眼罩及面屏、听力防护、空气呼吸器等）、手部防护（劳保、高级户外运动、时尚生活、军警用、消防及战术等手套）、足部防护（安全鞋、雨鞋等）、工装防护（工装、户外防寒服、荧光服、焊工服、雨衣、防化服、隔热服及防护围裙等）及坠落防护（安全带等）等个人安全防护装备产品。',
    en: 'Ka Hung Gloves Industrial Company Limited was founded in 1993 in Quanzhou — the starting point of China\'s ancient "Maritime Silk Road." Dedicated to personal protective equipment, the group integrates design, R&D, production, sales and service as a professional PPE manufacturer, brand owner and supplier. Its product range covers head and face protection (safety helmets, eyewear, face shields, hearing protection, respirators), hand protection (work, outdoor sports, fashion, military/police, firefighting and tactical gloves), foot protection (safety shoes, rain boots), apparel protection (workwear, outdoor cold-weather gear, hi-vis clothing, welding suits, rainwear, chemical suits, thermal suits and protective aprons) and fall protection (safety harnesses).',
  },
  {
    zh: '嘉鴻手套實業有限公司经过30余年的发展，现有的核心管理、技术及销售管理团队人员均具有扎实的专业知识与丰富的个人安全防护行业经验，为公司产品开发、生产及推广应用贡献了重要力量。同时集团在中国内地、中国香港，美国、印度、孟加拉、马来西亚、缅甸等地设有工厂或区域销售中心，为集团独立的销售网络平台提供了强大的产品后盾支持，产品内销遍布全国各地，远销亚洲、北美、欧洲、南美、中东等主要国家和地区，深受国内外客户的信赖和支持。随着国家对国内国际双循环的新发展格局的不断推进，集团正在加大力度完善销售及营销网络，深耕国内外市场，实现国内国际双循环战略。',
    en: 'After over 30 years of development, Ka Hung Gloves Industrial Company Limited\'s core management, technical and sales teams possess solid professional knowledge and extensive PPE industry experience, contributing significantly to product development, production and market expansion. The group operates factories and regional sales centres in mainland China, Hong Kong, the United States, India, Bangladesh, Malaysia and Myanmar, providing strong support for its independent sales network. Products are sold throughout China and exported to major regions including Asia, North America, Europe, South America and the Middle East, earning the trust of domestic and international clients. As the nation advances the "dual circulation" development paradigm, the group is intensifying efforts to refine its sales and marketing networks, deepening both domestic and international markets.',
  },
  {
    zh: '经过多年励精图治，嘉鴻手套實業有限公司积极实施标准化、规范化管理战略，集团目前拥有"加德纳（Guardnar）"、"嘉鸿防护（KA HUNG）"、"劳虎"等多个商标专有权；通过企业AAA级信用等级，ISO9001质量管理、ISO14001环境管理与ISO45001职业安全管理等体系认证和CTC、BSCI（商业社会标准认证）、欧标等标准测试认证以及沃尔玛、家得宝、劳氏、塔吉、TSC、Big Lots等多家大型外资企业的验厂审核。集团产品服务已贯穿于通用工业、农业、建筑、运动、生活等多个领域，以及军队、警察、消防、环保、电力等特种行业，力求研发和生产出环保、舒适、健康的个人安全防护装备产品，满足不同行业对于个人安全防护装备的不同环境和等级需求。',
    en: 'Through years of dedicated governance, Ka Hung Gloves Industrial Company Limited has actively implemented standardised management strategies. The group holds multiple registered trademarks including "Guardnar," "KA HUNG" and "LAOHU." It has achieved AAA enterprise credit rating, ISO 9001 quality management, ISO 14001 environmental management and ISO 45001 occupational health and safety certifications, along with CTC, BSCI and European standard testing. The group has passed factory audits from major global retailers such as Walmart, The Home Depot, Lowe\'s, Target, TSC and Big Lots. Products and services span general industry, agriculture, construction, sports and lifestyle, as well as specialised sectors including military, police, firefighting, environmental protection and power — striving to develop eco-friendly, comfortable and healthy PPE that meets the diverse environmental and grading requirements of different industries.',
  },
  {
    zh: '作为个人安全防护装备专家，我们致力于为客户提供专业的个人安全防护解决方案，坚持用企业文化提升企业核心竞争力，使企业在发展中树立起良好的社会形象。嘉鸿人将继续秉承"建功立事，鸿业远图"的企业精神，一如既往地做好"安全"文章，注重研发与技术投入，为广大的消费者带来高性价比的产品与服务，保护人类的生命安全和职业健康，为行业注入新鲜的血液，促进安全防护用品行业的健康、有序发展。',
    en: 'As PPE specialists, we are committed to providing professional personal safety solutions. We uphold corporate culture as a driver of core competitiveness, building a strong social image through sustainable development. The people of Ka Hung will continue to carry forward the enterprise spirit of "building achievement, pursuing grand vision" — dedicating ourselves to the craft of safety, prioritising R&D and technical investment, and delivering high-value products and services to consumers. We protect human life and occupational health, inject vitality into the industry, and promote the healthy and orderly development of the protective equipment sector.',
  },
];

export const corporateSpirit: Bilingual = {
  zh: '建功立事，鸿业远图',
  en: 'Build achievement, pursue grand vision',
};

export type ProductLine = {
  icon: string;
  title: Bilingual;
  desc: Bilingual;
};

export const productLines: ProductLine[] = [
  {
    icon: 'Droplets',
    title: { zh: '浸膠手套', en: 'Dipped Gloves' },
    desc: {
      zh: '棉紗底浸塗乳膠、丁腈或PU塗層，兼具防滑、耐磨與耐油性能，適用於建築、園藝及輕工業作業。',
      en: 'Cotton liner dipped in latex, nitrile or PU coatings — combining grip, abrasion and oil resistance for construction, gardening and light industry.',
    },
  },
  {
    icon: 'HardHat',
    title: { zh: '勞保手套', en: 'PPE Work Gloves' },
    desc: {
      zh: '符合國家與行業安全標準的勞動防護手套，為一線工人提供防割、防磨與防撞擊保護。',
      en: 'Work protection gloves meeting national and industry safety standards — cut, abrasion and impact protection for frontline workers.',
    },
  },
  {
    icon: 'Flame',
    title: { zh: '電焊手套', en: 'Welding Gloves' },
    desc: {
      zh: '採用耐高溫牛皮與阻燃面料，有效隔熱並防止火花飛濺燙傷，適用於焊接與金屬加工場景。',
      en: 'Heat-resistant cowhide and flame-retardant fabrics — shielding against heat and spark splash for welding and metalworking.',
    },
  },
  {
    icon: 'Feather',
    title: { zh: '超纖手套', en: 'Microfibre Gloves' },
    desc: {
      zh: '超細纖維材質輕薄貼手，提供高靈敏度與精準抓握，適合精密裝配、電子及檢修作業。',
      en: 'Ultra-thin microfibre for a snug fit with high sensitivity and precise grip — ideal for precision assembly, electronics and inspection.',
    },
  },
  {
    icon: 'Home',
    title: { zh: '家用及運動手套', en: 'Household & Sports Gloves' },
    desc: {
      zh: '涵蓋日常家務清潔、廚房防燙及戶外骑行、登山、滑雪等運動場景，兼顧舒適與防護。',
      en: 'Covering everyday household cleaning and kitchen protection, plus outdoor cycling, hiking and skiing — balancing comfort and protection.',
    },
  },
  {
    icon: 'ShieldCheck',
    title: { zh: '特種防護手套', en: 'Specialised Protection Gloves' },
    desc: {
      zh: '針對軍警、消防、電力及化工等特種行業開發的專業手套，滿足高等級防護需求。',
      en: 'Professional gloves developed for military, police, firefighting, electrical and chemical sectors — meeting high-grade protection requirements.',
    },
  },
  {
    icon: 'HardHat',
    title: { zh: '頭面部防護裝備', en: 'Head & Face Protection' },
    desc: {
      zh: '包括安全帽、安全眼鏡、面屏、聽力防護及空氣呼吸器等，為頭面部提供全面安全屏障。',
      en: 'Including safety helmets, eyewear, face shields, hearing protection and respirators — comprehensive head and face safety barriers.',
    },
  },
];

export const contactIntro: Bilingual = {
  zh: '我们非常关注您的意见和建议，如果您有任何问题或疑问，请与我们取得联系，我们将为您提供最优质的服务。',
  en: 'We value your feedback and inquiries. If you have any questions, please don\'t hesitate to reach out — we are committed to providing you with the highest quality of service.',
};

export type ContactPerson = {
  label: Bilingual;
  name: string;
  phone: string;
};

export type ContactRegion = {
  title: Bilingual;
  switchboard: string;
  address: Bilingual;
  persons: ContactPerson[];
};

export const mainlandContact: ContactRegion = {
  title: { zh: '中国内地', en: 'Mainland China' },
  switchboard: '0595-22459188',
  address: {
    zh: '泉州市鲤城区池峰路1号香港嘉鸿集团大厦',
    en: 'Ka Hung Group Building, No. 1 Chifeng Road, Licheng District, Quanzhou',
  },
  persons: [
    { label: { zh: '劳保渠道业务', en: 'PPE Channel' }, name: '穆小姐', phone: '18876229957' },
    { label: { zh: '劳保大客户业务', en: 'PPE Key Accounts' }, name: '田小姐', phone: '18876229986' },
    { label: { zh: '贸易事业部（定制）业务一部', en: 'Trade Dept. (Custom) — Div. 1' }, name: '吴小姐', phone: '18876539208' },
    { label: { zh: '贸易事业部（定制）业务二部', en: 'Trade Dept. (Custom) — Div. 2' }, name: '林小姐', phone: '18876222099' },
  ],
};

export const hongKongContact: ContactRegion = {
  title: { zh: '香港', en: 'Hong Kong' },
  switchboard: '852-23418368',
  address: {
    zh: '香港九龙观塘创业街15号万泰利广场37楼全层',
    en: '37/F, Manhattan Place, 15 Wang Chiu Road, Kwun Tong, Kowloon, Hong Kong',
  },
  persons: [],
};

export const stats: { value: string; label: Bilingual }[] = [
  { value: '1993', label: { zh: '创立年份', en: 'Founded' } },
  { value: '30+', label: { zh: '年专业经验', en: 'Years of Expertise' } },
  { value: '5', label: { zh: '大洲市场覆盖', en: 'Continents Served' } },
];

export function t(b: Bilingual, lang: Lang): string {
  return b[lang];
}
