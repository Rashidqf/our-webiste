import { useEffect } from 'react';

/**
 * Sync React controlled form state after an agent pre-fills fields via WebMCP.
 * @param {string} toolName
 * @param {string} formId
 * @param {Function} setForms
 */
export function useWebMcpFormSync(toolName, formId, setForms) {
  useEffect(() => {
    const onActivated = (event) => {
      if (event.toolName !== toolName) return;

      const form = document.getElementById(formId);
      if (!form) return;

      requestAnimationFrame(() => {
        const next = {};
        new FormData(form).forEach((value, key) => {
          next[key] = String(value);
        });
        setForms((prev) => ({ ...prev, ...next }));
      });
    };

    window.addEventListener('toolactivated', onActivated);
    return () => window.removeEventListener('toolactivated', onActivated);
  }, [toolName, formId, setForms]);
}

/**
 * Return structured feedback to an AI agent after form submission.
 * @param {React.FormEvent} event
 * @param {boolean} isValid
 * @param {string} successMessage
 * @param {string} errorMessage
 */
export function respondToAgentFormSubmit(event, isValid, successMessage, errorMessage) {
  const nativeEvent = event.nativeEvent;
  if (!nativeEvent?.agentInvoked || typeof nativeEvent.respondWith !== 'function') {
    return;
  }

  const message = isValid ? successMessage : errorMessage;
  nativeEvent.respondWith(Promise.resolve(message));
}

/** WebMCP tool names registered via declarative form attributes. */
export const WEBMCP_TOOLS = {
  contact: 'contactRyzonix',
  serviceInquiry: 'requestRyzonixServices',
};
