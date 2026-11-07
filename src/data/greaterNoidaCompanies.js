// ─────────────────────────────────────────────────────────────
//  GREATER NOIDA ACCOMMODATION — COMPANY PAGES (EN / KO / ZH / JA)
//  One entry per company; each language version is its own URL:
//    en  /accommodation-greater-noida-<key>
//    ko  /ko/accommodation-greater-noida-<key>   (Korean companies)
//    zh  /zh/accommodation-greater-noida-<key>
//    ja  /ja/accommodation-greater-noida-<key>   (Chinese companies)
//  Company site facts come from each company's own website or press coverage.
//  Rendered by CompanyAccommodation.jsx; SEO/hreflang/sitemap in generate-seo.js.
// ─────────────────────────────────────────────────────────────

export const BASE_PATH = 'accommodation-greater-noida';

export const BOUTIQUE_HOTELS = [
  { label: 'Amara Inn', path: '/amara' },
  { label: 'Amaaltash', path: '/amaaltash' },
  { label: 'The Glam', path: '/glam' },
  { label: 'CoCo House', path: '/coco-house' },
];

export const LANG_LABELS = { en: 'English', ko: '한국어', zh: '中文', ja: '日本語' };

export const companyPath = (key, lang) =>
  lang === 'en' ? `/${BASE_PATH}-${key}` : `/${lang}/${BASE_PATH}-${key}`;

