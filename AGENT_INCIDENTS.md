# Agent Incident & Loop Log

This document tracks instances where autonomous agent workflows encountered unproductive loops, tool failures, or verification deadlocks, along with root cause analysis and preventative protocol rules.

---

## Incident 001: Browser Subagent Interaction Timeouts & Tab Navigation Loop

- **Date**: 2026-10-16
- **Component**: Frontend Grammar Reference Module (`GrammarReference.jsx`, `GrammarDirectoryView.jsx`)
- **Task**: Verifying full-text rule search and clear controls on mobile viewport (390×800).

### 1. Problem Description & Symptoms
- During UI verification, the `browser_subagent` was tasked with clicking the search input, typing search queries (`"bengi"`, `"ubuhlungu"`), and capturing screenshot evidence.
- Every call to `click_browser_pixel` failed with:
  ```
  error executing cascade step: CORTEX_STEP_TYPE_CLICK_BROWSER_PIXEL: action timed out
  ```
- The subagent then repeatedly fell back to keyboard navigation (`browser_press_key` with `'Tab'`), page reloading, and mouse movement across multiple subagent invocations without successfully focusing the search `<input>`.
- The user had to intervene with: *"you are not making progress. stop and give me a summary of the problems you are having"*.

### 2. Root Cause Analysis
1. **Windows High-DPI Coordinate Mapping**: In the Windows Chromium subagent environment, OS-level mouse click simulation (`click_browser_pixel`) times out when window resolution, DPR, or display scaling does not correspond 1:1 with virtual viewport pixels.
2. **Scroll Offset Retention**: Reloading hash routes (`http://localhost:5173/#grammar`) in Vite kept the previous vertical scroll offset (scrolled ~12 sections down), placing the sticky header and target search input out of alignment with default keyboard navigation.
3. **Missing Circuit Breaker**: The agent did not promptly recognize that repeated `click_browser_pixel` timeouts represent an environmental tooling constraint, and continued launching repeated browser interaction attempts instead of stopping and reporting.

### 3. Preventative Protocols & Rules for Agents
1. **Two-Timeout Circuit Breaker**: If `click_browser_pixel` or `browser_move_mouse` times out **twice** in a row, the agent must **immediately abort** browser-based automated clicking and not retry the same interaction pattern.
2. **Headless / Node Verification First**: When validating complex business or filter logic (e.g. searching 120 rules), execute direct Node/ESM unit test scripts in `scratch/` first. Confirm the underlying data logic is 100% sound before touching visual browser automation.
3. **Escalate to User Early**: When tool limitations prevent automated interaction (e.g., OS click timeouts), build and deploy cleanly, document the verified logic, and invite the user to perform manual smoke testing in their active browser tab.
