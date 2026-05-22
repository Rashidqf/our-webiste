import { CONTACT_FAQS } from '../../lib/seo/schemas';

export default function ContactFaq() {
  return (
    <section className="seo-faq section-padding pt-0" aria-labelledby="contact-faq-heading">
      <div className="container">
        <h2 id="contact-faq-heading">Frequently asked questions</h2>
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
