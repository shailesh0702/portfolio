"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  decay: number;
  spin: number;
  rotation: number;
}

const COLORS = ["#00F0FF", "#8B5CF6", "#FF6B35", "#4ADE80", "#FFB74D", "#FFFFFF"];

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const createParticle = (x: number, y: number) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 3.5 + 1.2;
      const speedX = (Math.random() - 0.5) * 1.5;
      const speedY = (Math.random() - 0.5) * 1.5 - 0.5;
      const alpha = 1;
      const decay = Math.random() * 0.015 + 0.008;
      const spin = (Math.random() - 0.5) * 0.1;
      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        alpha,
        decay,
        spin,
        rotation: Math.random() * Math.PI * 2,
      });
      if (particles.length > 120) {
        particles.shift();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn 1 to 2 sparkles on movement
      createParticle(e.clientX, e.clientY);
      if (Math.random() > 0.4) {
        createParticle(
          e.clientX + (Math.random() - 0.5) * 16,
          e.clientY + (Math.random() - 0.5) * 16
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
      rotation: number
    ) => {
      let rot = (Math.PI / 2) * 3 + rotation;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;
        p.rotation += p.spin;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        drawStar(ctx, p.x, p.y, 4, p.size * 2, p.size * 0.8, p.rotation);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
}

