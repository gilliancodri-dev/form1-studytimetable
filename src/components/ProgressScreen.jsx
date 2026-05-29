import React from 'react';

const TOTAL_TOPICS = 71;
const WEEKS = 4;

const SUBJECT_BREAKDOWN = [
  { name: "Social Studies",    topics: 12, day: "Mon", color: "#E1F5EE", text: "#085041" },
  { name: "Spanish",           topics: 3,  day: "Mon", color: "#FFF8E1", text: "#B84500" },
  { name: "Math",              topics: 7,  day: "Tue", color: "#E6F1FB", text: "#0C447C" },
  { name: "General Science",   topics: 9,  day: "Tue", color: "#F5F5F5", text: "#444441" },
  { name: "Geography",         topics: 7,  day: "Wed", color: "#EDE7F6", text: "#3C3489" },
  { name: "French",            topics: 3,  day: "Wed", color: "#FFF8E1", text: "#633806" },
  { name: "History",           topics: 7,  day: "Thu", color: "#FFEDE8", text: "#712B13" },
  { name: "Eng. Literature",   topics: 4,  day: "Thu", color: "#E8EAF6", text: "#1A237E" },
  { name: "Eng. Language",     topics: 16, day: "Thu", color: "#EAF3DE", text: "#27500A" },
  { name: "I.T.",              topics: 3,  day: "Thu", color: "#FCE4EC", text: "#72243E" },
];

const WEEK_TOTALS = { 1: 20, 2: 17, 3: 19, 4: 15 };

function loadSP() {
  try { const s = localStorage.getItem('sp4_state'); return s ? JSON.parse(s) : null; } catch { return null; }
}

