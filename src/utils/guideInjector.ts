import { GoogleGenAI } from "@google/genai";

/**
 * Utility to handle external link clicks and attempt to inject the PolicyBridge guide.
 * NOTE: Modern browser security (Same-Origin Policy) strictly prohibits accessing 
 * or injecting scripts into cross-origin windows opened via window.open().
 * This implementation provides the requested logic, but in a production environment,
 * a browser extension or a proxy-based viewer would be required for government sites.
 */
export const injectGuideToExternal = (url: string) => {
  const newWin = window.open(url, '_blank');
  
  if (!newWin) return;

  // Verify same-origin before attempting any access to window.document
  let isSameOrigin = false;
  try {
    const targetUrl = new URL(url, window.location.origin);
    isSameOrigin = targetUrl.origin === window.location.origin;
  } catch (e) {
    isSameOrigin = false;
  }

  // If cross-origin, we cannot inject scripts via JS. 
  // The companion extension handles these official government portals.
  if (!isSameOrigin) {
    console.info('PolicyBridge: External site detected. Note: For secure government portals, please use our companion extension for automated guidance.');
    return;
  }

  // Injection logic for same-origin pages (internal pages)
  try {
    let attempts = 0;
    const checkLoad = setInterval(() => {
      attempts++;
      if (newWin.closed || attempts > 20) {
        clearInterval(checkLoad);
        return;
      }

      try {
        // Accessing .document on cross-origin windows throws SecurityError
        if (newWin.document && newWin.document.body) {
          clearInterval(checkLoad);
          const script = newWin.document.createElement('script');
          script.id = 'policy-bridge-guide-script';
          script.innerHTML = `
            console.log('PolicyBridge Guide Initialized');
            const div = document.createElement('div');
            div.id = 'policy-bridge-floating-root';
            document.body.appendChild(div);
          `;
          newWin.document.body.appendChild(script);
        }
      } catch (innerError) {
        // SOP block caught
        clearInterval(checkLoad);
      }
    }, 500);
  } catch (e) {
    console.warn('PolicyBridge: Guide injection restricted by browser security.', e);
  }
};

/**
 * AI Analysis Service using Gemini
 */
export async function analyzePolicyText(text: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a helpful PolicyBridge civic assistant. Analyze the following text from a government policy page and provide a brief, simple guide for a citizen. 
      Format exactly as:
      ### 📋 What this is about
      [Summary]
      ### 🔍 What to check first
      [Key conditions]
      ### 📄 Documents to keep ready
      [List of docs]
      ### ✅ Current Status
      [e.g. Looks like an application page / informational page]
      
      Page Text: ${text.slice(0, 10000)}`, // Limit text for safety
    });

    return response.text;
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return "I'm sorry, I couldn't analyze the page at the moment. Please check the eligibility section on our platform.";
  }
}

/**
 * Global click listener to intercept external links
 */
export const setupExternalLinkInterception = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor && anchor.href && (anchor.target === '_blank' || anchor.rel.includes('external'))) {
      const url = anchor.href;
      // If it's an external link (not to our domain)
      if (!url.startsWith(window.location.origin) && !url.startsWith('/')) {
        e.preventDefault();
        injectGuideToExternal(url);
      }
    }
  });
};
