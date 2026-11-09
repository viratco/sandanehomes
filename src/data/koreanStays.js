// ─────────────────────────────────────────────────────────────
//  KOREAN STAYS IN GREATER NOIDA — SERVICE PAGES (EN / KO)
//  Built for Korean engineers, managers and families working at Samsung,
//  LG Electronics, Dreamtech and their suppliers in Greater Noida.
//    en  /<slug>
//    ko  /ko/<slug>
//  Rendered by KoreanStayPage.jsx; SEO/hreflang/sitemap in generate-seo.js.
//  Owner-confirmed offers: guest house with Korean breakfast and dinner
//  included, serviced apartments, apartment finding, villas.
// ─────────────────────────────────────────────────────────────

export const GUEST_HOUSE_SLUG = 'korean-guest-house-greater-noida';
export const APARTMENTS_SLUG = 'apartment-finding-service-greater-noida';
export const VILLAS_PATH = '/luxury-villa-rental-greater-noida';

export const stayPath = (slug, lang) => (lang === 'en' ? `/${slug}` : `/${lang}/${slug}`);

const COMPANY_LINKS = {
  en: [
    { label: 'Samsung', path: '/accommodation-greater-noida-samsung-electronics' },
    { label: 'LG Electronics', path: '/accommodation-greater-noida-lg-electronics' },
    { label: 'Dreamtech', path: '/accommodation-greater-noida-dreamtech' },
  ],
  ko: [
    { label: '삼성전자', path: '/ko/accommodation-greater-noida-samsung-electronics' },
    { label: 'LG전자', path: '/ko/accommodation-greater-noida-lg-electronics' },
    { label: '드림텍', path: '/ko/accommodation-greater-noida-dreamtech' },
  ],
};