export const greaterNoidaCompanies = [
  {
    key: 'samsung-electronics',
    langs: ['en', 'ko', 'zh'],
    name: { en: 'Samsung Electronics', ko: '삼성전자', zh: '三星电子' },
    siteTitle: {
      en: 'Samsung in Noida and Greater Noida',
      ko: '노이다·그레이터 노이다의 삼성',
      zh: '三星在诺伊达与大诺伊达',
    },
    siteText: {
      en: "Samsung's large mobile phone factory is in Noida Sector 81, it also manufactures at a plant in Greater Noida, and Samsung R&D Institute India works from an office on the Noida–Greater Noida Expressway. Teams often move between these sites, so a base in Greater Noida keeps the plant and the expressway offices within reach.",
      ko: '삼성전자의 대규모 휴대폰 공장은 노이다 섹터 81에 있고, 그레이터 노이다에도 생산 공장이 있으며, 삼성 R&D 인스티튜트 인디아는 노이다–그레이터 노이다 고속도로변 사무실에서 근무합니다. 여러 거점을 오가는 팀이 많아, 그레이터 노이다에 숙소를 두면 공장과 고속도로변 사무실 모두 이동하기 편리합니다.',
      zh: '三星在诺伊达Sector 81设有大型手机工厂，在大诺伊达也有生产工厂，三星印度研发中心则位于诺伊达–大诺伊达高速公路沿线的办公楼。团队经常往返于这些地点，住在大诺伊达可以兼顾工厂和高速公路沿线的办公室。',
    },
    teamsText: {
      en: 'We are set up for the kind of stays Samsung teams need: engineers and managers visiting from Korea, product and quality teams supporting new launches, and staff on postings of several months who want a kitchen and more space than a hotel room.',
      ko: '한국에서 오는 엔지니어와 관리자, 신제품 출시를 지원하는 제품·품질 팀, 호텔 객실보다 넓은 공간과 주방이 필요한 수개월 단위 파견 인력 등 삼성 팀에 필요한 형태의 숙박을 제공합니다.',
      zh: '我们可以满足三星团队常见的住宿需求：从韩国来访的工程师和管理人员、支持新品上市的产品与质量团队，以及需要厨房和比酒店客房更大空间的数月常驻员工。',
    },
  },
  {
    key: 'samsung-engineering',
    langs: ['en', 'ko', 'zh'],
    name: { en: 'Samsung E&A (Samsung Engineering)', ko: '삼성E&A(구 삼성엔지니어링)', zh: '三星E&A（原三星工程）' },
    siteTitle: {
      en: 'Samsung E&A India on the Noida–Greater Noida Expressway',
      ko: '노이다–그레이터 노이다 고속도로변 삼성E&A 인도 법인',
      zh: '位于诺伊达–大诺伊达高速公路沿线的三星E&A印度公司',
    },
    siteText: {
      en: 'Samsung E&A, the engineering, procurement and construction company formerly called Samsung Engineering, has its India office at Advant Navis Business Park, Sector 142, on the Noida–Greater Noida Expressway. Greater Noida is along the same expressway, which makes it a practical base for staff working from that office.',
      ko: '설계·조달·시공(EPC) 기업인 삼성E&A(구 삼성엔지니어링)의 인도 사무소는 노이다–그레이터 노이다 고속도로변 섹터 142의 Advant Navis Business Park에 있습니다. 그레이터 노이다는 같은 고속도로선상에 있어 이 사무소로 출근하는 직원의 숙소로 실용적입니다.',
      zh: '三星E&A（原三星工程）是一家设计、采购与施工（EPC）公司，其印度办公室位于诺伊达–大诺伊达高速公路沿线Sector 142的Advant Navis Business Park。大诺伊达就在同一条高速公路上，是在该办公室工作的员工较为便利的住处。',
    },
    teamsText: {
      en: 'EPC work brings project engineers, planners and specialists for assignments of weeks or months. For longer stays, our furnished serviced apartments give each person a kitchen and a quiet place to work after site hours.',
      ko: 'EPC 프로젝트에는 수주에서 수개월 동안 머무는 프로젝트 엔지니어, 공정 담당자, 전문 인력이 투입됩니다. 장기 체류에는 가구가 갖춰진 서비스 아파트를 추천하며, 개인 주방과 업무 후 조용히 일할 공간을 제공합니다.',
      zh: 'EPC项目会派驻项目工程师、计划人员和专业人员，任期从数周到数月不等。较长的住宿可选择我们的全配套服务式公寓，每人都有厨房和下班后安静办公的空间。',
    },
  },
  {
    key: 'lg-electronics',
    langs: ['en', 'ko', 'zh'],
    name: { en: 'LG Electronics', ko: 'LG전자', zh: 'LG电子' },
    siteTitle: {
      en: "LG Electronics' Greater Noida plant",
      ko: 'LG전자 그레이터 노이다 공장',
      zh: 'LG电子大诺伊达工厂',
    },
    siteText: {
      en: "LG Electronics' first manufacturing plant in India is at Plot 51, Surajpur–Kasna Road, Udyog Vihar, Greater Noida. Staying in Greater Noida itself avoids the daily drive in from Delhi or Noida.",
      ko: 'LG전자의 인도 첫 생산 공장은 그레이터 노이다 Udyog Vihar, Surajpur–Kasna Road 51번 부지에 있습니다. 그레이터 노이다 안에 숙소를 두면 델리나 노이다에서 매일 출퇴근하지 않아도 됩니다.',
      zh: 'LG电子在印度的第一家工厂位于大诺伊达Udyog Vihar的Surajpur–Kasna Road 51号地块。住在大诺伊达本地，可以免去每天从德里或诺伊达往返的车程。',
    },
    teamsText: {
      en: 'Appliance production brings engineers for line changes and new models, auditors and trainers on short visits, and managers on longer postings. We can house a single visitor in a hotel room or a team together in a serviced apartment.',
      ko: '가전 생산 현장에는 라인 변경과 신모델 대응을 위한 엔지니어, 단기 방문 감사·교육 담당자, 장기 파견 관리자가 오갑니다. 1인 방문자는 호텔 객실에, 팀 단위는 서비스 아파트에 함께 머물 수 있습니다.',
      zh: '家电生产会迎来负责产线调整和新机型的工程师、短期来访的审核与培训人员，以及长期常驻的管理人员。单人出差可以住酒店客房，团队可以一起住在服务式公寓。',
    },
  },
  {
    key: 'dreamtech',
    langs: ['en', 'ko', 'zh'],
    name: { en: 'Dreamtech', ko: '드림텍', zh: 'Dreamtech（드림텍）' },
    siteTitle: {
      en: "Dreamtech's Greater Noida plant",
      ko: '드림텍 그레이터 노이다 공장',
      zh: 'Dreamtech大诺伊达工厂',
    },
    siteText: {
      en: "Dreamtech's India plant is at Plot 95, Sector Ecotech-10, Greater Noida, where, according to the company, it makes smartphone modules, memory modules and smart medical devices. Our accommodation is also in Greater Noida, so there is no cross-city commute.",
      ko: '드림텍의 인도 공장은 그레이터 노이다 Ecotech-10 섹터 95번 부지에 있으며, 회사 소개에 따르면 스마트폰 모듈, 메모리 모듈, 스마트 의료기기를 생산합니다. 저희 숙소도 그레이터 노이다에 있어 도시를 가로지르는 출퇴근이 필요 없습니다.',
      zh: 'Dreamtech的印度工厂位于大诺伊达Ecotech-10区95号地块，据该公司介绍，工厂生产智能手机模组、内存模组和智能医疗设备。我们的住宿同样位于大诺伊达，无需跨城通勤。',
    },
    teamsText: {
      en: 'Module production relies on engineers who come from Korea to set up and support lines, often for several weeks at a time. A furnished apartment with a kitchen makes those stays easier than weeks in a hotel room.',
      ko: '모듈 생산에는 라인 셋업과 지원을 위해 한국에서 오는 엔지니어가 필요하며, 한 번에 수주씩 머무는 경우가 많습니다. 주방이 있는 가구 완비 아파트는 몇 주간의 호텔 생활보다 훨씬 편합니다.',
      zh: '模组生产需要从韩国来的工程师进行产线搭建和支持，通常一次停留数周。带厨房的全配套公寓比连续数周住酒店客房更方便。',
    },
  },
  {
    key: 'haier',
    langs: ['en', 'zh', 'ja'],
    name: { en: 'Haier', zh: '海尔', ja: 'ハイアール（Haier）' },
    siteTitle: {
      en: "Haier's Greater Noida industrial park",
      zh: '海尔大诺伊达工业园',
      ja: 'ハイアールのグレーターノイダ工業団地',
    },
    siteText: {
      en: "Haier's industrial park is at H-06, DMIC Integrated Industrial Township, Greater Noida, a home-appliance site of about 122 acres producing refrigerators, washing machines and air conditioners. Staying in Greater Noida keeps travel to the township short compared with Delhi or Noida.",
      zh: '海尔工业园位于大诺伊达DMIC综合工业城H-06，占地约122英亩，生产冰箱、洗衣机和空调。与住在德里或诺伊达相比，住在大诺伊达前往工业城的路程更短。',
      ja: 'ハイアールの工業団地は、グレーターノイダのDMIC統合工業タウンシップH-06にある約122エーカーの家電生産拠点で、冷蔵庫、洗濯機、エアコンを生産しています。デリーやノイダに滞在するより、グレーターノイダに滞在するほうが移動時間を短くできます。',
    },
    teamsText: {
      en: 'Expansion at the park brings engineers and specialists for installation and ramp-up, along with managers and visitors from headquarters. We can arrange hotel rooms for short visits and serviced apartments for teams staying weeks or months.',
      zh: '工业园的扩建会迎来负责安装和产能爬坡的工程师与专家，以及总部的管理人员和访客。短期来访可安排酒店客房，停留数周或数月的团队可安排服务式公寓。',
      ja: '工業団地の拡張に伴い、設備の据え付けや立ち上げを担うエンジニア・専門スタッフ、本社からの管理職や訪問者が来訪します。短期の出張にはホテルの客室を、数週間から数か月滞在するチームにはサービスアパートメントをご用意できます。',
    },
  },
  {
    key: 'vivo',
    langs: ['en', 'zh', 'ja'],
    name: { en: 'vivo', zh: 'vivo（维沃）', ja: 'vivo' },
    siteTitle: {
      en: "vivo's Greater Noida plant",
      zh: 'vivo大诺伊达工厂',
      ja: 'vivoのグレーターノイダ工場',
    },
    siteText: {
      en: 'vivo makes smartphones at its Greater Noida plant, a campus of about 169 acres that began manufacturing in 2024. A site of that size draws visiting engineers and managers throughout the year.',
      zh: 'vivo在大诺伊达工厂生产智能手机，园区占地约169英亩，于2024年投产。如此规模的工厂全年都有工程师和管理人员前来出差。',
      ja: 'vivoはグレーターノイダの工場でスマートフォンを生産しています。約169エーカーの敷地を持つこの工場は2024年に稼働を開始しました。これだけの規模の拠点には、年間を通じてエンジニアや管理職が出張で訪れます。',
    },
    teamsText: {
      en: 'Smartphone production often means several engineers arriving together for new models or line upgrades. We can place a group across serviced apartments or hotel rooms in Greater Noida and invoice the company for the whole booking.',
      zh: '智能手机生产经常需要多名工程师同时到岗，支持新机型或产线升级。我们可以把团队安排在大诺伊达的服务式公寓或酒店客房，并按整单向公司开票。',
      ja: 'スマートフォンの生産では、新機種やライン改良のために複数のエンジニアが同時に到着することがよくあります。グレーターノイダのサービスアパートメントやホテルの客室にグループで滞在いただき、予約全体を会社宛てに請求できます。',
    },
  },
  {
    key: 'oppo',
    langs: ['en', 'zh', 'ja'],
    name: { en: 'OPPO', zh: 'OPPO', ja: 'OPPO' },
    siteTitle: {
      en: "OPPO's Greater Noida factory",
      zh: 'OPPO大诺伊达工厂',
      ja: 'OPPOのグレーターノイダ工場',
    },
    siteText: {
      en: "OPPO manufactures smartphones at its factory in Greater Noida, which employs thousands of people. Visiting staff who stay in Greater Noida avoid the long daily drive from Delhi.",
      zh: 'OPPO在大诺伊达的工厂生产智能手机，员工数以千计。出差人员住在大诺伊达，可以避免每天从德里长途往返。',
      ja: 'OPPOはグレーターノイダの工場でスマートフォンを生産しており、数千人規模の従業員が働いています。出張者がグレーターノイダに滞在すれば、デリーからの毎日の長距離移動を避けられます。',
    },
    teamsText: {
      en: 'Factory teams range from engineers on short technical visits to managers on longer postings. Short visits suit our boutique hotel rooms, and longer stays suit a furnished serviced apartment with a kitchen.',
      zh: '工厂团队既有短期技术出差的工程师，也有长期常驻的管理人员。短期出差适合我们的精品酒店客房，较长的停留适合带厨房的全配套服务式公寓。',
      ja: '工場のチームには、短期の技術出張のエンジニアから長期赴任の管理職までいらっしゃいます。短期出張にはブティックホテルの客室を、長期滞在にはキッチン付きの家具完備サービスアパートメントをおすすめします。',
    },
  },
];

