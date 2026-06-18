/** Storage key shared with public/ryzonix-proposal.html */
export const PROPOSAL_STORAGE_KEY = 'ryzonix-proposal-data';

/** localStorage (not sessionStorage) — new PDF tab/window cannot read sessionStorage. */
export function saveProposalForDownload(proposal) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROPOSAL_STORAGE_KEY, JSON.stringify(proposal));
}

/** Opens the standalone proposal page and generates a PDF (no browser print headers). */
export function downloadProposalPdf(proposal) {
  saveProposalForDownload(proposal);

  const pdfWindow = window.open(
    '/ryzonix-proposal.html?pdf=1',
    '_blank',
    'noopener,noreferrer'
  );

  if (!pdfWindow) {
    alert('Please allow pop-ups for this site, then try Download PDF again.');
    return false;
  }

  return true;
}