export const koreanStayPages = [
  // ── Korean guest house, breakfast & dinner included ──
  {
    slug: GUEST_HOUSE_SLUG,
    langs: ['en', 'ko'],
    image: 'guestHouse',
    content: {
      en: {
        metaTitle: 'Korean Guest House in Greater Noida | Breakfast & Dinner Included',
        metaDescription: 'Korean guest house in Greater Noida with Korean breakfast and dinner included every day. For Samsung, LG and Dreamtech engineers and visiting teams. Company GST invoicing and Form C support.',
        eyebrow: 'Greater Noida Accommodation',
        h1: 'Korean Guest House in Greater Noida, Breakfast & Dinner Included',
        intro: 'For engineers and managers visiting Samsung, LG Electronics, Dreamtech and their suppliers in Greater Noida, Sandane Homes offers guest-house stays with home-style Korean breakfast and dinner included every day. Arrive from Korea, check in, and have a familiar meal waiting after a long day at the plant.',
        whatsappText: 'Hello Sandane Homes, I am looking for your Korean guest house in Greater Noida (breakfast and dinner included).',
        sections: [
          {
            title: "What's included",
            items: [
              'A private room in a Sandane Homes guest house in Greater Noida',
              'Korean breakfast every morning',
              'Korean dinner every evening',
              'Housekeeping and fresh linen',
              'High-speed Wi-Fi',
              'Form C filed for you within 24 hours of arrival',
              'One GST invoice to your company for the whole stay',
            ],
            image: 'breakfast',
          },
          {
            title: 'Who stays with us',
            text: 'Engineers on line set-ups and audits, quality and product teams supporting new launches, and managers visiting from headquarters, usually for a few nights to a few weeks. Teams arriving together can stay in the same guest house, so the whole group eats and travels together.',
          },
          {
            title: "Sohee's Kitchen",
            text: "Our flagship at Ansal Golf Links-1, about 5 minutes from India Expo Centre & Mart, is home to Sohee's Kitchen, our in-house restaurant and café serving Korean and Pan-Asian food.",
          },
          {
            title: 'Staying longer?',
            text: `For postings of several months, a furnished apartment with your own kitchen is often more comfortable. See <a href="/${APARTMENTS_SLUG}">serviced apartments and apartment finding in Greater Noida</a>, or <a href="${VILLAS_PATH}">villa rentals</a> for families.`,
          },
        ],
        faqs: [
          { q: 'Are breakfast and dinner really included?', a: 'Yes. Korean breakfast and dinner are included every day of a guest-house stay. Tell us about any dietary needs before you arrive.' },
          { q: 'How far is the guest house from Samsung, LG and Dreamtech?', a: "Our guest houses are in Greater Noida. LG's plant is on Surajpur–Kasna Road and Dreamtech's is in Ecotech-10, both in Greater Noida; Samsung's main factory is in Noida Sector 81. Send us the site address and we will tell you realistic travel times by car." },
          { q: 'How long can we stay?', a: 'From a single night to several weeks. For longer postings we can move you into a serviced apartment.' },
          { q: 'Can our company book and pay by invoice?', a: 'Yes. We invoice the company directly with GST, for one guest or a whole team.' },
        ],
        relatedTitle: 'Accommodation pages for',
        related: COMPANY_LINKS.en,
        ctaTitle: 'Book a guest-house stay',
        ctaText: 'Tell us your dates, the number of guests and the site you will work at. We will reply with availability.',
        whatsapp: 'WhatsApp us',
        call: 'Call',
        breadcrumbHome: 'Home',
      },
      ko: {
        metaTitle: '그레이터 노이다 한인 게스트하우스 | 한식 조식·석식 포함 | Korean Guest House',
        metaDescription: '한식 조식과 석식이 매일 포함된 그레이터 노이다 한인 게스트하우스(Korean guest house in Greater Noida). 삼성전자·LG전자·드림텍 출장자와 팀을 위한 숙소. 법인 GST 인보이스, Form C 신고 지원.',
        eyebrow: '그레이터 노이다 숙소',
        h1: '그레이터 노이다 한인 게스트하우스, 한식 조식·석식 포함',
        intro: '그레이터 노이다의 삼성전자, LG전자, 드림텍과 협력사로 출장 오는 엔지니어와 관리자분들을 위해, Sandane Homes는 매일 한식 조식과 석식이 포함된 게스트하우스 숙박을 제공합니다. 한국에서 도착해 체크인하면, 공장에서 긴 하루를 보낸 뒤에도 익숙한 한 끼가 기다리고 있습니다.',
        whatsappText: '안녕하세요, 한식 조식·석식이 포함된 그레이터 노이다 한인 게스트하우스를 문의합니다.',
        sections: [
          {
            title: '포함 사항',
            items: [
              '그레이터 노이다 Sandane Homes 게스트하우스의 개인 객실',
              '매일 아침 한식 조식',
              '매일 저녁 한식 석식',
              '하우스키핑과 깨끗한 침구',
              '고속 와이파이',
              '도착 후 24시간 이내 Form C 신고 대행',
              '숙박 전체를 하나의 법인 GST 인보이스로 청구',
            ],
            image: 'breakfast',
          },
          {
            title: '이런 분들이 머무릅니다',
            text: '라인 셋업과 감사를 위해 오는 엔지니어, 신제품 양산을 지원하는 품질·제품 팀, 본사에서 방문하는 관리자분들이 주로 며칠에서 몇 주간 머무릅니다. 함께 도착하는 팀은 같은 게스트하우스에 머물며 식사와 이동을 함께할 수 있습니다.',
          },
          {
            title: "Sohee's Kitchen",
            text: "인디아 엑스포 센터 & 마트에서 약 5분 거리인 Ansal Golf Links-1 플래그십에는 한식과 범아시아 요리를 제공하는 호텔 내 레스토랑·카페 Sohee's Kitchen이 있습니다.",
          },
          {
            title: '더 오래 머무르시나요?',
            text: `수개월 단위 파견이라면 개인 주방이 있는 가구 완비 아파트가 더 편할 수 있습니다. <a href="/ko/${APARTMENTS_SLUG}">그레이터 노이다 서비스 아파트·아파트 구하기</a>를 참고하시고, 가족 단위라면 <a href="${VILLAS_PATH}">빌라 렌탈</a>도 확인해 보세요.`,
          },
        ],
        faqs: [
          { q: '조식과 석식이 정말 포함되어 있나요?', a: '네. 게스트하우스 숙박 기간 동안 매일 한식 조식과 석식이 포함됩니다. 식단 관련 요청은 도착 전에 알려 주세요.' },
          { q: '게스트하우스에서 삼성, LG, 드림텍까지 얼마나 걸리나요?', a: '저희 게스트하우스는 그레이터 노이다에 있습니다. LG전자 공장은 Surajpur–Kasna Road, 드림텍 공장은 Ecotech-10으로 모두 그레이터 노이다에 있으며, 삼성전자 주력 공장은 노이다 섹터 81에 있습니다. 근무지 주소를 알려 주시면 실제 차량 이동 시간을 안내해 드립니다.' },
          { q: '얼마나 머무를 수 있나요?', a: '1박부터 몇 주까지 가능합니다. 장기 파견이라면 서비스 아파트로 옮기실 수 있습니다.' },
          { q: '법인 명의로 예약하고 인보이스로 결제할 수 있나요?', a: '네. 1인부터 팀 전체까지 회사에 직접 GST 인보이스를 발행합니다.' },
        ],
        relatedTitle: '기업별 숙소 안내',
        related: COMPANY_LINKS.ko,
        ctaTitle: '게스트하우스 예약 문의',
        ctaText: '일정, 인원, 근무지를 알려 주시면 예약 가능 여부를 안내해 드립니다.',
        whatsapp: 'WhatsApp 문의',
        call: '전화',
        breadcrumbHome: '홈',
      },
    },
  },

  // ── Serviced apartments + apartment finding ──
  {
    slug: APARTMENTS_SLUG,
    langs: ['en', 'ko'],
    image: 'apartment',
    content: {
      en: {
        metaTitle: 'Apartments in Greater Noida for Korean Expats | Serviced & Apartment Finding',
        metaDescription: 'Serviced apartments and an apartment-finding service in Greater Noida for Korean expats and families at Samsung, LG and Dreamtech. Furnished homes in gated societies, viewings, lease help and move-in support.',
        eyebrow: 'Greater Noida Accommodation',
        h1: 'Apartments in Greater Noida: Serviced Apartments and Apartment Finding',
        intro: 'Whether your posting is three months or three years, there are two ways we can house you near Samsung, LG Electronics and Dreamtech: move straight into one of our fully furnished serviced apartments, or let us find and set up a long-term apartment for you.',
        whatsappText: 'Hello Sandane Homes, I am looking for an apartment in Greater Noida (serviced apartment or apartment finding).',
        sections: [
          {
            title: 'Option 1: Move into our serviced apartments',
            items: [
              'Fully furnished apartments in gated societies such as Jaypee Greens and Ansal Golf Links',
              'Full kitchen, with utilities included',
              'Housekeeping and fresh linen',
              'Korean breakfast can be arranged on request',
              'Weekly, monthly and longer stays, invoiced to your company',
            ],
            image: 'apartment',
          },
          {
            title: 'Option 2: We find your apartment',
            steps: [
              'Tell us your budget, family size, office location and move-in date.',
              'We shortlist apartments in gated societies across Greater Noida and Noida, and arrange viewings in person or by video.',
              'We deal with the owner for you and help with the lease paperwork.',
              'We furnish and set up the home if you need it, and help with move-in, internet and Form C / FRRO paperwork.',
            ],
          },
          {
            title: 'Families who need more space',
            text: `For families who want a garden or more bedrooms, we also arrange villas in Greater Noida. See <a href="${VILLAS_PATH}">villa rentals in Greater Noida</a>. On a short trip instead? Our <a href="/${GUEST_HOUSE_SLUG}">Korean guest house</a> includes breakfast and dinner every day.`,
          },
        ],
        faqs: [
          { q: 'Which areas do you cover?', a: 'Greater Noida, including Jaypee Greens, Ansal Golf Links and Godrej Golf Links, as well as Noida.' },
          { q: 'Can you help a family settle in, not just find a flat?', a: 'Yes. Beyond finding the apartment, we can furnish it, set up the kitchen and internet, and help with Form C and FRRO paperwork.' },
          { q: 'Can our company sign the agreement?', a: 'For our serviced apartments, we sign directly with the company and issue a GST invoice. For apartments we find for you, we help set up the lease in the way your company needs.' },
          { q: 'How do I start?', a: 'Message us on WhatsApp with your dates, budget, family size and office location. We will reply with options.' },
        ],
        relatedTitle: 'Accommodation pages for',
        related: COMPANY_LINKS.en,
        ctaTitle: 'Find your apartment in Greater Noida',
        ctaText: 'Tell us your move-in date, budget, family size and office location. We will come back with options.',
        whatsapp: 'WhatsApp us',
        call: 'Call',
        breadcrumbHome: 'Home',
      },
      ko: {
        metaTitle: '그레이터 노이다 아파트 구하기 · 서비스 아파트 | 한국인 주재원 | Apartments Greater Noida',
        metaDescription: '삼성전자·LG전자·드림텍 한국인 주재원과 가족을 위한 그레이터 노이다 서비스 아파트와 아파트 구하기 서비스. 게이티드 단지의 가구 완비 아파트, 매물 안내, 임대 계약 지원, 입주 지원.',
        eyebrow: '그레이터 노이다 숙소',
        h1: '그레이터 노이다 아파트: 서비스 아파트와 아파트 구하기',
        intro: '파견 기간이 3개월이든 3년이든, 삼성전자, LG전자, 드림텍 근처에서 지내는 방법은 두 가지입니다. 가구가 완비된 저희 서비스 아파트에 바로 입주하시거나, 장기 거주할 아파트를 저희가 찾아 입주 준비까지 도와드립니다.',
        whatsappText: '안녕하세요, 그레이터 노이다 아파트(서비스 아파트 또는 아파트 구하기)를 문의합니다.',
        sections: [
          {
            title: '방법 1: 서비스 아파트에 바로 입주',
            items: [
              'Jaypee Greens, Ansal Golf Links 등 게이티드 단지의 가구 완비 아파트',
              '풀 키친, 공과금 포함',
              '하우스키핑과 깨끗한 침구',
              '요청 시 한식 조식 준비 가능',
              '주 단위·월 단위·장기 숙박, 법인 청구 가능',
            ],
            image: 'apartment',
          },
          {
            title: '방법 2: 아파트를 대신 찾아드립니다',
            steps: [
              '예산, 가족 구성, 근무지, 입주 희망일을 알려 주세요.',
              '그레이터 노이다와 노이다의 게이티드 단지에서 후보 아파트를 추려 직접 또는 영상으로 보여 드립니다.',
              '집주인과의 협의를 대신하고 임대 계약 서류를 도와드립니다.',
              '필요하면 가구와 생활용품을 갖추고, 입주·인터넷 설치·Form C / FRRO 서류까지 도와드립니다.',
            ],
          },
          {
            title: '더 넓은 공간이 필요한 가족',
            text: `정원이나 더 많은 방이 필요한 가족을 위해 그레이터 노이다 빌라도 준비해 드립니다. <a href="${VILLAS_PATH}">그레이터 노이다 빌라 렌탈</a>을 확인해 보세요. 단기 출장이라면 매일 조식과 석식이 포함된 <a href="/ko/${GUEST_HOUSE_SLUG}">한인 게스트하우스</a>가 편리합니다.`,
          },
        ],
        faqs: [
          { q: '어느 지역을 다루나요?', a: 'Jaypee Greens, Ansal Golf Links, Godrej Golf Links를 포함한 그레이터 노이다와 노이다 지역입니다.' },
          { q: '아파트를 찾는 것 외에 정착도 도와주나요?', a: '네. 아파트를 찾은 뒤 가구 배치, 주방과 인터넷 설치, Form C와 FRRO 서류까지 도와드립니다.' },
          { q: '회사 명의로 계약할 수 있나요?', a: '서비스 아파트는 회사와 직접 계약하고 GST 인보이스를 발행합니다. 저희가 찾아드리는 아파트는 회사에 맞는 방식으로 임대 계약을 진행하도록 도와드립니다.' },
          { q: '어떻게 시작하나요?', a: 'WhatsApp으로 입주 희망일, 예산, 가족 구성, 근무지를 알려 주시면 후보를 안내해 드립니다.' },
        ],
        relatedTitle: '기업별 숙소 안내',
        related: COMPANY_LINKS.ko,
        ctaTitle: '그레이터 노이다에서 아파트 찾기',
        ctaText: '입주 희망일, 예산, 가족 구성, 근무지를 알려 주시면 후보를 안내해 드립니다.',
        whatsapp: 'WhatsApp 문의',
        call: '전화',
        breadcrumbHome: '홈',
      },
    },
  },
];

