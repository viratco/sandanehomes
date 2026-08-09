import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// HOTEL NAMING RULES COMPLIANCE:
// - CoCo House: STRICTLY "CoCo House" ONLY. NEVER append "by Sandane Homes" or "/ Sandane Homes".
// - Other Hotels: Use "by Sandane Homes" (e.g. "Amaaltash by Sandane Homes", "The Glam by Sandane Homes", "Amara Inn by Sandane Homes").

const hotelPosts = [
  // ── ENGLISH (en) ──
  {
    slug: "coco-house-premier-boutique-hotel-near-india-expo-mart",
    title: "CoCo House: Premier Boutique Hotel Experience Near India Expo Mart Greater Noida",
    metaTitle: "CoCo House | Premier Boutique Hotel Near India Expo Mart Greater Noida",
    metaDescription: "Book CoCo House in Greater Noida — chic boutique hotel just 8 minutes from India Expo Mart. Featuring designer rooms, 300 Mbps WiFi, B2B GST invoices & 24/7 express dining.",
    subtitle: "Chic luxury boutique hotel tailored for exhibition exhibitors, trade delegates, and corporate travelers near Pari Chowk.",
    category: "Boutique Stays",
    date: "February 28, 2027",
    readTime: "6 min read",
    author: "Sandane Homes Hospitality Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "en",
    excerpt: "Book CoCo House in Greater Noida — chic boutique hotel just 8 minutes from India Expo Mart with 300 Mbps WiFi & B2B GST billing.",
    content: [
      { type: "paragraph", text: "When attending international trade exhibitions, trade fairs, or business conferences at the India Expo Centre & Mart in Greater Noida, finding a boutique hotel that offers both sophistication and home-style warmth is essential. <a href='/coco-house'>CoCo House</a> is widely recognized as Greater Noida's top boutique hotel destination, offering designer rooms, ultra-fast connectivity, and attentive personal service." },
      { type: "heading", text: "Why Choose CoCo House for Expo Mart & Business Visits?" },
      { type: "paragraph", text: "CoCo House delivers an uncompromised hospitality experience tailored for corporate delegates:" },
      { type: "list", items: [
        "<strong>8 Minutes to India Expo Mart Gate 1:</strong> Signal-free drive avoiding main road traffic bottlenecks during major events like Auto Expo, IHGF Delhi Fair, ELECRAMA, and CPHI India.",
        "<strong>Boutique Designer Rooms:</strong> Ergonomic workspace, premium memory-foam mattresses, acoustic sound insulation, and modern ensuite bathrooms.",
        "<strong>300 Mbps Dedicated Fiber WiFi:</strong> Uninterrupted internet bandwidth for corporate presentations, video calls, and HD streaming.",
        "<strong>24/7 Express Dining & Room Service:</strong> Freshly cooked breakfasts, organic coffee, and multi-cuisine room service available round the clock.",
        "<strong>Single Master B2B GST Invoicing:</strong> Direct GST tax invoices for seamless corporate accounting and expense reimbursement."
      ] },
      { type: "quote", text: "CoCo House | Ansal Golf Link-1, Greater Noida | +91 97117 22273 | sandanehomes.com/coco-house", attribution: "— Premier Boutique Hotel Near Expo Mart" },
      { type: "cta" }
    ],
    faqs: [
      { question: "How far is CoCo House from India Expo Mart?", answer: "CoCo House is located just 3.5 km (approx. 8 minutes drive) from India Expo Mart Gate 1." },
      { question: "Is corporate GST invoicing provided at CoCo House?", answer: "Yes, we provide direct single B2B GST invoices for all corporate room bookings." }
    ],
    tags: ["CoCo House", "Boutique Hotel Greater Noida", "Hotel Near India Expo Mart", "Pari Chowk Boutique Hotel"]
  },
  {
    slug: "amaaltash-by-sandane-homes-serene-executive-boutique-hotel",
    title: "Amaaltash by Sandane Homes: Serene Executive Boutique Hotel in Ansal Golf Links-1 Greater Noida",
    metaTitle: "Amaaltash by Sandane Homes | Executive Boutique Hotel Ansal Golf Links",
    metaDescription: "Experience quiet boutique luxury at Amaaltash by Sandane Homes in Ansal Golf Links-1. Quiet rooms with private kitchenette, 300 Mbps WiFi, GST billing & 24/7 concierge.",
    subtitle: "Peaceful boutique rooms with kitchenette amenities near Knowledge Park & India Expo Mart.",
    category: "Boutique Stays",
    date: "February 27, 2027",
    readTime: "6 min read",
    author: "Sandane Homes Hospitality Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "en",
    excerpt: "Experience quiet boutique luxury at Amaaltash by Sandane Homes in Ansal Golf Links-1 — featuring private kitchenettes & 300 Mbps WiFi.",
    content: [
      { type: "paragraph", text: "Nestled within the green residential gated enclave of Ansal Golf Links-1, <a href='/amaaltash'>Amaaltash by Sandane Homes</a> offers corporate travelers a refined boutique hotel experience with the added convenience of private kitchenette facilities in select suites." },
      { type: "heading", text: "Signature Highlights of Amaaltash by Sandane Homes" },
      { type: "list", items: [
        "<strong>Private Kitchenette & RO Water:</strong> Mini-fridge, microwave, kettle, and RO purified water in rooms for long-stay convenience.",
        "<strong>Quiet Residential Setting:</strong> Secure gated neighborhood ensuring peaceful night sleep away from highway noise.",
        "<strong>High-Speed Fiber WiFi:</strong> Dedicated 300 Mbps access point per floor for business work.",
        "<strong>Corporate GST Billing:</strong> Full B2B tax invoice issuance for company stays."
      ] },
      { type: "quote", text: "Amaaltash by Sandane Homes | Ansal Golf Links-1, Greater Noida | +91 97117 22273 | sandanehomes.com/amaaltash", attribution: "— Executive Boutique Hotel" },
      { type: "cta" }
    ],
    faqs: [
      { question: "Are kitchenettes available at Amaaltash by Sandane Homes?", answer: "Yes, select boutique suites at Amaaltash by Sandane Homes feature private kitchenettes equipped with microwave, kettle, and RO water." },
      { question: "How close is Amaaltash by Sandane Homes to Knowledge Park?", answer: "Amaaltash by Sandane Homes is just 5-7 minutes drive from Knowledge Park II and III." }
    ],
    tags: ["Amaaltash by Sandane Homes", "Boutique Hotel Greater Noida", "Ansal Golf Links Hotel", "Kitchenette Hotel Noida"]
  },
  {
    slug: "the-glam-by-sandane-homes-luxury-boutique-suites-noida-airport",
    title: "The Glam by Sandane Homes: Luxury Boutique Suites Near Noida International Airport Corridor",
    metaTitle: "The Glam by Sandane Homes | Luxury Boutique Suites Noida Airport Corridor",
    metaDescription: "Book luxury suites at The Glam by Sandane Homes near Jewar Noida International Airport corridor & India Expo Mart. Designer interiors, 300 Mbps WiFi & corporate GST invoicing.",
    subtitle: "Elegantly designed luxury suites for corporate travelers, flight transit guests, and trade visitors.",
    category: "Boutique Stays",
    date: "February 26, 2027",
    readTime: "6 min read",
    author: "Sandane Homes Hospitality Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "en",
    excerpt: "Book luxury suites at The Glam by Sandane Homes near Jewar Noida International Airport corridor with designer interiors & 300 Mbps WiFi.",
    content: [
      { type: "paragraph", text: "Positioned strategically near Pari Chowk along the upcoming Jewar Noida International Airport corridor, <a href='/glam'>The Glam by Sandane Homes</a> redefines modern executive stays with opulent interiors, plush bedding, and high-tech connectivity." },
      { type: "heading", text: "Executive Suite Amenities" },
      { type: "list", items: [
        "<strong>Opulent Suite Interiors:</strong> Custom hardwood furniture, mood lighting, and marble bathrooms.",
        "<strong>Airport Corridor Location:</strong> Easy 35-minute access to Jewar Airport and 8 minutes to Expo Mart.",
        "<strong>300 Mbps Fiber WiFi:</strong> Instant high-speed wireless connection.",
        "<strong>Corporate Accounting Support:</strong> B2B GST single invoice billing."
      ] },
      { type: "quote", text: "The Glam by Sandane Homes | Greater Noida | +91 97117 22273 | sandanehomes.com/glam", attribution: "— Luxury Boutique Suites" },
      { type: "cta" }
    ],
    faqs: [
      { question: "Is airport pickup service available at The Glam by Sandane Homes?", answer: "Yes, pre-arranged airport transfer services can be booked via our 24/7 concierge desk." }
    ],
    tags: ["The Glam by Sandane Homes", "Luxury Boutique Hotel Greater Noida", "Noida Airport Hotel Corridor"]
  },

  // ── KOREAN (ko) ──
  {
    slug: "coco-house-korean-boutique-hotel-expo-mart-guide",
    title: "CoCo House: 인디아 엑스포 마트 인근 프리미엄 부티크 호텔 및 출장 숙소 가이드",
    metaTitle: "CoCo House | 인디아 엑스포 마트 인근 프리미엄 부티크 호텔",
    metaDescription: "인도 대노이다 CoCo House — 인디아 엑스포 마트 8분 거리의 프리미엄 부티크 호텔. 감각적인 객실, 300 Mbps 초고속 Wi-Fi, 법인 GST 세금계산서 및 24시간 식사 서비스 지원.",
    subtitle: "인디아 엑스포 마트 박람회 참가자, 한국 기업 출장 임직원 및 비즈니스 여행객을 위한 추천 숙소.",
    category: "Boutique Stays",
    date: "February 25, 2027",
    readTime: "6분",
    author: "Sandane Homes Korean Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ko",
    excerpt: "인도 대노이다 CoCo House — 인디아 엑스포 마트 8분 거리의 프리미엄 부티크 호텔 및 출장 숙소.",
    content: [
      { type: "paragraph", text: "인도 대노이다(Greater Noida) 인디아 엑스포 마트(India Expo Mart)에서 열리는 주요 산업 박람회(Auto Expo, IHGF Delhi Fair, ELECRAMA, CPHI India 등)에 참가하는 한국 기업 출장팀에게 <a href='/coco-house'>CoCo House</a>는 최고의 부티크 호텔 및 출장 숙소 경험을 선사합니다." },
      { type: "heading", text: "CoCo House 선택 이유" },
      { type: "list", items: [
        "<strong>인디아 엑스포 마트 8분 거리:</strong> 신호 대기 없는 최단 이동 동선으로 박람회 기간 교통 체증 전무.",
        "<strong>감각적인 디자이너 객실:</strong> 고급 침구, 업무용 책상, 프라이빗 욕실 및 쾌적한 실내 환경.",
        "<strong>300 Mbps 초고속 전용 광Wi-Fi:</strong> 화상 회의 및 한국 본사와의 원활한 업무 통신 보장.",
        "<strong>24시간 룸서비스 & 조식:</strong> 갓 조리한 신선한 식사 및 24시간 음료·식사 서비스 제공.",
        "<strong>법인 GST 세금계산서 발급:</strong> 한국 법인 및 인도 지사 회계 처리를 위한 정밀 B2B 세금계산서 지원."
      ] },
      { type: "quote", text: "CoCo House | Ansal Golf Link-1, Greater Noida | +91 97117 22273 | sandanehomes.com/coco-house", attribution: "— 엑스포 마트 인근 프리미엄 부티크 호텔" },
      { type: "cta" }
    ],
    faqs: [
      { question: "CoCo House에서 인디아 엑스포 마트까지 얼마나 걸리나요?", answer: "차량으로 약 8분(3.5km) 거리에 위치해 있습니다." },
      { question: "법인 세금계산서(GST Invoice) 발급이 가능한가요?", answer: "네, 한국 법인 비용 처리가 가능한 정식 B2B GST 세금계산서를 발급해 드립니다." }
    ],
    tags: ["CoCo House", "그레이터 노이다 부티크 호텔", "인디아 엑스포 마트 한국인 호텔", "노이다 출장 숙소"]
  },
  {
    slug: "amaaltash-by-sandane-homes-korean-boutique-hotel-guide",
    title: "Amaaltash by Sandane Homes: 대노이다 Ansal Golf Links-1 내 위치한 고급 부티크 호텔 및 키친넷 세미 레지던스",
    metaTitle: "Amaaltash by Sandane Homes | 그레이터 노이다 고급 부티크 호텔",
    metaDescription: "Ansal Golf Links-1 내 위치한 Amaaltash by Sandane Homes. 객실 내 개별 키친넷, RO 정수기, 300 Mbps 초고속 Wi-Fi, 주 7일 청소 및 법인 GST 세금계산서 지원.",
    subtitle: "삼성·LG전자 출장자 및 안살 골프 링크스 인근 조용한 고급 부티크 숙소.",
    category: "Boutique Stays",
    date: "February 24, 2027",
    readTime: "6분",
    author: "Sandane Homes Korean Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ko",
    excerpt: "대노이다 Ansal Golf Links-1 내 위치한 Amaaltash by Sandane Homes — 객실 내 키친넷 및 RO 정수기 구비.",
    content: [
      { type: "paragraph", text: "조용하고 안전한 주거 단지 Ansal Golf Links-1 내에 위치한 <a href='/amaaltash'>Amaaltash by Sandane Homes</a>는 프라이빗한 부티크 객실과 미니 주방(Kitchenette) 시설을 결합하여 한국인 장단기 출장자에게 편안한 휴식을 제공합니다." },
      { type: "heading", text: "Amaaltash by Sandane Homes 핵심 시설" },
      { type: "list", items: [
        "<strong>객실 내 미니 주방 & RO 정수기:</strong> 전자레인지, 포트, 정수기 구비로 간단한 취사 가능.",
        "<strong>조용하고 안전한 보안 단지:</strong> 24시간 경비원이 상주하는 최고급 게이트 단지.",
        "<strong>300 Mbps 초고속 광인터넷:</strong> 업무용 고속 인터넷 완비.",
        "<strong>정식 B2B GST 세금계산서:</strong> 법인 회계 처리 전용 세금계산서 발급."
      ] },
      { type: "quote", text: "Amaaltash by Sandane Homes | Ansal Golf Links-1, Greater Noida | +91 97117 22273 | sandanehomes.com/amaaltash", attribution: "— 프리미엄 부티크 호텔" },
      { type: "cta" }
    ],
    faqs: [
      { question: "객실에서 취사가 가능한가요?", answer: "네, Amaaltash by Sandane Homes의 일부 객실에는 전자레인지, 포트, RO 정수기가 갖춰진 미니 주방이 포함되어 있습니다." }
    ],
    tags: ["Amaaltash by Sandane Homes", "노이다 비즈니스 호텔", "키친넷 객실 그레이터 노이다", "삼성 LG 출장 숙소"]
  },
  {
    slug: "the-glam-by-sandane-homes-korean-luxury-hotel-guide",
    title: "The Glam by Sandane Homes: 노이다 신공항 회랑 및 엑스포 마트 인근 럭셔리 부티크 스위트",
    metaTitle: "The Glam by Sandane Homes | 노이다 럭셔리 부티크 스위트 호텔",
    metaDescription: "노이다 제와르 신공항 회랑 및 엑스포 마트 인근 The Glam by Sandane Homes. 화려한 디자이너 인테리어, 스위트룸, 300 Mbps Wi-Fi 및 법인 결제 지원.",
    subtitle: "고급 임원 출장, 신공항 환승 및 특별한 체류를 위한 대노이다 최고의 럭셔리 부티크 스위트.",
    category: "Boutique Stays",
    date: "February 23, 2027",
    readTime: "6분",
    author: "Sandane Homes Korean Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ko",
    excerpt: "노이다 제와르 신공항 회랑 인근 The Glam by Sandane Homes — 럭셔리 스위트 객실 및 초고속 인터넷 제공.",
    content: [
      { type: "paragraph", text: "대노이다 파리 촉(Pari Chowk) 및 노이다 제와르 신공항 회랑에 위치한 <a href='/glam'>The Glam by Sandane Homes</a>는 화려한 스위트 객실과 모던한 디자인으로 한국 기업 C-Level 임원 및 귀빈을 위한 프리미엄 서비스를 제공합니다." },
      { type: "quote", text: "The Glam by Sandane Homes | Greater Noida | +91 97117 22273 | sandanehomes.com/glam", attribution: "— 럭셔리 부티크 스위트" },
      { type: "cta" }
    ],
    faqs: [
      { question: "공항 픽업 서비스가 제공되나요?", answer: "네, 24시간 컨시어지를 통해 사전 예약 시 차량 픽업/샌딩 서비스를 이용하실 수 있습니다." }
    ],
    tags: ["The Glam by Sandane Homes", "노이다 럭셔리 호텔", "인디아 엑스포 마트 스위트룸"]
  },

  // ── JAPANESE (ja) ──
  {
    slug: "coco-house-japanese-boutique-hotel-expo-mart-guide",
    title: "CoCo House: インド・インディアエキスポマート至近の高級ブティックホテル＆出張滞在完全ガイド",
    metaTitle: "CoCo House | インディアエキスポマート至近の高級ブティックホテル",
    metaDescription: "インド・大ノイダCoCo House — インディアエキスポマートから車でわずか8分。スタイリッシュな客室、300 Mbps高速光Wi-Fi、B2B GST法人領収書、24時間ルームサービス完備。",
    subtitle: "展示会出展者、日系企業出張者、ビジネス旅行者に最も選ばれる大ノイダのプレミアムブティックホテル。",
    category: "Boutique Stays",
    date: "February 22, 2027",
    readTime: "6分",
    author: "Sandane Homes Japanese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ja",
    excerpt: "インド大ノイダCoCo House — インディアエキスポマートから車でわずか8分のブティックホテル。",
    content: [
      { type: "paragraph", text: "インド・大ノイダ（Greater Noida）のインディアエキスポマート（India Expo Mart）で開催される国際展示会（Auto Expo、IHGF Delhi Fair、ELECRAMA、CPHI等）に参加される日本人出張者様へ。<a href='/coco-house'>CoCo House</a>は、会場まで渋滞なしでアクセスできる理想的なブティックホテルです。" },
      { type: "heading", text: "CoCo Houseが選ばれる理由" },
      { type: "list", items: [
        "<strong>エキスポマート Gate 1まで車で8分：</strong> 会場直近のロケーションで毎朝の通勤渋滞を回避。",
        "<strong>洗練されたブティック客室：</strong> 高品質ベッド、作業デスク、静音性を確保した清潔な空間。",
        "<strong>300 Mbps専用高速Wi-Fi：</strong> 日本とのオンライン会議やPC作業がスムーズに完了。",
        "<strong>24時間対応ルームサービス：</strong> 出来立ての朝食や24時間のお食事・ドリンク手配。",
        "<strong>法人B2B GST一括領収書：</strong> 日系企業の経費精算に対応した正規GST請求書を発行。"
      ] },
      { type: "quote", text: "CoCo House | Ansal Golf Link-1, Greater Noida | +91 97117 22273 | sandanehomes.com/coco-house", attribution: "— エキスポマート至近の高級ブティックホテル" },
      { type: "cta" }
    ],
    faqs: [
      { question: "会場までのアクセスは便利ですか？", answer: "はい、CoCo HouseからインディアエキスポマートGate 1まで車でわずか8分（3.5 km）です。" },
      { question: "法人のGST領収書は発行できますか？", answer: "はい、日系企業の経理基準に適合するB2B GST領収書を発行しております。" }
    ],
    tags: ["CoCo House", "大ノイダ ブティックホテル", "インディアエキスポマート 日系出張ホテル", "インドビジネス出張ホテル"]
  },
  {
    slug: "amaaltash-by-sandane-homes-japanese-boutique-hotel-guide",
    title: "Amaaltash by Sandane Homes: 大ノイダAnsal Golf Links-1内の閑静な高級ブティックホテル＆ミニキッチン付き客室",
    metaTitle: "Amaaltash by Sandane Homes | 大ノイダ高級ブティックホテル",
    metaDescription: "Ansal Golf Links-1内の閑静なアパートホテル。Amaaltash by Sandane Homesは全室ミニキッチン、RO逆浸透膜浄水器、300 Mbps Wi-Fi、法人GST領収書対応。",
    subtitle: "ホンダ・デンソー・ヤマハ等の出張者やナレッジパーク周辺で静かな滞在を求める方に最適。",
    category: "Boutique Stays",
    date: "February 21, 2027",
    readTime: "6分",
    author: "Sandane Homes Japanese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ja",
    excerpt: "大ノイダAnsal Golf Links-1内のAmaaltash by Sandane Homes — ミニキッチン＆RO浄水器完備。",
    content: [
      { type: "paragraph", text: "緑豊かで警備が行き届いた高級住宅街Ansal Golf Links-1内に位置する <a href='/amaaltash'>Amaaltash by Sandane Homes</a> は、落ち着いた環境とミニキッチン（一部客室）を備えたブティックホテルです。" },
      { type: "quote", text: "Amaaltash by Sandane Homes | Ansal Golf Links-1, Greater Noida | +91 97117 22273 | sandanehomes.com/amaaltash", attribution: "— 高級ブティックホテル" },
      { type: "cta" }
    ],
    faqs: [
      { question: "客室にキッチンはありますか？", answer: "はい、Amaaltash by Sandane Homesの一部の客室には電子レンジ、電気ケトル、RO浄水器付きのミニキッチンがございます。" }
    ],
    tags: ["Amaaltash by Sandane Homes", "ノイダ ブティックホテル", "ミニキッチン付き客室 大ノイダ"]
  },
  {
    slug: "the-glam-by-sandane-homes-japanese-luxury-suites-guide",
    title: "The Glam by Sandane Homes: ノイダ国際空港廊下＆エキスポマート至近のラグジュアリーブティック suites",
    metaTitle: "The Glam by Sandane Homes | ノイダ ラグジュアリーブティック suites",
    metaDescription: "ノイダ国際空港廊下およびパリチョーク近くのラグジュアリーホテル。The Glam by Sandane Homesは高級ス위트、300 Mbps Wi-Fi、24時間対応。",
    subtitle: "高級役員出張や贅沢なご滞在に最適な大ノイダのラグジュアリーブティック suites。",
    category: "Boutique Stays",
    date: "February 20, 2027",
    readTime: "6分",
    author: "Sandane Homes Japanese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "ja",
    excerpt: "The Glam by Sandane Homes — 高級スイート客室＆300 Mbps Wi-Fi完備。",
    content: [
      { type: "paragraph", text: "<a href='/glam'>The Glam by Sandane Homes</a> は、豪華なインテリアと最高の快適性で日系企業の役員様やVIPゲストをお迎えいたします。" },
      { type: "quote", text: "The Glam by Sandane Homes | Greater Noida | +91 97117 22273 | sandanehomes.com/glam", attribution: "— ラグジュアリーブティック suites" },
      { type: "cta" }
    ],
    faqs: [
      { question: "送迎手配は可能ですか？", answer: "はい、事前のご予約で空港や工場への送迎車をご用意いたします。" }
    ],
    tags: ["The Glam by Sandane Homes", "大ノイダ ラグジュアリーホテル", "ノイダ空港周辺ホテル"]
  },

  // ── CHINESE (zh-CN) ──
  {
    slug: "coco-house-chinese-boutique-hotel-expo-mart-guide",
    title: "CoCo House: 印度大诺伊达 India Expo Mart 展会精选精品酒店指南",
    metaTitle: "CoCo House | 大诺伊达 India Expo Mart 精选精品酒店",
    metaDescription: "预订大诺伊达 CoCo House — 距离 India Expo Mart 车程仅 8 分钟。时尚精品客房、300 Mbps 独立光纤 WiFi、B2B GST 发票及 24 小时餐点服务。",
    subtitle: "专为展会参展商、中资企业出差团队及商务旅客打造的大诺伊达精品酒店。",
    category: "Boutique Stays",
    date: "February 19, 2027",
    readTime: "6分钟",
    author: "Sandane Homes Chinese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "zh-CN",
    excerpt: "预订大诺伊达 CoCo House — 距离 India Expo Mart 8 分钟车程的精品酒店。",
    content: [
      { type: "paragraph", text: "前往印度大诺伊达（Greater Noida）India Expo Mart 参加各类大型展会（Auto Expo、IHGF Delhi Fair、ELECRAMA、CPHI India 等）的中资企业出差人员与展商，<a href='/coco-house'>CoCo House</a> 是您最为理想的精品酒店首选。" },
      { type: "heading", text: "选择 CoCo House 的核心优势" },
      { type: "list", items: [
        "<strong>8分钟直达 India Expo Mart 1号门：</strong> 无红绿灯快速干道，展会期间彻底远离拥堵。",
        "<strong>设计师精品客房：</strong> 人体工学办公桌、高品质床垫、独立卫生间及隔音舒适环境。",
        "<strong>300 Mbps 独立光纤 WiFi：</strong> 无卡顿高速网络，满足视频会议与国内办公需求。",
        "<strong>24小时餐饮与客房服务：</strong> 现做早餐及全天候餐点供应。",
        "<strong>合规开票报销：</strong> 提供规范的 B2B 单张 GST 税务发票。"
      ] },
      { type: "quote", text: "CoCo House | Ansal Golf Link-1, Greater Noida | +91 97117 22273 | sandanehomes.com/coco-house", attribution: "— 展会精选精品酒店" },
      { type: "cta" }
    ],
    faqs: [
      { question: "酒店距离展馆有多远？", answer: "CoCo House 距离 India Expo Mart 仅约 3.5 公里（车程约 8 分钟）。" },
      { question: "是否提供 GST 报销发票？", answer: "是的，我们开具完全符合中资企业财务标准的正规 B2B GST 发票。" }
    ],
    tags: ["CoCo House", "大诺伊达精品酒店", "India Expo Mart 展会酒店", "Pari Chowk 商务酒店"]
  },
  {
    slug: "amaaltash-by-sandane-homes-chinese-boutique-hotel-guide",
    title: "Amaaltash by Sandane Homes: 坐落于 Ansal Golf Links-1 的静谧商务精品酒店及带厨房客房解析",
    metaTitle: "Amaaltash by Sandane Homes | 大诺伊达静谧商务精品酒店",
    metaDescription: "位于高档社区 Ansal Golf Links-1 的 Amaaltash by Sandane Homes。配备私享微型厨房、RO 净水器、300 Mbps WiFi 及正规 GST 报销发票。",
    subtitle: "OPPO、Vivo、海尔出差工程师及 Knowledge Park 旁静谧住宿首选。",
    category: "Boutique Stays",
    date: "February 18, 2027",
    readTime: "6分钟",
    author: "Sandane Homes Chinese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "zh-CN",
    excerpt: "坐落于 Ansal Golf Links-1 的 Amaaltash by Sandane Homes — 配备私享微型厨房及 RO 净水器。",
    content: [
      { type: "paragraph", text: "<a href='/amaaltash'>Amaaltash by Sandane Homes</a> 位于安全静谧的 Ansal Golf Links-1 社区内，部分套房配有独立微型厨房，为中短期的商务差旅人员提供私密与便利。" },
      { type: "quote", text: "Amaaltash by Sandane Homes | Ansal Golf Links-1, Greater Noida | +91 97117 22273 | sandanehomes.com/amaaltash", attribution: "— 商务精品酒店" },
      { type: "cta" }
    ],
    faqs: [
      { question: "房间内是否可以简单做饭？", answer: "是的，Amaaltash by Sandane Homes 的部分精品套房配备有微波炉、电热水壶及 RO 净水设施。" }
    ],
    tags: ["Amaaltash by Sandane Homes", "诺伊达带厨房精品酒店", "Knowledge Park 商务住宿"]
  },
  {
    slug: "the-glam-by-sandane-homes-chinese-luxury-hotel-guide",
    title: "The Glam by Sandane Homes: 诺伊达国际机场走廊及展会中心旁轻奢精品套房酒店",
    metaTitle: "The Glam by Sandane Homes | 大诺伊达轻奢精品套房酒店",
    metaDescription: "位于诺伊达机场走廊及展会中心旁。The Glam by Sandane Homes 提供轻奢套房、300 Mbps 高速 WiFi 及企业报销发票。",
    subtitle: "中资企业高管差旅及大诺伊达轻奢住宿首选。",
    category: "Boutique Stays",
    date: "February 17, 2027",
    readTime: "6分钟",
    author: "Sandane Homes Chinese Desk",
    coverImage: "/blog/covers/living-room.jpg",
    coverGradient: "linear-gradient(135deg, #1A3C34 0%, #112823 50%, #C5A572 100%)",
    lang: "zh-CN",
    excerpt: "The Glam by Sandane Homes — 提供轻奢套房及 300 Mbps 高速 WiFi。",
    content: [
      { type: "paragraph", text: "<a href='/glam'>The Glam by Sandane Homes</a> 以精致奢华的装潢与完备的软硬件设施，为中资企业高管及贵宾提供高品质的住宿体验。" },
      { type: "quote", text: "The Glam by Sandane Homes | Greater Noida | +91 97117 22273 | sandanehomes.com/glam", attribution: "— 轻奢精品套房" },
      { type: "cta" }
    ],
    faqs: [
      { question: "是否支持机场接送安排？", answer: "是的，提前预约即可提供专车接送服务。" }
    ],
    tags: ["The Glam by Sandane Homes", "大诺伊达轻奢酒店", "诺伊达机场走廊酒店"]
  }
];

