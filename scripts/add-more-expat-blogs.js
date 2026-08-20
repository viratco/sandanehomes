import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// STRICT HOTEL NAMING CONVENTION COMPLIANCE:
// - CoCo House: ONLY "CoCo House"
// - Other Hotels: Use "by Sandane Homes" (e.g. "Amaaltash by Sandane Homes", "The Glam by Sandane Homes", "Saffron Inn by Sandane Homes", "Amara Inn by Sandane Homes", "Pine Tales by Sandane Homes", "Residences by Sandane Homes")

const additionalSeoPosts = [
  // ==========================================
  // JAPANESE EXPATS & CORPORATE HOTELS (Gurugram Focus)
  // ==========================================
  {
    slug: "japanese-corporate-housing-gurgaon-dlf-cyber-city-golf-course-road",
    title: "グルガオン 日本人 宿泊 & レジデンス: Japanese Corporate Housing in Gurgaon DLF Cyber City",
    metaTitle: "グルガオン 日本人 宿泊 | Japanese Corporate Housing Gurgaon | Sandane Homes",
    metaDescription: "グルガオン 日本人 宿泊 & サービスアパートメント. Japanese corporate housing in Gurgaon near DLF Cyber City & Golf Course Road. NHK Premium, Japanese breakfast, Japanese-speaking support & B2B GST invoicing.",
    subtitle: "Turnkey Japanese expat residences and hotel suites near DLF Cyber City, One Horizon Centre, and Golf Course Road.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/coco-facade.jpg",
    coverGradient: "linear-gradient(135deg, #1C2D42 0%, #0F172A 50%, #C5A572 100%)",
    lang: "ja",
    excerpt: "グルガオン 日本人 宿泊 & サービスアパートメント nearby DLF Cyber City. Discover Residences by Sandane Homes with NHK Premium, Japanese breakfast, Japanese speaking staff, and corporate billing.",
    content: [
      {
        type: "paragraph",
        text: "デリー首都圏（Delhi NCR）の経済の中心都市グルガオン（Gurugram）には、自動車、電機、IT、金融など多くの日系企業が集積しています。長長期の出張や赴任における住宅選びでは、日本同様の安心感と快適性が求められます。<b><a href='/residences'>Residences by Sandane Homes</a></b> および <b><a href='/the-glam'>The Glam by Sandane Homes</a></b> は、<b>グルガオン 日本人 宿泊</b>・法人向けサービスアパートメントとして、完璧な住環境を提供いたします。"
      },
      {
        type: "heading",
        text: "グルガオン サービスアパートメント＆日本人向けホテルの充実した設備"
      },
      {
        type: "list",
        items: [
          "<strong>サイバーシティ 日本語対応 レジデンス (Japanese-Speaking Staff):</strong> 日本語サポートが可能なスタッフが常駐し、日々の生活リクエストや緊急時にもスピーディに対応。",
          "<strong>NHK プレミアム グルガオン ホテル (NHK Premium Satellite Channels):</strong> 全室にNHKワールド・プレミアム等の日本語衛星放送を完備。日本国内のニュースや番組をリアルタイムでご視聴いただけます。",
          "<strong>和食朝食 ＆ 独立型キッチン (Japanese Breakfast & Fully Furnished Kitchen):</strong> 毎朝の焼魚・味噌汁・日本米の和定食サービスに加え、自炊可能な調理器具、電子レンジ、大型冷蔵庫を完備。",
          "<strong>安心のセキュリティ ＆ 24時間後備電源 (24/7 Power Backup & Gated Security):</strong> 停電の多いインドでも安心の全天候型発電機システムと24時間監視カメラ・警備員配置。",
          "<strong>日系企業向け GST 領収書 ＆ 法人契約 (B2B Tax Invoicing):</strong> 日本本社の経理規定に沿った法人契約、GST含税インボイスの即時発行が可能です。"
        ]
      },
      {
        type: "quote",
        text: "Residences by Sandane Homes & The Glam by Sandane Homes | Gurugram DLF Cyber City & Golf Course Road | 法人問合せ: +91 97117 22273",
        attribution: "— グルガオンの日系企業・駐在員様向け最高級レジデンス"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "サイバーシティ（DLF Cyber City）までのアクセスはどのくらいですか？",
        answer: "Residences by Sandane Homes からサイバーシティまでは車で約10〜15分の好立地です。"
      },
      {
        question: "長期滞在向けの月租割引価格はありますか？",
        answer: "はい、1ヶ月以上の長期ご滞在につきましては、法人様向けの特別割引月額プランをご用意しております。"
      }
    ],
    tags: [
      "グルガオン 日本人 宿泊",
      "グルガオン サービスアパートメント",
      "日本人向け ホテル",
      "NHK プレミアム グルガオン ホテル",
      "サイバーシティ 日本語対応 レジデンス",
      "Gurgaon serviced apartment Japanese speaking staff",
      "Residences by Sandane Homes"
    ]
  },

  // ==========================================
  // KOREAN CORPORATE HOUSING (Noida & Greater Noida Focus)
  // ==========================================
  {
    slug: "noida-korean-corporate-housing-long-stay-samsung-noida-serviced-apartments",
    title: "델리 NCR 한국인 아파트: Noida Korean Corporate Housing Long Stay & Samsung Noida Serviced Apartments",
    metaTitle: "델리 NCR 한국인 아파트 | Noida Korean Corporate Housing Long Stay",
    metaDescription: "델리 NCR 한국인 아파트 & 그레이터 노이다 서비스 아파트. Long-stay corporate housing near Samsung Noida with authentic Korean food, 300 Mbps WiFi, and direct GST billing.",
    subtitle: "Turnkey long-stay corporate housing and guest houses near Samsung Noida Sector 81 & Greater Noida Techzones.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/korean-breakfast.png",
    coverGradient: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 50%, #C5A572 100%)",
    lang: "ko",
    excerpt: "델리 NCR 한국인 아파트 & 삼성 노이다 인근 레지던스. <b>CoCo House</b>와 <b>Amaaltash by Sandane Homes</b>에서 한국인 출장자 및 주재원을 위한 맞춤형 주거 공간을 제공합니다.",
    content: [
      {
        type: "paragraph",
        text: "노이다 Sector 81의 삼성전자 스마트폰 생산 공장, LG전자, 현대모비스 등 주요 한국 대기업 및 협력사 출장자분들을 위해 <b><a href='/coco-house'>CoCo House</a></b> 및 <b><a href='/amaaltash'>Amaaltash by Sandane Homes</a></b>(Greater Noida)는 최고의 접근성과 한식 다이닝을 갖춘 '<b>델리 NCR 한국인 아파트</b>' 및 '<b>Noida Korean corporate housing long stay</b>' 서비스를 제공하고 있습니다."
      },
      {
        type: "heading",
        text: "한국인 출장자 및 기업 임직원을 위한 핵심 서비스 (Key Korean Expat Services)"
      },
      {
        type: "list",
        items: [
          "<strong>Samsung Noida Nearby Serviced Apartment for Koreans:</strong> 노이다 81구역 삼성 공장 및 그레이터 노이다 공단까지 신호 없는 신속한 이동 (차량 10~15분).",
          "<strong>Gurgaon Serviced Apartment Korean Breakfast / Food:</strong> 주방장이 직접 조리하는 정갈한 한식 조식 및 한식 정식 서비스 제공.",
          "<strong>300 Mbps 광전용선 Wi-Fi & IPTV:</strong> 업무용 고속 인터넷 및 한국 실시간 TV 채널 시청 환경 완비.",
          "<strong>정식 법인 B2B GST 세금계산서:</strong> 한국 및 인도 법인 정식 경비 처리를 위한 맞춤형 GST 계산서 발행.",
          "<strong>데일리 세탁 & 하우스키핑:</strong> 의류 세탁, 다림질 서비스 및 24시간 보안 시스템."
        ]
      },
      {
        type: "quote",
        text: "CoCo House & Amaaltash by Sandane Homes | Greater Noida | 법인 예약 및 문희: +91 97117 22273",
        attribution: "— 노이다 & 그레이터 노이다 한국 기업 전문 레지던스"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "삼성 노이다 공장까지 셔틀 서비스나 차량 배차가 가능한가요?",
        answer: "네, 당사 컨시어지 데스크를 통해 출퇴근 전용 차량 배차 서비스를 이용하실 수 있습니다."
      },
      {
        question: "장기 투숙(30일 이상) 시 세탁 및 하우스키핑이 포함되나요?",
        answer: "네, 일일 하우스키핑과 의류 세탁 서비스가 장기 투숙 플랜에 기본 포함됩니다."
      }
    ],
    tags: [
      "델리 NCR 한국인 아파트",
      "그레이터 노이다 서비스 아파트",
      "구루가온 한국인 주재원 숙소",
      "Noida Korean corporate housing long stay",
      "Samsung Noida nearby serviced apartment for Koreans",
      "Gurgaon serviced apartment Korean breakfast",
      "CoCo House",
      "Amaaltash by Sandane Homes"
    ]
  },

  // ==========================================
  // CHINESE CORPORATE HOUSING (Greater Noida & Cyber City Focus)
  // ==========================================
  {
    slug: "delhi-ncr-chinese-enterprise-employee-lodging-greater-noida-monthly-rental-gst-invoice",
    title: "德里NCR 中资企业 员工宿舍 / 公寓: Greater Noida Corporate Housing Monthly Rental GST Invoice",
    metaTitle: "德里NCR 中资企业 员工宿舍 | 大诺伊达 长期公寓 GST 发票",
    metaDescription: "德里NCR 中资企业 员工宿舍 & 大诺伊达 长期公寓. Long-term corporate housing for Chinese enterprises in Greater Noida & Gurgaon with direct GST tax invoice & Chinese meals.",
    subtitle: "Turnkey long-term employee lodging and executive corporate housing for Chinese enterprises in Greater Noida and Delhi NCR.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/amaaltash-room.jpg",
    coverGradient: "linear-gradient(135deg, #111827 0%, #1F2937 50%, #C5A572 100%)",
    lang: "zh",
    excerpt: "德里NCR 中资企业 员工宿舍 & 大诺伊达 长期公寓. <b>CoCo House</b>与<b>Amaaltash by Sandane Homes</b>为大诺伊达工业园区中资企业提供开具GST发票、中式伙食及合规长租宿舍。",
    content: [
      {
        type: "paragraph",
        text: "随着大诺伊达（Greater Noida）及 ECOTECH 工业园区内手机制造业（如 OPPO、VIVO、小米供应链企业）的持续扩建，中资企业对合规、高品质的“<b>德里NCR 中资企业 员工宿舍 / 公寓</b>”需求日益增加。<b><a href='/coco-house'>CoCo House</a></b> 与 <b><a href='/amaaltash'>Amaaltash by Sandane Homes</a></b> 为各大中资企业行政采购部门提供了一站式的“<b>大诺伊达 长期公寓</b>”与长租员工住宿解决方案。"
      },
      {
        type: "heading",
        text: "中资企业长租宿舍与商务差旅的核心配套 (Core Facilities for Chinese Expat Teams)"
      },
      {
        type: "list",
        items: [
          "<strong>合规 B2B GST 含税发票 (Greater Noida Corporate Housing Monthly Rental GST Invoice):</strong> 提供印度的正规GST含税发票，支持公司公对公转账及按月结算，符合企业财务审计要求。",
          "<strong>工业园区与展馆极速直达 (Strategic Location):</strong> 距离 ECOTECH 各工业区、OPPO/VIVO 制造基地以及 India Expo Mart 展馆仅 5-10 分钟车程。",
          "<strong>中式热食与定制膳食 (Chinese Dining Options):</strong> 提供符合中国员工饮食习惯的中式早餐与热菜，房间内配有厨房、电磁炉、微波炉及冰箱。",
          "<strong>300 Mbps 光纤宽带与全天候电力 (300 Mbps WiFi & Power Backup):</strong> 专线高速网络，保障国内视频会议及远程办公流畅无阻；配备全天候发电机发电设备。",
          "<strong>房间每日打扫与衣服洗涤服务 (Daily Housekeeping & Laundry):</strong> 每日专人清洁房间，提供衣服洗涤熨烫服务，让员工全心专注于业务开发。"
        ]
      },
      {
        type: "quote",
        text: "CoCo House & Amaaltash by Sandane Homes | Greater Noida | 中资企业协议专线: +91 97117 22273 | sandanehomes.com",
        attribution: "— 大诺伊达中资企业长租宿舍与高管住宿专业服务商"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "是否支持中资企业整体包楼或预订整层房间？",
        answer: "是的，我们支持中资企业根据团队规模提供整层或多间客房的包楼预订与长租协议。"
      },
      {
        question: "能否开具符合印度税务法规的对公 GST 发票？",
        answer: "可以，我们提供具有完整 GST 编号的正规税务发票，方便企业报销及税务扣缴。"
      }
    ],
    tags: [
      "德里NCR 中资企业 员工宿舍",
      "大诺伊达 长期公寓",
      "古尔冈 服务式公寓",
      "Greater Noida corporate housing monthly rental GST invoice",
      "Gurgaon long stay apartment for Chinese business travelers",
      "CoCo House",
      "Amaaltash by Sandane Homes"
    ]
  }
];

const blogPostsPath = path.join(rootDir, 'src', 'data', 'blogPosts.js');

console.log(`Reading existing blog posts from ${blogPostsPath}...`);
const fileContent = fs.readFileSync(blogPostsPath, 'utf8');

// Parse blogPosts array
const jsonText = fileContent.replace(/^\s*export\s+const\s+blogPosts\s*=\s*/, '').replace(/;\s*$/, '');
const existingPosts = JSON.parse(jsonText);

console.log(`Currently there are ${existingPosts.length} posts.`);

// Filter out duplicates
const existingSlugs = new Set(existingPosts.map(p => p.slug));
const filteredNew = additionalSeoPosts.filter(p => !existingSlugs.has(p.slug));

if (filteredNew.length === 0) {
  console.log('All new blog posts already exist in blogPosts.js!');
} else {
  const updatedPosts = [...filteredNew, ...existingPosts];
  const outputCode = `export const blogPosts = ${JSON.stringify(updatedPosts, null, 2)};\n`;
  fs.writeFileSync(blogPostsPath, outputCode, 'utf8');
  console.log(`Successfully added ${filteredNew.length} new blog posts to blogPosts.js! Total count: ${updatedPosts.length}`);
}
