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

  // We try to inject a "Re-creation" script. 
  // In a real cross-origin scenario, this next block will be blocked by the browser.
  try {
    const checkLoad = setInterval(() => {
      if (newWin.closed) {
        clearInterval(checkLoad);
        return;
      }

      // If we could access the document (same-origin only)
      if (newWin.document && newWin.document.body) {
        clearInterval(checkLoad);
        const script = newWin.document.createElement('script');
        script.id = 'policy-bridge-guide-script';
        script.innerHTML = `
          console.log('PolicyBridge Guide Initialized on External Page');
          // Simulated Guide UI Injection
          const div = document.createElement('div');
          div.id = 'policy-bridge-floating-root';
          document.body.appendChild(div);
          
          // Note: In a real app, this script would load the full React bundle 
          // or a standalone version of the FloatingGuide component.
        `;
        newWin.document.body.appendChild(script);
      }
    }, 500);
  } catch (e) {
    console.warn('PolicyBridge: Target site origin is different. Guide injection restricted by browser security.', e);
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
