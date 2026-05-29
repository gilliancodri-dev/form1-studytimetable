import React from 'react';

const SUBJECT_TIPS = [
  { subj: "Science", level: "HARD", bg: "#FFEDED", bdr: "#E57373", bc: "#C62828",
    methods: ["Watch 5-min YouTube explainer videos","Draw and label diagrams with coloured pens","Use coloured flashcards","Explain the topic aloud to someone"] },
  { subj: "French", level: "HARD", bg: "#FFEDED", bdr: "#E57373", bc: "#C62828",
    methods: ["Say every word aloud — always","Make picture-flashcards","Sing French vocab songs","Record yourself speaking and play it back"] },
  { subj: "Math", level: "MEDIUM", bg: "#FFF8E1", bdr: "#FFB300", bc: "#E65100",
    methods: ["Practice problems daily","Talk through each step aloud","Draw visual step guides","Check errors by explaining them"] },
  { subj: "Spanish", level: "MEDIUM", bg: "#FFF8E1", bdr: "#FFB300", bc: "#E65100",
    methods: ["Flashcards with pictures","Label items around your home in Spanish","Watch short Spanish video clips","Quiz a friend verbally"] },
  { subj: "History", level: "MEDIUM", bg: "#FFF8E1", bdr: "#FFB300", bc: "#E65100",
    methods: ["Draw visual timelines","Tell events as a story aloud","Create mind maps","Ask yourself 'why did this happen?'"] },
  { subj: "Social Studies", level: "MEDIUM", bg: "#FFF8E1", bdr: "#FFB300", bc: "#E65100",
    methods: ["Draw concept diagrams","Discuss topics with family","Make visual flowcharts","Flashcard key definitions"] },
  { subj: "English Language", level: "EASY", bg: "#E8F5E9", bdr: "#66BB6A", bc: "#2E7D32",
    methods: ["Read passages aloud","Summarise verbally after reading","Record voice answers on your phone","Colour-code text features"] },
  { subj: "English Literature", level: "EASY", bg: "#E8F5E9", bdr: "#66BB6A", bc: "#2E7D32",
    methods: ["Draw character maps","Sketch key scenes from texts","Discuss the plot with someone","Say quotes aloud to memorise"] },
  { subj: "Geography", level: "EASY", bg: "#E8F5E9", bdr: "#66BB6A", bc: "#2E7D32",
    methods: ["Draw and label maps from memory","Sketch geographical diagrams","Watch geography explainer videos","Make labelled flashcard sets"] },
  { subj: "I.T.", level: "EASY", bg: "#E8F5E9", bdr: "#66BB6A", bc: "#2E7D32",
    methods: ["Flashcard sets for key terms","Draw system diagrams","Watch tutorial clips","Practice quiz questions"] },
];

export default function TipsScreen() {
  return (
    <div style={s.root}>
      <div style={s.heading}>Study methods tailored for you 🧠</div>

      {SUBJECT_TIPS.map(sub => (
        <div key={sub.subj} style={{ ...s.card, background: sub.bg, borderLeft: `4px solid ${sub.bdr}` }}>
          <div style={s.cardHead}>
            <span style={s.subjName}>{sub.subj}</span>
            <span style={{ ...s.level, background: sub.bc }}>{sub.level}</span>
          </div>
          {sub.methods.map((m, i) => <div key={i} style={s.item}>• {m}</div>)}
        </div>
      ))}

      <div style={s.special}>
        <div style={{ ...s.specTitle, color: "#3949AB" }}>⚡ Quick 15-min revision ideas</div>
        {["Flip 10 flashcards — say the answer aloud before checking",
          "Record a 2-min voice note explaining a topic",
          "Write or draw everything you remember (mind dump, 10 min)",
          "Ask yourself 3 questions — answer them, then check notes"
        ].map((t, i) => <div key={i} style={s.item}>• {t}</div>)}
      </div>

      <div style={{ ...s.special, background: "#EDE7F6", borderColor: "#9575CD" }}>
        <div style={{ ...s.specTitle, color: "#4527A0" }}>🧠 Dyslexia focus tips</div>
        {["Leave your phone in another room while studying",
          "Use coloured pens and highlighters for all notes",
          "Set a 45-min visible timer — knowing it ends helps focus",
          "Never read long text blocks — turn everything into drawings or bullets",
          "Walk your dog as your movement break — it resets your brain!"
        ].map((t, i) => <div key={i} style={s.item}>• {t}</div>)}
      </div>

      <div style={{ ...s.special, background: "#E0F7FA", borderColor: "#26C6DA" }}>
        <div style={{ ...s.specTitle, color: "#00838F" }}>😴 Healthy sleep habits</div>
        {["No screens after 9:30 pm — blue light disrupts sleep",
          "In bed by 9:45 pm every school night",
          "Wind down with calm music or light reading",
          "Eat a proper breakfast every morning",
          "Drink water throughout the day"
        ].map((t, i) => <div key={i} style={s.item}>• {t}</div>)}
      </div>
    </div>
  );
}

const s = {
  root: { padding: "12px 0 80px" },
  heading: { padding: "0 14px 10px", fontSize: "15px", fontWeight: 900, color: "#3949AB" },
  card: { margin: "0 14px 9px", borderRadius: "10px", padding: "12px 13px" },
  cardHead: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" },
  subjName: { fontSize: "14px", fontWeight: 900, color: "#1a1a2e" },
  level: { fontSize: "10px", fontWeight: 900, color: "#fff", padding: "2px 8px", borderRadius: "10px" },
  item: { fontSize: "12px", color: "#444", lineHeight: 1.8, paddingLeft: "3px" },
  special: { margin: "0 14px 9px", background: "#F3F4FD", border: "1.5px solid #C5CAE9", borderRadius: "10px", padding: "13px" },
  specTitle: { fontSize: "13px", fontWeight: 900, marginBottom: "8px" },
};
