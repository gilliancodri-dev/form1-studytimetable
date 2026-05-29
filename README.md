# 📚 My Study Schedule App

A personalised exam prep app with a character dress-up wardrobe and coin reward system.

---

## 🚀 How to Deploy to Vercel (Step-by-Step)

### Option A — Deploy from GitHub (Recommended)

1. **Create a GitHub account** at https://github.com if you don't have one.

2. **Create a new repository:**
   - Click the green **"New"** button on GitHub
   - Name it `my-study-schedule`
   - Make it **Public**
   - Click **"Create repository"**

3. **Upload all the files:**
   - Download and unzip the project folder
   - In your new GitHub repo, click **"uploading an existing file"**
   - Drag ALL the files and folders into the upload box (keep the folder structure!)
   - Click **"Commit changes"**

4. **Deploy on Vercel:**
   - Go to https://vercel.com and sign up (you can sign in with GitHub)
   - Click **"Add New Project"**
   - Click **"Import"** next to your `my-study-schedule` repo
   - Leave all settings as default
   - Click **"Deploy"**
   - Wait ~60 seconds — your app is live! 🎉

5. **Get your link:** Vercel gives you a link like `https://my-study-schedule.vercel.app` — share it with anyone!

---

### Option B — Deploy with Vercel CLI

```bash
# 1. Install Node.js from https://nodejs.org (choose LTS version)

# 2. Open Terminal / Command Prompt in the project folder

# 3. Install dependencies
npm install

# 4. Test it locally first
npm start
# Opens at http://localhost:3000

# 5. Install Vercel CLI
npm install -g vercel

# 6. Deploy
vercel

# Follow the prompts — sign up/login, then deploy
# Your app will be live in about 60 seconds!
```

---

## 📁 Project Structure

```
my-study-schedule/
├── public/
│   └── index.html              ← App shell
├── src/
│   ├── App.js                  ← Main app, all state management
│   ├── index.js                ← React entry point
│   ├── data/
│   │   ├── scheduleData.js     ← All study schedule data
│   │   └── wardrobeData.js     ← Wardrobe items, coins, badges
│   └── components/
│       ├── Character.jsx       ← SVG character with full dress-up
│       ├── ScheduleScreen.jsx  ← Daily schedule with coin earning
│       ├── WardrobeScreen.jsx  ← Wardrobe + badges
│       ├── ProgressScreen.jsx  ← Progress tracking
│       └── TipsScreen.jsx      ← Study tips
├── package.json
├── vercel.json
└── README.md
```

---

## ✨ Features

- **📅 Schedule Tab** — View each day's sessions (Mon–Thu), mark them done, earn coins
- **👗 Wardrobe Tab** — Dress up your character with earned coins (hair, tops, bottoms, shoes, accessories)
- **🏅 Badges** — Earn achievement badges as you study
- **📊 Progress Tab** — Track completion across all 4 weeks
- **💡 Tips Tab** — Study methods, dyslexia tips, sleep habits
- **🪙 Coin System** — Hard subjects = 15 coins, Medium = 10, Easy = 5, Homework = 8
- **💾 Auto-saves** — All progress saved to the device automatically

---

## 🎨 Customising

To add more wardrobe items, edit `src/data/wardrobeData.js` and add to the `WARDROBE_ITEMS` arrays.

To change coin rewards, edit `COIN_REWARDS` in `src/data/wardrobeData.js`.

---

## 🛠️ Built With

- React 18
- SVG character art (custom drawn)
- localStorage for persistence
- Deployed on Vercel
