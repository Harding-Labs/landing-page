// Server component: renders raw HTML overlay that shows BEFORE hydration.
// The inline script handles sessionStorage check and auto-removal.

export default function LoadingAnimation() {
  const overlayHTML = `
    <div id="hl-loader" style="position:fixed;inset:0;z-index:9999;background:#0a0a0a;display:flex;align-items:center;justify-content:center;">
      <div style="position:relative;width:180px;height:180px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;inset:10px;border-radius:999px;background:radial-gradient(circle,rgba(45,212,191,0.3) 0%,rgba(45,212,191,0) 70%);filter:blur(22px);opacity:0.75;"></div>
        <svg viewBox="0 0 120 120" fill="none" style="width:130px;height:130px;filter:drop-shadow(0 0 16px rgba(45,212,191,0.75));animation:hl-glow 1.9s ease forwards;">
          <g stroke="#2DD4BF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path
              pathLength="1"
              d="M28 22 V46 H60 V54 H92 H60 V46 H28 V74 H44 V82 H28 V98"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1.15s ease forwards;"
            />
            <path
              pathLength="1"
              d="M92 22 V98"
              style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:120ms;"
            />
          </g>
          <g style="opacity:0;animation:hl-bolt 0.5s ease forwards;animation-delay:1.15s;">
            <path d="M72 34 L60 62 L70 62 L62 88 L86 56 L74 56 Z" fill="#FFFFFF" opacity="0.35" />
          </g>
          <g style="opacity:0;animation:hl-node 0.9s ease forwards;animation-delay:0.85s;">
            <circle cx="28" cy="22" r="10.5" fill="#2DD4BF" />
            <circle cx="92" cy="22" r="10.5" fill="#2DD4BF" />
            <circle cx="28" cy="98" r="10.5" fill="#2DD4BF" />
            <circle cx="92" cy="98" r="10.5" fill="#2DD4BF" />
            <circle cx="28" cy="22" r="4.5" fill="#FFFFFF" />
            <circle cx="92" cy="22" r="4.5" fill="#FFFFFF" />
            <circle cx="28" cy="98" r="4.5" fill="#FFFFFF" />
            <circle cx="92" cy="98" r="4.5" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    </div>
    <style>
      @keyframes hl-draw{0%{stroke-dashoffset:1;opacity:.2}70%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}
      @keyframes hl-node{0%,70%{opacity:0}100%{opacity:1}}
      @keyframes hl-bolt{0%,40%{opacity:0}100%{opacity:1}}
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
        el.style.animation='hl-fade 1.8s ease forwards';
        setTimeout(function(){el.remove();},1900);
      })();
    </script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: overlayHTML }} />;
}
