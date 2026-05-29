import React from 'react';

// Draws the full character based on equipped items
export default function Character({ outfit, size = 220, animate = false, skinTone }) {
  const hairColors = {
    h1: "#1a1a1a", h2: "#2C1810", h3: "#1a1a1a",
    h4: "#4A0E8F", h5: "#C0392B", h6: "#F39C12",
  };
  const topColors = {
    t1: "#F5F5F5", t2: "#7B68EE", t3: "#F1C40F",
    t4: "#2980B9", t5: "#FF69B4", t6: "#9B59B6",
  };
  const bottomColors = {
    b1: "#1F618D", b2: "#F4D03F", b3: "#F1948A",
    b4: "#E74C3C", b5: "#8E44AD", b6: "#27AE60",
  };
  const shoeColors = {
    s1: "#FAFAFA", s2: "#E91E63", s3: "#FFEB3B",
    s4: "#9C27B0", s5: "#2196F3", s6: "#FF5722",
  };

  const hc = hairColors[outfit.hair] || "#8B4513";
  const tc = topColors[outfit.top] || "#F5F5F5";
  const bc = bottomColors[outfit.bottom] || "#1F618D";
  const sc = shoeColors[outfit.shoes] || "#FAFAFA";
  const resolvedSkin = skinTone || "#8D5524";
  const skinDark = resolvedSkin === "#D4956A" ? "#C07850"
    : resolvedSkin === "#C07850" ? "#A0643A"
    : resolvedSkin === "#8D5524" ? "#6B3A18"
    : resolvedSkin === "#F1C27D" ? "#D4956A"
    : resolvedSkin === "#FDBCB4" ? "#E0967A"
    : resolvedSkin === "#6B3A2A" ? "#4A2010"
    : "#6B3A18";

  // Hair styles
  const renderHair = () => {
    switch (outfit.hair) {
      case "h2": // curly afro
        return (
          <g>
            <circle cx="110" cy="52" r="38" fill={hc} />
            <circle cx="82" cy="65" r="18" fill={hc} />
            <circle cx="138" cy="65" r="18" fill={hc} />
            <circle cx="95" cy="40" r="16" fill={hc} />
            <circle cx="125" cy="38" r="16" fill={hc} />
            <circle cx="110" cy="32" r="14" fill={hc} />
          </g>
        );
      case "h3": // long straight
        return (
          <g>
            <rect x="76" y="40" width="68" height="90" rx="6" fill={hc} />
            <ellipse cx="110" cy="48" rx="34" ry="22" fill={hc} />
            <rect x="76" y="55" width="14" height="75" rx="7" fill={hc} />
            <rect x="130" y="55" width="14" height="75" rx="7" fill={hc} />
          </g>
        );
      case "h4": // box braids
        return (
          <g>
            <ellipse cx="110" cy="50" rx="35" ry="24" fill={hc} />
            {[85,95,105,115,125,135].map((x, i) => (
              <rect key={i} x={x-4} y="62" width="8" height={50+i*5} rx="4" fill={hc} opacity="0.9" />
            ))}
            <rect x="78" y="55" width="8" height="60" rx="4" fill={hc} />
            <rect x="134" y="55" width="8" height="60" rx="4" fill={hc} />
          </g>
        );
      case "h5": // space buns
        return (
          <g>
            <ellipse cx="110" cy="55" rx="30" ry="18" fill={hc} />
            <circle cx="86" cy="38" r="16" fill={hc} />
            <circle cx="134" cy="38" r="16" fill={hc} />
            <circle cx="86" cy="38" r="10" fill={hc} opacity="0.6" />
            <circle cx="134" cy="38" r="10" fill={hc} opacity="0.6" />
          </g>
        );
      case "h6": // crown locs
        return (
          <g>
            <ellipse cx="110" cy="50" rx="34" ry="22" fill={hc} />
            {[88,96,104,112,120,128].map((x, i) => (
              <rect key={i} x={x-3} y="58" width="6" height={40+i%3*8} rx="3" fill={hc} />
            ))}
            <path d="M76 52 Q110 28 144 52" fill={hc} />
            {[86,97,110,123,134].map((x, i) => (
              <circle key={i} cx={x} cy={30+Math.abs(i-2)*4} r="5" fill={hc} opacity="0.8" />
            ))}
          </g>
        );
      default: // h1 ponytail — hair cap + big curly puff to the side (tail drawn after head)
        return (
          <g>
            {/* Hair cap on top of head */}
            <ellipse cx="110" cy="52" rx="34" ry="23" fill={hc} />
            <rect x="96" y="48" width="28" height="30" rx="4" fill={hc} />
          </g>
        );
    }
  };

  // Top styles
  const renderTop = () => {
    switch (outfit.top) {
      case "t2": // hoodie
        return (
          <g>
            <path d="M75 130 Q60 135 58 170 L162 170 Q160 135 145 130 Q128 125 110 125 Q92 125 75 130Z" fill={tc} />
            <path d="M93 127 Q110 140 110 155 Q110 140 127 127" fill={tc} stroke={tc} strokeWidth="2" />
            <ellipse cx="110" cy="125" rx="18" ry="8" fill={tc} opacity="0.7" />
            <rect x="60" y="130" width="14" height="35" rx="7" fill={tc} />
            <rect x="146" y="130" width="14" height="35" rx="7" fill={tc} />
          </g>
        );
      case "t3": // crop top
        return (
          <g>
            <path d="M82 128 Q70 132 68 155 L152 155 Q150 132 138 128 Q125 122 110 122 Q95 122 82 128Z" fill={tc} />
            <rect x="62" y="128" width="12" height="28" rx="6" fill={tc} />
            <rect x="146" y="128" width="12" height="28" rx="6" fill={tc} />
            <path d="M82 128 Q110 118 138 128" fill="none" stroke={tc} strokeWidth="3" />
          </g>
        );
      case "t4": // denim jacket
        return (
          <g>
            <path d="M72 128 Q56 133 54 172 L166 172 Q164 133 148 128 Q130 120 110 120 Q90 120 72 128Z" fill={tc} />
            <path d="M54 172 L58 140 L75 128" fill="none" stroke={tc} strokeWidth="3" opacity="0.6" />
            <path d="M166 172 L162 140 L145 128" fill="none" stroke={tc} strokeWidth="3" opacity="0.6" />
            <rect x="55" y="128" width="16" height="40" rx="8" fill={tc} />
            <rect x="149" y="128" width="16" height="40" rx="8" fill={tc} />
            <line x1="110" y1="124" x2="110" y2="172" stroke="#1a5276" strokeWidth="1.5" />
          </g>
        );
      case "t5": // pink blouse
        return (
          <g>
            <path d="M78 126 Q63 132 61 170 L159 170 Q157 132 142 126 Q127 118 110 118 Q93 118 78 126Z" fill={tc} />
            <path d="M88 120 Q110 130 110 145" fill="none" stroke={tc} strokeWidth="2" opacity="0.5" />
            <path d="M132 120 Q110 130 110 145" fill="none" stroke={tc} strokeWidth="2" opacity="0.5" />
            <rect x="60" y="126" width="13" height="36" rx="6.5" fill={tc} />
            <rect x="147" y="126" width="13" height="36" rx="6.5" fill={tc} />
          </g>
        );
      case "t6": // star sweater
        return (
          <g>
            <path d="M76 128 Q60 134 58 172 L162 172 Q160 134 144 128 Q128 120 110 120 Q92 120 76 128Z" fill={tc} />
            <text x="110" y="155" textAnchor="middle" fontSize="18" fill="#FFD700">★</text>
            <text x="95" y="148" textAnchor="middle" fontSize="10" fill="#FFD700" opacity="0.7">✦</text>
            <text x="125" y="148" textAnchor="middle" fontSize="10" fill="#FFD700" opacity="0.7">✦</text>
            <rect x="57" y="128" width="14" height="38" rx="7" fill={tc} />
            <rect x="149" y="128" width="14" height="38" rx="7" fill={tc} />
          </g>
        );
      default: // t1 white tee
        return (
          <g>
            <path d="M80 128 Q65 133 63 170 L157 170 Q155 133 140 128 Q126 120 110 120 Q94 120 80 128Z" fill={tc} />
            <rect x="62" y="128" width="13" height="35" rx="6.5" fill={tc} />
            <rect x="145" y="128" width="13" height="35" rx="6.5" fill={tc} />
          </g>
        );
    }
  };

  // Bottom styles
  const renderBottom = () => {
    switch (outfit.bottom) {
      case "b2": // yellow skirt
        return (
          <g>
            <rect x="88" y="168" width="44" height="12" rx="4" fill={bc} />
            <path d="M84 180 Q75 200 70 230 L150 230 Q145 200 136 180Z" fill={bc} />
            <path d="M84 180 Q110 195 136 180" fill="none" stroke={bc} strokeWidth="2" opacity="0.5" />
          </g>
        );
      case "b3": // pink shorts
        return (
          <g>
            <rect x="86" y="168" width="48" height="42" rx="5" fill={bc} />
            <line x1="110" y1="168" x2="110" y2="210" stroke={bc} strokeWidth="3" opacity="0.5" />
          </g>
        );
      case "b4": // floral skirt
        return (
          <g>
            <rect x="88" y="168" width="44" height="10" rx="4" fill={bc} />
            <path d="M82 178 Q72 205 68 232 L152 232 Q148 205 138 178Z" fill={bc} />
            {[[95,195],[115,202],[130,190],[100,215],[125,218]].map(([x,y],i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#FFD700" opacity="0.8" />
                <circle cx={x} cy={y} r="3" fill="#fff" opacity="0.6" />
              </g>
            ))}
          </g>
        );
      case "b5": // purple leggings
        return (
          <g>
            <rect x="88" y="168" width="20" height="62" rx="5" fill={bc} />
            <rect x="112" y="168" width="20" height="62" rx="5" fill={bc} />
          </g>
        );
      case "b6": // plaid skirt
        return (
          <g>
            <rect x="88" y="168" width="44" height="10" rx="4" fill={bc} />
            <path d="M84 178 Q76 202 72 228 L148 228 Q144 202 136 178Z" fill={bc} />
            <line x1="90" y1="178" x2="88" y2="228" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="178" x2="97" y2="228" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="110" y1="178" x2="108" y2="228" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="120" y1="178" x2="120" y2="228" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="130" y1="178" x2="132" y2="228" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="82" y1="195" x2="138" y2="195" stroke="#fff" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="210" x2="140" y2="210" stroke="#fff" strokeWidth="1" opacity="0.4" />
          </g>
        );
      default: // b1 blue jeans
        return (
          <g>
            <rect x="88" y="168" width="20" height="64" rx="5" fill={bc} />
            <rect x="112" y="168" width="20" height="64" rx="5" fill={bc} />
            <rect x="88" y="168" width="44" height="14" rx="4" fill={bc} opacity="0.8" />
            <line x1="110" y1="168" x2="110" y2="190" stroke="#1a3a5c" strokeWidth="1.5" />
          </g>
        );
    }
  };

  // Shoes
  const renderShoes = () => {
    switch (outfit.shoes) {
      case "s2": // pink boots
        return (
          <g>
            <rect x="84" y="228" width="20" height="28" rx="4" fill={sc} />
            <rect x="112" y="228" width="20" height="28" rx="4" fill={sc} />
            <rect x="82" y="248" width="24" height="10" rx="3" fill={sc} opacity="0.8" />
            <rect x="110" y="248" width="24" height="10" rx="3" fill={sc} opacity="0.8" />
          </g>
        );
      case "s3": // yellow trainers
        return (
          <g>
            <ellipse cx="96" cy="238" rx="16" ry="9" fill={sc} />
            <ellipse cx="124" cy="238" rx="16" ry="9" fill={sc} />
            <rect x="84" y="228" width="24" height="12" rx="4" fill={sc} />
            <rect x="112" y="228" width="24" height="12" rx="4" fill={sc} />
            <line x1="86" y1="233" x2="106" y2="233" stroke="#E65100" strokeWidth="1.5" />
            <line x1="114" y1="233" x2="134" y2="233" stroke="#E65100" strokeWidth="1.5" />
          </g>
        );
      case "s4": // purple heels
        return (
          <g>
            <path d="M84 240 Q96 228 108 232 L108 250 Q96 252 84 248Z" fill={sc} />
            <path d="M112 240 Q124 228 136 232 L136 250 Q124 252 112 248Z" fill={sc} />
            <rect x="104" y="238" width="4" height="16" rx="2" fill={sc} />
            <rect x="132" y="238" width="4" height="16" rx="2" fill={sc} />
          </g>
        );
      case "s5": // blue platforms
        return (
          <g>
            <rect x="82" y="226" width="26" height="14" rx="4" fill={sc} />
            <rect x="110" y="226" width="26" height="14" rx="4" fill={sc} />
            <rect x="82" y="238" width="26" height="8" rx="2" fill={sc} opacity="0.7" />
            <rect x="110" y="238" width="26" height="8" rx="2" fill={sc} opacity="0.7" />
          </g>
        );
      case "s6": // rainbow slides
        return (
          <g>
            <ellipse cx="95" cy="240" rx="15" ry="7" fill={sc} />
            <ellipse cx="125" cy="240" rx="15" ry="7" fill={sc} />
            <path d="M84 234 Q95 228 106 234" stroke="#FF5722" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M114 234 Q125 228 136 234" stroke="#FF5722" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M86 237 Q95 232 104 237" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M116 237 Q125 232 134 237" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        );
      default: // s1 white sneakers
        return (
          <g>
            <ellipse cx="96" cy="238" rx="16" ry="8" fill={sc} />
            <ellipse cx="124" cy="238" rx="16" ry="8" fill={sc} />
            <rect x="84" y="228" width="24" height="12" rx="4" fill={sc} />
            <rect x="112" y="228" width="24" height="12" rx="4" fill={sc} />
            <path d="M86 232 Q96 226 106 232" stroke="#ddd" strokeWidth="1.5" fill="none" />
            <path d="M114 232 Q124 226 134 232" stroke="#ddd" strokeWidth="1.5" fill="none" />
          </g>
        );
    }
  };

  // Accessory
  const renderAccessory = () => {
    switch (outfit.accessory) {
      case "a2": // star earrings
        return (
          <g>
            <text x="79" y="102" fontSize="12" fill="#F1C40F">★</text>
            <text x="133" y="102" fontSize="12" fill="#F1C40F">★</text>
          </g>
        );
      case "a3": // bow
        return (
          <g>
            {/* Left bow wing */}
            <ellipse cx="95" cy="50" rx="13" ry="9" fill="#E74C3C" transform="rotate(-15 95 50)" />
            <ellipse cx="95" cy="50" rx="8" ry="5" fill="#C0392B" opacity="0.5" transform="rotate(-15 95 50)" />
            {/* Right bow wing */}
            <ellipse cx="125" cy="50" rx="13" ry="9" fill="#E74C3C" transform="rotate(15 125 50)" />
            <ellipse cx="125" cy="50" rx="8" ry="5" fill="#C0392B" opacity="0.5" transform="rotate(15 125 50)" />
            {/* Centre knot */}
            <circle cx="110" cy="52" r="7" fill="#E74C3C" />
            <circle cx="110" cy="52" r="4" fill="#C0392B" opacity="0.6" />
          </g>
        );
      case "a4": // glasses
        return (
          <g>
            <rect x="88" y="94" width="20" height="13" rx="5" fill="none" stroke="#2C3E50" strokeWidth="2" />
            <rect x="112" y="94" width="20" height="13" rx="5" fill="none" stroke="#2C3E50" strokeWidth="2" />
            <line x1="108" y1="100" x2="112" y2="100" stroke="#2C3E50" strokeWidth="2" />
            <line x1="88" y1="100" x2="82" y2="98" stroke="#2C3E50" strokeWidth="2" />
            <line x1="132" y1="100" x2="138" y2="98" stroke="#2C3E50" strokeWidth="2" />
          </g>
        );
      case "a5": // flower crown
        return (
          <g>
            {[82, 94, 106, 118, 130].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={52 + Math.abs(i - 2) * 3} r="7" fill={["#FF69B4","#FF6347","#FFD700","#9370DB","#00CED1"][i]} opacity="0.9" />
                <circle cx={x} cy={52 + Math.abs(i - 2) * 3} r="3" fill="#fff" opacity="0.8" />
              </g>
            ))}
          </g>
        );
      case "a6": // gold necklace
        return (
          <g>
            <path d="M88 120 Q110 132 132 120" stroke="#F39C12" strokeWidth="2" fill="none" />
            <circle cx="110" cy="132" r="5" fill="#F39C12" />
            <circle cx="110" cy="132" r="3" fill="#FFD700" />
          </g>
        );
      default:
        return null;
    }
  };

  const scale = size / 280;

  const renderPonytail = () => {
    if (outfit.hair && outfit.hair !== "h1") return null;
    return (
      <g>
        {/* Hair tie / scrunchie at the side of the head */}
        <ellipse cx="136" cy="78" rx="7" ry="6" fill={hc} />
        <ellipse cx="136" cy="78" rx="5" ry="4" fill="#111" opacity="0.5" />
        {/* Curly puff — shifted closer to face */}
        <circle cx="143" cy="60" r="14" fill={hc} />
        <circle cx="155" cy="72" r="12" fill={hc} />
        <circle cx="146" cy="84" r="13" fill={hc} />
        <circle cx="156" cy="56" r="11" fill={hc} />
        <circle cx="140" cy="78" r="11" fill={hc} />
        <circle cx="151" cy="96" r="11" fill={hc} />
        <circle cx="145" cy="108" r="10" fill={hc} />
        <circle cx="156" cy="88" r="9" fill={hc} />
        <circle cx="141" cy="100" r="9" fill={hc} />
        <circle cx="150" cy="116" r="8" fill={hc} />
        {/* Curl texture */}
        <circle cx="143" cy="60" r="7" fill={hc} opacity="0.55" />
        <circle cx="153" cy="70" r="7" fill={hc} opacity="0.55" />
        <circle cx="146" cy="84" r="7" fill={hc} opacity="0.55" />
        <circle cx="145" cy="100" r="6" fill={hc} opacity="0.55" />
        <circle cx="150" cy="114" r="5" fill={hc} opacity="0.55" />
      </g>
    );
  };

  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 220 280"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Shadow */}
      <ellipse cx="110" cy="268" rx="45" ry="8" fill="rgba(0,0,0,0.1)" />

      {/* ── HAIR (behind) ── */}
      {renderHair()}

      {/* ── HEAD ── */}
      <ellipse cx="110" cy="82" rx="32" ry="36" fill={resolvedSkin} />

      {/* Neck */}
      <rect x="102" y="112" width="16" height="16" rx="4" fill={resolvedSkin} />

      {/* ── FACE ── */}
      {/* Eyes */}
      <ellipse cx="100" cy="84" rx="5" ry="6" fill="#fff" />
      <ellipse cx="120" cy="84" rx="5" ry="6" fill="#fff" />
      <circle cx="101" cy="85" r="3.5" fill="#4A2C2A" />
      <circle cx="121" cy="85" r="3.5" fill="#4A2C2A" />
      <circle cx="102" cy="84" r="1.2" fill="#fff" />
      <circle cx="122" cy="84" r="1.2" fill="#fff" />
      {/* Eyebrows */}
      <path d="M94 77 Q100 74 106 77" stroke="#5C3317" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M114 77 Q120 74 126 77" stroke="#5C3317" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M108 92 Q110 96 112 92" stroke={skinDark} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M103 103 Q110 109 117 103" stroke="#C0726A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="93" cy="98" rx="7" ry="4" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="127" cy="98" rx="7" ry="4" fill="#FFB6C1" opacity="0.5" />

      {/* ── BODY SKIN (arms) ── */}
      <rect x="63" y="130" width="12" height="35" rx="6" fill={resolvedSkin} />
      <rect x="145" y="130" width="12" height="35" rx="6" fill={resolvedSkin} />
      {/* Hands */}
      <ellipse cx="69" cy="168" rx="7" ry="6" fill={resolvedSkin} />
      <ellipse cx="151" cy="168" rx="7" ry="6" fill={resolvedSkin} />

      {/* ── CLOTHES ── */}
      {renderTop()}
      {renderBottom()}
      {renderShoes()}

      {/* ── PONYTAIL FRONT (h1 only — rendered after head so it's visible) ── */}
      {renderPonytail()}

      {/* ── HAIR (front for some styles) ── */}
      {(outfit.hair === "h3") && (
        <g opacity="0.3">
          <rect x="76" y="60" width="8" height="60" rx="4" fill={hc} />
          <rect x="136" y="60" width="8" height="60" rx="4" fill={hc} />
        </g>
      )}

      {/* ── ACCESSORY (rendered last so it always sits on top of hair) ── */}
      {renderAccessory()}
    </svg>
  );
}
