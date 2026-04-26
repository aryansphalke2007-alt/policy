(function() {
    // Prevent multiple injections
    if (document.getElementById('pb-guide-root')) return;

    // --- DOM Setup ---
    const root = document.createElement('div');
    root.id = 'pb-guide-root';
    document.body.appendChild(root);

    const tab = document.createElement('div');
    tab.className = 'pb-guide-tab';
    tab.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        PolicyBridge Guide
    `;

    const panel = document.createElement('div');
    panel.className = 'pb-guide-panel';
    panel.innerHTML = `
        <div class="pb-guide-header" id="pb-guide-drag-handle">
            <div class="pb-guide-title">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                PolicyBridge Guide
            </div>
            <div class="pb-guide-controls">
                <button class="pb-guide-btn" id="pb-guide-minimize">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <button class="pb-guide-btn" id="pb-guide-close">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
        <div class="pb-guide-content" id="pb-guide-content-area">
            <div class="pb-guide-loading">
                <div class="pb-guide-spinner"></div>
                Analyzing policy page...
            </div>
        </div>
    `;

    root.appendChild(tab);
    root.appendChild(panel);

    // --- State & Variables ---
    let isPanelOpen = false;
    let isMinimized = false;

    // --- Core Logic: Analysis ---
    function analyzePage() {
        const contentArea = document.getElementById('pb-guide-content-area');
        const text = document.body.innerText.toLowerCase();
        
        // Simulating a delay for "professional analysis" look
        setTimeout(() => {
            const analysis = performHeuristicAnalysis(text);
            renderAnalysis(analysis, contentArea);
        }, 800);
    }

    function performHeuristicAnalysis(text) {
        const results = {
            purpose: "Information page about a government initiative.",
            actions: [],
            eligibility: "Check for specific income or area-based rules in the text.",
            documents: [],
            isApplication: false
        };

        // Keywords detection
        const hasApply = text.includes('apply online') || text.includes('register') || text.includes('form') || text.includes('submission');
        const hasEligibility = text.includes('eligibility') || text.includes('criteria') || text.includes('eligible');
        const hasDocs = text.includes('document') || text.includes('certificate') || text.includes('proof') || text.includes('aadhaar');
        const hasScheme = text.includes('scheme') || text.includes('initiative') || text.includes('yojana');
        const hasPortal = text.includes('portal') || text.includes('official website');

        if (hasApply) {
            results.isApplication = true;
            results.purpose = "This appears to be an application or registration portal.";
            results.actions.push("Look for a button labeled 'Register' or 'Apply Now' to start.");
        } else if (hasScheme) {
            results.purpose = "Historical or informational page regarding a specific government scheme.";
        }

        if (hasEligibility) {
            results.actions.push("Review Section: 'Eligibility Criteria' before proceeding.");
        }

        if (hasDocs) {
            results.documents.push("Aadhaar Card (most common)");
            results.documents.push("Income/Caste Certificate (if required)");
            results.documents.push("Bank Account details (for direct benefit)");
            results.actions.push("Keep scanned copies of your ID proofs ready.");
        } else {
            results.documents.push("Standard Government ID (Aadhaar/Voter ID)");
        }

        if (hasPortal) {
            results.actions.push("Verify the URL ends with .gov.in or .nic.in for safety.");
        }

        return results;
    }

    function renderAnalysis(data, container) {
        let actionsHtml = data.actions.map(a => `<li>${a}</li>`).join('');
        let docsHtml = data.documents.map(d => `<li>${d}</li>`).join('');

        container.innerHTML = `
            <div class="pb-guide-section">
                <div class="pb-guide-section-title">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" class="pb-icon-blue"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    What this page is about
                </div>
                <div class="pb-guide-section-content">
                    ${data.purpose}
                    ${data.isApplication ? '<div class="pb-guide-badge">Application Page</div>' : ''}
                </div>
            </div>

            <div class="pb-guide-section">
                <div class="pb-guide-section-title">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" class="pb-icon-green"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    What to check first
                </div>
                <div class="pb-guide-section-content">
                    <ul style="padding-left: 18px; margin: 0;">
                        ${actionsHtml || '<li>Read the general overview of the scheme.</li>'}
                    </ul>
                </div>
            </div>

            <div class="pb-guide-section">
                <div class="pb-guide-section-title">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" class="pb-icon-orange"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Documents to keep ready
                </div>
                <div class="pb-guide-section-content">
                    <ul style="padding-left: 18px; margin: 0;">
                        ${docsHtml}
                    </ul>
                </div>
            </div>

            <div style="text-align: center; font-size: 11px; margin-top: 10px; opacity: 0.6;">
                Need more help? Visit PolicyBridge.com
            </div>
        `;
    }

    // --- Interaction Logic ---
    tab.onclick = function() {
        tab.style.display = 'none';
        panel.style.display = 'flex';
        isPanelOpen = true;
        analyzePage();
    };

    document.getElementById('pb-guide-close').onclick = function(e) {
        e.stopPropagation();
        tab.style.display = 'flex';
        panel.style.display = 'none';
        isPanelOpen = false;
    };

    document.getElementById('pb-guide-minimize').onclick = function(e) {
        e.stopPropagation();
        panel.style.height = isMinimized ? '500px' : '48px';
        isMinimized = !isMinimized;
    };

    // --- Drag Logic ---
    const dragHandle = document.getElementById('pb-guide-drag-handle');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    dragHandle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        panel.style.top = (panel.offsetTop - pos2) + "px";
        panel.style.left = (panel.offsetLeft - pos1) + "px";
        // Reset absolute positioning if moved
        panel.style.bottom = 'auto';
        panel.style.right = 'auto';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

})();
