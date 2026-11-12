import React from 'react';
import { FaRulerCombined, FaBed, FaCalendarCheck, FaBuilding, FaArrowRight } from 'react-icons/fa6';
import './EntireHomeStrip.css';

/**
 * Says in plain words what Residences by Sandane Homes is (a whole furnished
 * home for a long company stay) and sends people who only need a room for a
 * few nights to the Sandane Homes hotels instead.
 *
 * size / bedrooms: pass null to leave that fact out on pages whose homes
 * differ from the usual range.
 */
const EntireHomeStrip = ({
    size = '2,700–3,500 sq ft',
    bedrooms = '3–4 bedrooms',
    city = 'Greater Noida',
}) => {
    const facts = [
        size
            ? { icon: <FaRulerCombined />, title: size, text: 'of private space in every home' }
            : { icon: <FaRulerCombined />, title: 'The whole home', text: 'not a room off a shared corridor' },
        {
            icon: <FaBed />,
            title: bedrooms || 'Separate bedrooms',
            text: 'with living room, dining room and full kitchen',
        },
        { icon: <FaCalendarCheck />, title: 'Long stays', text: 'monthly to multi-year postings' },
        { icon: <FaBuilding />, title: 'Company leases', text: 'for expat employees and their families, with GST invoice' },
    ];

    return (
        <section className="entire-home-strip" aria-labelledby="entire-home-strip-title">
            <div className="entire-home-inner">
                <span className="entire-home-eyebrow">Residences by Sandane Homes · {city}</span>
                <h2 id="entire-home-strip-title" className="entire-home-title">Entire homes, not hotel rooms</h2>
                <p className="entire-home-lead">
                    Each residence is a complete furnished house or apartment that one family or one company team has to itself.
                </p>
                <div className="entire-home-facts">
                    {facts.map((f) => (
                        <div className="entire-home-fact" key={f.title}>
                            <span className="entire-home-icon" aria-hidden="true">{f.icon}</span>
                            <strong>{f.title}</strong>
                            <span>{f.text}</span>
                        </div>
                    ))}
                </div>
                <p className="entire-home-fork">
                    Only need a room for a few nights? Sandane Homes also runs boutique hotels in Greater Noida.{' '}
                    <a href="/#rooms">See our hotels <FaArrowRight size={11} /></a>
                </p>
            </div>
        </section>
    );
};

export default EntireHomeStrip;