function run() {
  console.log("🚀 Injecting 12 new Hotel posts in EN, KO, JA, ZH-CN into src/data/blogPosts.js...");

  const blogPostsPath = path.join(rootDir, 'src', 'data', 'blogPosts.js');
  let blogContent = fs.readFileSync(blogPostsPath, 'utf8');

  const generateSeoPath = path.join(rootDir, 'generate-seo.js');
  let seoContent = fs.readFileSync(generateSeoPath, 'utf8');

  const newPostStrings = [];
  const newSlugs = [];

  hotelPosts.forEach((post) => {
    if (blogContent.includes(`slug: "${post.slug}"`)) {
      console.log(`⚠️ Post ${post.slug} already exists, skipping...`);
      return;
    }

    newSlugs.push(post.slug);

    const str = `    {
        slug: "${post.slug}",
        title: "${post.title.replace(/"/g, '\\"')}",
        metaTitle: "${post.metaTitle.replace(/"/g, '\\"')}",
        metaDescription: "${post.metaDescription.replace(/"/g, '\\"')}",
        subtitle: "${post.subtitle.replace(/"/g, '\\"')}",
        category: "${post.category}",
        date: "${post.date}",
        readTime: "${post.readTime}",
        author: "${post.author}",
        coverImage: "${post.coverImage}",
        coverGradient: "${post.coverGradient}",
        lang: "${post.lang}",
        excerpt: "${post.excerpt.replace(/"/g, '\\"')}",
        content: ${JSON.stringify(post.content, null, 12)},
        faqs: ${JSON.stringify(post.faqs, null, 12)},
        tags: ${JSON.stringify(post.tags)}
    },`;

    newPostStrings.push(str);
  });

  if (newPostStrings.length === 0) {
    console.log("No new hotel posts to add.");
    return;
  }

  // Inject at top of blogPosts array
  const insertIndex = blogContent.indexOf('export const blogPosts = [\n') + 'export const blogPosts = [\n'.length;
  blogContent = blogContent.slice(0, insertIndex) + newPostStrings.join('\n') + '\n' + blogContent.slice(insertIndex);
  fs.writeFileSync(blogPostsPath, blogContent, 'utf8');
  console.log(`✅ Appended ${newPostStrings.length} new Hotel blog posts to src/data/blogPosts.js`);

  // Inject slugs into highPrioritySlugs in generate-seo.js
  const hpIndex = seoContent.indexOf('const highPrioritySlugs = [\n') + 'const highPrioritySlugs = [\n'.length;
  const slugLines = newSlugs.map(s => `  '${s}',`).join('\n') + '\n';
  seoContent = seoContent.slice(0, hpIndex) + slugLines + seoContent.slice(hpIndex);
  fs.writeFileSync(generateSeoPath, seoContent, 'utf8');
  console.log(`✅ Appended ${newSlugs.length} slugs to highPrioritySlugs in generate-seo.js`);

  // Run build
  console.log("🔨 Running npm run build...");
  execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
  console.log("✅ Build finished successfully!");
}

run();
