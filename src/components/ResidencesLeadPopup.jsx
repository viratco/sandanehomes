import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaXmark, FaCarSide, FaBowlRice, FaUserTie, FaFileInvoice, FaCouch, FaBroom, FaLocationDot, FaWhatsapp, FaPhone, FaCircleCheck, FaArrowLeft, FaPassport, FaWifi, FaPeopleGroup, FaCalendarDays, FaKey, FaHandshake } from 'react-icons/fa6';
import { WHATSAPP_DISPLAY, CALL_NUMBER, CALL_DISPLAY, whatsappUrl } from '../utils/contact';
import './ResidencesLeadPopup.css';

// Two-step enquiry popup for the Residences page.
// Step 1 asks whether the visitor is HR/admin booking for their company, step 2 shows what
// we do for that kind of guest plus a short form (or WhatsApp / call).
// Other components open it with: window.dispatchEvent(new Event(OPEN_EVENT)).

export const OPEN_EVENT = 'open-residences-enquiry';
export const openResidencesEnquiry = () => {
    if (typeof window !== 'undefined') window.dispatchEvent(new Event(OPEN_EVENT));
};

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/residencesbysandanehomes@gmail.com';
const SEEN_KEY = 'res_lead_popup_seen';
const SENT_KEY = 'res_lead_popup_sent';
const AUTO_OPEN_MS = 8000;
const AUTO_OPEN_SCROLL = 0.35;

const track = (name, params = {}) => {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.clarity === 'function') window.clarity('event', name);
};

const readFlag = (store, key) => {
    try { return window[store].getItem(key) === '1'; } catch { return false; }
};
const setFlag = (store, key) => {
    try { window[store].setItem(key, '1'); } catch { /* storage blocked */ }
};

// Only claims the site already makes elsewhere (company pages, Korean stay pages, Residences).
// No prices, no client names.
const CONTENT = {
    hr: {
        title: 'We make housing your team easy',
        lead: 'Over 5 years of hosting expats and corporate teams across Delhi NCR. Here is what HR and admin teams get:',
        stats: [
            { big: '5+', small: 'years hosting expats' },
            { big: '24h', small: 'Form C filing' },
            { big: '1', small: 'GST invoice a month' },
        ],
        groups: [
            {
                heading: 'Less paperwork for you',
                items: [
                    { icon: FaFileInvoice, text: 'We invoice your company directly with GST, so your employees never deal with rent, deposits or landlords' },
                    { icon: FaPassport, text: 'Form C filed within 24 hours of each foreign guest’s arrival' },
                    { icon: FaUserTie, text: 'One contact for every employee and client you send us' },
                    { icon: FaPeopleGroup, text: 'One guest or a whole team, under one booking' },
                ],
            },
            {
                heading: 'Your people feel at home',
                items: [
                    { icon: FaBowlRice, text: 'Korean & Japanese breakfast and dinner' },
                    { icon: FaCarSide, text: 'Car service from home to office and back' },
                    { icon: FaBroom, text: 'Daily housekeeping, with maintenance handled for them' },
                    { icon: FaWifi, text: '300 Mbps Wi-Fi and 100% power backup, for work calls home' },
                    { icon: FaHandshake, text: 'Extracurricular activities, covered by us' },
                ],
            },
            {
                heading: 'Fits any posting',
                items: [
                    { icon: FaCalendarDays, text: 'Weekly, monthly or multi-year stays' },
                    { icon: FaLocationDot, text: 'Furnished 2–4 BHK apartments, villas and hotel rooms in Gurugram, Greater Noida and Noida' },
                    { icon: FaKey, text: 'For long postings, we can also find, furnish and set up an apartment' },
                ],
            },
        ],
        steps: ['Tell us the dates and how many people', 'We share homes that fit', 'Your team moves in, and we look after them'],
    },
    self: {
        title: 'Your home in India, ready on day one',
        lead: 'Over 5 years of hosting expats across Delhi NCR. Everything is taken care of:',
        stats: [
            { big: '5+', small: 'years hosting expats' },
            { big: '24h', small: 'Form C filing' },
            { big: '300', small: 'Mbps Wi-Fi' },
        ],
        groups: [
            {
                heading: 'Move in with just a suitcase',
                items: [
                    { icon: FaCouch, text: 'Fully furnished: furniture, kitchenware and fresh linen' },
                    { icon: FaBroom, text: 'Daily housekeeping, with maintenance handled for you' },
                    { icon: FaWifi, text: '300 Mbps Wi-Fi and 100% power backup' },
                    { icon: FaPassport, text: 'Form C filed within 24 hours of your arrival' },
                ],
            },
            {
                heading: 'Life made easy',
                items: [
                    { icon: FaBowlRice, text: 'Korean & Japanese breakfast and dinner' },
                    { icon: FaCarSide, text: 'Car service from home to office and back' },
                    { icon: FaHandshake, text: 'Extracurricular activities, covered by us' },
                    { icon: FaCalendarDays, text: 'Weekly, monthly or longer stays in Gurugram, Greater Noida and Noida' },
                ],
            },
        ],
        steps: ['Tell us your dates', 'We share homes that fit', 'Move in, and we look after you'],
    },
};

