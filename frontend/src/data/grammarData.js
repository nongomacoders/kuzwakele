/**
 * Kuzwakele Grammar Reference - Aggregating Barrel Exporter
 * Re-exports all grammar sections, rules, matrix tables, and practice checkpoints
 * decomposed into modular category modules in ./grammar/*.
 */

import { PAST_TENSES_SECTION, PAST_TENSES_RULES, PAST_CONCORD_MATRIX, PAST_PRACTICE_CHECKPOINTS } from './grammar/pastTenses.js';
import { STATIVE_SECTION, STATIVE_RULES, STATIVE_IRREGULAR_TABLE, STATIVE_PRACTICE_CHECKPOINTS } from './grammar/stative.js';
import { CONJUNCTIONS_SECTION, CONJUNCTIONS_RULES, CONJUNCTION_GOVERNANCE_TABLE, CONJUNCTION_PRACTICE_CHECKPOINTS } from './grammar/conjunctions.js';
import { ASPECT_INFIXES_SECTION, ASPECT_INFIXES_RULES, ASPECT_INFIX_MATRIX, ASPECT_INFIX_CHECKPOINTS } from './grammar/aspectInfixes.js';
import { VERBAL_EXTENSIONS_SECTION, VERBAL_EXTENSIONS_RULES, VERBAL_EXTENSIONS_TABLE, VERBAL_EXTENSIONS_CHECKPOINTS } from './grammar/verbalExtensions.js';
import { COPULATIVES_LOCATIVES_SECTION, COPULATIVES_LOCATIVES_RULES, COPULATIVE_LOCATIVE_TABLE, COPULATIVE_LOCATIVE_CHECKPOINTS } from './grammar/copulativesLocatives.js';
import { DEFICIENT_VERBS_SECTION, DEFICIENT_VERBS_RULES, DEFICIENT_VERBS_TABLE, DEFICIENT_VERBS_CHECKPOINTS } from './grammar/deficientVerbs.js';
import { OBJECT_CONCORDS_SECTION, OBJECT_CONCORDS_RULES, OBJECT_CONCORD_MATRIX, OBJECT_CONCORD_CHECKPOINTS } from './grammar/objectConcords.js';

// Directory Categories
export const GRAMMAR_CATEGORIES = [
  { id: 'all', label: 'All Rules' },
  { id: 'past-tenses', label: 'Past Continuous & Remote' },
  { id: 'stative', label: 'Stative Aspect' },
  { id: 'conjunctions', label: 'Conjunctions & Clauses' },
  { id: 'aspect-infixes', label: 'Time Infixes (-sa-, se-, -ka-)' },
  { id: 'verbal-extensions', label: 'Verbal Extensions (-ela, -isa, -wa)' },
  { id: 'copulatives-locatives', label: 'Copulatives & Locatives (ngu-, y-, e-...-ini)' },
  { id: 'deficient-verbs', label: 'Deficient Verbs (-vele, -cishe, -phinde)' },
  { id: 'object-concords', label: 'Object Concords (-m-, -wa-, -ku-)' }
];

// Assembled Sections
export const GRAMMAR_SECTIONS = [
  PAST_TENSES_SECTION,
  STATIVE_SECTION,
  CONJUNCTIONS_SECTION,
  ASPECT_INFIXES_SECTION,
  VERBAL_EXTENSIONS_SECTION,
  COPULATIVES_LOCATIVES_SECTION,
  DEFICIENT_VERBS_SECTION,
  OBJECT_CONCORDS_SECTION
];

// Assembled Rules
export const GRAMMAR_RULES = [
  ...PAST_TENSES_RULES,
  ...STATIVE_RULES,
  ...CONJUNCTIONS_RULES,
  ...ASPECT_INFIXES_RULES,
  ...VERBAL_EXTENSIONS_RULES,
  ...COPULATIVES_LOCATIVES_RULES,
  ...DEFICIENT_VERBS_RULES,
  ...OBJECT_CONCORDS_RULES
];

// Named Reference Tables & Matrices (100% Backward Compatible Re-exports)
export {
  PAST_CONCORD_MATRIX,
  STATIVE_IRREGULAR_TABLE,
  CONJUNCTION_GOVERNANCE_TABLE,
  ASPECT_INFIX_MATRIX,
  VERBAL_EXTENSIONS_TABLE,
  COPULATIVE_LOCATIVE_TABLE,
  DEFICIENT_VERBS_TABLE,
  OBJECT_CONCORD_MATRIX
};

// Named Practice Checkpoints (100% Backward Compatible Re-exports)
export {
  PAST_PRACTICE_CHECKPOINTS,
  STATIVE_PRACTICE_CHECKPOINTS,
  CONJUNCTION_PRACTICE_CHECKPOINTS,
  ASPECT_INFIX_CHECKPOINTS,
  VERBAL_EXTENSIONS_CHECKPOINTS,
  COPULATIVE_LOCATIVE_CHECKPOINTS,
  DEFICIENT_VERBS_CHECKPOINTS,
  OBJECT_CONCORD_CHECKPOINTS
};