export default function ProgressScreen() {
  const state = loadSP() || { confident: [], studied: {} };
  const confTotal    = state.confident.length;
  const studiedTotal = Object.values(state.studied).filter(Boolean).length;
  const confPct      = Math.round(confTotal / TOTAL_TOPICS * 100);

  // Per-week studied count from storage keys "w|d|id"
  const weekDone = Array.from({ length: WEEKS }, (_, i) => {
    const w = i + 1;
    return Object.keys(state.studied).filter(k => k.startsWith(`${w}|`) && state.studied[k]).length;
  });

  return (
    <div style={s.root}>

      {/* Overall confidence */}
      <div style={s.card}>
        <div style={s.cardTitle}>Overall confidence</div>
        <div style={s.bigPct}>{confPct}%</div>
        <div style={s.bar}><div style={{ ...s.fill, width: `${confPct}%` }} /></div>
        <div style={s.sub}>{confTotal} of {TOTAL_TOPICS} topics marked confident</div>
      </div>

      {/* Studied sessions */}
      <div style={s.card}>
        <div style={s.cardTitle}>Topics studied (all weeks)</div>
        <div style={{ ...s.bigPct, fontSize: "40px", color: "#3949AB" }}>{studiedTotal}</div>
        <div style={s.sub}>individual study check-offs</div>
      </div>

      {/* Week by week */}
      <div style={s.weekCard}>
        <div style={s.weekTitle}>Progress by week</div>
        {Array.from({ length: WEEKS }, (_, i) => {
          const w = i + 1;
          const done = weekDone[i];
          const total = WEEK_TOTALS[w];
          const pct = total ? Math.round(done / total * 100) : 0;
          return (
            <div key={w} style={s.weekRow}>
              <div style={s.weekName}>Week {w}</div>
              <div style={s.weekBar}>
                <div style={{ ...s.weekFill, width: `${pct}%` }} />
              </div>
              <div style={s.weekCount}>{done}/{total}</div>
            </div>
          );
        })}
      </div>

      {/* Subject breakdown */}
      <div style={s.weekCard}>
        <div style={s.weekTitle}>By subject</div>
        {SUBJECT_BREAKDOWN.map(sub => {
          const confident = state.confident.filter(id => id.startsWith(sub.name + "||")).length;
          const pct = Math.round(confident / sub.topics * 100);
          return (
            <div key={sub.name} style={s.subRow}>
              <div style={{ ...s.subPill, background: sub.color, color: sub.text }}>{sub.name}</div>
              <div style={s.weekBar}>
                <div style={{ ...s.weekFill, width: `${pct}%`, background: "#1D9E75" }} />
              </div>
              <div style={s.weekCount}>{confident}/{sub.topics}</div>
            </div>
          );
        })}
      </div>

      {/* Reward milestones */}
      <div style={s.rewardsCard}>
        <div style={s.rewardsTitle}>🏆 Reward milestones</div>
        {[
          ["⭐", 25,  "Treat yourself to 30 min of your favourite show"],
          ["🥇", 50,  "Pick a fun activity for the evening"],
          ["🎉", 75,  "Ask for a special treat or outing"],
          ["🌟", 100, "Plan something big — you totally earned it!"],
        ].map(([ic, pct, rw]) => {
          const achieved = confPct >= pct;
          return (
            <div key={pct} style={{ ...s.rewardRow, opacity: achieved ? 1 : 0.5 }}>
              <div style={s.rewardIcon}>{achieved ? ic : "🔒"}</div>
              <div>
                <div style={s.rewardWhen}>{pct}% confident {achieved ? "✓" : ""}</div>
                <div style={s.rewardWhat}>{rw}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div style={s.tipsCard}>
        <div style={s.tipsTitle}>💡 Study tips</div>
        {[
          "Progress, not perfection — every topic you tick counts.",
          "Drawing diagrams and speaking aloud are your superpowers.",
          "Tell someone what you just studied — it locks it in memory!",
          "One topic at a time. You only need to focus on right now.",
          "Be kind to yourself. You are doing something hard every day.",
        ].map((t, i) => <div key={i} style={s.tipItem}>• {t}</div>)}
      </div>

    </div>
  );
}

const s = {
  root: { padding: "12px 0 80px", fontFamily: "'Nunito', 'Segoe UI', sans-serif" },
  card: { margin: "0 14px 12px", background: "#fff", borderRadius: "14px", padding: "18px", border: "1px solid #E8EAF6", textAlign: "center" },
  cardTitle: { fontSize: "11px", color: "#9E9E9E", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" },
  bigPct: { fontSize: "52px", fontWeight: 900, color: "#5E35B1", lineHeight: 1.1, margin: "6px 0" },
  bar: { height: "10px", borderRadius: "5px", background: "#E8EAF6", overflow: "hidden", margin: "8px 0" },
  fill: { height: "100%", borderRadius: "5px", background: "linear-gradient(90deg, #5E35B1, #3949AB)", transition: "width 0.5s" },
  sub: { fontSize: "12px", color: "#888" },
  weekCard: { margin: "0 14px 10px", background: "#fff", borderRadius: "12px", padding: "13px 14px", border: "1px solid #E8EAF6" },
  weekTitle: { fontSize: "11px", fontWeight: 800, color: "#3949AB", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.04em" },
  weekRow: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" },
  weekName: { fontSize: "12px", fontWeight: 700, color: "#3949AB", minWidth: "55px" },
  weekBar: { flex: 1, height: "8px", borderRadius: "4px", background: "#F3F3F3", overflow: "hidden" },
  weekFill: { height: "100%", borderRadius: "4px", background: "#5E35B1", transition: "width 0.4s" },
  weekCount: { fontSize: "11px", color: "#888", minWidth: "40px", textAlign: "right" },
  subRow: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" },
  subPill: { fontSize: "10px", fontWeight: 800, padding: "2px 7px", borderRadius: "6px", minWidth: "100px", textAlign: "center" },
  rewardsCard: { margin: "0 14px 10px", background: "#FFF8E1", borderRadius: "12px", padding: "15px", border: "1px solid #FFE082" },
  rewardsTitle: { fontSize: "14px", fontWeight: 900, color: "#E65100", marginBottom: "10px" },
  rewardRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "9px" },
  rewardIcon: { fontSize: "22px", width: "32px", textAlign: "center" },
  rewardWhen: { fontSize: "13px", fontWeight: 800, color: "#333" },
  rewardWhat: { fontSize: "11px", color: "#666", fontStyle: "italic" },
  tipsCard: { margin: "0 14px 10px", background: "#EDE7F6", borderRadius: "12px", padding: "14px", border: "1px solid #D1C4E9" },
  tipsTitle: { fontSize: "14px", fontWeight: 800, color: "#4527A0", marginBottom: "8px" },
  tipItem: { fontSize: "12px", color: "#444", lineHeight: 1.8 },
};
