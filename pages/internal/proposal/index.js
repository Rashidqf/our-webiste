import { Fragment, useCallback, useMemo, useState } from 'react';
import SeoHead from '../../../components/seo/SeoHead';
import ProposalDocument from '../../../components/proposal/ProposalDocument';
import { PROPOSAL_AI_PROMPT } from '../../../lib/proposal/aiPrompt';
import {
  getDefaultProposal,
  parseProposalJson,
  PROPOSAL_LOGO_ALT,
  PROPOSAL_LOGO_SRC,
} from '../../../lib/proposal/defaultProposal';
import styles from '../../../styles/proposalGenerator.module.scss';

const STORAGE_KEY = 'ryzonix-proposal-data';

export default function InternalProposalPage() {
  const sampleJson = useMemo(
    () => JSON.stringify(getDefaultProposal(), null, 2),
    []
  );

  const [jsonInput, setJsonInput] = useState(sampleJson);
  const [proposal, setProposal] = useState(() => getDefaultProposal());
  const [error, setError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const applyJson = useCallback(() => {
    try {
      const parsed = parseProposalJson(jsonInput);
      setProposal(parsed);
      setError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }
    } catch (e) {
      setError(e.message || 'Invalid JSON');
    }
  }, [jsonInput]);

  const copyPrompt = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROPOSAL_AI_PROMPT);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch {
      setCopyStatus('Copy failed');
    }
  }, []);

  const downloadPdf = useCallback(() => {
    window.print();
  }, []);

  const openStandalone = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(proposal));
    window.open('/ryzonix-proposal.html', '_blank', 'noopener,noreferrer');
  }, [proposal]);

  return (
    <Fragment>
      <SeoHead
        title="Proposal Generator | Ryzonix Internal"
        description="Internal proposal PDF generator"
        canonicalPath="/internal/proposal"
        noindex
      />

      <div className={styles.shell}>
        <header className={`${styles.topBar} no-print`}>
          <div className={styles.topBarBrand}>
            <img
              src={PROPOSAL_LOGO_SRC}
              alt={PROPOSAL_LOGO_ALT}
              className={styles.topBarLogo}
              width={160}
              height={48}
            />
            <div>
              <h1>Proposal Generator</h1>
              <p>Internal tool · paste AI JSON → preview → download PDF</p>
            </div>
          </div>
          <div className={styles.topActions}>
            <button type="button" className={styles.btnSecondary} onClick={openStandalone}>
              Open HTML Preview
            </button>
            <button type="button" className={styles.btnPrimary} onClick={downloadPdf}>
              Download PDF
            </button>
          </div>
        </header>

        <div className={styles.workspace}>
          <aside className={`${styles.sidebar} no-print`}>
            <section className={styles.panel}>
              <div className={styles.panelHead}>
                <h2>1. AI Prompt</h2>
                <button type="button" className={styles.btnGhost} onClick={copyPrompt}>
                  {copyStatus || 'Copy prompt'}
                </button>
              </div>
              <textarea
                className={styles.promptArea}
                readOnly
                value={PROPOSAL_AI_PROMPT}
                aria-label="AI proposal prompt"
              />
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHead}>
                <h2>2. Paste JSON</h2>
                <button
                  type="button"
                  className={styles.btnGhost}
                  onClick={() => {
                    setJsonInput(sampleJson);
                    setError('');
                  }}
                >
                  Load sample
                </button>
              </div>
              <textarea
                className={styles.jsonArea}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                spellCheck={false}
                placeholder="Paste AI-generated JSON here…"
                aria-label="Proposal JSON input"
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="button" className={styles.btnPrimary} onClick={applyJson}>
                Apply &amp; Preview
              </button>
            </section>

            <section className={styles.help}>
              <h3>Workflow</h3>
              <ol>
                <li>Copy the AI prompt and paste your client brief.</li>
                <li>Paste the JSON response below.</li>
                <li>Click Apply &amp; Preview, then Download PDF.</li>
                <li>Choose Save as PDF in the print dialog. Nothing is stored on the server.</li>
              </ol>
            </section>
          </aside>

          <main className={styles.previewWrap}>
            <ProposalDocument data={proposal} />
          </main>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #proposal-document,
          #proposal-document * {
            visibility: visible;
          }
          #proposal-document {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </Fragment>
  );
}
