import { useEffect } from 'react';

/**
 * Global WebMCP lifecycle listeners (toolactivated / toolcancel).
 * Keeps agent-driven form fills visible in controlled React forms.
 */
export default function WebMcpEvents() {
  useEffect(() => {
    const onActivated = ({ toolName }) => {
      if (process.env.NODE_ENV === 'development') {
        console.info(`[WebMCP] Tool activated: ${toolName}`);
      }
    };

    const onCancel = ({ toolName }) => {
      if (process.env.NODE_ENV === 'development') {
        console.info(`[WebMCP] Tool cancelled: ${toolName}`);
      }
    };

    window.addEventListener('toolactivated', onActivated);
    window.addEventListener('toolcancel', onCancel);

    return () => {
      window.removeEventListener('toolactivated', onActivated);
      window.removeEventListener('toolcancel', onCancel);
    };
  }, []);

  return null;
}
