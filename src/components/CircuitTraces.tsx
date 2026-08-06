"use client";

import { useEffect, useRef } from "react";

interface TracePoint {
  x: number;
  y: number;
}

interface Trace {
  points: TracePoint[];
  cumLengths: number[];
  totalLength: number;
}

interface Pulse {
  traceIndex: number;
  distance: number;
  speed: number;
  delay: number;
}

interface Ring {
  x: number;
  y: number;
  age: number;
}

const CELL = 22;
const RING_LIFE = 0.6;
const MOUSE_RADIUS = 210;

// 8 walk directions; adjacent indices are 45-degree turns, PCB-style.
const DIRS: ReadonlyArray<readonly [number, number]> = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

const TAIL: ReadonlyArray<readonly [number, number, number]> = [
  [10, 0.4, 18],
  [22, 0.22, 14],
  [36, 0.1, 10],
];

function pointAtDistance(trace: Trace, dist: number): TracePoint {
  const { points, cumLengths } = trace;
  if (dist <= 0) return points[0];
  for (let i = 1; i < points.length; i++) {
    if (cumLengths[i] >= dist) {
      const segLen = cumLengths[i] - cumLengths[i - 1];
      const f = segLen === 0 ? 0 : (dist - cumLengths[i - 1]) / segLen;
      return {
        x: points[i - 1].x + (points[i].x - points[i - 1].x) * f,
        y: points[i - 1].y + (points[i].y - points[i - 1].y) * f,
      };
    }
  }
  return points[points.length - 1];
}

