// In-house Tech
const ASSETS_DATA = [
  {
    id: "toon-shaders",
    title: "Swem Stylized Toon Shaders",
    category: "shaders",
    badgeClass: "badge-shaders",
    categoryLabel: "Shaders",
    shortDesc: "A complete collection of high-fidelity toon shaders including dynamic stylized water, custom outline post-processing, and multi-band cel shaders for Unity URP.",
    fullDesc: "Our stylized rendering stack, built for the look of our own games. Optimized, production-ready shaders tuned for mobile and PC hardware, with customizable specular highlights, shadow bands, rim lighting, and a depth-based stylized water shader with procedural foam.",
    platforms: ["Unity URP", "Unity HDRP"],
    features: [
      "Dynamic procedural cel shading",
      "Depth-based toon water with custom foam lines",
      "Stretched outline shaders (vertex extrusion & post-process)",
      "Interactive wind-blown grass and foliage shaders",
      "Optimized for mobile, PC, and consoles",
      "Demo scene and presets for fast iteration"
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
        <text x="30" y="50" fill="#22d3ee" fill-opacity="0.4" font-family="monospace" font-size="11">half4 toon_spec = ...</text>
        <text x="30" y="70" fill="#22d3ee" fill-opacity="0.4" font-family="monospace" font-size="11">o.normal = v.normal</text>
        <text x="290" y="110" fill="#22d3ee" fill-opacity="0.3" font-family="monospace" font-size="10">float shadow = NdotL</text>
        <text x="290" y="130" fill="#22d3ee" fill-opacity="0.3" font-family="monospace" font-size="10">col * shadow_band</text>
      </svg>
    `
  },
  {
    id: "ai-behavior",
    title: "Smart AI Behavior Tree Editor",
    category: "tools",
    badgeClass: "badge-tools",
    categoryLabel: "Editor Tools",
    shortDesc: "An advanced, node-based visual AI script editor. Easily build complex NPC decisions, state transitions, and behaviors without writing code.",
    fullDesc: "The node-based editor our designers use to author NPC behavior. A drag-and-drop workspace with visual execution debugging, custom actions and conditional nodes, integrated with NavMesh and A* Pathfinding. It is also the foundation for our Claude-powered NPC R&D: designers define the behavior tree, and Claude handles dialogue inside those boundaries.",
    platforms: ["Unity Editor", "C# API", "JSON export"],
    features: [
      "Infinite canvas with panning and zooming controls",
      "Live execution highlighting (watch NPC decisions in playmode)",
      "Dozens of built-in nodes: Selector, Sequence, Parallel, Inverter, Cooldown",
      "Seamless C# API to write custom Actions and Conditions",
      "Blackboard system for state and global variable sharing",
      "Export trees to JSON or binary scriptable assets"
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
        <text x="200" y="36" fill="#f3f4f6" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ROOT (Selector)</text>
        <!-- Action Node Left -->
        <rect x="65" y="95" width="90" height="30" rx="4" fill="#0f172a" stroke="#8b5cf6" stroke-width="1"/>
        <text x="110" y="114" fill="#e2e8f0" font-family="sans-serif" font-size="9" text-anchor="middle">Sequence: Chase</text>
        <!-- Action Node Right (Active Node) -->
        <rect x="245" y="95" width="90" height="30" rx="4" fill="#1e1b4b" stroke="#ec4899" stroke-width="1.5" filter="drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))"/>
        <text x="290" y="114" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">Action: Attack</text>
        <!-- Child Nodes -->
        <rect x="25" y="160" width="70" height="20" rx="3" fill="#020617" stroke="#475569" stroke-width="1"/>
        <text x="60" y="173" fill="#94a3b8" font-family="sans-serif" font-size="8" text-anchor="middle">IsPlayerNear?</text>
        <rect x="125" y="160" width="70" height="20" rx="3" fill="#020617" stroke="#475569" stroke-width="1"/>
        <text x="160" y="173" fill="#94a3b8" font-family="sans-serif" font-size="8" text-anchor="middle">MoveToPlayer</text>
      </svg>
    `
  },
  {
    id: "dungeon-kit",
    title: "Retro Dungeon Modular Kit",
    category: "3d",
    badgeClass: "badge-3d",
    categoryLabel: "3D Assets",
    shortDesc: "A complete kit of low-poly modular dungeon building blocks. Includes high-quality styled meshes, pre-configured collisions, and interactive objects.",
    fullDesc: "A grid-aligned modular kit we use to block out and build dungeon levels in minutes: wall tiles, arches, columns, steps, floor layouts, interactive chests and lit torch particle systems.",
    platforms: ["Unity Prefabs", "FBX"],
    features: [
      "120+ unique low-poly modular models",
      "Stylized hand-painted custom texturing",
      "Fully optimized vertex budgets (averaging 300 polys per object)",
      "PBR shader setup (Albedo, Metallic/Smoothness, Normal, Emissive)",
      "Interactive components: chests, opening doors, trap triggers",
      "Fully configured collider boundaries for instant placement"
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
    id: "cyberpunk-audio",
    title: "Cyberpunk City Soundscape SFX",
    category: "audio",
    badgeClass: "badge-audio",
    categoryLabel: "Audio Packs",
    shortDesc: "An immersive, high-quality audio asset package for futuristic games. Includes atmospheric street loops, interface chimes, neon drones, and ambient SFX.",
    fullDesc: "Our ambient audio library for futuristic settings: WAV loops and hits for city ambience, hacking interfaces, flying vehicles, neon street noise and analog synth pads, pre-wired into Unity Audio Mixers.",
    platforms: ["WAV 24-bit/48kHz", "Unity"],
    features: [
      "80+ total sound files in high fidelity WAV format",
      "Seamless ambient loops (averaging 1-minute loop duration)",
      "Mixed and mastered for in-game use",
      "Pre-configured Unity Audio Mixers and Sound Cue templates",
      "Includes mechanical clicks, electronic HUD sweeps, warning buzzers",
      "Optimized file compression options for mobile platforms"
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
        <text x="200" y="155" fill="#f43f5e" fill-opacity="0.5" font-family="monospace" font-size="9" text-anchor="middle">24-BIT STEREO / 48kHz WAV</text>
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
