'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHighlight: boolean;
}

interface NetworkAnimationProps {
  className?: string;
}

export default function NetworkAnimation({ className = '' }: NetworkAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = window.innerWidth < 768 ? 40 : 120;
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      isHighlight: i % 12 === 0, // Every 12th node is a highlight
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (window.innerWidth >= 768) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    let animationId: number;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      const maxConnectionDistance = 180;
      const maxConnectionDistanceSq = maxConnectionDistance * maxConnectionDistance;
      const mouseRadius = 160;
      const mouseRadiusSq = mouseRadius * mouseRadius;
      const mouseInfluence: number[] = new Array(nodes.length).fill(0);

      // Update nodes and compute mouse influence
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Mouse interaction - attract toward cursor
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (mouseRadius - dist) / mouseRadius;
            mouseInfluence[i] = force;
            node.vx += (dx / dist) * force * 0.02;
            node.vy += (dy / dist) * force * 0.02;
          }
        }

        const speed = Math.hypot(node.vx, node.vy);
        if (speed > 0.7) {
          node.vx = (node.vx / speed) * 0.7;
          node.vy = (node.vy / speed) * 0.7;
        }
      });

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (j <= i) return;

          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < maxConnectionDistanceSq) {
            const distance = Math.sqrt(distanceSq);
            const baseOpacity = (1 - distance / maxConnectionDistance) * 0.4;
            const glowBoost = mouse.active
              ? Math.min(0.25, (mouseInfluence[i] + mouseInfluence[j]) * 0.35)
              : 0;
            ctx.strokeStyle = `rgba(34, 211, 238, ${baseOpacity + glowBoost})`;
            ctx.lineWidth = 0.5 + glowBoost * 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );

        if (node.isHighlight) {
          gradient.addColorStop(0, 'rgba(34, 211, 238, 0.9)');
          gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.4)');
          gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        gradient.addColorStop(0, 'rgba(96, 165, 250, 1)');
        gradient.addColorStop(1, 'rgba(96, 165, 250, 0.3)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (mouse.active) {
        const haloGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseRadius
        );
        haloGradient.addColorStop(0, 'rgba(34, 211, 238, 0.18)');
        haloGradient.addColorStop(0.6, 'rgba(34, 211, 238, 0.08)');
        haloGradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${className}`}>
        <div className="h-64 w-64 animate-pulse rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div className={`h-full w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
