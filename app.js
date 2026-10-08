// In-house Tech
const ASSETS_DATA = [
  {
    id: "regression-bots",
    title: "Regression Bot Suite",
    category: "tools",
    badgeClass: "badge-tools",
    categoryLabel: "QA Tools",
    shortDesc: "50+ headless Godot bots that play RuinBound after every change: combat, co-op, HUD, levels and bosses.",
    fullDesc: "Our automated playtesters. Each bot boots the game headless and drives one slice of it: fighting, dashing, hacking, walking every floor layout, checking doors and props, or hosting and joining a real co-op session over the network. A Python runner launches them in parallel on any OS, and screenshot bots compare frames to catch visual regressions. We built the suite with Claude Code, and it is what lets us refactor a 3D co-op game safely.",
    platforms: ["Godot 4", "GDScript", "Python"],
    features: [
      "50+ focused bots (fight, dash, hack, HUD, map, boss…)",
      "Host + client co-op bots over real networking",
      "Screenshot bots with frame comparison",
      "Cross-platform Python runner",
      "Runs headless in CI-style batches",
      "Shared bot base for writing new checks fast"
    ],
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="400" height="190" fill="url(#toolGrad)"/>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.02" stroke-width="1">
          <path d="M0 20 H400 M0 40 H400 M0 60 H400 M0 80 H400 M0 100 H400 M0 120 H400 M0 140 H400 M0 160 H400 M0 180 H400"/>
          <path d="M20 0 V190 M40 0 V190 M60 0 V190 M80 0 V190 M100 0 V190 M120 0 V190 M140 0 V190 M160 0 V190 M180 0 V190 M200 0 V190 M220 0 V190 M240 0 V190 M260 0 V190 M280 0 V190 M300 0 V190 M320 0 V190 M340 0 V190 M360 0 V190 M380 0 V190"/>
        </g>
        <!-- Node Connections (Lines) -->
        <path d="M 200 40 L 200 70 M 200 70 L 110 70 L 110 95 M 200 70 L 290 70 L 290 95 M 110 125 L 110 145 L 60 145 L 60 160 M 110 145 L 160 145 L 160 160" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="1 1"/>
        <!-- Pulse connection line -->
        <path d="M 200 40 L 200 70 M 200 70 L 290 70 L 290 95" stroke="#ec4899" stroke-width="2" filter="drop-shadow(0 0 5px rgba(236, 72, 153, 0.6))"/>
        <!-- Root Node -->
        <rect x="155" y="20" width="90" height="24" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="200" y="36" fill="#f3f4f6" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">run.py</text>
        <!-- Action Node Left -->
        <rect x="65" y="95" width="90" height="30" rx="4" fill="#0f172a" stroke="#8b5cf6" stroke-width="1"/>
        <text x="110" y="114" fill="#e2e8f0" font-family="sans-serif" font-size="9" text-anchor="middle">net_bot (co-op)</text>
        <!-- Action Node Right (Active Node) -->
        <rect x="245" y="95" width="90" height="30" rx="4" fill="#1e1b4b" stroke="#ec4899" stroke-width="1.5" filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))"/>
        <text x="290" y="114" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">fight_bot</text>
        <!-- Child Nodes -->
        <rect x="25" y="160" width="70" height="20" rx="3" fill="#020617" stroke="#475569" stroke-width="1"/>
        <text x="60" y="173" fill="#94a3b8" font-family="sans-serif" font-size="8" text-anchor="middle">host</text>
        <rect x="125" y="160" width="70" height="20" rx="3" fill="#020617" stroke="#475569" stroke-width="1"/>
        <text x="160" y="173" fill="#94a3b8" font-family="sans-serif" font-size="8" text-anchor="middle">client</text>
      </svg>
    `
  },

  {
    id: "art-pipeline",
    title: "Procedural Boss & Prop Builder",
    category: "3d",
    badgeClass: "badge-3d",
    categoryLabel: "Art Pipeline",
    shortDesc: "Blender Python scripts that assemble RuinBound's bosses, enemies and deck props from reusable parts.",
    fullDesc: "Instead of modeling every asset by hand, we describe them in code. Blender Python scripts assemble multi-part bosses like the Cargo Strider and the Breacher, enemies like the Hound and the Sentry, and kits of deck props, then bake and export them straight into Godot. Companion scripts generate floor, surface and UI textures, and the RuinBound logo itself.",
    platforms: ["Blender Python", "Godot 4"],
    features: [
      "Bosses and enemies built from part libraries",
      "Modular deck prop and sci-fi kit builders",
      "Bake and export straight into Godot",
      "Procedural floor, surface and UI textures",
      "Bounds data exported for level placement",
      "One-command rebuild scripts per asset"
    ],
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="threeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="400" height="190" fill="url(#threeGrad)"/>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.02" stroke-width="1">
          <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400"/>
          <path d="M50 0 V190 M100 0 V190 M150 0 V190 M200 0 V190 M250 0 V190 M300 0 V190 M350 0 V190"/>
        </g>
        <!-- Isometric Grid Representation -->
        <path d="M 200 50 L 320 110 L 200 170 L 80 110 Z" fill="#1e293b" fill-opacity="0.4" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.3"/>
        <path d="M 200 80 L 280 120 L 200 160 L 120 120 Z" fill="#334155" fill-opacity="0.6" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
        <!-- Low-poly Chest shape in isometric -->
        <path d="M 200 100 L 225 112 L 200 125 L 175 112 Z" fill="#d97706" stroke="#f59e0b" stroke-width="1.5"/>
        <path d="M 175 112 L 200 125 L 200 145 L 175 132 Z" fill="#b45309" stroke="#f59e0b" stroke-width="1"/>
        <path d="M 200 125 L 225 112 L 225 132 L 200 145 Z" fill="#92400e" stroke="#f59e0b" stroke-width="1"/>
        <!-- Glowing chest emission -->
        <ellipse cx="200" cy="120" rx="15" ry="8" fill="#fbbf24" fill-opacity="0.3" filter="blur(6px)"/>
        <!-- Torch glow and particles representation -->
        <g transform="translate(110, 80)">
          <path d="M0 20 L5 0" stroke="#f59e0b" stroke-width="2.5"/>
          <circle cx="5" cy="0" r="8" fill="#ef4444" fill-opacity="0.4" filter="blur(3px)"/>
          <circle cx="5" cy="0" r="4" fill="#fbbf24"/>
        </g>
        <g transform="translate(290, 80)">
          <path d="M0 20 L-5 0" stroke="#f59e0b" stroke-width="2.5"/>
          <circle cx="-5" cy="0" r="8" fill="#ef4444" fill-opacity="0.4" filter="blur(3px)"/>
          <circle cx="-5" cy="0" r="4" fill="#fbbf24"/>
        </g>
      </svg>
    `
  },

  {
    id: "music-engine",
    title: "Code-to-Music Engine",
    category: "audio",
    badgeClass: "badge-audio",
    categoryLabel: "Audio",
    shortDesc: "Glitch artcore composed, synthesized, mixed and mastered entirely in Python, with DAW-ready exports.",
    fullDesc: "A Python music engine for writing tracks as code: a note-notation parser, synths for growl, wobble and reese basses, glitch processors (stutters, tape stops, buffer shuffles, bitcrush), a mixer and a mastering chain. Every track exports as a master plus stems, MIDI and a ready-to-open Reaper project, so it can be finished in any DAW.",
    platforms: ["Python", "FluidSynth", "Reaper / Ableton"],
    features: [
      "Note notation to MIDI and audio",
      "FM growl, wobble and reese bass synths",
      "Bus-wide glitch event processing",
      "Stems, MIDI and .rpp project export",
      "Mastered to streaming loudness",
      "Full re-render with one command"
    ],
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="audGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="400" height="190" fill="url(#audGrad)"/>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.02" stroke-width="1">
          <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400"/>
        </g>
        <!-- Sound Waves representation -->
        <g fill="#f43f5e" fill-opacity="0.8">
          <!-- Frequency bars -->
          <rect x="50" y="85" width="6" height="20" rx="3"/>
          <rect x="62" y="70" width="6" height="50" rx="3" fill="#ec4899"/>
          <rect x="74" y="60" width="6" height="70" rx="3" fill="#8b5cf6"/>
          <rect x="86" y="75" width="6" height="40" rx="3"/>
          <rect x="98" y="80" width="6" height="30" rx="3"/>
          <rect x="110" y="65" width="6" height="60" rx="3" fill="#ec4899"/>
          <rect x="122" y="45" width="6" height="100" rx="3" fill="#8b5cf6" filter="drop-shadow(0 0 6px rgba(139,92,246,0.6))"/>
          <rect x="134" y="55" width="6" height="80" rx="3" fill="#f43f5e"/>
          <rect x="146" y="80" width="6" height="30" rx="3"/>
          <rect x="158" y="82" width="6" height="26" rx="3"/>
          
          <rect x="230" y="85" width="6" height="20" rx="3"/>
          <rect x="242" y="70" width="6" height="50" rx="3" fill="#ec4899"/>
          <rect x="254" y="50" width="6" height="90" rx="3" fill="#8b5cf6" filter="drop-shadow(0 0 6px rgba(139,92,246,0.6))"/>
          <rect x="266" y="75" width="6" height="40" rx="3"/>
          <rect x="278" y="60" width="6" height="70" rx="3" fill="#f43f5e"/>
          <rect x="290" y="65" width="6" height="60" rx="3"/>
          <rect x="302" y="80" width="6" height="30" rx="3"/>
          <rect x="314" y="85" width="6" height="20" rx="3"/>
        </g>
        <!-- Center Circular Wave Pulse -->
        <circle cx="200" cy="95" r="35" stroke="#f43f5e" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="4 4"/>
        <circle cx="200" cy="95" r="25" stroke="#ec4899" stroke-width="2" stroke-opacity="0.5"/>
        <circle cx="200" cy="95" r="15" fill="#8b5cf6" filter="drop-shadow(0 0 10px rgba(139,92,246,0.8))"/>
        <!-- Stereo indicator -->
        <text x="200" y="155" fill="#f43f5e" fill-opacity="0.5" font-family="monospace" font-size="9" text-anchor="middle">KERNEL PANIC / 180 BPM</text>
      </svg>
    `
  },

  {
    id: "bga",
    title: "Audio-Reactive 3D Visuals",
    category: "shaders",
    badgeClass: "badge-shaders",
    categoryLabel: "Visuals",
    shortDesc: "A single 3D object that morphs to a synth line in real time, built with three.js and audio analysis.",
    fullDesc: "An experiment in music-driven visuals. We split a track into harmonic and percussive parts, extract synth features at 60 fps, and map them onto one continuously morphing 3D form: low growls swell the body, formants ripple the surface, high harmonics grow glowing spikes, and synth stabs briefly freeze it into crystal. It plays live in the browser and renders to video with a headless browser.",
    platforms: ["three.js", "librosa", "Playwright"],
    features: [
      "Harmonic/percussive separation to ignore drums",
      "Synth features sampled at 60 fps",
      "Body, ripple, spike and crystal deformations",
      "Pitch drives wave count and color",
      "Real-time playback in the browser",
      "Frame-accurate video render pipeline"
    ],
    svgGraphic: `
      <svg viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="190" fill="#0b0e14"/>
        <defs>
          <linearGradient id="shGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05"/>
          </linearGradient>
          <linearGradient id="sphereGrad" x1="30%" y1="30%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#22d3ee"/>
            <stop offset="40%" stop-color="#0891b2"/>
            <stop offset="41%" stop-color="#0e7490"/>
            <stop offset="80%" stop-color="#155e75"/>
            <stop offset="81%" stop-color="#083344"/>
          </linearGradient>
        </defs>
        <rect width="400" height="190" fill="url(#shGrad)"/>
        <!-- Background Grid -->
        <g stroke="#ffffff" stroke-opacity="0.03" stroke-width="1">
          <path d="M0 30 H400 M0 60 H400 M0 90 H400 M0 120 H400 M0 150 H400"/>
          <path d="M50 0 V190 M100 0 V190 M150 0 V190 M200 0 V190 M250 0 V190 M300 0 V190 M350 0 V190"/>
        </g>
        <!-- Stylized Toon Water Waves -->
        <path d="M 0 160 Q 50 140 100 160 T 200 160 T 300 160 T 400 160 L 400 190 L 0 190 Z" fill="#0891b2" fill-opacity="0.5"/>
        <path d="M 0 170 Q 60 155 120 170 T 240 170 T 360 170 T 400 170 L 400 190 L 0 190 Z" fill="#0e7490" fill-opacity="0.8"/>
        <!-- Cel Shaded Sphere -->
        <circle cx="200" cy="85" r="45" fill="url(#sphereGrad)" stroke="#22d3ee" stroke-width="3" filter="drop-shadow(0 0 12px rgba(6, 182, 212, 0.4))"/>
        <!-- Rim Light effect overlay -->
        <path d="M 160 65 A 45 45 0 0 1 235 55 A 41 41 0 0 0 160 65" fill="#ffffff" fill-opacity="0.35"/>
        <circle cx="180" cy="65" r="6" fill="#ffffff" fill-opacity="0.7"/>
        <!-- Code / Math symbols representation -->
        <text x="30" y="50" fill="#22d3ee" fill-opacity="0.4" font-family="monospace" font-size="11">body = 40-250Hz</text>
        <text x="30" y="70" fill="#22d3ee" fill-opacity="0.4" font-family="monospace" font-size="11">edge = 1.5-6kHz</text>
        <text x="290" y="110" fill="#22d3ee" fill-opacity="0.3" font-family="monospace" font-size="10">stab: crystal</text>
        <text x="290" y="130" fill="#22d3ee" fill-opacity="0.3" font-family="monospace" font-size="10">pitch: hue</text>
      </svg>
    `
  }
];

// Element Selectors
const assetsGrid = document.getElementById("assets-grid");
const modalOverlay = document.getElementById("modal-overlay");

// Initialize Website
document.addEventListener("DOMContentLoaded", () => {
  renderAssets();
  setupModalListeners();
});

// Render Tech Grid
function renderAssets() {
  assetsGrid.innerHTML = "";

  ASSETS_DATA.forEach((asset, index) => {
    const assetCard = document.createElement("div");
    assetCard.className = "asset-card fade-in";
    assetCard.style.animationDelay = `${index * 0.05}s`;

    const platformsHtml = asset.platforms.map(p => `<span class="platform-tag">${p}</span>`).join("");

    assetCard.innerHTML = `
      <div class="asset-preview">
        ${asset.svgGraphic}
        <span class="asset-badge ${asset.badgeClass}">${asset.categoryLabel}</span>
      </div>
      <div class="asset-body">
        <h3 class="asset-title">${asset.title}</h3>
        <p class="asset-desc">${asset.shortDesc}</p>
        <div class="asset-footer">
          <div class="asset-platform">
            ${platformsHtml}
          </div>
          <button class="btn-card-cta" onclick="openAssetDetails('${asset.id}')">Details</button>
        </div>
      </div>
    `;
    assetsGrid.appendChild(assetCard);
  });
}

// Setup Modal
function setupModalListeners() {
  const closeBtn = document.getElementById("modal-close");
  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });
}

// Open Details Modal
function openAssetDetails(assetId) {
  const asset = ASSETS_DATA.find(a => a.id === assetId);
  if (!asset) return;

  document.getElementById("modal-graphic").innerHTML = asset.svgGraphic;
  document.getElementById("modal-title").textContent = asset.title;
  document.getElementById("modal-tags").innerHTML = `
    <span class="modal-tag" style="border-color: var(--accent-primary); color: #c084fc;">${asset.categoryLabel}</span>
    ${asset.platforms.map(p => `<span class="modal-tag">${p}</span>`).join("")}
  `;
  document.getElementById("modal-desc").textContent = asset.fullDesc;
  document.getElementById("modal-features-list").innerHTML = asset.features.map(f => `<li>${f}</li>`).join("");

  // Open Overlay
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close Details Modal
function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
