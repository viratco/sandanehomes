import React, { useState } from 'react';
import { FaQuoteLeft, FaBolt, FaHandHoldingHeart, FaShieldHeart, FaArrowRight, FaHouseChimney } from 'react-icons/fa6';
import { openResidencesEnquiry } from './ResidencesLeadPopup';
import './ResidentReview.css';

// A real review from a Daikin employee (written in Japanese, English translation by the
// resident), shown on /residences for HR teams. Japanese, the original, shows first.
// Both languages are in the HTML; the tabs only switch which one is visible.
const REVIEW = {
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

const POINTS = [
  { icon: <FaBolt aria-hidden="true" />, title: 'Fast replies', text: '“Their response time is excellent.”' },
  { icon: <FaShieldHeart aria-hidden="true" />, title: 'Peace of mind', text: '“Living alone as a woman in India… made me feel very reassured.”' },
  { icon: <FaHandHoldingHeart aria-hidden="true" />, title: 'Day-to-day help', text: '“Attentive and supportive whenever I had questions or concerns.”' },
];

const ResidentReview = () => {
  const [lang, setLang] = useState('ja');

  return (
    <section className="rrv" aria-labelledby="rrv-title">
      <div className="rrv-head">
        <span className="rrv-eyebrow">For HR &amp; admin teams</span>
        <h2 id="rrv-title" className="rrv-title">
          The question every HR team asks: <em>will our employee be looked after?</em>
        </h2>
        <p className="rrv-sub">Here is the answer from a Daikin employee who moved to India on her own.</p>
      </div>

      <div className="rrv-card">
        <div className="rrv-quote-col">
          <FaQuoteLeft className="rrv-mark" aria-hidden="true" />
          {lang === 'ja' ? (
            <p className="rrv-pull rrv-pull-ja" lang="ja">一度こちらのサービスを経験すると、もう他のサービスには戻れないと思うほど。</p>
          ) : (
            <p className="rrv-pull">Once you experience their level of service, it’s hard to imagine going anywhere else.</p>
          )}

          <div className="rrv-tabs" role="tablist" aria-label="Review language">
            <button type="button" role="tab" id="rrv-tab-ja" aria-controls="rrv-ja" aria-selected={lang === 'ja'} className={lang === 'ja' ? 'is-on' : ''} onClick={() => setLang('ja')}><span lang="ja">日本語</span> (original)</button>
            <button type="button" role="tab" id="rrv-tab-en" aria-controls="rrv-en" aria-selected={lang === 'en'} className={lang === 'en' ? 'is-on' : ''} onClick={() => setLang('en')}>English</button>
          </div>

          <blockquote id="rrv-ja" role="tabpanel" aria-labelledby="rrv-tab-ja" className="rrv-text rrv-text-ja" lang="ja" hidden={lang !== 'ja'}>
            {REVIEW.ja.map((p) => <p key={p}>{p}</p>)}
          </blockquote>
          <blockquote id="rrv-en" role="tabpanel" aria-labelledby="rrv-tab-en" className="rrv-text" hidden={lang !== 'en'}>
            {REVIEW.en.map((p) => <p key={p}>{p}</p>)}
          </blockquote>

          <p className="rrv-by">
            <span className="rrv-avatar" aria-hidden="true"><FaHouseChimney /></span>
            <span>
              <strong>Daikin employee, living on her own in India</strong>
              <small>Review written in Japanese · moved in through our home search</small>
            </span>
          </p>
        </div>

        <div className="rrv-points-col">
          <p className="rrv-points-label">What this means for your employee</p>
          <ul className="rrv-points">
            {POINTS.map((pt) => (
              <li key={pt.title}>
                <span className="rrv-point-icon">{pt.icon}</span>
                <span>
                  <strong>{pt.title}</strong>
                  <span>{pt.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <button type="button" className="rrv-cta" onClick={openResidencesEnquiry}>
            Plan an employee’s move with us <FaArrowRight aria-hidden="true" />
          </button>
          <p className="rrv-cta-note">Or WhatsApp us on +91 88262 69690.</p>
        </div>
      </div>
    </section>
  );
};

export default ResidentReview;
