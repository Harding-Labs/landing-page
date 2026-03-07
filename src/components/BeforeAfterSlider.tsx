'use client';

import { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updateSliderPosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl"
      style={{ aspectRatio: '16/10' }}
    >
      {/* Before image (full) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute right-4 top-4 rounded-full border border-cyan-400/40 bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-sky-400 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-transform hover:scale-110 active:scale-95">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M8 9l4-4 4 4M8 15l4 4 4-4"
              transform="rotate(90 12 12)"
            />
          </svg>
        </div>
      </div>

      {/* Instruction overlay (shows on hover) */}
      {sliderPosition === 50 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="rounded-full border border-white/40 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm">
            Hover to compare
          </div>
        </div>
      )}
    </div>
  );
}
