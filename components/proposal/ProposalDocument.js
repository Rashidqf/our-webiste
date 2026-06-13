import styles from '../../styles/proposal.module.scss';
import { PROPOSAL_LOGO_ALT, PROPOSAL_LOGO_SRC, PROPOSAL_SIGNATURE_SRC } from '../../lib/proposal/defaultProposal';
import { isSectionVisible } from '../../lib/proposal/sectionVisibility';

function renderInlineBold(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function AboutSection({ about }) {
  return (
    <div className={`${styles.section} ${styles.aboutAppendix}`}>
      {about.sectionLabel && (
        <div className={styles.sectionLabel}>{about.sectionLabel}</div>
      )}
      <h2>{about.title}</h2>
      {(about.paragraphs || []).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {about.promise && (
        <div className={styles.highlightBox}>
          <p>
            <strong>Our Promise:</strong> {about.promise}
          </p>
        </div>
      )}
      {(about.stats?.length ?? 0) > 0 && (
        <div className={styles.statsGrid}>
          {about.stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProposalDocument({ data }) {
  const { meta, overview, about, services, timeline, pricing, terms, signature, closing, footer } =
    data;

  return (
    <div className={styles.proposalRoot} id="proposal-document">
      <div className={styles.page}>
        <div className={styles.cover}>
          <div className={styles.coverBrandRow}>
            <img
              src={PROPOSAL_LOGO_SRC}
              alt={PROPOSAL_LOGO_ALT}
              className={styles.coverLogo}
              width={160}
              height={48}
            />
          </div>
          {meta.coverEyebrow && (
            <div className={styles.coverEyebrow}>{meta.coverEyebrow}</div>
          )}
          <h1>
            {meta.coverTitle}
            <br />
            <span className={styles.coverAccent}>{meta.coverTitleAccent}</span>
            <br />
            {meta.coverTitleSuffix}
          </h1>
          {meta.projectTitle && (
            <p className={styles.projectTitle}>{meta.projectTitle}</p>
          )}
          {meta.coverSubtitle && (
            <p className={styles.coverSub}>{meta.coverSubtitle}</p>
          )}
          <div className={styles.coverMeta}>
            <div className={styles.coverMetaItem}>
              <label>Prepared By</label>
              <p>{meta.preparedBy}</p>
            </div>
            <div className={styles.coverMetaItem}>
              <label>Prepared For</label>
              <p>{meta.clientName}</p>
            </div>
            <div className={styles.coverMetaItem}>
              <label>Date</label>
              <p>{meta.proposalDate}</p>
            </div>
            <div className={styles.coverMetaItem}>
              <label>Valid Until</label>
              <p>{meta.validUntil}</p>
            </div>
          </div>
        </div>

        <div className={styles.greenRule} />

        <div className={styles.content}>
          {isSectionVisible('overview', overview) && (
            <div className={styles.section}>
              {overview.sectionLabel && (
                <div className={styles.sectionLabel}>{overview.sectionLabel}</div>
              )}
              <h2>{overview.title}</h2>
              {(overview.paragraphs || []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {isSectionVisible('services', services) && (
            <div className={styles.section}>
              {services.sectionLabel && (
                <div className={styles.sectionLabel}>{services.sectionLabel}</div>
              )}
              <h2>{services.title}</h2>
              {services.intro && <p>{services.intro}</p>}
              <div className={styles.servicesGrid}>
                {services.items.map((item) => (
                  <div key={item.title} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isSectionVisible('timeline', timeline) && (
            <div className={styles.section}>
              {timeline.sectionLabel && (
                <div className={styles.sectionLabel}>{timeline.sectionLabel}</div>
              )}
              <h2>{timeline.title}</h2>
              <p>
                {timeline.intro}{' '}
                {timeline.totalDuration && (
                  <>
                    Total estimated duration: <strong>{timeline.totalDuration}</strong>.
                  </>
                )}
              </p>
              <div className={styles.timeline}>
                {timeline.phases.map((phase) => (
                  <div key={phase.number} className={styles.tlItem}>
                    <div className={styles.tlDot}>{phase.number}</div>
                    <div className={styles.tlBody}>
                      <div className={styles.tlWeek}>{phase.week}</div>
                      <h4>{phase.title}</h4>
                      <p>{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isSectionVisible('pricing', pricing) && (
            <div className={styles.section}>
              {pricing.sectionLabel && (
                <div className={styles.sectionLabel}>{pricing.sectionLabel}</div>
              )}
              <h2>{pricing.title}</h2>
              {pricing.intro && <p>{pricing.intro}</p>}
              {(pricing.lineItems?.length ?? 0) > 0 && (
                <table className={styles.pricingTable}>
                  <thead>
                    <tr>
                      <th style={{ width: '50%' }}>Deliverable</th>
                      <th>Details</th>
                      <th style={{ textAlign: 'right' }}>Price ({meta.currency})</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.lineItems.map((row) => (
                      <tr key={row.deliverable}>
                        <td>{row.deliverable}</td>
                        <td>{row.details}</td>
                        <td className={styles.priceCell}>{row.price}</td>
                      </tr>
                    ))}
                    <tr className={styles.totalRow}>
                      <td colSpan={2}>
                        <strong>{pricing.totalLabel}</strong>
                      </td>
                      <td className={styles.priceCell}>
                        <strong>{pricing.total}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
              {pricing.paymentNote && (
                <div className={styles.noteBox}>
                  <strong>Payment Structure:</strong> {pricing.paymentNote}
                </div>
              )}
            </div>
          )}

          {isSectionVisible('terms', terms) && (
            <div className={styles.section}>
              {terms.sectionLabel && (
                <div className={styles.sectionLabel}>{terms.sectionLabel}</div>
              )}
              <h2>{terms.title}</h2>
              <ul className={styles.termsList}>
                {terms.items.map((item, i) => (
                  <li key={i}>{renderInlineBold(item)}</li>
                ))}
              </ul>
            </div>
          )}

          {isSectionVisible('signature', signature) && (
            <div className={styles.section}>
              <h2>{signature.title}</h2>
              {signature.intro && <p>{signature.intro}</p>}
              <div className={styles.signatureBlock}>
                <div className={styles.sigCol}>
                  <label>{signature.providerLabel}</label>
                  <img
                    src={PROPOSAL_SIGNATURE_SRC}
                    alt="Authorised signatory signature"
                    className={styles.sigImage}
                    width={220}
                    height={52}
                  />
                  <p>{signature.providerSignatory}</p>
                  <p style={{ marginTop: 8 }}>Date: ___________________</p>
                </div>
                <div className={styles.sigCol}>
                  <label>{signature.clientLabel}</label>
                  <div className={styles.sigLine} />
                  <p>Name: ___________________</p>
                  <p style={{ marginTop: 8 }}>Date: ___________________</p>
                </div>
              </div>
            </div>
          )}

          {isSectionVisible('closing', closing) && (
            <div className={styles.closingBlock}>
              {closing.message && <p>{closing.message}</p>}
              <p className={styles.closingSignOff}>Best Regards,</p>
              {closing.name && <p className={styles.closingName}>{closing.name}</p>}
              {closing.role && <p className={styles.closingRole}>{closing.role}</p>}
              {closing.tagline && (
                <p className={styles.closingTagline}>{closing.tagline}</p>
              )}
            </div>
          )}

          {isSectionVisible('about', about) && <AboutSection about={about} />}
        </div>

        {isSectionVisible('footer', footer) && (
          <div className={styles.footer}>
            <div className={styles.footerBrand}>
              <img
                src={PROPOSAL_LOGO_SRC}
                alt={PROPOSAL_LOGO_ALT}
                className={styles.footerLogo}
                width={160}
                height={48}
              />
            </div>
            <p>
              {footer.tagline}
              <br />
              {footer.disclaimer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