const EMPTY_FORM = { name: '', company: '', phone: '', email: '', city: 'Not sure yet', size: '', website: '' };

const ResidencesLeadPopup = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState('ask'); // ask | form | done
    const [audience, setAudience] = useState(null); // hr | self
    const [form, setForm] = useState(EMPTY_FORM);
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);
    const [source, setSource] = useState('auto');
    const dialogRef = useRef(null);
    const actionRef = useRef(null);

    const show = useCallback((how) => {
        setSource(how);
        setOpen(true);
        setFlag('sessionStorage', SEEN_KEY);
        track('residences_popup_open', { trigger: how });
    }, []);

    // Open on request from buttons on the page
    useEffect(() => {
        const onOpen = () => show('button');
        window.addEventListener(OPEN_EVENT, onOpen);
        return () => window.removeEventListener(OPEN_EVENT, onOpen);
    }, [show]);

    // Open once per visit: after a few seconds or a third of the way down the page,
    // unless the visitor has already seen it this visit or already sent an enquiry.
    useEffect(() => {
        if (readFlag('sessionStorage', SEEN_KEY) || readFlag('localStorage', SENT_KEY)) return undefined;
        let done = false;
        const fire = () => {
            if (done) return;
            done = true;
            cleanup();
            if (!readFlag('sessionStorage', SEEN_KEY)) show('auto');
        };
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            if (max > 0 && window.scrollY / max >= AUTO_OPEN_SCROLL) fire();
        };
        const timer = setTimeout(fire, AUTO_OPEN_MS);
        window.addEventListener('scroll', onScroll, { passive: true });
        function cleanup() {
            clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        }
        return cleanup;
    }, [show]);

    const close = useCallback(() => {
        setOpen(false);
        track('residences_popup_close', { step, audience: audience || 'none' });
        // Start fresh next time it opens
        setTimeout(() => {
            setStep('ask');
            setError('');
        }, 300);
    }, [step, audience]);

    // Escape closes; lock page scroll while open; focus the dialog
    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialogRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open, close]);

    const choose = (who) => {
        setAudience(who);
        setStep('form');
        setError('');
        track('residences_popup_answer', { audience: who });
    };

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const waText = audience === 'hr'
        ? `Hello Sandane Homes, I'm from ${form.company.trim() || 'HR / admin at my company'} and I'm looking for accommodation for our employees / clients.`
        : 'Hello Sandane Homes, I am looking for a serviced apartment and would like to know more.';

    const onContactClick = (channel) => {
        track('residences_popup_contact', { channel, audience: audience || 'none' });
        if (typeof window.gtag === 'function') window.gtag('event', 'ads_conversion_Purchase_1', {});
    };

    const submit = async (e) => {
        e.preventDefault();
        setError('');
        if (form.website) return; // honeypot
        const isHr = audience === 'hr';
        if (!form.name.trim()) return setError('Please enter your name.');
        if (isHr && !form.company.trim()) return setError('Please enter your company name.');
        if (form.phone.replace(/\D/g, '').length < 8) return setError('Please enter a phone or WhatsApp number we can reach you on.');
        if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return setError('Please check your email address.');

        const who = isHr ? 'HR / Admin (company booking)' : 'Individual / family';
        const sizeLabel = isHr ? 'People to house' : 'Length of stay';
        const lines = [
            'New Residences popup enquiry',
            `Type: ${who}`,
            `Name: ${form.name.trim()}`,
            isHr ? `Company: ${form.company.trim()}` : null,
            `Phone / WhatsApp: ${form.phone.trim()}`,
            `Email: ${form.email.trim() || 'Not provided'}`,
            `City: ${form.city}`,
            `${sizeLabel}: ${form.size || 'Not specified'}`,
            `Page: ${window.location.href}`,
        ].filter(Boolean);

        setSending(true);
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    _subject: `Residences enquiry (${isHr ? 'HR/Admin' : 'Individual'}): ${form.name.trim()}${isHr ? ` – ${form.company.trim()}` : ''}`,
                    _template: 'table',
                    _captcha: 'false',
                    enquiry_type: who,
                    name: form.name.trim(),
                    company: isHr ? form.company.trim() : 'N/A',
                    phone: form.phone.trim(),
                    email: form.email.trim() || 'Not provided',
                    city: form.city,
                    [isHr ? 'people_to_house' : 'length_of_stay']: form.size || 'Not specified',
                    message: lines.join('\n'),
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data.success === 'false' || data.success === false) throw new Error('send failed');
            track('generate_lead', { form: 'residences_popup', audience });
            if (typeof window.gtag === 'function') window.gtag('event', 'ads_conversion_Purchase_1', {});
            setFlag('localStorage', SENT_KEY);
            setStep('done');
            setForm(EMPTY_FORM);
        } catch {
            setError(`Sorry, that didn't go through. Please WhatsApp us on ${WHATSAPP_DISPLAY} or call ${CALL_DISPLAY}.`);
        } finally {
            setSending(false);
        }
    };

    if (!open) return null;

    const isHr = audience === 'hr';
    const info = CONTENT[audience] || CONTENT.self;

    return (
        <div className="rlp-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
            <div
                className={`rlp-card ${step === 'form' ? 'rlp-card-wide' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="rlp-title"
                tabIndex={-1}
                ref={dialogRef}
                data-source={source}
            >
                <button type="button" className="rlp-close" onClick={close} aria-label="Close">
                    <FaXmark />
                </button>
                <div className="rlp-scroll">

                {step === 'ask' && (
                    <div className="rlp-body">
                        <span className="rlp-pill">Residences by Sandane Homes</span>
                        <h2 id="rlp-title" className="rlp-title">
                            Are you HR or admin, arranging a stay for employees or clients?
                        </h2>
                        <p className="rlp-sub">One tap, and we’ll show you what fits.</p>
                        <div className="rlp-choices">
                            <button type="button" className="rlp-choice rlp-choice-primary" onClick={() => choose('hr')}>
                                <FaUserTie aria-hidden="true" />
                                <span>Yes, for my company</span>
                            </button>
                            <button type="button" className="rlp-choice" onClick={() => choose('self')}>
                                <FaCouch aria-hidden="true" />
                                <span>No, it’s for me or my family</span>
                            </button>
                        </div>
                        <div className="rlp-quick">
                            <span>Prefer to talk now?</span>
                            <a href={whatsappUrl('Hello Sandane Homes, I would like to enquire about Residences by Sandane Homes.')} target="_blank" rel="noopener noreferrer" onClick={() => onContactClick('whatsapp')}>
                                <FaWhatsapp aria-hidden="true" /> WhatsApp
                            </a>
                            <a href={`tel:+${CALL_NUMBER}`} onClick={() => onContactClick('call')}>
                                <FaPhone aria-hidden="true" /> Call
                            </a>
                        </div>
                    </div>
                )}

                {step === 'form' && (
                    <div className="rlp-body rlp-body-form">
                      <div className="rlp-info">
                        <button type="button" className="rlp-back" onClick={() => setStep('ask')}>
                            <FaArrowLeft aria-hidden="true" /> Back
                        </button>
                        <h2 id="rlp-title" className="rlp-title rlp-title-sm">{info.title}</h2>
                        <p className="rlp-lead">{info.lead}</p>

                        <div className="rlp-stats">
                            {info.stats.map((st) => (
                                <div key={st.small} className="rlp-stat">
                                    <strong>{st.big}</strong>
                                    <span>{st.small}</span>
                                </div>
                            ))}
                        </div>

                        <div className="rlp-groups">
                            {info.groups.map((g) => (
                                <div key={g.heading} className="rlp-group">
                                    <h3>{g.heading}</h3>
                                    <ul className="rlp-perks">
                                        {g.items.map(({ icon: Icon, text }) => (
                                            <li key={text}><Icon aria-hidden="true" /><span>{text}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <ol className="rlp-steps" aria-label="How it works">
                            {info.steps.map((t, i) => (
                                <li key={t}><span className="rlp-step-num">{i + 1}</span><span>{t}</span></li>
                            ))}
                        </ol>
                      </div>

                      <div className="rlp-action" ref={actionRef}>
                        <h3 className="rlp-action-title">{isHr ? 'Talk to us about your team' : 'Talk to us today'}</h3>
                        <p className="rlp-action-sub">Free advice, no commitment.</p>
                        <div className="rlp-fast">
                            <a className="rlp-btn rlp-btn-wa" href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer" onClick={() => onContactClick('whatsapp')}>
                                <FaWhatsapp aria-hidden="true" /> WhatsApp us
                            </a>
                            <a className="rlp-btn rlp-btn-call" href={`tel:+${CALL_NUMBER}`} onClick={() => onContactClick('call')}>
                                <FaPhone aria-hidden="true" /> Call {CALL_DISPLAY}
                            </a>
                        </div>

                        <div className="rlp-or"><span>or leave your details and we’ll call you back</span></div>

                        <form className="rlp-form" onSubmit={submit} noValidate>
                            <input type="text" name="website" value={form.website} onChange={update('website')} className="rlp-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                            <div className="rlp-row">
                                <label>
                                    <span>Your name *</span>
                                    <input type="text" value={form.name} onChange={update('name')} autoComplete="name" required />
                                </label>
                                {isHr && (
                                    <label>
                                        <span>Company *</span>
                                        <input type="text" value={form.company} onChange={update('company')} autoComplete="organization" required />
                                    </label>
                                )}
                            </div>
                            <div className="rlp-row">
                                <label>
                                    <span>Phone / WhatsApp *</span>
                                    <input type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" placeholder="+91" required />
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" value={form.email} onChange={update('email')} autoComplete="email" />
                                </label>
                            </div>
                            <div className="rlp-row">
                                <label>
                                    <span>City</span>
                                    <select value={form.city} onChange={update('city')}>
                                        <option>Not sure yet</option>
                                        <option>Gurugram</option>
                                        <option>Greater Noida</option>
                                        <option>Noida</option>
                                    </select>
                                </label>
                                <label>
                                    <span>{isHr ? 'How many people?' : 'Length of stay'}</span>
                                    <select value={form.size} onChange={update('size')}>
                                        <option value="">Select</option>
                                        {(isHr ? ['1', '2–5', '6–10', 'More than 10'] : ['Under 1 month', '1–3 months', '3–6 months', '6+ months']).map((o) => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            {error && <p className="rlp-error" role="alert">{error}</p>}
                            <button type="submit" className="rlp-btn rlp-btn-submit" disabled={sending}>
                                {sending ? 'Sending…' : 'Request a call back'}
                            </button>
                        </form>
                      </div>
                    </div>
                )}

                {step === 'done' && (
                    <div className="rlp-body rlp-done">
                        <FaCircleCheck className="rlp-done-icon" aria-hidden="true" />
                        <h2 id="rlp-title" className="rlp-title rlp-title-sm">Thank you, we’ve got your details</h2>
                        <p className="rlp-sub">Our team will call you shortly. For a faster reply, message us on WhatsApp.</p>
                        <div className="rlp-fast">
                            <a className="rlp-btn rlp-btn-wa" href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer" onClick={() => onContactClick('whatsapp')}>
                                <FaWhatsapp aria-hidden="true" /> WhatsApp us
                            </a>
                            <button type="button" className="rlp-btn rlp-btn-call" onClick={close}>Close</button>
                        </div>
                    </div>
                )}
                </div>
                {step === 'form' && (
                    <div className="rlp-dock">
                        <a href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer" onClick={() => onContactClick('whatsapp')} className="rlp-dock-wa">
                            <FaWhatsapp aria-hidden="true" /> WhatsApp
                        </a>
                        <a href={`tel:+${CALL_NUMBER}`} onClick={() => onContactClick('call')}>
                            <FaPhone aria-hidden="true" /> Call
                        </a>
                        <button type="button" className="rlp-dock-form" onClick={() => actionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                            Call me back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResidencesLeadPopup;