export default function CircuitTraces({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let traces: Trace[] = [];
    let pulses: Pulse[] = [];
    let rings: Ring[] = [];
    let staticLayer: HTMLCanvasElement | null = null;
    const mouse = { x: 0, y: 0, active: false };

    // Pre-rendered glow sprite; far cheaper than per-frame shadowBlur.
    const glow = document.createElement("canvas");
    glow.width = 64;
    glow.height = 64;
    const glowCtx = glow.getContext("2d");
    if (glowCtx) {
      const grad = glowCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(190, 250, 240, 0.9)");
      grad.addColorStop(0.25, "rgba(45, 212, 191, 0.55)");
      grad.addColorStop(1, "rgba(45, 212, 191, 0)");
      glowCtx.fillStyle = grad;
      glowCtx.fillRect(0, 0, 64, 64);
    }

    const strokePath = (
      target: CanvasRenderingContext2D,
      points: TracePoint[],
    ) => {
      if (points.length === 0) return;
      target.beginPath();
      target.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        target.lineTo(points[i].x, points[i].y);
      }
      target.stroke();
    };

    // Random walk on a grid; occupancy keeps traces from overlapping.
    const generate = () => {
      const cols = Math.floor(width / CELL);
      const rows = Math.floor(height / CELL);
      traces = [];
      if (cols < 6 || rows < 6) return;

      const occupied = new Set<string>();
      const key = (c: number, r: number) => `${c},${r}`;
      const traceCount = Math.max(
        10,
        Math.min(30, Math.floor((width * height) / 42000)),
      );

      for (let t = 0; t < traceCount; t++) {
        let c = 0;
        let r = 0;
        let found = false;
        for (let attempt = 0; attempt < 40 && !found; attempt++) {
          c = 1 + Math.floor(Math.random() * (cols - 2));
          r = 1 + Math.floor(Math.random() * (rows - 2));
          if (!occupied.has(key(c, r))) found = true;
        }
        if (!found) break;

        occupied.add(key(c, r));
        const cells: Array<[number, number]> = [[c, r]];
        let dir = Math.floor(Math.random() * DIRS.length);
        const steps = 10 + Math.floor(Math.random() * 22);

        for (let s = 0; s < steps; s++) {
          if (Math.random() < 0.22) {
            dir = (dir + (Math.random() < 0.5 ? 1 : 7)) % DIRS.length;
          }
          let placed = false;
          for (let turn = 0; turn < 3 && !placed; turn++) {
            const [dx, dy] = DIRS[dir];
            const nc = c + dx;
            const nr = r + dy;
            if (
              nc >= 1 &&
              nc < cols - 1 &&
              nr >= 1 &&
              nr < rows - 1 &&
              !occupied.has(key(nc, nr))
            ) {
              c = nc;
              r = nr;
              occupied.add(key(c, r));
              cells.push([c, r]);
              placed = true;
            } else {
              dir = (dir + (Math.random() < 0.5 ? 1 : 7)) % DIRS.length;
            }
          }
          if (!placed) break;
        }

        if (cells.length < 5) continue;

        const points = cells.map(([cc, rr]) => ({
          x: cc * CELL + CELL / 2,
          y: rr * CELL + CELL / 2,
        }));
        const cumLengths = [0];
        for (let i = 1; i < points.length; i++) {
          cumLengths.push(
            cumLengths[i - 1] +
              Math.hypot(
                points[i].x - points[i - 1].x,
                points[i].y - points[i - 1].y,
              ),
          );
        }
        traces.push({
          points,
          cumLengths,
          totalLength: cumLengths[cumLengths.length - 1],
        });
      }
    };

    // Traces and end nodes never change between resizes, so draw them once.
    const drawStatic = () => {
      staticLayer = document.createElement("canvas");
      staticLayer.width = Math.round(width * dpr);
      staticLayer.height = Math.round(height * dpr);
      const sctx = staticLayer.getContext("2d");
      if (!sctx) return;
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sctx.lineJoin = "round";
      sctx.lineCap = "round";
      sctx.strokeStyle = "rgba(45, 212, 191, 0.13)";
      sctx.lineWidth = 1;
      for (const trace of traces) {
        strokePath(sctx, trace.points);
      }
      for (const trace of traces) {
        const ends = [trace.points[0], trace.points[trace.points.length - 1]];
        for (const p of ends) {
          sctx.fillStyle = "rgba(45, 212, 191, 0.38)";
          sctx.beginPath();
          sctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          sctx.fill();
          sctx.fillStyle = "rgba(242, 245, 244, 0.55)";
          sctx.beginPath();
          sctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          sctx.fill();
        }
      }
    };

    const respawn = (pulse: Pulse) => {
      if (traces.length === 0) return;
      pulse.traceIndex = Math.floor(Math.random() * traces.length);
      pulse.distance = 0;
      pulse.speed = 50 + Math.random() * 90;
      pulse.delay = 0.4 + Math.random() * 2.6;
    };

    const initPulses = () => {
      if (traces.length === 0) {
        pulses = [];
        return;
      }
      const count = Math.max(6, Math.floor(traces.length * 0.7));
      pulses = Array.from({ length: count }, () => {
        const pulse: Pulse = { traceIndex: 0, distance: 0, speed: 0, delay: 0 };
        respawn(pulse);
        pulse.delay = Math.random() * 3;
        return pulse;
      });
      rings = [];
    };

    const blitStatic = () => {
      ctx.clearRect(0, 0, width, height);
      if (staticLayer) ctx.drawImage(staticLayer, 0, 0, width, height);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generate();
      drawStatic();
      initPulses();
      if (reducedMotion) blitStatic();
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer && !reducedMotion) {
      window.addEventListener("mousemove", onMouseMove);
      document.documentElement.addEventListener("mouseleave", onMouseLeave);
    }

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      blitStatic();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      if (mouse.active) {
        for (const trace of traces) {
          let minD = Infinity;
          for (let i = 0; i < trace.points.length; i += 2) {
            const d = Math.hypot(
              trace.points[i].x - mouse.x,
              trace.points[i].y - mouse.y,
            );
            if (d < minD) minD = d;
          }
          if (minD < MOUSE_RADIUS) {
            const a = (1 - minD / MOUSE_RADIUS) * 0.38;
            ctx.strokeStyle = `rgba(45, 212, 191, ${a.toFixed(3)})`;
            ctx.lineWidth = 1.2;
            strokePath(ctx, trace.points);
          }
        }
      }

      ctx.globalCompositeOperation = "lighter";

      if (mouse.active) {
        const halo = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          MOUSE_RADIUS,
        );
        halo.addColorStop(0, "rgba(45, 212, 191, 0.08)");
        halo.addColorStop(1, "rgba(45, 212, 191, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const pulse of pulses) {
        if (pulse.delay > 0) {
          pulse.delay -= dt;
          continue;
        }
        const trace = traces[pulse.traceIndex];
        if (!trace) {
          respawn(pulse);
          continue;
        }
        const head = pointAtDistance(trace, pulse.distance);

        let speed = pulse.speed;
        if (mouse.active) {
          const d = Math.hypot(head.x - mouse.x, head.y - mouse.y);
          if (d < MOUSE_RADIUS) speed *= 1 + (1 - d / MOUSE_RADIUS) * 1.6;
        }
        pulse.distance += speed * dt;

        if (pulse.distance >= trace.totalLength) {
          const end = trace.points[trace.points.length - 1];
          rings.push({ x: end.x, y: end.y, age: 0 });
          respawn(pulse);
          continue;
        }

        for (const [offset, alpha, size] of TAIL) {
          const d = pulse.distance - offset;
          if (d <= 0) continue;
          const p = pointAtDistance(trace, d);
          ctx.globalAlpha = alpha;
          ctx.drawImage(glow, p.x - size / 2, p.y - size / 2, size, size);
        }
        ctx.globalAlpha = 1;
        ctx.drawImage(glow, head.x - 13, head.y - 13, 26, 26);
        ctx.fillStyle = "rgba(230, 255, 250, 0.9)";
        ctx.beginPath();
        ctx.arc(head.x, head.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      rings = rings.filter((ring) => ring.age < RING_LIFE);
      for (const ring of rings) {
        ring.age += dt;
        const t = ring.age / RING_LIFE;
        ctx.strokeStyle = `rgba(45, 212, 191, ${(0.45 * (1 - t)).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, 3 + t * 22, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(frame);
    };

    if (!reducedMotion) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className={`h-full w-full ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
