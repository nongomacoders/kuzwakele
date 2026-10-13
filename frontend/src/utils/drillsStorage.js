const STORAGE_KEY = 'kuzwakele_flagged_drills';

/**
 * Get all flagged drill sentences from localStorage
 * @returns {Array} Array of flagged drill objects
 */
export function getFlaggedDrills() {
  if (typeof window === 'undefined' || !window.localStorage) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to parse flagged drills from localStorage:', err);
    return [];
  }
}

/**
 * Check if a specific sentence ID is currently flagged
 * @param {string} id - Unique identifier for the sentence
 * @returns {boolean}
 */
export function isDrillFlagged(id) {
  if (!id) return false;
  const drills = getFlaggedDrills();
  return drills.some((d) => d.id === id);
}

/**
 * Toggle flag status for a sentence item. Adds if missing, removes if present.
 * Dispatches 'drills-updated' event on window.
 * @param {Object} item - Sentence metadata
 * @returns {boolean} True if now flagged, false if unflagged
 */
export function toggleDrillFlag(item) {
  if (!item || !item.id) return false;
  if (typeof window === 'undefined' || !window.localStorage) return false;

  try {
    const drills = getFlaggedDrills();
    const existingIndex = drills.findIndex((d) => d.id === item.id);
    let isFlaggedNow = false;

    if (existingIndex >= 0) {
      drills.splice(existingIndex, 1);
      isFlaggedNow = false;
    } else {
      const newItem = {
        id: item.id,
        scenarioId: item.scenarioId || 'custom',
        scenarioTitle: item.scenarioTitle || 'Scenario',
        turnNumber: item.turnNumber || 1,
        speaker: item.speaker || 'patient', // 'patient' | 'doctor'
        isizuluText: item.isizuluText || '',
        englishText: item.englishText || '',
        phoneticCue: item.phoneticCue || '',
        grammarBreakdown: Array.isArray(item.grammarBreakdown) ? item.grammarBreakdown : [],
        flaggedAt: new Date().toISOString()
      };
      drills.unshift(newItem);
      isFlaggedNow = true;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drills));
    window.dispatchEvent(new Event('drills-updated'));
    return isFlaggedNow;
  } catch (err) {
    console.error('Failed to toggle drill flag in localStorage:', err);
    return false;
  }
}

/**
 * Remove a flagged drill by ID
 * @param {string} id
 */
export function removeDrill(id) {
  if (!id || typeof window === 'undefined' || !window.localStorage) return;
  try {
    const drills = getFlaggedDrills();
    const updated = drills.filter((d) => d.id !== id);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('drills-updated'));
  } catch (err) {
    console.error('Failed to remove drill from localStorage:', err);
  }
}

/**
 * Clear all flagged drills
 */
export function clearAllDrills() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('drills-updated'));
  } catch (err) {
    console.error('Failed to clear drills:', err);
  }
}
