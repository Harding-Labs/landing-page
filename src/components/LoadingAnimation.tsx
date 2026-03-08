// Server component: renders raw HTML overlay that shows BEFORE hydration.
// The inline script handles sessionStorage check and auto-removal.

export default function LoadingAnimation() {
  const overlayHTML = `
    <div id="hl-loader" style="position:fixed;inset:0;z-index:9999;background:#0a0a0a;display:flex;align-items:center;justify-content:center;">
      <div style="position:relative;width:180px;height:180px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;inset:10px;border-radius:999px;background:radial-gradient(circle,rgba(0,212,255,0.25) 0%,rgba(0,212,255,0) 70%);filter:blur(20px);opacity:0.7;"></div>
        <svg viewBox="0 0 120 120" fill="none" stroke="#00d4ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="width:120px;height:120px;filter:drop-shadow(0 0 14px rgba(0,212,255,0.7));animation:hl-glow 1.8s ease forwards;">
          <path pathLength="1" d="M30 18V102" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;" />
          <path pathLength="1" d="M90 18V102" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:80ms;" />
          <path pathLength="1" d="M30 60H90" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:160ms;" />
          <path pathLength="1" d="M30 32H18" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:240ms;" />
          <path pathLength="1" d="M30 88H18" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:320ms;" />
          <path pathLength="1" d="M90 32H102" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:400ms;" />
          <path pathLength="1" d="M90 88H102" style="stroke-dasharray:1;stroke-dashoffset:1;animation:hl-draw 1s ease forwards;animation-delay:480ms;" />
          <circle cx="18" cy="32" r="3" fill="#00d4ff" style="opacity:0;animation:hl-node 1s ease forwards;animation-delay:240ms;" />
          <circle cx="18" cy="88" r="3" fill="#00d4ff" style="opacity:0;animation:hl-node 1s ease forwards;animation-delay:320ms;" />
          <circle cx="102" cy="32" r="3" fill="#00d4ff" style="opacity:0;animation:hl-node 1s ease forwards;animation-delay:400ms;" />
          <circle cx="102" cy="88" r="3" fill="#00d4ff" style="opacity:0;animation:hl-node 1s ease forwards;animation-delay:480ms;" />
        </svg>
      </div>
    </div>
    <style>
      @keyframes hl-draw{0%{stroke-dashoffset:1;opacity:.2}70%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}
      @keyframes hl-node{0%,70%{opacity:0}100%{opacity:1}}
      @keyframes hl-glow{0%,60%{transform:scale(1);filter:drop-shadow(0 0 14px rgba(0,212,255,.7))}72%{transform:scale(1.04);filter:drop-shadow(0 0 24px rgba(0,212,255,.95))}85%,100%{transform:scale(1);filter:drop-shadow(0 0 14px rgba(0,212,255,.7))}}
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
