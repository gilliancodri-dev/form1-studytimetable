import React, { useState } from 'react';
import Character from './Character';
import { WARDROBE_ITEMS, CATEGORY_LABELS, ACHIEVEMENT_BADGES } from '../data/wardrobeData';

const SKIN_TONES = ["#D4956A", "#C07850", "#8D5524", "#F1C27D", "#FDBCB4", "#6B3A2A"];

export default function WardrobeScreen({ coins, outfit, setOutfit, unlockedItems, onUnlock, totalSessions, fullDaysCompleted, skinTone, setSkinTone }) {
  const [activeTab, setActiveTab] = useState("character");
  const [activeCategory, setActiveCategory] = useState("hair");
  const [notification, setNotification] = useState(null);

  const showNotif = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const handleUnlock = (item) => {
    if (unlockedItems.includes(item.id)) {
      setOutfit(prev => ({ ...prev, [activeCategory]: item.id }));
      return;
    }
    if (coins < item.cost) {
      showNotif(`Need ${item.cost - coins} more coins! Keep studying! 🪙`, "warn");
      return;
    }
    onUnlock(item.id, item.cost, activeCategory);
    showNotif(`Unlocked ${item.label}! 🎉`, "success");
  };

  // Compute earned badges
  const earnedBadges = ACHIEVEMENT_BADGES.filter(b => {
    const totalUnlocked = Object.values(WARDROBE_ITEMS).flat().filter(i => unlockedItems.includes(i.id) && i.cost > 0).length;
    if (b.type === "sessions") return totalSessions >= b.threshold;
    if (b.type === "coins") return (coins + (b._spent || 0)) >= b.threshold;
    if (b.type === "fullday") return fullDaysCompleted >= b.threshold;
    if (b.type === "unlocked") return totalUnlocked >= b.threshold;
    if (b.type.startsWith("subject_")) {
      const subj = b.type.replace("subject_", "");
      return (totalSessions) >= b.threshold;
    }
    return false;
  });

  const items = WARDROBE_ITEMS[activeCategory] || [];

  return (
    <div style={s.root}>
      {notification && (
        <div style={{ ...s.notif, background: notification.type === "success" ? "#4CAF50" : "#FF9800" }}>
          {notification.msg}
        </div>
      )}

      {/* Tabs */}
      <div style={s.tabs}>
        {["character", "wardrobe", "badges"].map(t => (
          <button key={t} style={{ ...s.tab, ...(activeTab === t ? s.tabActive : {}) }} onClick={() => setActiveTab(t)}>
            {t === "character" ? "👗 My Character" : t === "wardrobe" ? "🛍️ Wardrobe" : "🏅 Badges"}
          </button>
        ))}
      </div>

      {/* Coins display */}
      <div style={s.coinsBar}>
        <span style={s.coinIcon}>🪙</span>
        <span style={s.coinAmt}>{coins}</span>
        <span style={s.coinLabel}>coins to spend</span>
        <span style={s.coinTip}>Complete sessions to earn more!</span>
      </div>

      {/* ── CHARACTER TAB ── */}
      {activeTab === "character" && (
        <div style={s.charTab}>
          <div style={s.charDisplay}>
            <Character outfit={{ ...outfit, skinTone }} size={220} />
          </div>
          <div style={s.skinLabel}>Skin tone</div>
          <div style={s.skinRow}>
            {SKIN_TONES.map(tone => (
              <button key={tone} onClick={() => setSkinTone(tone)}
                style={{ ...s.skinBtn, background: tone, border: skinTone === tone ? "3px solid #5E35B1" : "2px solid #ddd" }} />
            ))}
          </div>
          <div style={s.outfitSummary}>
            <div style={s.summaryTitle}>Currently wearing:</div>
            {Object.entries(outfit).map(([cat, itemId]) => {
              const item = (WARDROBE_ITEMS[cat] || []).find(i => i.id === itemId);
              return item ? (
                <div key={cat} style={s.summaryRow}>
                  <span style={s.summaryIcon}>{CATEGORY_LABELS[cat]?.split(" ")[0]}</span>
                  <span style={s.summaryName}>{item.label}</span>
                </div>
              ) : null;
            })}
          </div>
          <button style={s.wardrobeBtn} onClick={() => setActiveTab("wardrobe")}>
            🛍️ Open Wardrobe
          </button>
        </div>
      )}

      {/* ── WARDROBE TAB ── */}
      {activeTab === "wardrobe" && (
        <div>
          {/* Preview */}
          <div style={s.miniCharWrap}>
            <Character outfit={{ ...outfit, skinTone }} size={150} />
          </div>

          {/* Category pills */}
          <div style={s.catRow}>
            {Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ ...s.catBtn, ...(activeCategory === cat ? s.catBtnActive : {}) }}>
                {label}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <div style={s.itemsGrid}>
            {items.map(item => {
              const isOwned = unlockedItems.includes(item.id) || item.cost === 0;
              const isEquipped = outfit[activeCategory] === item.id;
              const canAfford = coins >= item.cost;
              return (
                <button key={item.id} onClick={() => handleUnlock(item)}
                  style={{
                    ...s.itemCard,
                    border: isEquipped ? "2px solid #5E35B1" : "1.5px solid #E8EAF6",
                    background: isEquipped ? "#EDE7F6" : isOwned ? "#fff" : "#FAFAFA",
                    opacity: !isOwned && !canAfford ? 0.55 : 1,
                  }}>
                  {/* Colour swatch */}
                  <div style={{ ...s.swatch, background: item.color === "transparent" ? "linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%), linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%), white" : item.color, backgroundSize: "8px 8px", backgroundPosition: "0 0, 4px 4px" }} />
                  <div style={s.itemName}>{item.label}</div>
                  {isEquipped && <div style={s.equippedTag}>Wearing ✓</div>}
                  {!isOwned && (
                    <div style={{ ...s.costTag, background: canAfford ? "#5E35B1" : "#bbb" }}>
                      🪙 {item.cost}
                    </div>
                  )}
                  {isOwned && !isEquipped && <div style={s.ownedTag}>Owned</div>}
                </button>
              );
            })}
          </div>

          <div style={s.wardrobeNote}>
            Tap an item to equip it (if owned) or unlock it with coins!
          </div>
        </div>
      )}

      {/* ── BADGES TAB ── */}
      {activeTab === "badges" && (
        <div style={s.badgesTab}>
          <div style={s.badgesTitle}>Your Achievement Badges</div>
          <div style={s.badgesGrid}>
            {ACHIEVEMENT_BADGES.map(b => {
              const earned = earnedBadges.find(e => e.id === b.id);
              return (
                <div key={b.id} style={{ ...s.badge, ...(earned ? s.badgeEarned : s.badgeLocked) }}>
                  <div style={s.badgeIcon}>{earned ? b.icon : "🔒"}</div>
                  <div style={s.badgeName}>{b.label}</div>
                  <div style={s.badgeDesc}>{b.desc}</div>
                </div>
              );
            })}
          </div>
          <div style={s.badgeCount}>
            {earnedBadges.length} / {ACHIEVEMENT_BADGES.length} badges earned
          </div>
        </div>
      )}
    </div>
  );
}

