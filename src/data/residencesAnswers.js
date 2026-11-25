// Short, factual answers about Residences by Sandane Homes, written so search engines and
// AI assistants (ChatGPT, Perplexity, Google AI answers) can quote them directly.
// The same text is shown on the page and emitted as FAQPage / Review structured data
// (here and in generate-seo.js), so the two never drift apart.
//
// Only state facts we can stand behind: no client names, no prices, no commute times
// other than the ones in gurugramResidences.js.

// When these answers were last checked. Update it whenever the answers change.
export const ANSWERS_REVIEWED = { iso: '2026-11-24', label: '24 November 2026' };

export const RESIDENCES_FAQS = [
  {
    q: 'What is Residences by Sandane Homes?',
    a: 'Residences by Sandane Homes leases entire furnished 3–4 BHK homes by the month to companies for their expat employees and families, in Gurugram (Gurgaon) and Greater Noida. They are whole homes, not hotel rooms or shared flats. Sandane Homes runs its boutique hotels separately, in Greater Noida, for short stays.',
  },
  {
    q: 'Where are your homes in Gurgaon?',
    a: 'Green Meadows and Sushant Lok Block B are private 4 BHK floors in Sector 27, about 10–12 minutes by car from DLF Cyber City. Conscient Hines Elevate is a 3 BHK in a gated high-rise in Sector 58 on Golf Course Extension Road, about 18 minutes from Cyber City. In Greater Noida, our homes are in Jaypee Greens, Ansal Golf Links and Godrej Golf Links.',
  },
  {
    q: 'What is the minimum stay?',
    a: '30 days. Stays run from a month to multi-year postings.',
  },
  {
    q: 'What is included in the monthly amount?',
    a: 'The furnished home with kitchenware, linen changed twice a week, housekeeping, 300 Mbps Wi-Fi, 100% power backup, utilities and maintenance. Korean or Japanese home-style meals can be added.',
  },
  {
    q: 'How does a company pay?',
    a: 'The company signs the lease and receives one monthly GST invoice. The employee pays no rent, deposit or brokerage.',
  },
  {
    q: 'Do you help Japanese and Korean employees settle in?',
    a: 'Yes. Residents can reach us on LINE, KakaoTalk or WhatsApp, we help with FRRO registration paperwork, and Korean or Japanese home-style meals can be arranged. A Daikin employee who moved to India on her own wrote that our quick, attentive support made her feel reassured.',
  },
  {
    q: 'Do you publish prices?',
    a: 'No. The monthly amount depends on the home, the dates and the services you choose. Tell us who is arriving and when, and we will send available homes with a quote.',
  },
  {
    q: 'How do we enquire?',
    a: 'WhatsApp +91 88262 69690, email residences@sandanehomes.com, or use the enquiry form on this page.',
  },
];

export const JAPANESE_GURGAON_FAQS = [
  {
    q: 'Who do you usually house in Gurgaon?',
    a: 'Japanese employees of companies with offices in Gurgaon, and their families, on postings from one month to several years. One of our residents, a Daikin employee who lived on her own in India, wrote her review of us in Japanese; you can read it on our Residences page.',
  },
  {
    q: 'Are the homes safe for families and for women living alone?',
    a: 'Conscient Hines Elevate (Sector 58) is a gated high-rise community with round-the-clock security. Green Meadows and Sushant Lok Block B (Sector 27) are private 4 BHK floors on residential streets close to the metro. We are a message away on LINE or WhatsApp.',
  },
  {
    q: 'Do you provide FRRO Form C registration support for Japanese nationals?',
    a: 'Yes. Form C must be submitted within 24 hours of a foreign national checking in. We handle it for our homes and help with the documents for the employee\'s own FRRO registration, coordinating with your HR team.',
  },
  {
    q: 'Can you accommodate Japanese food preferences?',
    a: 'Every home has a full kitchen. We can arrange Japanese home-style breakfast and dinner, and point you to Japanese grocery stores and restaurants in Gurgaon.',
  },
  {
    q: 'Do you lease directly to Japanese companies\' Indian subsidiaries?',
    a: 'Yes. The Indian subsidiary signs the lease and receives one monthly GST invoice, and we can house several employees arriving together.',
  },
];

