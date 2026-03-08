"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "hl-loader-played";
const TOTAL_DURATION_MS = 1800;
const DRAW_DURATION_MS = 1000;

export default function LoadingAnimation() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const shouldSkip = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    if (shouldSkip) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(true);

    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
    }, TOTAL_DURATION_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: `loader-fade ${TOTAL_DURATION_MS}ms ease forwards`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "10px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0) 70%)",
            filter: "blur(20px)",
            opacity: 0.7,
          }}
        />
        <svg
          viewBox="0 0 120 120"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: "120px",
            height: "120px",
            filter: "drop-shadow(0 0 14px rgba(0,212,255,0.7))",
            animation: `loader-glow ${TOTAL_DURATION_MS}ms ease forwards`,
          }}
        >
          <g>
            <path
              pathLength={1}
              d="M30 18V102"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
              }}
            />
            <path
              pathLength={1}
              d="M90 18V102"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "80ms",
              }}
            />
            <path
              pathLength={1}
              d="M30 60H90"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "160ms",
              }}
            />
            <path
              pathLength={1}
              d="M30 32H18"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "240ms",
              }}
            />
            <path
              pathLength={1}
              d="M30 88H18"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "320ms",
              }}
            />
            <path
              pathLength={1}
              d="M90 32H102"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "400ms",
              }}
            />
            <path
              pathLength={1}
              d="M90 88H102"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: `loader-draw ${DRAW_DURATION_MS}ms ease forwards`,
                animationDelay: "480ms",
              }}
            />
          </g>
          <circle
            cx="18"
            cy="32"
            r="3"
            fill="#00d4ff"
            style={{
              opacity: 0,
              animation: `loader-node ${DRAW_DURATION_MS}ms ease forwards`,
              animationDelay: "240ms",
            }}
          />
          <circle
            cx="18"
            cy="88"
            r="3"
            fill="#00d4ff"
            style={{
              opacity: 0,
              animation: `loader-node ${DRAW_DURATION_MS}ms ease forwards`,
              animationDelay: "320ms",
            }}
          />
          <circle
            cx="102"
            cy="32"
            r="3"
            fill="#00d4ff"
            style={{
              opacity: 0,
              animation: `loader-node ${DRAW_DURATION_MS}ms ease forwards`,
              animationDelay: "400ms",
            }}
          />
          <circle
            cx="102"
            cy="88"
            r="3"
            fill="#00d4ff"
            style={{
              opacity: 0,
              animation: `loader-node ${DRAW_DURATION_MS}ms ease forwards`,
              animationDelay: "480ms",
            }}
          />
        </svg>
      </div>
      <style>{`
        @keyframes loader-draw {
          0% {
            stroke-dashoffset: 1;
            opacity: 0.2;
          }
          70% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes loader-node {
          0% {
            opacity: 0;
          }
          70% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes loader-glow {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 14px rgba(0,212,255,0.7));
          }
          60% {
            transform: scale(1);
            filter: drop-shadow(0 0 14px rgba(0,212,255,0.7));
          }
          72% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 24px rgba(0,212,255,0.95));
          }
          85% {
            transform: scale(1);
            filter: drop-shadow(0 0 18px rgba(0,212,255,0.8));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 14px rgba(0,212,255,0.7));
          }
        }

        @keyframes loader-fade {
          0% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