const s = {
  root: { padding: "0 0 80px" },
  notif: { position: "fixed", top: "70px", left: "50%", transform: "translateX(-50%)", color: "#fff", fontWeight: 800, fontSize: "14px", padding: "10px 22px", borderRadius: "24px", zIndex: 999, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" },
  tabs: { display: "flex", borderBottom: "1px solid #E8EAF6", background: "#fff" },
  tab: { flex: 1, padding: "11px 4px", border: "none", background: "transparent", fontSize: "12px", fontWeight: 700, color: "#999", cursor: "pointer", fontFamily: "Nunito, sans-serif" },
  tabActive: { color: "#5E35B1", borderBottom: "3px solid #5E35B1" },
  coinsBar: { display: "flex", alignItems: "center", gap: "6px", padding: "10px 16px", background: "linear-gradient(135deg, #FFF8E1, #FFF3E0)", borderBottom: "1px solid #FFE082" },
  coinIcon: { fontSize: "20px" },
  coinAmt: { fontSize: "22px", fontWeight: 900, color: "#E65100" },
  coinLabel: { fontSize: "13px", color: "#E65100", fontWeight: 700 },
  coinTip: { fontSize: "11px", color: "#F57F17", marginLeft: "auto", fontStyle: "italic" },

  // Character tab
  charTab: { padding: "0 16px 16px", display: "flex", flexDirection: "column", alignItems: "center" },
  charDisplay: { background: "linear-gradient(180deg, #EDE7F6 0%, #E8F5E9 100%)", borderRadius: "20px", padding: "16px", marginTop: "12px", border: "1px solid #D1C4E9", width: "100%", display: "flex", justifyContent: "center" },
  skinLabel: { fontSize: "12px", fontWeight: 700, color: "#666", marginTop: "14px", alignSelf: "flex-start" },
  skinRow: { display: "flex", gap: "8px", marginTop: "6px", alignSelf: "flex-start" },
  skinBtn: { width: "28px", height: "28px", borderRadius: "50%", cursor: "pointer" },
  outfitSummary: { marginTop: "14px", background: "#fff", borderRadius: "12px", padding: "12px 16px", width: "100%", border: "1px solid #E8EAF6" },
  summaryTitle: { fontSize: "12px", fontWeight: 700, color: "#9E9E9E", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" },
  summaryRow: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" },
  summaryIcon: { fontSize: "16px", width: "24px" },
  summaryName: { fontSize: "13px", color: "#333", fontWeight: 600 },
  wardrobeBtn: { marginTop: "14px", background: "linear-gradient(135deg, #5E35B1, #3949AB)", color: "#fff", border: "none", borderRadius: "24px", padding: "12px 32px", fontSize: "14px", fontWeight: 800, cursor: "pointer", fontFamily: "Nunito, sans-serif" },

  // Wardrobe tab
  miniCharWrap: { display: "flex", justifyContent: "center", background: "linear-gradient(180deg, #EDE7F6, #E8F5E9)", padding: "12px", marginBottom: "8px" },
  catRow: { display: "flex", gap: "6px", padding: "8px 14px", overflowX: "auto" },
  catBtn: { flex: "0 0 auto", padding: "6px 12px", borderRadius: "20px", border: "1.5px solid #E8EAF6", background: "#fff", fontSize: "12px", fontWeight: 700, color: "#666", cursor: "pointer", fontFamily: "Nunito, sans-serif" },
  catBtnActive: { background: "#5E35B1", color: "#fff", borderColor: "#5E35B1" },
  itemsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", padding: "10px 14px" },
  itemCard: { borderRadius: "12px", padding: "10px 6px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", fontFamily: "Nunito, sans-serif", transition: "transform 0.1s" },
  swatch: { width: "44px", height: "44px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)" },
  itemName: { fontSize: "11px", fontWeight: 700, color: "#333", textAlign: "center" },
  equippedTag: { fontSize: "10px", color: "#5E35B1", fontWeight: 800 },
  costTag: { fontSize: "11px", color: "#fff", fontWeight: 800, padding: "2px 8px", borderRadius: "10px" },
  ownedTag: { fontSize: "10px", color: "#2E7D32", fontWeight: 700 },
  wardrobeNote: { textAlign: "center", fontSize: "12px", color: "#aaa", padding: "4px 16px 16px", fontStyle: "italic" },

  // Badges tab
  badgesTab: { padding: "14px 14px 16px" },
  badgesTitle: { fontSize: "16px", fontWeight: 900, color: "#3949AB", marginBottom: "12px" },
  badgesGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" },
  badge: { borderRadius: "12px", padding: "14px 12px", textAlign: "center", border: "1.5px solid" },
  badgeEarned: { background: "#FFF8E1", borderColor: "#FFD700" },
  badgeLocked: { background: "#F5F5F5", borderColor: "#E0E0E0" },
  badgeIcon: { fontSize: "28px", marginBottom: "4px" },
  badgeName: { fontSize: "12px", fontWeight: 800, color: "#333" },
  badgeDesc: { fontSize: "11px", color: "#888", marginTop: "2px" },
  badgeCount: { textAlign: "center", marginTop: "14px", fontSize: "13px", fontWeight: 700, color: "#5E35B1" },
};
