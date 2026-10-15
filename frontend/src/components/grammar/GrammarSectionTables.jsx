import React from 'react';
import {
  PAST_CONCORD_MATRIX,
  STATIVE_IRREGULAR_TABLE,
  CONJUNCTION_GOVERNANCE_TABLE,
  ASPECT_INFIX_MATRIX,
  VERBAL_EXTENSIONS_TABLE,
  COPULATIVE_LOCATIVE_TABLE,
  DEFICIENT_VERBS_TABLE,
  OBJECT_CONCORD_MATRIX,
  QUALIFICATIVE_MATRIX,
  PRONOUNS_MATRIX,
  DEMONSTRATIVES_MATRIX,
  POTENTIAL_MOOD_MATRIX,
  IMPERATIVES_MATRIX
} from '../../data/grammarData';




export function PastConcordTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Person / Class</th>
          <th className="py-2.5 px-3 text-indigo-400">Immediate Cont (be-)</th>
          <th className="py-2.5 px-3 text-purple-400">Remote Simple (-a-)</th>
          <th className="py-2.5 px-3 text-cyan-400">Remote Cont (Habitual)</th>
          <th className="py-2.5 px-3">Form Comparison</th>
          <th className="py-2.5 px-3">Clinical Utility</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {PAST_CONCORD_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-mono font-bold text-indigo-300 whitespace-nowrap">{row.person}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-indigo-300 bg-indigo-950/80 border border-indigo-900/60 px-2 py-0.5 rounded">
                {row.immediateCont}
              </span>
            </td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-900/60 px-2 py-0.5 rounded">
                {row.remoteSimple}
              </span>
            </td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-900/60 px-2 py-0.5 rounded">
                {row.remoteCont}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.example}</td>
            <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap text-[11px]">{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function StativeMutationTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Root Verb</th>
          <th className="py-2.5 px-3">Process Meaning</th>
          <th className="py-2.5 px-3 text-emerald-400">Present (+) Stative</th>
          <th className="py-2.5 px-3 text-rose-400">Present (-) Stative</th>
          <th className="py-2.5 px-3">Mutation Pattern</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {STATIVE_IRREGULAR_TABLE.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-mono font-bold text-teal-300 whitespace-nowrap">{row.root}</td>
            <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">{row.meaning}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-900/60 px-2 py-0.5 rounded">
                {row.positive}
              </span>
            </td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-rose-300 bg-rose-950/80 border border-rose-900/60 px-2 py-0.5 rounded">
                {row.negative}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">{row.pattern}</td>
            <td className="py-2.5 px-3 text-slate-300 whitespace-nowrap text-[11px]">{row.clinicalUse}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ConjunctionGovernanceTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Conjunction</th>
          <th className="py-2.5 px-3">Grammatical Role</th>
          <th className="py-2.5 px-3 text-amber-400">Triggered Mood</th>
          <th className="py-2.5 px-3">Verb Mutation</th>
          <th className="py-2.5 px-3 text-rose-400">Negative Formation</th>
          <th className="py-2.5 px-3">Clinical Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {CONJUNCTION_GOVERNANCE_TABLE.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-mono font-bold text-amber-300 whitespace-nowrap">{row.conjunction}</td>
            <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">{row.meaning}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className={`font-mono font-bold px-2 py-0.5 rounded border text-[11px] ${
                row.triggeredMood === 'Subjunctive'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/70'
                  : row.triggeredMood === 'Participial'
                  ? 'bg-blue-950/80 text-blue-300 border-blue-800/70'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700/70'
              }`}>
                {row.triggeredMood}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-amber-200/90 whitespace-nowrap">{row.mutationRule}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-rose-300 whitespace-nowrap">{row.negativeFormation}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.clinicalExample}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AspectInfixTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Infix Morpheme</th>
          <th className="py-2.5 px-3">Temporal Concept</th>
          <th className="py-2.5 px-3 text-emerald-400">Affirmative Formula</th>
          <th className="py-2.5 px-3 text-rose-400">Negative Formula</th>
          <th className="py-2.5 px-3">Clinical Trajectory Utility</th>
          <th className="py-2.5 px-3">Bedside Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {ASPECT_INFIX_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-mono font-bold text-emerald-300 whitespace-nowrap">
              <span className="bg-emerald-950/80 border border-emerald-900/60 px-2 py-0.5 rounded">{row.infix}</span>
            </td>
            <td className="py-2.5 px-3 text-slate-300 font-bold whitespace-nowrap">{row.temporalConcept}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-300 whitespace-nowrap">{row.positiveFormula}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-rose-300 whitespace-nowrap">{row.negativeFormula}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] whitespace-nowrap">{row.clinicalFunction}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.clinicalExample}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function VerbalExtensionsTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Extension</th>
          <th className="py-2.5 px-3">Suffix Morpheme</th>
          <th className="py-2.5 px-3 text-fuchsia-400">Meaning & Function</th>
          <th className="py-2.5 px-3 text-purple-300">Phonological Sound Shift</th>
          <th className="py-2.5 px-3">Clinical Application</th>
          <th className="py-2.5 px-3">Bedside Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {VERBAL_EXTENSIONS_TABLE.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-fuchsia-300 whitespace-nowrap">{row.extension}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-fuchsia-300 bg-fuchsia-950/80 border border-fuchsia-900/60 px-2 py-0.5 rounded">
                {row.morpheme}
              </span>
            </td>
            <td className="py-2.5 px-3 text-slate-300 whitespace-nowrap">{row.meaning}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-purple-300 whitespace-nowrap">{row.soundShift}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] whitespace-nowrap">{row.clinicalUtility}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CopulativesLocativesTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3">Noun Class</th>
          <th className="py-2.5 px-3">Example Noun</th>
          <th className="py-2.5 px-3 text-rose-400">Positive Copulative ("is")</th>
          <th className="py-2.5 px-3 text-red-400">Negative Copulative ("is not")</th>
          <th className="py-2.5 px-3 text-orange-300">Locative Mutation (at/in)</th>
          <th className="py-2.5 px-3">Clinical Utility</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {COPULATIVE_LOCATIVE_TABLE.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-rose-300 whitespace-nowrap">{row.nounClass}</td>
            <td className="py-2.5 px-3 font-mono text-slate-400 whitespace-nowrap">{row.nounExample}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-rose-300 bg-rose-950/80 border border-rose-900/60 px-2 py-0.5 rounded">
                {row.positiveCopulative}
              </span>
            </td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-red-300 bg-red-950/80 border border-red-900/60 px-2 py-0.5 rounded">
                {row.negativeCopulative}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-orange-200 whitespace-nowrap">{row.locativeForm}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] whitespace-nowrap">{row.clinicalUtility}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DeficientVerbsTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-sky-400">Auxiliary Stem</th>
          <th className="py-2.5 px-3">Core Meaning</th>
          <th className="py-2.5 px-3 text-cyan-400">Governed Mood</th>
          <th className="py-2.5 px-3">Formula Pattern</th>
          <th className="py-2.5 px-3">Clinical Application</th>
          <th className="py-2.5 px-3">Bedside Example</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {DEFICIENT_VERBS_TABLE.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono font-bold text-sky-300 bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 rounded-md text-[11px]">
                {row.stem}
              </span>
            </td>
            <td className="py-2.5 px-3 font-medium text-slate-200 whitespace-nowrap">{row.meaning}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-900/50 px-2 py-0.5 rounded">
                {row.governedMood}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">{row.formula}</td>
            <td className="py-2.5 px-3 text-slate-300 text-[11px] min-w-[180px]">{row.clinicalUtility}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-sky-200 whitespace-nowrap">{row.example}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ObjectConcordsTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-blue-400">Noun Class / Person</th>
          <th className="py-2.5 px-3 text-cyan-400">SC vs. OC</th>
          <th className="py-2.5 px-3">Noun Trigger</th>
          <th className="py-2.5 px-3">Formula Placement</th>
          <th className="py-2.5 px-3 text-blue-300">Clinical Bedside Example</th>
          <th className="py-2.5 px-3">Function</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {OBJECT_CONCORD_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-blue-300 whitespace-nowrap">{row.personClass}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono text-[11px] text-slate-400 mr-1.5">{row.subjectConcord}</span>
              &rarr;
              <span className="font-mono font-bold text-blue-300 bg-blue-950/80 border border-blue-800/80 px-2 py-0.5 rounded ml-1.5">
                {row.objectConcord}
              </span>
            </td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.nounTrigger}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">{row.placementFormula}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-blue-200 whitespace-nowrap">{row.clinicalExample}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[180px]">{row.functionDesc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function QualificativesTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-orange-400">Noun Class</th>
          <th className="py-2.5 px-3">Noun Example</th>
          <th className="py-2.5 px-3 text-amber-300">True Adjective (Attr / Pred)</th>
          <th className="py-2.5 px-3 text-orange-300">Relative (Attr / Pred)</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {QUALIFICATIVE_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-orange-300 whitespace-nowrap">{row.nounClass}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.nounExample}</td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono text-[11px] text-amber-300 font-semibold">{row.trueAdjAttributive}</span>
              <span className="text-slate-500 mx-1">/</span>
              <span className="font-mono text-[11px] text-amber-400/90">{row.trueAdjPredicative}</span>
            </td>
            <td className="py-2.5 px-3 whitespace-nowrap">
              <span className="font-mono text-[11px] text-orange-300 font-semibold">{row.relativeAttributive}</span>
              <span className="text-slate-500 mx-1">/</span>
              <span className="font-mono text-[11px] text-orange-400/90">{row.relativePredicative}</span>
            </td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[190px]">{row.clinicalApplication}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PronounsTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-cyan-400">Class / Person</th>
          <th className="py-2.5 px-3 text-slate-200">Absolute</th>
          <th className="py-2.5 px-3 text-cyan-300">na- (with)</th>
          <th className="py-2.5 px-3 text-cyan-300">nga- (about)</th>
          <th className="py-2.5 px-3 text-cyan-300">ku- (locative)</th>
          <th className="py-2.5 px-3 text-emerald-300">-onke (all/whole)</th>
          <th className="py-2.5 px-3 text-amber-300">-edwa/-odwa (alone)</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {PRONOUNS_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-cyan-300 whitespace-nowrap">{row.nounClass}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-200 whitespace-nowrap">{row.absolutePronoun}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-cyan-300 whitespace-nowrap">{row.associativeNa}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-cyan-300 whitespace-nowrap">{row.instrumentalNga}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-cyan-300 whitespace-nowrap">{row.locativeKu}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-300 whitespace-nowrap">{row.quantitativeAll}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-amber-300 whitespace-nowrap">{row.quantitativeAlone}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[180px]">{row.clinicalApplication}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DemonstrativesTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-amber-400">Noun Class</th>
          <th className="py-2.5 px-3 text-emerald-300">Pos 1: This</th>
          <th className="py-2.5 px-3 text-amber-300">Pos 2: That (Ref)</th>
          <th className="py-2.5 px-3 text-cyan-300">Pos 3: That (Far)</th>
          <th className="py-2.5 px-3 text-slate-200">Elided Example</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {DEMONSTRATIVES_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-amber-300 whitespace-nowrap">{row.nounClass}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-300 whitespace-nowrap">{row.pos1This}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-amber-300 whitespace-nowrap">{row.pos2ThatReferenced}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-cyan-300 whitespace-nowrap">{row.pos3ThatFar}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.nounExampleElided}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[180px]">{row.clinicalApplication}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PotentialMoodTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-emerald-400">Class / Person</th>
          <th className="py-2.5 px-3 text-emerald-300">Positive Potential (-nga-)</th>
          <th className="py-2.5 px-3 text-teal-300">Negative Potential (-nge-...-e)</th>
          <th className="py-2.5 px-3 text-rose-300">Absolute Negative (angeke)</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {POTENTIAL_MOOD_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-emerald-300 whitespace-nowrap">{row.nounClass}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-300 whitespace-nowrap">{row.positivePotential}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-teal-300 whitespace-nowrap">{row.negativePotential}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-rose-300 whitespace-nowrap">{row.absoluteNegativeAngeke}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[180px]">{row.clinicalApplication}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ImperativesTable() {
  return (
    <table className="w-full text-left border-collapse text-xs">
      <thead>
        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
          <th className="py-2.5 px-3 text-red-400">Verb Category</th>
          <th className="py-2.5 px-3 text-slate-200">Base Verb</th>
          <th className="py-2.5 px-3 text-red-300">Singular Command</th>
          <th className="py-2.5 px-3 text-amber-300">Plural Command (-ni)</th>
          <th className="py-2.5 px-3">Clinical Application</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300">
        {IMPERATIVES_MATRIX.map((row, idx) => (
          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
            <td className="py-2.5 px-3 font-bold text-red-300 whitespace-nowrap">{row.verbType}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">{row.baseVerb}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-red-300 whitespace-nowrap">{row.singularCommand}</td>
            <td className="py-2.5 px-3 font-mono text-[11px] text-amber-300 whitespace-nowrap">{row.pluralCommand}</td>
            <td className="py-2.5 px-3 text-slate-400 text-[11px] min-w-[180px]">{row.clinicalApplication}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}