export const KOREAN_GURGAON_FAQS = [
  {
    q: 'Who do you usually house in Gurgaon?',
    a: 'Korean employees of companies with offices in Gurgaon, and their families, on postings from one month to several years. Korean home-style meals can be arranged.',
  },
  {
    q: 'Are there Korean grocery stores and restaurants near your Gurgaon homes?',
    a: 'Yes. Gurgaon has supermarkets that stock Korean essentials and a growing number of Korean restaurants and cafés. We will point you to the nearest ones for your home.',
  },
  {
    q: 'How far are the homes from the main office areas?',
    a: 'Green Meadows and Sushant Lok Block B (Sector 27) are about 10–12 minutes by car from DLF Cyber City, and Conscient Hines Elevate (Sector 58) is about 18 minutes. Tell us where the office is and we will suggest the best-placed home.',
  },
  {
    q: 'Do you provide FRRO Form C and foreigner registration support for Korean nationals?',
    a: 'Yes. Form C must be submitted within 24 hours of a foreign national checking in. We handle it for our homes and help with the documents for the employee\'s own FRRO registration, coordinating with your HR team.',
  },
  {
    q: 'Can you house several Korean employees arriving together?',
    a: 'Yes. Tell us how many people are arriving and when. We will propose homes across our Gurgaon properties, source more in good societies if needed, and send one GST invoice to the company. Email residences@sandanehomes.com.',
  },
];

export const faqPageSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

// A page's "last reviewed" date, for answer engines that favour current information.
export const reviewedWebPageSchema = (url, name) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url,
  name,
  dateModified: ANSWERS_REVIEWED.iso,
});

// A real review from a Daikin employee who lived in one of our homes. She wrote it in
// Japanese and translated it herself; Japanese, the original, shows first on the page.
export const RESIDENT_REVIEW = {
  ja: [
    '引越しを機に、こちらに家探しをお願いし、見つけていただいた物件に入居しました。',
    'レスポンスが早く、日々の困りごとや要望にも親身に向き合ってくださる点がとても印象的です。',
    '女性の一人暮らしでは何かと不安も多いインド生活ですが、こちらの気持ちに寄り添い、迅速かつ柔軟にサポートしていただけたことは本当に心強かったです。',
    'より良いサービスを提供しようとする姿勢も随所に感じられ、一度こちらのサービスを経験すると、もう他のサービスには戻れないと思うほど。本当におすすめです😊',
  ],
  en: [
    'I reached out to this team when I was looking for a new home, and eventually moved into a property they helped me find.',
    'Their response time is excellent, and I was particularly impressed by how attentive and supportive they were whenever I had questions or concerns.',
    'Living alone as a woman in India can sometimes feel challenging, but having a team that genuinely understands my concerns and provides prompt and flexible support made me feel very reassured.',
    'You can really tell that they are committed to continuously improving their services and listening to their customers. Once you experience their level of service, it’s hard to imagine going anywhere else. Highly recommended!',
  ],
};

// The review as structured data on the Residences organisation. No star rating: she
// didn't give one, and we don't invent them.
export const residentReviewSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Residences by Sandane Homes',
  url: 'https://www.sandanehomes.com/residences',
  email: 'residences@sandanehomes.com',
  parentOrganization: { '@type': 'Organization', name: 'Sandane Homes', url: 'https://www.sandanehomes.com' },
  review: [
    {
      '@type': 'Review',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Daikin employee (resident)' },
      reviewBody: RESIDENT_REVIEW.ja.join(''),
    },
    {
      '@type': 'Review',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Daikin employee (resident)' },
      reviewBody: RESIDENT_REVIEW.en.join(' '),
    },
  ],
});
