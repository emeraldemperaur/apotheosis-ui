import React, { useEffect, useRef } from 'react';

export interface FallingSquaresProps {
  color?: string;
  maxSquares?: number;
  darkMode?: boolean;
}

const FallingSquares: React.FC<FallingSquaresProps> = ({ 
  darkMode = false,
  color = '#ffffff', 
  maxSquares = darkMode ? 500 : 500,
    
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let elements: (SquareElement | null)[] = new Array(maxSquares).fill(null);
    
    let activeSquares = window.innerWidth < 768 ? Math.min(maxSquares, 150) : maxSquares;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      activeSquares = window.innerWidth < 768 ? Math.min(maxSquares, 150) : maxSquares;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class SquareElement {
      x: number; y: number;
      width: number; height: number;
      rot: number; slide: number; fall: number;
      rotationState: number;

      constructor(x: number, y: number, w: number, h: number, rot: number, slide: number, fall: number) {
        this.x = x; this.y = y;
        this.width = w; this.height = h;
        this.rot = rot; this.slide = slide; this.fall = fall;
        this.rotationState = 0;
      }

      draw(ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number) {
        if (
          mouseX > this.x - this.width && mouseX < this.x + this.width &&
          mouseY > this.y - this.height && mouseY < this.y + this.height
        ) {
          this.x = mouseX - this.width / 2;
          this.y = mouseY - this.height / 2;
        } else {
          this.x += this.slide;
          this.y += this.fall;
        }

        this.rotationState += this.rot;
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate((this.rotationState * Math.PI) / 180);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.strokeRect(0 - this.width / 2, 0 - this.height / 2, this.width, this.height);
        ctx.restore();
      }

      checkIfOut(canvasWidth: number, canvasHeight: number) {
        return this.y > canvasHeight || this.x > canvasWidth || this.x + this.width < 0;
      }
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = 0; i < activeSquares; i++) {
        let o = elements[i];
        if (!o) {
          o = new SquareElement(
            rect.width * Math.random(),
            -50 - Math.random() * 200, 
            40, 40, 
            (10 * Math.random()) / 3, 
            (4 * (Math.random() * 2 - 1)) / 3, 
            (10 * Math.random() + 2) / 3 
          );
        }

        o.draw(ctx, mouseRef.current.x, mouseRef.current.y);

        if (o.checkIfOut(rect.width, rect.height)) {
          o = null;
        }
        elements[i] = o;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, maxSquares]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default FallingSquares;