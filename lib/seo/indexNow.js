import { CANONICAL_ORIGIN } from './siteUrl.cjs';

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || '25bfd12b435b4db0acb0c2aa37af1de5';

export const INDEXNOW_KEY_LOCATION = `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`;

/**
 * Submit one or more URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 * @param {string | string[]} urls - Single URL or array of URLs to submit
 * @returns {Promise<{ success: boolean, status: number, message: string, submittedCount: number }>}
 */
export async function submitToIndexNow(urls) {
  const urlList = (Array.isArray(urls) ? urls : [urls])
    .filter(Boolean)
    .map((u) => u.trim());

  if (urlList.length === 0) {
    return {
      success: false,
      status: 400,
      message: 'No URLs provided',
      submittedCount: 0,
    };
  }

  const host = new URL(CANONICAL_ORIGIN).hostname; // 'www.ryzonix.pro'

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  };

  try {
    // api.indexnow.org distributes the submission across Bing, Yandex, etc.
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    // 200: OK, 202: Accepted (key validation pending)
    const success = response.status === 200 || response.status === 202;
    let text = '';
    try {
      text = await response.text();
    } catch {
      // response body might be empty
    }

    return {
      success,
      status: response.status,
      message: success
        ? 'URLs successfully submitted to IndexNow'
        : `IndexNow submission returned status ${response.status}: ${text}`,
      submittedCount: urlList.length,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error.message || 'Network error submitting to IndexNow',
      submittedCount: 0,
    };
  }
}
