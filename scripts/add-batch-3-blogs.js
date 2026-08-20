import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// STRICT HOTEL NAMING CONVENTION COMPLIANCE:
// - CoCo House: ONLY "CoCo House"
// - Other Hotels: Use "by Sandane Homes" (e.g. "Amaaltash by Sandane Homes", "The Glam by Sandane Homes", "Saffron Inn by Sandane Homes", "Amara Inn by Sandane Homes", "Pine Tales by Sandane Homes", "Residences by Sandane Homes")

const additionalBatchPosts = [
  // 1. Japanese Expat Hotel Search (Gurugram)
  {
    slug: "japan-corporate-expat-serviced-apartments-gurugram-cyber-city-guide",
    title: "グルガオン 日本人 宿泊: Cyber City Serviced Apartments & Hotel Suites for Japanese Expats",
    metaTitle: "グルガオン 日本人 宿泊 | Cyber City Japanese Expat Stay Sandane Homes",
    metaDescription: "グルガオン 日本人 宿泊 & サービスアパートメント. Turnkey corporate residences near DLF Cyber City with NHK Premium, Japanese breakfast, Japanese-speaking support & B2B GST billing.",
    subtitle: "Premium Japanese corporate accommodation & extended stay serviced apartments near DLF Cyber City Gurugram.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/coco-facade.jpg",
    coverGradient: "linear-gradient(135deg, #1C2D42 0%, #0F172A 50%, #C5A572 100%)",
    lang: "ja",
    excerpt: "グルガオン 日本人 宿泊 & サイバーシティ 日本語対応 レジデンス. <b>Residences by Sandane Homes</b> では、NHK Premium、和食朝食、日本語サポート付きの最高級レジデンスを提供しております。",
    content: [
      {
        type: "paragraph",
        text: "デリー首都圏（Delhi NCR）の経済の中心地グルガオン（Gurugram）には、多数の日系グローバル企業が進出しています。長期出張や駐在員の住まいとして、快適で清潔、かつ日本の生活習慣に合わせた「<b>グルガオン 日本人 宿泊</b>」環境は不可欠です。<b><a href='/residences'>Residences by Sandane Homes</a></b> および <b><a href='/the-glam'>The Glam by Sandane Homes</a></b> では、サイバーシティ（DLF Cyber City）や Golf Course Road に近く、日本人駐在員様に特化したサービスアパートメントを提供しています。"
      },
      {
        type: "heading",
        text: "日本人出張者・駐在員に支持される理由 (Key Highlights for Japanese Guests)"
      },
      {
        type: "list",
        items: [
          "<strong>サイバーシティ 日本語対応 レジデンス:</strong> 日本語対応が可能な専任コンシェルジュが常駐し、滞在中のあらゆるリクエストをサポート。",
          "<strong>NHK プレミアム グルガオン ホテル:</strong> 高画質TVにてNHKワールド・プレミアムをはじめとする日本のテレビ番組を完備。",
          "<strong>和食朝食サービス:</strong> 毎朝焼き魚、味噌汁、炊きたてのご飯などの和定食をご提供。",
          "<strong>バスタブ ＆ 温水洗浄便座:</strong> 日本人好みの深めのバスタブと温水洗浄便座対応サービス。",
          "<strong>日系企業向け GST 税務インボイス:</strong> 会社精算に便利なB2B GST領収書発行及び月極契約対応。"
        ]
      },
      {
        type: "quote",
        text: "Residences by Sandane Homes | Gurugram DLF Cyber City | Reservations: +91 97117 22273 | sandanehomes.com",
        attribution: "— Premium Japanese Corporate Housing in Gurugram"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "1ヶ月以上の長期滞在割引はありますか？",
        answer: "はい、30日以上の長期ご滞在のお客様向けに、お得な月額法人プランを用意しております。"
      }
    ],
    tags: [
      "グルガオン 日本人 宿泊",
      "グルガオン サービスアパートメント",
      "日本人向け ホテル",
      "NHK プレミアム グルガオン ホテル",
      "サイバーシティ 日本語対応 レジデンス",
      "Residences by Sandane Homes"
    ]
  },

  // 2. Korean Expat Long Stay (Gurugram & Noida)
  {
    slug: "korean-corporate-residence-gurgaon-korean-food-long-stay",
    title: "구루가온 한국인 주재원 숙소: Gurgaon Serviced Apartment Korean Breakfast & Corporate Stay",
    metaTitle: "구루가온 한국인 주재원 숙소 | Gurgaon Korean Serviced Apartments",
    metaDescription: "구루가온 한국인 주재원 숙소 & 델리 NCR 한국인 아파트. Executive serviced apartments in Gurugram with authentic Korean meals, fast WiFi, 24/7 security, and GST billing.",
    subtitle: "Executive Korean expat residence and corporate apartments near Cyber City & Golf Course Extension Road.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/korean-breakfast.png",
    coverGradient: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 50%, #C5A572 100%)",
    lang: "ko",
    excerpt: "구루가온 한국인 주재원 숙소 및 델리 NCR 한국인 아파트. <b>Residences by Sandane Homes</b>에서 정갈한 한식 조식, 고속 인터넷, 법인 세금계산서 발급 서비스를 이용해보세요.",
    content: [
      {
        type: "paragraph",
        text: "인도 구루가온(Gurugram)은 다양한 한국 대기업지사 및 주재원 분들이 집결해 있는 핵심 경제 도시입니다. <b><a href='/residences'>Residences by Sandane Homes</a></b> 및 <b><a href='/saffron-inn'>Saffron Inn by Sandane Homes</a></b>는 한국인 출장자와 장기 주재원을 위한 프리미엄 '<b>구루가온 한국인 주재원 숙소</b>' 및 '<b>구루가온 레지던스</b>' 서비스를 운영합니다."
      },
      {
        type: "heading",
        text: "한국인 투숙객을 위한 특화 서비스 (Exclusive Amenities for Korean Expat Professionals)"
      },
      {
        type: "list",
        items: [
          "<strong>Gurgaon Serviced Apartment Korean Breakfast / Food:</strong> 주방장이 직접 조리하는 정갈한 한식 조식 및 한식 메뉴 제공.",
          "<strong>300 Mbps 초고속 광인터넷 & 한국 방송:</strong> 한국 TV 채널 시청 및 원활한 재택 근무 환경 보장.",
          "<strong>B2B GST 세금계산서 즉시 발급:</strong> 기업 법인 경비 처리용 정식 GST 계산서 제공.",
          "<strong>데일리 하우스키핑 & 세탁 서비스:</strong> 일일 객실 청소 및 의류 세탁/다림질 서비스 기본 포함."
        ]
      },
      {
        type: "quote",
        text: "Residences by Sandane Homes | Gurugram Korean Desk | Contact: +91 97117 22273",
        attribution: "— Executive Korean Corporate Expat Stay in Gurugram"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "장기 법인 계약 및 할인 적용이 가능한가요?",
        answer: "네, 1개월 이상 장기 주재원 투숙 시 법인 특가 월세 계약이 가능합니다."
      }
    ],
    tags: [
      "구루가온 한국인 주재원 숙소",
      "구루가온 레지던스",
      "델리 NCR 한국인 아파트",
      "Gurgaon serviced apartment Korean breakfast",
      "Residences by Sandane Homes"
    ]
  },

  // 3. Chinese Corporate Employee Lodging (Greater Noida & Gurugram)
  {
    slug: "greater-noida-chinese-corporate-housing-monthly-rental-gst-invoice-guide",
    title: "大诺伊达 长期公寓: Greater Noida Corporate Housing Monthly Rental GST Invoice",
    metaTitle: "大诺伊达 长期公寓 | 德里NCR 中资企业 员工宿舍 GST 发票",
    metaDescription: "大诺伊达 长期公寓 & 德里NCR 中资企业 员工宿舍. Greater Noida monthly corporate housing near mobile manufacturing hubs with direct GST invoices & Chinese meals.",
    subtitle: "Turnkey long-stay employee lodging and executive corporate housing for Chinese enterprise teams in Greater Noida.",
    category: "Expat Housing",
    date: "August 20, 2026",
    readTime: "7 min read",
    author: "Sandane Homes Expat Desk",
    coverImage: "/blog/covers/amaaltash-room.jpg",
    coverGradient: "linear-gradient(135deg, #111827 0%, #1F2937 50%, #C5A572 100%)",
    lang: "zh",
    excerpt: "大诺伊达 长期公寓 & 德里NCR 中资企业 员工宿舍. <b>CoCo House</b>与<b>Amaaltash by Sandane Homes</b>为中资企业提供合规GST发票、中式伙食及长租宿舍服务。",
    content: [
      {
        type: "paragraph",
        text: "大诺伊达（Greater Noida）及 ECOTECH 工业园区汇聚了众多中资手机制造企业及供应链厂商。<b><a href='/coco-house'>CoCo House</a></b> 与 <b><a href='/amaaltash'>Amaaltash by Sandane Homes</a></b> 为中资企业行政采购部门提供合规、高品质的“<b>大诺伊达 长期公寓</b>”与“<b>德里NCR 中资企业 员工宿舍 / 公寓</b>”。"
      },
      {
        type: "heading",
        text: "中资企业出差与长租宿舍核心优势"
      },
      {
        type: "list",
        items: [
          "<strong>正规 GST 发票 (Greater Noida Corporate Housing Monthly Rental GST Invoice):</strong> 提供印度的正规GST含税发票，支持公司公对公转账与月度结算。",
          "<strong>工业区极速通勤:</strong> 距离 OPPO、VIVO 制造基地及 India Expo Mart 仅 5-10 分钟车程。",
          "<strong>中式餐饮与独立厨房:</strong> 提供符合中国员工口味的中式热菜与早餐，客房配备独立厨房。",
          "<strong>300 Mbps 高速网络:</strong> 保障跨国视频会议与文件传输流畅。"
        ]
      },
      {
        type: "quote",
        text: "CoCo House & Amaaltash by Sandane Homes | Greater Noida | 商务咨询: +91 97117 22273",
        attribution: "— 德里 NCR 中资企业长租宿舍专业服务商"
      },
      {
        type: "cta"
      }
    ],
    faqs: [
      {
        question: "可以为企业团队开具正规 GST 税务发票吗？",
        answer: "是的，我们开具印度的正规 B2B GST 发票，方便公司公对公转账与报销。"
      }
    ],
    tags: [
      "大诺伊达 长期公寓",
      "德里NCR 中资企业 员工宿舍",
      "古尔冈 服务式公寓",
      "Greater Noida corporate housing monthly rental GST invoice",
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
const filteredNew = additionalBatchPosts.filter(p => !existingSlugs.has(p.slug));

if (filteredNew.length === 0) {
  console.log('All new blog posts already exist in blogPosts.js!');
} else {
  const updatedPosts = [...filteredNew, ...existingPosts];
  const outputCode = `export const blogPosts = ${JSON.stringify(updatedPosts, null, 2)};\n`;
  fs.writeFileSync(blogPostsPath, outputCode, 'utf8');
  console.log(`Successfully added ${filteredNew.length} new blog posts to blogPosts.js! Total count: ${updatedPosts.length}`);
}
