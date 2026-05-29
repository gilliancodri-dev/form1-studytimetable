export const WEEKS = [
  { label: "Week 1", dates: { Mon: "2 Jun", Tue: "3 Jun", Wed: "4 Jun", Thu: "5 Jun" } },
  { label: "Week 2", dates: { Mon: "9 Jun", Tue: "10 Jun", Wed: "11 Jun", Thu: "12 Jun" } },
  { label: "Week 3", dates: { Mon: "16 Jun", Tue: "17 Jun", Wed: "18 Jun", Thu: "19 Jun" } },
  { label: "Week 4", dates: { Mon: "23 Jun", Tue: "24 Jun", Wed: "25 Jun", Thu: "26 Jun" } },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu"];
export const DAY_LABELS = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday" };

export const SCHEDULE = {
  Mon: {
    note: "Home 6:00 pm · Food Technology",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: "Drink a glass of water. Eat breakfast 🍌" },
      { time: "6:00–6:30pm",  label: "Arrival Break",              type: "break",    tip: "Snack, decompress — no studying yet." },
      { time: "6:30–7:00pm",  label: "Homework",                   type: "homework", tip: "30 min — do the most urgent homework first.", subject: "Homework", method: "30 min priority" },
      { time: "7:00–7:45pm",  label: "Science",                    type: "hard",     tip: "Watch a short explainer video, then draw a diagram. 45 min.", subject: "Science", method: "Video + Drawing" },
      { time: "7:45–8:00pm",  label: "Brain Break 🐶",             type: "break",    tip: "Stretch, walk your dog, drink water. 15 min." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "French",                     type: "hard",     tip: "Flashcards for vocabulary. Say every word aloud. 45 min.", subject: "French", method: "Flashcards + Speaking" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "No screens after 9:30. Read something light or listen to calm music." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Tue: {
    note: "Home 5:00 pm · Volleyball",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: "Drink water. Eat a healthy breakfast 🥣" },
      { time: "5:00–5:30pm",  label: "Arrival Break",              type: "break",    tip: "Snack and chill — you need it after volleyball!" },
      { time: "5:30–6:00pm",  label: "Homework",                   type: "homework", tip: "30 min.", subject: "Homework", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "Math",                       type: "medium",   tip: "Practice problems. Talk through each step aloud. 45 min.", subject: "Math", method: "Practice + Verbal" },
      { time: "6:45–7:00pm",  label: "Movement Break 🏃",          type: "break",    tip: "Dance, stretch, jump around — move your body! 15 min." },
      { time: "7:00–7:45pm",  label: "Spanish",                    type: "medium",   tip: "Flashcards with pictures. Say phrases aloud. 45 min.", subject: "Spanish", method: "Flashcards + Speaking" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",           type: "break",    tip: "Drink water. Have a healthy snack." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "Geography",                  type: "easy",     tip: "Draw and label maps from memory. 45 min.", subject: "Geography", method: "Drawing Maps" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "Calm music or light reading." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Wed: {
    note: "Home 5:00 pm · Piano",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: null },
      { time: "5:00–5:30pm",  label: "Arrival Break",              type: "break",    tip: "Eat a snack. Put your phone in another room 📵" },
      { time: "5:30–6:00pm",  label: "Homework",                   type: "homework", tip: "30 min.", subject: "Homework", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "Science",                    type: "hard",     tip: "Draw diagrams using coloured pens. Watch short videos. 45 min.", subject: "Science", method: "Drawing + Video" },
      { time: "6:45–7:00pm",  label: "Brain Break 🐶",             type: "break",    tip: "Go outside briefly or play with your dog. 15 min." },
      { time: "7:00–7:45pm",  label: "History",                    type: "medium",   tip: "Create a visual timeline. Tell the story aloud. 45 min.", subject: "History", method: "Timeline + Storytelling" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",           type: "break",    tip: "Drink water. Rest your eyes." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                 type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "French",                     type: "hard",     tip: "Flashcards + say words aloud. Quick vocab quiz. 45 min.", subject: "French", method: "Flashcards + Quiz" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                  type: "relax",    tip: "No screens. Slow breathing or calm music." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                 type: "routine",  tip: null },
    ]
  },
  Thu: {
    note: "Home 5:00 pm · Choir",
    slots: [
      { time: "6:00–6:30am",  label: "Wake Up & Morning Routine", type: "routine",  tip: null },
      { time: "5:00–5:30pm",  label: "Arrival Break",             type: "break",    tip: "Rest your voice after choir. Drink water 💧" },
      { time: "5:30–6:00pm",  label: "Homework",                  type: "homework", tip: "30 min.", subject: "Homework", method: "30 min priority" },
      { time: "6:00–6:45pm",  label: "English Language",          type: "easy",     tip: "Read a passage aloud, then summarise it verbally. 45 min.", subject: "English Language", method: "Reading Aloud + Summary" },
      { time: "6:45–7:00pm",  label: "Movement Break 🏃",         type: "break",    tip: "Stretch, dance, jump — wake your brain back up! 15 min." },
      { time: "7:00–7:45pm",  label: "English Literature",        type: "easy",     tip: "Draw character maps. Discuss plot with a family member. 45 min.", subject: "English Literature", method: "Character Maps + Discussion" },
      { time: "7:45–8:00pm",  label: "Water & Snack 💧",          type: "break",    tip: "Drink water. Have a snack." },
      { time: "8:00–8:30pm",  label: "Dinner 🍽️",                type: "routine",  tip: null },
      { time: "8:30–9:15pm",  label: "Social Studies + I.T.",     type: "medium",   tip: "Alternate every 20 min. Use diagrams for Social Studies. 45 min.", subject: "Social Studies + I.T.", method: "Diagrams + Flashcards" },
      { time: "9:15–9:45pm",  label: "Wind-Down",                 type: "relax",    tip: "No screens. Calm down before sleep." },
      { time: "9:45–10:00pm", label: "Bedtime 😴",                type: "routine",  tip: null },
    ]
  }
};

export const WEEK4_NOTES = {
  Mon: "Exam week — Science review only. Light revision.",
  Tue: "Exam week — French review only. Light revision.",
  Wed: "Exam week — Math + Spanish, 15 min each. No new content.",
  Thu: "Exam eve — Pack your bag. Sleep at 9:30 pm. You are ready! ⭐",
};

export const TYPE_STYLES = {
  hard:     { bg: "#FFEDED", border: "#E57373", badge: "#C62828", label: "HARD" },
  medium:   { bg: "#FFF8E1", border: "#FFB300", badge: "#E65100", label: "MED"  },
  easy:     { bg: "#E8F5E9", border: "#66BB6A", badge: "#2E7D32", label: "EASY" },
  homework: { bg: "#EDE7F6", border: "#9575CD", badge: "#4527A0", label: "HW"   },
  break:    { bg: "#F5F5F5", border: "#BDBDBD", badge: "#616161", label: "BRK"  },
  relax:    { bg: "#E0F7FA", border: "#26C6DA", badge: "#00838F", label: "ZZZ"  },
  routine:  { bg: "#FAFAFA", border: "#E0E0E0", badge: "#9E9E9E", label: "—"    },
};

export const MOTIVATIONS = [
  "Every session counts. You're building something great! 🌟",
  "Your brain is working hard. Be proud! 💪",
  "Progress, not perfection. Amazing work! ⭐",
  "One subject at a time. You've got this! 🎯",
  "Rest is part of studying. Take those breaks! 🌿",
  "Your drawing & speaking skills are superpowers! 🎨",
];
