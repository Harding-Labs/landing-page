// Server component: renders raw HTML overlay BEFORE React hydrates.
// SVG traces match the actual Harding Labs circuit-board H logo.

export default function LoadingAnimation() {
  const overlayHTML = `
    <div id="hl-loader" style="position:fixed;inset:0;z-index:9999;background:#0a0a0a;display:flex;align-items:center;justify-content:center;">
      <div style="position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;inset:10px;border-radius:999px;background:radial-gradient(circle,rgba(45,212,191,0.3) 0%,rgba(45,212,191,0) 70%);filter:blur(22px);opacity:0.75;"></div>
        <svg viewBox="0 0 120 120" fill="none" style="width:150px;height:150px;filter:drop-shadow(0 0 16px rgba(45,212,191,0.75));animation:hl-glow 1.9s ease forwards;">
          <!-- Circuit traces -->
          <g stroke="#2DD4BF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <!-- Left vertical bar with bottom circuit bend -->
            <path pathLength="1" d="M26 18 V72 H38 V82 H26 V102"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;" />
            <!-- Right vertical bar (straight) -->
            <path pathLength="1" d="M94 18 V102"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 0.9s ease forwards;animation-delay:100ms;" />
            <!-- Crossbar with zigzag step pattern -->
            <path pathLength="1" d="M26 42 H44 V52 H76 V42 H94"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:200ms;" />
            <!-- Small right-bar stub near top -->
            <path pathLength="1" d="M94 30 H82"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 0.6s ease forwards;animation-delay:350ms;" />
          </g>
          <!-- Lightning bolt (fades in after traces draw) -->
          <g style="opacity:0;animation:hl-bolt 0.5s ease forwards;animation-delay:1.1s;">
            <path d="M70 30 L58 58 H68 L60 90 L84 52 H72 Z" fill="#FFFFFF" opacity="0.3" />
          </g>
          <!-- Corner nodes: teal circles with white centers -->
          <g style="opacity:0;animation:hl-node 0.7s ease forwards;animation-delay:0.8s;">
            <circle cx="26" cy="18" r="9" fill="#2DD4BF" />
            <circle cx="94" cy="18" r="9" fill="#2DD4BF" />
            <circle cx="26" cy="102" r="9" fill="#2DD4BF" />
            <circle cx="94" cy="102" r="9" fill="#2DD4BF" />
            <circle cx="26" cy="18" r="4" fill="#FFFFFF" />
            <circle cx="94" cy="18" r="4" fill="#FFFFFF" />
            <circle cx="26" cy="102" r="4" fill="#FFFFFF" />
            <circle cx="94" cy="102" r="4" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
    <style>
      @keyframes hl-draw{0%{stroke-dashoffset:1;opacity:.2}70%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}
      @keyframes hl-node{0%,60%{opacity:0}100%{opacity:1}}
      @keyframes hl-bolt{0%,30%{opacity:0}100%{opacity:1}}
      @keyframes hl-glow{0%,60%{transform:scale(1);filter:drop-shadow(0 0 16px rgba(45,212,191,.75))}72%{transform:scale(1.05);filter:drop-shadow(0 0 28px rgba(45,212,191,.95))}85%,100%{transform:scale(1);filter:drop-shadow(0 0 16px rgba(45,212,191,.75))}}
      @keyframes hl-fade{0%,70%{opacity:1}100%{opacity:0;pointer-events:none}}
    </style>
    <script>
      (function(){
        var k='hl-loader-played';
        var el=document.getElementById('hl-loader');
        if(!el)return;
        if(sessionStorage.getItem(k)==='1'){el.remove();return;}
        sessionStorage.setItem(k,'1');
        el.style.animation='hl-fade 1.9s ease forwards';
        setTimeout(function(){el.remove();},2000);
      })();
    </script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: overlayHTML }} />;
}