// Shared copy per language. `c` is a company entry, `l` the language.
export const COPY = {
  en: {
    eyebrow: 'Greater Noida Accommodation',
    metaTitle: (n) => `Greater Noida Accommodation for ${n} Employees | Sandane Homes`,
    metaDescription: (n) => `Accommodation in Greater Noida for ${n} staff and visiting teams: serviced apartments and boutique hotel rooms, company GST invoicing and Form C support for foreign guests.`,
    h1: (n) => `Accommodation in Greater Noida for ${n} Teams`,
    intro: (n) => `Looking for accommodation in Greater Noida for ${n} employees, engineers or visiting teams? Sandane Homes runs boutique hotels and fully furnished serviced apartments in Greater Noida, set up for corporate stays from a few nights to several months, with company invoicing and support for foreign staff.`,
    teamsTitle: 'Stays for visiting and posted staff',
    optionsTitle: 'Greater Noida accommodation options',
    options: [
      { title: 'Sandane Homes flagship hotel', path: '/sandane-homes', text: "Kitchenette rooms and executive suites at Ansal Golf Links-1, about 5 minutes from India Expo Centre & Mart, with 24/7 room service, 300 Mbps Wi-Fi and Sohee's Kitchen, our in-house Pan-Asian restaurant and café." },
      { title: 'Boutique hotels', links: BOUTIQUE_HOTELS, text: 'Amara Inn, Amaaltash, The Glam and CoCo House offer rooms with workspaces for short business visits, and several rooms at once when a team arrives together.' },
      { title: 'Serviced apartments', path: '/serviced-apartments-greater-noida', text: 'Fully furnished apartments in Jaypee Greens and Ansal Golf Links with a full kitchen and utilities included, for weekly, monthly and longer stays.' },
    ],
    view: 'View',
    includedTitle: 'What every stay includes',
    included: [
      'Company invoicing with GST, so HR and admin teams can book directly',
      'Form C filed for foreign guests within 24 hours of arrival',
      'High-speed Wi-Fi and housekeeping',
      'Nightly, weekly and monthly stays',
    ],
    faqTitle: 'Questions from HR and travel teams',
    faqs: (n) => [
      { q: `How far is your accommodation from the ${n} site?`, a: 'Our hotels and serviced apartments are in Greater Noida, around Ansal Golf Links-1, Jaypee Greens and the India Expo Centre area. Send us the address of the site your team will work at and we will tell you realistic travel times by car.' },
      { q: `Can ${n} book under a company account and pay by invoice?`, a: 'Yes. We invoice the company directly with GST, for a single guest or a whole team.' },
      { q: 'Do you handle Form C for foreign employees?', a: 'Yes. We file Form C online within 24 hours of each foreign guest\'s arrival, as Indian law requires of the accommodation provider.' },
    ],
    ctaTitle: "Plan your team's stay",
    ctaText: 'Tell us the dates, the number of guests and the site address. We will reply with options and rates.',
    whatsapp: 'WhatsApp us',
    whatsappText: (n) => `Hello Sandane Homes, I am looking for accommodation in Greater Noida for ${n} staff.`,
    call: 'Call',
    otherTitle: 'Accommodation in Greater Noida for other companies',
    languages: 'Also available in',
    breadcrumbHome: 'Home',
  },
  ko: {
    eyebrow: '그레이터 노이다 숙소',
    metaTitle: (n) => `그레이터 노이다 숙소 | ${n} 주재원·출장자 | Accommodation Greater Noida`,
    metaDescription: (n) => `${n} 직원과 출장 팀을 위한 그레이터 노이다 숙소(Greater Noida accommodation). 서비스 아파트와 부티크 호텔, 법인 GST 인보이스, 외국인 Form C 신고 지원.`,
    h1: (n) => `${n} 직원을 위한 그레이터 노이다 숙소`,
    intro: (n) => `${n} 직원, 엔지니어, 출장 팀을 위한 그레이터 노이다 숙소(accommodation in Greater Noida)를 찾고 계신가요? Sandane Homes는 그레이터 노이다에서 부티크 호텔과 가구가 완비된 서비스 아파트를 운영하며, 며칠부터 수개월까지의 법인 숙박과 법인 청구, 외국인 직원 지원을 제공합니다.`,
    teamsTitle: '출장자와 파견 직원을 위한 숙박',
    optionsTitle: '그레이터 노이다 숙소 선택지',
    options: [
      { title: 'Sandane Homes 플래그십 호텔', path: '/sandane-homes', text: '인디아 엑스포 센터 & 마트에서 약 5분 거리인 Ansal Golf Links-1의 주방 딸린 객실과 이그제큐티브 스위트. 24시간 룸서비스, 300Mbps 와이파이, 호텔 내 범아시아 레스토랑·카페 Sohee\'s Kitchen.' },
      { title: '부티크 호텔', links: BOUTIQUE_HOTELS, text: 'Amara Inn, Amaaltash, The Glam, CoCo House에서 업무 공간이 있는 객실을 단기 출장용으로 제공하며, 팀 단위 도착 시 여러 객실을 함께 준비할 수 있습니다.' },
      { title: '서비스 아파트', path: '/serviced-apartments-greater-noida', text: 'Jaypee Greens와 Ansal Golf Links의 가구 완비 아파트. 풀 키친과 공과금 포함, 주 단위·월 단위·장기 숙박.' },
    ],
    view: '보기',
    includedTitle: '모든 숙박에 포함된 사항',
    included: [
      '법인 GST 인보이스 발행 — 인사·총무 팀이 직접 예약 가능',
      '외국인 투숙객 도착 후 24시간 이내 Form C 신고',
      '고속 와이파이와 하우스키핑',
      '1박, 주 단위, 월 단위 숙박',
    ],
    faqTitle: '인사·출장 담당자 자주 묻는 질문',
    faqs: (n) => [
      { q: `숙소에서 ${n} 사업장까지 얼마나 걸리나요?`, a: '저희 호텔과 서비스 아파트는 그레이터 노이다의 Ansal Golf Links-1, Jaypee Greens, 인디아 엑스포 센터 주변에 있습니다. 팀이 근무할 사업장 주소를 알려 주시면 실제 차량 이동 시간을 안내해 드립니다.' },
      { q: `${n} 법인 명의로 예약하고 인보이스로 결제할 수 있나요?`, a: '네. 1인부터 팀 전체까지 회사에 직접 GST 인보이스를 발행합니다.' },
      { q: '외국인 직원의 Form C 신고를 해 주시나요?', a: '네. 인도 법에 따라 숙박 제공자가 외국인 투숙객 도착 후 24시간 이내에 온라인으로 Form C를 신고합니다.' },
    ],
    ctaTitle: '팀 숙박 문의',
    ctaText: '일정, 인원, 사업장 주소를 알려 주시면 숙소 옵션과 요금을 안내해 드립니다.',
    whatsapp: 'WhatsApp 문의',
    whatsappText: (n) => `안녕하세요, ${n} 직원을 위한 그레이터 노이다 숙소를 찾고 있습니다.`,
    call: '전화',
    otherTitle: '다른 기업을 위한 그레이터 노이다 숙소',
    languages: '다른 언어',
    breadcrumbHome: '홈',
  },
  zh: {
    eyebrow: '大诺伊达住宿',
    metaTitle: (n) => `大诺伊达住宿 | ${n}员工与出差团队 | Greater Noida Accommodation`,
    metaDescription: (n) => `为${n}员工和出差团队提供大诺伊达住宿（Greater Noida accommodation）：服务式公寓与精品酒店客房，企业GST发票，外籍员工Form C申报协助。`,
    h1: (n) => `${n}员工的大诺伊达住宿`,
    intro: (n) => `正在为${n}的员工、工程师或出差团队寻找大诺伊达住宿（accommodation in Greater Noida）？Sandane Homes在大诺伊达经营精品酒店和全配套服务式公寓，适合从数晚到数月的企业住宿，并提供企业开票和外籍员工协助。`,
    teamsTitle: '出差与常驻员工住宿',
    optionsTitle: '大诺伊达住宿选择',
    options: [
      { title: 'Sandane Homes旗舰酒店', path: '/sandane-homes', text: '位于Ansal Golf Links-1，距印度会展中心（India Expo Centre & Mart）约5分钟，提供带小厨房的客房和行政套房、24小时客房服务、300Mbps无线网络，以及酒店内的泛亚餐厅兼咖啡馆Sohee\'s Kitchen。' },
      { title: '精品酒店', links: BOUTIQUE_HOTELS, text: 'Amara Inn、Amaaltash、The Glam和CoCo House提供带办公区的客房，适合短期商务出差；团队同时抵达时也可一次安排多间客房。' },
      { title: '服务式公寓', path: '/serviced-apartments-greater-noida', text: '位于Jaypee Greens和Ansal Golf Links的全配套公寓，配备完整厨房，包含水电等费用，可按周、按月或长期入住。' },
    ],
    view: '查看',
    includedTitle: '所有住宿均包含',
    included: [
      '企业GST发票，人事和行政团队可直接预订',
      '外籍住客抵达后24小时内申报Form C',
      '高速无线网络与客房清洁',
      '按晚、按周和按月入住',
    ],
    faqTitle: '人事与差旅团队常见问题',
    faqs: (n) => [
      { q: `住宿离${n}的工作地点有多远？`, a: '我们的酒店和服务式公寓位于大诺伊达的Ansal Golf Links-1、Jaypee Greens和印度会展中心一带。请告诉我们团队工作地点的地址，我们会告知实际驾车时间。' },
      { q: `${n}可以用公司账户预订并凭发票付款吗？`, a: '可以。无论单人还是整个团队，我们都直接向公司开具GST发票。' },
      { q: '你们会为外籍员工办理Form C吗？', a: '会。按照印度法律要求，我们作为住宿提供方会在每位外籍住客抵达后24小时内在线申报Form C。' },
    ],
    ctaTitle: '安排团队住宿',
    ctaText: '请告诉我们入住日期、人数和工作地点地址，我们会回复住宿选择和价格。',
    whatsapp: 'WhatsApp咨询',
    whatsappText: (n) => `您好，我想为${n}员工咨询大诺伊达住宿。`,
    call: '电话',
    otherTitle: '其他企业的大诺伊达住宿',
    languages: '其他语言',
    breadcrumbHome: '首页',
  },
  ja: {
    eyebrow: 'グレーターノイダの宿泊施設',
    metaTitle: (n) => `グレーターノイダ 宿泊 | ${n}社員・出張者向け | Accommodation Greater Noida`,
    metaDescription: (n) => `${n}の社員・出張チーム向けのグレーターノイダ宿泊施設（Greater Noida accommodation）。サービスアパートメントとブティックホテル、法人向けGST請求書、外国人のForm C届出に対応。`,
    h1: (n) => `${n}社員向けグレーターノイダの宿泊施設`,
    intro: (n) => `${n}の社員、エンジニア、出張チームのためのグレーターノイダの宿泊施設（accommodation in Greater Noida）をお探しですか。Sandane Homesはグレーターノイダでブティックホテルと家具完備のサービスアパートメントを運営しており、数泊から数か月までの法人滞在、法人宛ての請求、外国人社員のサポートに対応しています。`,
    teamsTitle: '出張者・赴任者の滞在',
    optionsTitle: 'グレーターノイダの宿泊オプション',
    options: [
      { title: 'Sandane Homes フラッグシップホテル', path: '/sandane-homes', text: 'インディア・エキスポセンター＆マートから車で約5分のAnsal Golf Links-1にある、キッチン付き客室とエグゼクティブスイート。24時間ルームサービス、300MbpsのWi-Fi、館内の汎アジア料理レストラン兼カフェ「Sohee\'s Kitchen」。' },
      { title: 'ブティックホテル', links: BOUTIQUE_HOTELS, text: 'Amara Inn、Amaaltash、The Glam、CoCo Houseでは、短期出張向けにワークスペース付きの客室をご用意しています。チームで到着される場合は複数の客室をまとめて手配できます。' },
      { title: 'サービスアパートメント', path: '/serviced-apartments-greater-noida', text: 'Jaypee GreensとAnsal Golf Linksにある家具完備のアパートメント。フルキッチン付き、光熱費込みで、週単位・月単位・長期の滞在に対応します。' },
    ],
    view: '詳細',
    includedTitle: 'すべての滞在に含まれるもの',
    included: [
      '法人宛てのGST請求書（人事・総務部門から直接ご予約いただけます）',
      '外国人のお客様の到着後24時間以内のForm C届出',
      '高速Wi-Fiとハウスキーピング',
      '1泊単位・週単位・月単位の滞在',
    ],
    faqTitle: '人事・出張ご担当者様からのよくある質問',
    faqs: (n) => [
      { q: `宿泊施設から${n}の拠点まではどのくらいですか？`, a: '当社のホテルとサービスアパートメントは、グレーターノイダのAnsal Golf Links-1、Jaypee Greens、インディア・エキスポセンター周辺にあります。チームが勤務する拠点の住所をお知らせいただければ、実際の車での所要時間をご案内します。' },
      { q: `${n}の法人名義で予約し、請求書払いにできますか？`, a: 'はい。お一人様からチーム全体まで、会社宛てにGST請求書を直接発行します。' },
      { q: '外国人社員のForm Cは届け出てもらえますか？', a: 'はい。インドの法律に基づき、宿泊施設として外国人のお客様の到着後24時間以内にオンラインでForm Cを届け出ます。' },
    ],
    ctaTitle: 'チームの滞在をご相談ください',
    ctaText: 'ご滞在日程、人数、勤務先の住所をお知らせください。宿泊オプションと料金をご案内します。',
    whatsapp: 'WhatsAppで問い合わせ',
    whatsappText: (n) => `こんにちは。${n}の社員向けにグレーターノイダの宿泊施設を探しています。`,
    call: '電話',
    otherTitle: '他社向けのグレーターノイダ宿泊施設',
    languages: '他の言語',
    breadcrumbHome: 'ホーム',
  },
};

// All routes, for App.jsx, generate-seo.js and the sitemap.
export const greaterNoidaCompanyRoutes = greaterNoidaCompanies.flatMap((c) =>
  c.langs.map((lang) => ({ key: c.key, lang, path: companyPath(c.key, lang) }))
);

export const getGreaterNoidaCompany = (key) => greaterNoidaCompanies.find((c) => c.key === key);
