import React from 'react';
import { CONTACT_FAQS } from '../../lib/seo/schemas';

export default function ContactFaq() {
  return (
    <section className="seo-faq section-padding pt-0" aria-labelledby="contact-faq-heading">
      <div className="container">
        <div className="title">
          <div className="section-eyebrow">
            <span className="eyebrow-badge">
              <span className="eyebrow-dot"></span> Inquiries &amp; Process
            </span>
          </div>
          <h2 id="contact-faq-heading" className="section-heading">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>
        <dl className="seo-faq__list">
          {CONTACT_FAQS.map((faq) => (
            <div key={faq.question} className="seo-faq__item">
              <dt>{faq.question}</dt>
              <dd>{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
