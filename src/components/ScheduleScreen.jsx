import React, { useState } from 'react';
import { COIN_REWARDS } from '../data/wardrobeData';

// ── TIMETABLE ─────────────────────────────────────────────────────────────────
const TIMETABLE = {
  Mon: {
    note: "Home 6:00 pm · Food Technology",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: "Drink a glass of water. Eat breakfast 🍌" },
      { time: "6:00–6:30pm",  label: "Arrival Break",              type: "break",    tip: "Snack, decompress — no studying yet." },
      { time: "6:30–7:00pm",  label: "Homework",                   type: "homework", tip: "30 min — do the most urgent homework first.", method: "30 min priority" },
      { time: "7:00–7:45pm",  label: "Social Studies",             type: "medium",   tip: "Create mind maps and discuss topics with a family member. 45 min.", method: "Mind Maps + Discussion" },
      { time: "7:45–8:00pm",  label: "Brain Break 🐶",             type: "break",    tip: "Stretch, walk your dog, drink water. 15 min." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "Spanish",                    type: "medium",   tip: "Flashcards for vocabulary. Say every word aloud. 45 min.", method: "Flashcards + Speaking" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "No screens after 9:30. Read something light or listen to calm music." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Tue: {
    note: "Home 5:00 pm · Volleyball",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: "Drink water. Eat a healthy breakfast 🥣" },
      { time: "5:00–5:30pm",  label: "Arrival Break",              type: "break",    tip: "Snack and chill — you need it after volleyball!" },
      { time: "5:30–6:00pm",  label: "Homework",                   type: "homework", tip: "30 min.", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "Math",                       type: "hard",     tip: "Practice problems. Talk through each step aloud. 45 min.", method: "Practice + Verbal" },
      { time: "6:45–7:00pm",  label: "Movement Break 🏃",          type: "break",    tip: "Dance, stretch, jump around — move your body! 15 min." },
      { time: "7:00–7:45pm",  label: "Math",                       type: "hard",     tip: "Continue with practice problems. Draw diagrams where helpful. 45 min.", method: "Practice + Diagrams" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",           type: "break",    tip: "Drink water. Have a healthy snack." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "General Science",            type: "hard",     tip: "Draw diagrams and label them from memory. 45 min.", method: "Drawing + Labelling" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "Calm music or light reading." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Wed: {
    note: "Home 5:00 pm · Piano",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: null },
      { time: "5:00–5:30pm",  label: "Arrival Break",              type: "break",    tip: "Eat a snack. Put your phone in another room 📵" },
      { time: "5:30–6:00pm",  label: "Homework",                   type: "homework", tip: "30 min.", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "Geography",                  type: "medium",   tip: "Draw and label maps and diagrams from memory. 45 min.", method: "Drawing + Labelling" },
      { time: "6:45–7:00pm",  label: "Brain Break 🐶",             type: "break",    tip: "Go outside briefly or play with your dog. 15 min." },
      { time: "7:00–7:45pm",  label: "Geography",                  type: "medium",   tip: "Use flashcards for key facts and locations. 45 min.", method: "Flashcards + Key Facts" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",           type: "break",    tip: "Drink water. Rest your eyes." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "French",                     type: "medium",   tip: "Flashcards + say words aloud. Quick vocab quiz. 45 min.", method: "Flashcards + Quiz" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "No screens. Slow breathing or calm music." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Thu: {
    note: "Home 5:00 pm · Choir",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: null },
      { time: "5:00–5:30pm",  label: "Arrival Break",              type: "break",    tip: "Rest your voice after choir. Drink water 💧" },
      { time: "5:30–6:00pm",  label: "Homework",                   type: "homework", tip: "30 min.", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "History",                    type: "medium",   tip: "Create a visual timeline. Tell the story aloud. 45 min.", method: "Timeline + Storytelling" },
      { time: "6:45–7:00pm",  label: "Movement Break 🏃",          type: "break",    tip: "Stretch, dance, jump — wake your brain back up! 15 min." },
      { time: "7:00–7:45pm",  label: "English Literature",         type: "medium",   tip: "Discuss characters and themes with a family member. 45 min.", method: "Discussion + Character Maps" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",           type: "break",    tip: "Drink water. Have a snack." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "English Language / I.T.",    type: "easy",     tip: "Read passages aloud and summarise. For I.T., review key concepts. 45 min.", method: "Reading Aloud + Summary" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "No screens. Calm down before sleep." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Sun: {
    note: "Review & catch-up day",
    slots: [
      { time: "8:00am–12:00pm", label: "Church ⛪",                type: "routine",  tip: null },
      { time: "12:00–1:00pm",   label: "Travel & Rest",             type: "break",    tip: "Rest up before the afternoon." },
      { time: "1:00–2:00pm",    label: "Lunch 🍽️",                type: "routine",  tip: null },
      { time: "2:00–6:00pm",    label: "Free Time",                 type: "relax",    tip: "Enjoy your afternoon — you've earned it! 🌿" },
      { time: "6:00–6:45pm",    label: "Review Session 1",          type: "medium",   tip: "Go back over any topics you found tricky this week.", method: "Review & re-read" },
      { time: "6:45–7:00pm",    label: "Water & Snack 💧",          type: "break",    tip: "Drink water. Have a healthy snack." },
      { time: "7:00–7:45pm",    label: "Review Session 2",          type: "medium",   tip: "Try to recall topics without looking at notes first.", method: "Recall + check" },
      { time: "7:45–8:00pm",    label: "Brain Break 🐶",            type: "break",    tip: "Stretch, walk your dog, drink water. 15 min." },
      { time: "8:00–8:45pm",    label: "Catch-Up / Confident ✓",   type: "easy",     tip: "Mark any topics you now feel confident about — earn bonus coins! 🪙", method: "Confidence check" },
      { time: "8:45–9:15pm",    label: "Wind-Down",                 type: "relax",    tip: "Calm music or light reading. Prep for the week ahead." },
      { time: "9:15–9:30pm",    label: "Bedtime 😴",                type: "routine",  tip: null },
    ]
  },
  Fri: { note: "Rest day 🌙", slots: [] },
  Sat: { note: "Rest day 🌙", slots: [] },
};

// ── FIXED TOPIC SCHEDULE ──────────────────────────────────────────────────────
// Keyed by week (1-4) and day, each entry is an array of {subj, topic, id}
const buildId = (s, t) => `${s}||${t}`;
const T = (subj, topic) => ({ subj, topic, id: buildId(subj, topic) });

const FIXED_SCHEDULE = {
  1: {
    Mon: [
      T("Soc. Studies", "The Presidency"), T("Soc. Studies", "Social Control"), T("Soc. Studies", "Groups"),
      T("Spanish", "Term 3 vocabulary"),
    ],
    Tue: [
      T("Math", "Number Theory"), T("Math", "Computation"),
      T("Science", "Ecology"), T("Science", "Forces"), T("Science", "Lab Rules"),
    ],
    Wed: [
      T("Geography", "Africa"), T("Geography", "Calculating Time Across Meridians"),
      T("French", "Term 3 vocabulary"),
    ],
    Thu: [
      T("History", "Caribbean Festivals"), T("History", "Piracy"),
      T("Eng. Literature", "Twelfth Night"),
      T("Eng. Language", "The main idea"), T("Eng. Language", "The future tense"),
      T("Eng. Language", "Context clues"), T("Eng. Language", "The simple report"),
      T("Eng. Language", "Subject Verb agreement"),
    ],
    Fri: [], Sat: [], Sun: [],
  },
  2: {
    Mon: [
      T("Soc. Studies", "Communication"), T("Soc. Studies", "The National Budget"), T("Soc. Studies", "Money Management"),
      T("Spanish", "Term 2 vocabulary"),
    ],
    Tue: [
      T("Math", "Sets & Venn Diagrams"), T("Math", "Statistics"),
      T("Science", "Energy"), T("Science", "Cells"),
    ],
    Wed: [
      T("Geography", "Locating Places Using Latitudes and Longitudes"), T("Geography", "Calculating Time Across Meridians"),
      T("French", "Term 2 vocabulary"),
    ],
    Thu: [
      T("History", "Cedula of Population"), T("History", "Slavery"),
      T("Eng. Literature", "Romeo and Juliet"),
      T("I.T.", "3D Design"), T("I.T.", "Websites"), T("I.T.", "Code Spark"),
    ],
    Fri: [], Sat: [], Sun: [],
  },
  3: {
    Mon: [
      T("Soc. Studies", "Culture"), T("Soc. Studies", "The Family"), T("Soc. Studies", "Tourism"),
      T("Spanish", "Term 1 vocabulary"),
    ],
    Tue: [
      T("Math", "Algebra"), T("Math", "Measurement"),
      T("Science", "Atoms and Molecules"), T("Science", "Classification of Living Things"),
    ],
    Wed: [
      T("Geography", "Hurricanes"), T("Geography", "The Caribbean"),
      T("French", "Term 1 vocabulary"),
    ],
    Thu: [
      T("History", "The Arena Massacre"), T("History", "The Encomienda System"),
      T("Eng. Literature", "The Lion, the Witch and the Wardrobe"),
      T("Eng. Language", "Singular and Plural Nouns"), T("Eng. Language", "The verb \"to be\""),
      T("Eng. Language", "The Simple Present tense"), T("Eng. Language", "Forms of Sentences"),
      T("Eng. Language", "Run-on sentences"),
    ],
    Fri: [], Sat: [], Sun: [],
  },
  4: {
    Mon: [
      T("Soc. Studies", "Bullying"), T("Soc. Studies", "Community"), T("Soc. Studies", "Leadership"),
    ],
    Tue: [
      T("Math", "Geometry"),
      T("Science", "States of Matter"), T("Science", "Concepts in Science"),
    ],
    Wed: [
      T("Geography", "The Solar System"), T("Geography", "Earth Facts"),
    ],
    Thu: [
      T("History", "The New World"),
      T("Eng. Literature", "Greek Myths"),
      T("Eng. Language", "Sentence Fragments"), T("Eng. Language", "Subjects and Predicates"),
      T("Eng. Language", "Dependent and Independent Clauses"), T("Eng. Language", "Phrases and Clauses"),
      T("Eng. Language", "The verb \"to be\""), T("Eng. Language", "Emailing the teacher"), T("Eng. Language", "Parts of Speech"),
    ],
    Fri: [], Sat: [], Sun: [],
  },
};

// Collect all topics for confident tracking
const ALL_TOPICS = [];
const seen = new Set();
for (const wk of Object.values(FIXED_SCHEDULE)) {
  for (const dayTopics of Object.values(wk)) {
    for (const t of dayTopics) {
      if (!seen.has(t.id)) { seen.add(t.id); ALL_TOPICS.push(t); }
    }
  }
}

// Subject colour map
const SUBJECT_STYLES = {
  "Math":           { color: "#E6F1FB", text: "#0C447C", badge: "#185FA5" },
  "Eng. Language":  { color: "#EAF3DE", text: "#27500A", badge: "#3B6D11" },
  "French":         { color: "#FFF8E1", text: "#633806", badge: "#E65100" },
  "Spanish":        { color: "#FFF8E1", text: "#633806", badge: "#B84500" },
  "Geography":      { color: "#EDE7F6", text: "#3C3489", badge: "#5E35B1" },
  "History":        { color: "#FFEDE8", text: "#712B13", badge: "#993C1D" },
  "Soc. Studies":   { color: "#E1F5EE", text: "#085041", badge: "#0F6E56" },
  "I.T.":           { color: "#FCE4EC", text: "#72243E", badge: "#993556" },
  "Science":        { color: "#F5F5F5", text: "#444441", badge: "#5F5E5A" },
  "Eng. Literature":{ color: "#E8EAF6", text: "#1A237E", badge: "#283593" },
};

const TYPE_STYLES = {
  hard:     { bg: "#FFEDED", border: "#E57373", badge: "#C62828", label: "HARD" },
  medium:   { bg: "#FFF8E1", border: "#FFB300", badge: "#E65100", label: "MED"  },
  easy:     { bg: "#E8F5E9", border: "#66BB6A", badge: "#2E7D32", label: "EASY" },
  homework: { bg: "#EDE7F6", border: "#9575CD", badge: "#4527A0", label: "HW"   },
  break:    { bg: "#F5F5F5", border: "#BDBDBD", badge: "#616161", label: "BRK"  },
  relax:    { bg: "#E0F7FA", border: "#26C6DA", badge: "#00838F", label: "ZZZ"  },
  routine:  { bg: "#FAFAFA", border: "#E0E0E0", badge: "#9E9E9E", label: "—"    },
};

const MOTIVATIONS = [
  "Every topic you tick off brings exams closer! 🌟",
  "Your brain is levelling up. Keep going! 💪",
  "Progress, not perfection. You're doing great! ⭐",
  "One topic at a time. You've totally got this! 🎯",
  "Confident topics mean more time for the tricky ones! 🌿",
  "You're smarter than you were yesterday! 🎨",
];

const ALL_DAYS   = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const REST_DAYS  = new Set(["Fri","Sat"]);
const DAY_LABELS = { Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday", Fri:"Friday", Sat:"Saturday", Sun:"Sunday" };
const WEEKS = 4;

function loadSP() {
  try { const s = localStorage.getItem('sp4_state'); return s ? JSON.parse(s) : null; } catch { return null; }
}
function saveSP(s) { try { localStorage.setItem('sp4_state', JSON.stringify(s)); } catch {} }
function freshSP() { return { confident: [], studied: {} }; }

// Build Sunday catch-up topics for a given week — unconfident topics from Mon–Thu that week
function getSundayTopics(week, confident) {
  const confSet = new Set(confident);
  const weekDays = ["Mon","Tue","Wed","Thu"];
  const topics = [];
  const seenIds = new Set();
  for (const d of weekDays) {
    for (const t of (FIXED_SCHEDULE[week][d] || [])) {
      if (!confSet.has(t.id) && !seenIds.has(t.id)) {
        seenIds.add(t.id);
        topics.push(t);
      }
    }
  }
  return topics;
}

export default function ScheduleScreen({ onStudyChange }) {
  const [state, setState]           = useState(() => loadSP() || freshSP());
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay]   = useState("Mon");
  const [expandedSlot, setExpandedSlot] = useState(null);
  const [activeSection, setActiveSection] = useState("timetable");
  const [motiv] = useState(() => MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)]);

  const persist = (newState) => { saveSP(newState); setState(newState); };
  const isStudied   = (w, d, id) => !!(state.studied[`${w}|${d}|${id}`]);
  const isConfident = (id)        => state.confident.includes(id);

  const setStudied = (w, d, id, val) => {
    const k = `${w}|${d}|${id}`;
    const studied = { ...state.studied };
    if (val) studied[k] = 1; else delete studied[k];
    persist({ ...state, studied });
    if (onStudyChange) onStudyChange(val ? COIN_REWARDS.studied : -COIN_REWARDS.studied);
  };

  const setConfident = (id, val) => {
    const confident = val
      ? [...new Set([...state.confident, id])]
      : state.confident.filter(x => x !== id);
    persist({ ...state, confident });
    if (onStudyChange) onStudyChange(val ? COIN_REWARDS.confident : -COIN_REWARDS.confident);
  };

  const resetAll = () => {
    persist(freshSP());
    setActiveWeek(1); setActiveDay("Mon");
  };

  const isRest = REST_DAYS.has(activeDay);
  const isSunday = activeDay === "Sun";

  const dayTopics = isSunday
    ? getSundayTopics(activeWeek, state.confident)
    : (FIXED_SCHEDULE[activeWeek]?.[activeDay] || []);

  const studiedCnt = dayTopics.filter(t => isStudied(activeWeek, activeDay, t.id)).length;
  const confTotal  = state.confident.length;
  const timetable  = TIMETABLE[activeDay] || { note: "", slots: [] };

  // Week progress: count studied across Mon-Thu (and Sun) for active week
  const studyDays = ["Mon","Tue","Wed","Thu","Sun"];
  const weekStudied = studyDays.reduce((acc, d) => {
    const topics = d === "Sun"
      ? getSundayTopics(activeWeek, state.confident)
      : (FIXED_SCHEDULE[activeWeek]?.[d] || []);
    return acc + topics.filter(t => isStudied(activeWeek, d, t.id)).length;
  }, 0);
  const weekTotal = studyDays.reduce((acc, d) => {
    const topics = d === "Sun"
      ? getSundayTopics(activeWeek, state.confident)
      : (FIXED_SCHEDULE[activeWeek]?.[d] || []);
    return acc + topics.length;
  }, 0);
  const weekPct = weekTotal ? Math.round(weekStudied / weekTotal * 100) : 0;

  return (
    <div style={s.root}>

      <div style={s.titleRow}>
        <div style={s.title}>Alyssa's Study Schedule</div>
        <button style={s.resetBtn} onClick={resetAll}>↺ Reset</button>
      </div>

      <div style={s.statsRow}>
        <div style={s.stat}><div style={s.statVal}>{ALL_TOPICS.length}</div><div style={s.statLbl}>Total</div></div>
        <div style={s.stat}><div style={{ ...s.statVal, color: "#2E7D32" }}>{confTotal}</div><div style={s.statLbl}>Confident</div></div>
        <div style={s.stat}><div style={{ ...s.statVal, color: "#5E35B1" }}>{ALL_TOPICS.length - confTotal}</div><div style={s.statLbl}>To review</div></div>
        <div style={s.stat}><div style={{ ...s.statVal, color: "#E65100" }}>{weekPct}%</div><div style={s.statLbl}>This week</div></div>
      </div>

      <div style={s.progWrap}>
        <div style={s.progInfo}><span>Overall confidence</span><span>{confTotal} / {ALL_TOPICS.length}</span></div>
        <div style={s.progTrack}><div style={{ ...s.progFill, width: `${Math.round(confTotal / ALL_TOPICS.length * 100)}%` }} /></div>
      </div>

      <div style={s.sLabel}>Select Week</div>
      <div style={s.weekRow}>
        {Array.from({ length: WEEKS }, (_, i) => i + 1).map(w => (
          <button key={w} style={{ ...s.weekBtn, ...(activeWeek === w ? s.weekBtnActive : {}) }}
            onClick={() => { setActiveWeek(w); setActiveDay("Mon"); setActiveSection("timetable"); }}>
            Week {w}
          </button>
        ))}
      </div>

      <div style={s.sLabel}>Select Day</div>
      <div style={s.dayRow}>
        {ALL_DAYS.map(d => {
          const isRestDay = REST_DAYS.has(d);
          const topics = d === "Sun"
            ? getSundayTopics(activeWeek, state.confident)
            : (FIXED_SCHEDULE[activeWeek]?.[d] || []);
          const done = topics.filter(t => isStudied(activeWeek, d, t.id)).length;
          const allDone = !isRestDay && topics.length > 0 && done === topics.length;
          return (
            <button key={d}
              onClick={() => { if (!isRestDay) { setActiveDay(d); setExpandedSlot(null); setActiveSection("timetable"); } }}
              style={{ ...s.dayBtn, ...(activeDay === d ? s.dayBtnActive : {}), ...(allDone ? s.dayBtnDone : {}), ...(isRestDay ? s.dayBtnRest : {}), cursor: isRestDay ? "default" : "pointer" }}>
              <div style={s.dayName}>{d}</div>
              {isRestDay
                ? <div style={s.dayRestLabel}>Rest</div>
                : <><div style={s.dayProg}>{done}/{topics.length}</div>{allDone && <span style={s.dayCk}>✓</span>}</>
              }
            </button>
          );
        })}
      </div>

      {isRest && (
        <div style={s.restCard}>
          <div style={s.restIcon}>🌙</div>
          <div style={s.restTitle}>{DAY_LABELS[activeDay]} is a rest day</div>
          <div style={s.restSub}>Take a break — your brain needs it!</div>
        </div>
      )}

      {!isRest && (
        <>
          <div style={s.dayHead}>
            <div>
              <div style={s.dayHeadTitle}>{DAY_LABELS[activeDay]}</div>
              <div style={s.dayHeadNote}>{timetable.note}</div>
            </div>
            <svg width="50" height="50" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" fill="none" stroke="#E8EAF6" strokeWidth="5"/>
              <circle cx="28" cy="28" r="22" fill="none" stroke="#5E35B1"
                strokeWidth="5" strokeLinecap="round"
                strokeDasharray={`${(studiedCnt / Math.max(dayTopics.length, 1)) * 138.2} 138.2`}
                transform="rotate(-90 28 28)" />
              <text x="28" y="33" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5E35B1">
                {studiedCnt}/{dayTopics.length}
              </text>
            </svg>
          </div>

          <div style={s.motiv}>{motiv}</div>

          <div style={s.sectionToggle}>
            <button style={{ ...s.toggleBtn, ...(activeSection === "timetable" ? s.toggleBtnActive : {}) }}
              onClick={() => setActiveSection("timetable")}>🕐 Today's Timetable</button>
            <button style={{ ...s.toggleBtn, ...(activeSection === "topics" ? s.toggleBtnActive : {}) }}
              onClick={() => setActiveSection("topics")}>📚 Topics to Study</button>
          </div>

          {/* TIMETABLE */}
          {activeSection === "timetable" && (
            <div style={s.slots}>
              {timetable.slots.map((slot, i) => {
                const st = TYPE_STYLES[slot.type];
                const isExp = expandedSlot === i;
                return (
                  <div key={i} style={{ ...s.slotCard, background: st.bg, borderLeft: `4px solid ${st.border}` }}>
                    <div style={s.slotRow} onClick={() => setExpandedSlot(isExp ? null : i)}>
                      <div style={{ ...s.badge, background: st.badge }}>{st.label}</div>
                      <div style={s.slotMain}>
                        <div style={s.slotTime}>{slot.time}</div>
                        <div style={s.slotLabel}>{slot.label}</div>
                        {slot.method && <div style={s.slotMethod}>{slot.method}</div>}
                      </div>
                      {slot.tip && <span style={s.arrow}>{isExp ? "▲" : "▼"}</span>}
                    </div>
                    {isExp && slot.tip && <div style={s.tip}>💡 {slot.tip}</div>}
                  </div>
                );
              })}
            </div>
          )}

          {/* TOPICS */}
          {activeSection === "topics" && (
            <>
              <div style={s.legend}>
                <div style={s.legItem}><div style={{ ...s.legDot, background: "#378ADD" }} />Studied today</div>
                <div style={s.legItem}><div style={{ ...s.legDot, background: "#1D9E75" }} />Confident — removes from Sunday review</div>
              </div>

              {isSunday && (
                <div style={s.reviewBanner}>
                  🔄 These are topics from this week that you haven't marked confident yet. Review them and mark anything you now feel sure about!
                </div>
              )}

              {!isSunday && (
                <div style={s.subjectBanner}>
                  📖 Week {activeWeek} · {DAY_LABELS[activeDay]} — {[...new Set(dayTopics.map(t => t.subj))].join(" & ")}
                </div>
              )}

              <div style={s.topicList}>
                {dayTopics.length === 0 && (
                  <div style={s.emptyMsg}>
                    {isSunday ? "🎉 All this week's topics are marked confident. Enjoy your evening!" : "🎉 No topics scheduled — enjoy your day!"}
                  </div>
                )}
                {dayTopics.map(t => {
                  const info      = SUBJECT_STYLES[t.subj] || SUBJECT_STYLES["Science"];
                  const studied   = isStudied(activeWeek, activeDay, t.id);
                  const confident = isConfident(t.id);
                  return (
                    <div key={t.id} style={{
                      ...s.topicCard,
                      background: confident ? "#F1F8E9" : studied ? "#F8F7FF" : "#fff",
                      borderLeft: `4px solid ${confident ? "#66BB6A" : info.badge}`,
                    }}>
                      <div style={s.topicRow}>
                        <div style={s.chkGroup}>
                          <input type="checkbox" checked={studied || confident} disabled={confident}
                            onChange={e => setStudied(activeWeek, activeDay, t.id, e.target.checked)}
                            style={{ accentColor: "#378ADD", width: "15px", height: "15px", cursor: confident ? "default" : "pointer" }} />
                          <input type="checkbox" checked={confident}
                            onChange={e => setConfident(t.id, e.target.checked)}
                            style={{ accentColor: "#1D9E75", width: "15px", height: "15px", cursor: "pointer" }} />
                        </div>
                        <div style={s.topicMain}>
                          <div style={{ ...s.subjectPill, background: info.color, color: info.text }}>{t.subj}</div>
                          <div style={{ ...s.topicLabel, textDecoration: confident ? "line-through" : "none", color: confident ? "#999" : studied ? "#555" : "#1a1a2e" }}>{t.topic}</div>
                        </div>
                        {confident && <div style={s.confBadge}>✓ Confident</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {dayTopics.length > 0 && studiedCnt === dayTopics.length && (
                <div style={s.congrats}>🎉 All topics studied today! Head to your wardrobe to spend your coins! 👗</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

const s = {
  root: { paddingBottom: "80px", fontFamily: "'Nunito', 'Segoe UI', sans-serif" },
  titleRow: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 14px 6px" },
  title: { fontSize: "17px", fontWeight: 900, color: "#1a1a2e", letterSpacing: "-0.3px" },
  resetBtn: { fontSize: "12px", fontWeight: 800, color: "#9E9E9E", background: "transparent", border: "1.5px solid #E8EAF6", borderRadius: "10px", padding: "5px 10px", cursor: "pointer", fontFamily: "'Nunito', sans-serif" },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "7px", padding: "0 14px 8px" },
  stat: { background: "#fff", border: "1px solid #E8EAF6", borderRadius: "10px", padding: "8px 4px", textAlign: "center" },
  statVal: { fontSize: "18px", fontWeight: 900, color: "#1a1a2e" },
  statLbl: { fontSize: "9px", fontWeight: 700, color: "#9E9E9E", textTransform: "uppercase", letterSpacing: "0.03em", marginTop: "1px" },
  progWrap: { margin: "0 14px 8px" },
  progInfo: { display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 700, color: "#9E9E9E", marginBottom: "5px" },
  progTrack: { height: "7px", borderRadius: "4px", background: "#E8EAF6", overflow: "hidden" },
  progFill: { height: "100%", borderRadius: "4px", background: "#1D9E75", transition: "width .3s" },
  sLabel: { fontSize: "10px", fontWeight: 800, color: "#9E9E9E", letterSpacing: "0.05em", textTransform: "uppercase", padding: "4px 14px 3px" },
  weekRow: { display: "flex", gap: "7px", padding: "0 14px 8px", overflowX: "auto" },
  weekBtn: { flex: "0 0 auto", padding: "7px 16px", borderRadius: "10px", border: "1.5px solid #E8EAF6", background: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: 800, color: "#3949AB", fontFamily: "'Nunito', sans-serif" },
  weekBtnActive: { borderColor: "#5E35B1", background: "#EDE7F6", color: "#4527A0" },
  dayRow: { display: "flex", gap: "6px", padding: "0 14px 10px", overflowX: "auto" },
  dayBtn: { flex: "0 0 auto", padding: "7px 9px", borderRadius: "10px", border: "1.5px solid #E8EAF6", background: "#fff", textAlign: "center", minWidth: "46px", position: "relative", fontFamily: "'Nunito', sans-serif" },
  dayBtnActive: { borderColor: "#5E35B1", background: "#EDE7F6" },
  dayBtnDone: { borderColor: "#66BB6A", background: "#F1F8E9" },
  dayBtnRest: { background: "#FAFAFA", borderColor: "#E8EAF6", opacity: 0.6 },
  dayName: { fontSize: "11px", fontWeight: 800, color: "#3949AB" },
  dayProg: { fontSize: "9px", color: "#5E35B1", marginTop: "2px", fontWeight: 700 },
  dayRestLabel: { fontSize: "9px", color: "#BDBDBD", marginTop: "2px", fontWeight: 700 },
  dayCk: { position: "absolute", top: "3px", right: "4px", fontSize: "9px", color: "#388E3C" },
  dayHead: { margin: "0 14px 7px", background: "#fff", borderRadius: "11px", padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #E8EAF6" },
  dayHeadTitle: { fontSize: "16px", fontWeight: 900, color: "#1a1a2e" },
  dayHeadNote: { fontSize: "11px", color: "#666", marginTop: "2px" },
  motiv: { margin: "0 14px 9px", background: "linear-gradient(135deg, #EDE7F6, #E3F2FD)", borderRadius: "9px", padding: "9px 13px", fontSize: "12px", color: "#4527A0", fontWeight: 700, textAlign: "center", border: "1px solid #D1C4E9" },
  sectionToggle: { display: "flex", gap: "8px", padding: "0 14px 10px" },
  toggleBtn: { flex: 1, padding: "9px 6px", borderRadius: "10px", border: "1.5px solid #E8EAF6", background: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: 800, color: "#666", fontFamily: "'Nunito', sans-serif", textAlign: "center" },
  toggleBtnActive: { borderColor: "#5E35B1", background: "#EDE7F6", color: "#4527A0" },
  slots: { padding: "0 14px", display: "flex", flexDirection: "column", gap: "7px" },
  slotCard: { borderRadius: "10px", overflow: "hidden" },
  slotRow: { display: "flex", alignItems: "center", gap: "9px", padding: "10px 11px", cursor: "pointer" },
  badge: { width: "38px", height: "38px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 900, color: "#fff", flexShrink: 0 },
  slotMain: { flex: 1, minWidth: 0 },
  slotTime: { fontSize: "10px", color: "#888", fontWeight: 700 },
  slotLabel: { fontSize: "13px", fontWeight: 800, marginTop: "1px", color: "#1a1a2e" },
  slotMethod: { fontSize: "10px", color: "#5E35B1", marginTop: "1px", fontWeight: 700 },
  arrow: { fontSize: "10px", color: "#bbb" },
  tip: { padding: "7px 12px 10px", fontSize: "12px", color: "#444", background: "rgba(255,255,255,0.6)", borderTop: "1px dashed rgba(0,0,0,0.08)" },
  legend: { display: "flex", gap: "12px", padding: "0 14px 6px", flexWrap: "wrap" },
  legItem: { display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, color: "#666" },
  legDot: { width: "9px", height: "9px", borderRadius: "50%", flexShrink: 0 },
  subjectBanner: { margin: "0 14px 8px", background: "#EDE7F6", border: "1px solid #D1C4E9", borderRadius: "9px", padding: "8px 13px", fontSize: "11px", fontWeight: 800, color: "#4527A0" },
  reviewBanner: { margin: "0 14px 8px", background: "#FFF8E1", border: "1px solid #FFE082", borderRadius: "9px", padding: "8px 13px", fontSize: "11px", fontWeight: 700, color: "#E65100" },
  topicList: { padding: "0 14px", display: "flex", flexDirection: "column", gap: "7px" },
  topicCard: { borderRadius: "10px", border: "1px solid #E8EAF6" },
  topicRow: { display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px" },
  chkGroup: { display: "flex", flexDirection: "column", gap: "5px", flexShrink: 0 },
  topicMain: { flex: 1, minWidth: 0 },
  subjectPill: { fontSize: "10px", fontWeight: 800, padding: "1px 7px", borderRadius: "5px", display: "inline-block", marginBottom: "3px" },
  topicLabel: { fontSize: "13px", fontWeight: 700, lineHeight: 1.4 },
  confBadge: { fontSize: "10px", fontWeight: 800, color: "#388E3C", background: "#C8E6C9", borderRadius: "6px", padding: "2px 7px", whiteSpace: "nowrap", flexShrink: 0 },
  emptyMsg: { background: "linear-gradient(135deg, #C8E6C9, #DCEDC8)", borderRadius: "11px", padding: "16px", fontSize: "13px", fontWeight: 800, color: "#1B5E20", textAlign: "center", border: "1.5px solid #A5D6A7" },
  congrats: { margin: "10px 14px 0", background: "linear-gradient(135deg, #C8E6C9, #DCEDC8)", borderRadius: "11px", padding: "13px 16px", fontSize: "13px", fontWeight: 800, color: "#1B5E20", textAlign: "center", border: "1.5px solid #A5D6A7" },
  restCard: { margin: "14px", background: "#fff", border: "1px solid #E8EAF6", borderRadius: "14px", padding: "32px 20px", textAlign: "center" },
  restIcon: { fontSize: "40px", marginBottom: "10px" },
  restTitle: { fontSize: "16px", fontWeight: 900, color: "#1a1a2e", marginBottom: "6px" },
  restSub: { fontSize: "13px", color: "#666", fontWeight: 600 },
};
