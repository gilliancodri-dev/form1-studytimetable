import React, { useState, useEffect } from 'react';
import ScheduleScreen from './components/ScheduleScreen';
import WardrobeScreen from './components/WardrobeScreen';
import ProgressScreen from './components/ProgressScreen';
import TipsScreen from './components/TipsScreen';
import Character from './components/Character';
import { WARDROBE_ITEMS, COIN_REWARDS } from './data/wardrobeData';

const DEFAULT_OUTFIT   = { hair: "h1", top: "t1", bottom: "b1", shoes: "s1", accessory: "a1" };
const DEFAULT_UNLOCKED = ["h1", "t1", "b1", "s1", "a1"];
const DEFAULT_SKIN     = "#8D5524";

function loadState(key, fallback) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

export default function App() {
  const [tab, setTab]                       = useState("schedule");
  const [coins, setCoins]                   = useState(() => loadState("sa_coins", 0));
  const [outfit, setOutfit]                 = useState(() => loadState("sa_outfit", DEFAULT_OUTFIT));
  const [unlockedItems, setUnlockedItems]   = useState(() => loadState("sa_unlocked", DEFAULT_UNLOCKED));
  const [skinTone, setSkinTone]             = useState(() => loadState("sa_skin", DEFAULT_SKIN));
  const [fullDaysCompleted, setFullDaysCompleted] = useState(() => loadState("sa_fulldays", 0));
  const [totalSessions, setTotalSessions]   = useState(() => loadState("sa_sessions", 0));

  useEffect(() => { try { localStorage.setItem("sa_coins",    JSON.stringify(coins));    } catch {} }, [coins]);
  useEffect(() => { try { localStorage.setItem("sa_outfit",   JSON.stringify(outfit));   } catch {} }, [outfit]);
  useEffect(() => { try { localStorage.setItem("sa_unlocked", JSON.stringify(unlockedItems)); } catch {} }, [unlockedItems]);
  useEffect(() => { try { localStorage.setItem("sa_skin",     JSON.stringify(skinTone)); } catch {} }, [skinTone]);
  useEffect(() => { try { localStorage.setItem("sa_fulldays", JSON.stringify(fullDaysCompleted)); } catch {} }, [fullDaysCompleted]);
  useEffect(() => { try { localStorage.setItem("sa_sessions", JSON.stringify(totalSessions)); } catch {} }, [totalSessions]);

  const handleUnlock = (itemId, cost, category) => {
    setCoins(c => Math.max(0, c - cost));
    setUnlockedItems(prev => prev.includes(itemId) ? prev : [...prev, itemId]);
    setOutfit(prev => ({ ...prev, [category]: itemId }));
  };

  // Called by ScheduleScreen when a topic is studied/un-studied
  const handleStudyChange = (delta) => {
    setCoins(c => Math.max(0, c + delta));
    if (delta > 0) setTotalSessions(n => n + 1);
  };

  return (
    <div style={styles.app}>
      {/* ── HEADER ── */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.headerTitle}>📚 Alyssa's Study Schedule</div>
          <div style={styles.headerSub}>4-week revision plan</div>
        </div>
        <div style={styles.headerRight}>
          <button onClick={() => setTab("wardrobe")} style={styles.miniCharBtn} title="Open wardrobe">
            <div style={styles.miniCharWrap}>
              <Character outfit={outfit} skinTone={skinTone} size={58} />
            </div>
            <div style={styles.coinBadge}>🪙 {coins}</div>
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={styles.content}>
        {tab === "schedule" && (
          <ScheduleScreen onStudyChange={handleStudyChange} />
        )}
        {tab === "wardrobe" && (
          <WardrobeScreen
            coins={coins}
            outfit={outfit}
            setOutfit={setOutfit}
            unlockedItems={unlockedItems}
            onUnlock={handleUnlock}
            totalSessions={totalSessions}
            fullDaysCompleted={fullDaysCompleted}
            skinTone={skinTone}
            setSkinTone={tone => setSkinTone(tone)}
          />
        )}
        {tab === "progress" && <ProgressScreen />}
        {tab === "tips"     && <TipsScreen />}
      </div>

      {/* ── BOTTOM NAV ── */}
      <nav style={styles.nav}>
        {[
          { id: "schedule", label: "Schedule", icon: "📅" },
          { id: "wardrobe", label: "Wardrobe",  icon: "👗" },
          { id: "progress", label: "Progress",  icon: "📊" },
          { id: "tips",     label: "Tips",      icon: "💡" },
        ].map(({ id, label, icon }) => (
          <button key={id} onClick={() => setTab(id)}
            style={{ ...styles.navBtn, ...(tab === id ? styles.navBtnActive : {}) }}>
            <span style={styles.navIcon}>{icon}</span>
            <span style={styles.navLabel}>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

const styles = {
  app: { display: "flex", flexDirection: "column", minHeight: "100vh", maxWidth: "480px", margin: "0 auto", background: "#F8F7FF", fontFamily: "'Nunito', 'Segoe UI', sans-serif" },
  header: { background: "linear-gradient(135deg, #5E35B1 0%, #3949AB 100%)", color: "#fff", padding: "14px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 },
  headerLeft: {},
  headerTitle: { fontSize: "16px", fontWeight: 900, letterSpacing: "-0.3px" },
  headerSub: { fontSize: "11px", opacity: 0.8, marginTop: "2px" },
  headerRight: {},
  miniCharBtn: { background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "14px", padding: "4px 8px 4px 4px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" },
  miniCharWrap: { width: "44px", height: "44px", overflow: "hidden", borderRadius: "10px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "flex-end", justifyContent: "center" },
  coinBadge: { fontSize: "13px", fontWeight: 900, color: "#FFD700" },
  content: { flex: 1, overflowY: "auto", paddingBottom: "70px" },
  nav: { position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "480px", background: "#fff", borderTop: "1px solid #E8EAF6", display: "flex", zIndex: 100, paddingBottom: "env(safe-area-inset-bottom, 0px)" },
  navBtn: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "10px 4px 8px", border: "none", background: "transparent", cursor: "pointer", fontFamily: "'Nunito', sans-serif" },
  navBtnActive: { background: "#F3F0FF" },
  navIcon: { fontSize: "20px" },
  navLabel: { fontSize: "10px", fontWeight: 700, color: "#666", marginTop: "2px" },
};