export const koreanStayRoutes = koreanStayPages.flatMap((p) =>
  p.langs.map((lang) => ({ slug: p.slug, lang, path: stayPath(p.slug, lang) }))
);

export const getKoreanStayPage = (slug) => koreanStayPages.find((p) => p.slug === slug);

// "Three ways to stay" cards for the Korean-company pages (Samsung, LG, Dreamtech).
export const STAY_OPTIONS = {
  en: {
    title: 'Three ways to stay in Greater Noida',
    options: [
      { title: 'Korean guest house', text: 'Korean breakfast and dinner included every day. Ideal for engineers on trips of a few nights to a few weeks.', path: `/${GUEST_HOUSE_SLUG}` },
      { title: 'Apartments & apartment finding', text: 'Move into a furnished serviced apartment, or let us find and set up a long-term apartment for you.', path: `/${APARTMENTS_SLUG}` },
      { title: 'Villas', text: 'More space and a garden for families on longer postings.', path: VILLAS_PATH },
    ],
  },
  ko: {
    title: '그레이터 노이다에서 지내는 세 가지 방법',
    options: [
      { title: '한인 게스트하우스', text: '매일 한식 조식과 석식 포함. 며칠에서 몇 주 출장 오는 엔지니어에게 적합합니다.', path: `/ko/${GUEST_HOUSE_SLUG}` },
      { title: '아파트 · 아파트 구하기', text: '가구 완비 서비스 아파트에 바로 입주하거나, 장기 거주할 아파트를 찾아 드립니다.', path: `/ko/${APARTMENTS_SLUG}` },
      { title: '빌라', text: '장기 파견 가족을 위한 넓은 공간과 정원.', path: VILLAS_PATH },
    ],
  },
  zh: {
    title: '在大诺伊达的三种住宿方式',
    options: [
      { title: '韩式宾馆', text: '每天包含韩式早餐和晚餐，适合出差数晚到数周的工程师。', path: `/${GUEST_HOUSE_SLUG}` },
      { title: '公寓与找房服务', text: '直接入住全配套服务式公寓，或由我们为您寻找并布置长期公寓。', path: `/${APARTMENTS_SLUG}` },
      { title: '别墅', text: '为长期外派的家庭提供更大的空间和花园。', path: VILLAS_PATH },
    ],
  },
};
