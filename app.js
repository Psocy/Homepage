// In-house Tech
const ASSETS_DATA = [
  {
    id: "megastructure",
    title: "Megastructure Generator",
    category: "3d",
    badgeClass: "badge-shaders",
    categoryLabel: "World Gen",
    shortDesc: "Seeded chunk generator for an endless, 13-level megastructure, with every chunk proven walkable before it loads.",
    fullDesc: "The heart of RuinBound. Each chunk is generated from the world seed and its coordinates on a worker thread: a graph of shafts, halls and corridors first, then stairs, ladders and airlocks to its neighbours. A pathfinding validator built on the player's real movement numbers (jump height, ledges, ladders, safe falls) checks that every part is reachable and repairs it if not. Regions, interior themes and macro features like canyons, megashafts and hanging cities are layered on top, and a floating origin keeps precision as players travel for kilometres.",
    platforms: ["Godot 4", "GDScript", "Worker threads"],
    features: [
      "Endless horizontally, 13 levels vertically",
      "Chunks built on worker threads, freed when left behind",
      "Reachability validator with automatic repair",
      "Canyon networks, megashafts, hanging cities",
      "Regions every kilometre with their own themes",
      "Deterministic: co-op peers verify chunk checksums"
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
    id: "regression-bots",
    title: "Regression Bot Suite",
    category: "tools",
    badgeClass: "badge-tools",
    categoryLabel: "QA Tools",
    shortDesc: "60+ headless Godot bots that play RuinBound after every change: world generation, co-op sync, movement and combat.",
    fullDesc: "Our automated playtesters. Each bot boots the game headless and drives one slice of it: generating and validating the megastructure across hundreds of seeds, walking from chunk to chunk on autopilot, flying, jumping and climbing ladders, fighting, or hosting and joining a real co-op session to compare world checksums. A Python runner launches several at once on free slots, and screenshot bots capture views for review. We built the suite with Claude Code, and it is what lets us change a procedural co-op game safely.",
    platforms: ["Godot 4", "GDScript", "Python"],
    features: [
      "60+ focused bots (world, seams, fly, jump, fight...)",
      "Host + client co-op bots compare world checksums",
      "Generation checked across hundreds of seeds",
      "Autopilot walks the player chunk to chunk",
      "Parallel runs on automatic free slots",
      "Screenshot bots for visual review"
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
    title: "Creature & Prop Pipeline",
    category: "shaders",
    badgeClass: "badge-3d",
    categoryLabel: "Art Pipeline",
    shortDesc: "Headless Blender, Houdini and Substance scripts that sculpt our bio-weapons and build bosses and props.",
    fullDesc: "Instead of modelling every asset by hand, we describe them in code and let Claude Code drive the tools headless. Houdini and Blender scripts sculpt bio-weapon creatures like the Ivory Seraph and the MycoReaver, part libraries assemble mechanical bosses and props, and Substance scripts bake their textures, then everything is exported straight into Godot with preview renders for review.",
    platforms: ["Blender", "Houdini", "Substance"],
    features: [
      "Bio-weapon creatures sculpted from scripts",
      "Bosses and props assembled from part libraries",
      "Substance bakes driven from Python",
      "Preview renders for every revision",
      "Export straight into Godot",
      "One-command rebuilds per asset"
    ],
    svgGraphic: `<img src="img/mycoreaver.jpg" alt="MycoReaver render">`
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
