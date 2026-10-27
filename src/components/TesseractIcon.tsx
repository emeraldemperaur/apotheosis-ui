import React, { useEffect, useRef } from 'react';
import Zdog from 'zdog';

export interface TesseractIconProps {
  width?: number;
  height?: number;
  color?: string;
  speed?: number;
  className?: string;
}

const TesseractIcon: React.FC<TesseractIconProps> = ({
  width = 450,
  height = 450,
  color = '#ffffff',
  speed = 1,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reqRef = useRef<number>(0);
  const isRotating = useRef<boolean>(true);
  const illoRef = useRef<Zdog.Illustration | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const BOX_SIZE = 450;
    const STROKE_SIZE = 20;
    const OUTER_SIZE = 250;
    const INNER_SIZE = 100;
    
    const O2 = OUTER_SIZE / 2;
    const I2 = INNER_SIZE / 2;
    const IDK_SIZE = Math.sqrt(Math.pow((OUTER_SIZE - INNER_SIZE) / 2, 2) * 2);
    const S = STROKE_SIZE;
    const M = IDK_SIZE / 2 + S; 

    const minDim = Math.min(width, height);
    const zoom = minDim / BOX_SIZE;

    const illo = new Zdog.Illustration({
      element: canvasRef.current,
      dragRotate: true,
      zoom: zoom,
      onDragStart: () => { isRotating.current = false; },
      onDragEnd: () => { isRotating.current = true; }
    });
    illoRef.current = illo;

    const so = new Zdog.Rect({
      addTo: illo, width: OUTER_SIZE, height: OUTER_SIZE,
      stroke: STROKE_SIZE, color: color,
      translate: { z: O2 }
    });
    so.copy({ translate: { z: -O2 } });
    so.copy({ translate: { x: -O2 }, rotate: { y: Zdog.TAU / 4 } });
    so.copy({ translate: { x: O2 }, rotate: { y: Zdog.TAU / 4 } });

    const si = new Zdog.Rect({
      addTo: illo, width: INNER_SIZE, height: INNER_SIZE,
      stroke: STROKE_SIZE, color: color,
      translate: { z: I2 }
    });
    si.copy({ translate: { z: -I2 } });
    si.copy({ translate: { x: -I2 }, rotate: { y: Zdog.TAU / 4 } });
    si.copy({ translate: { x: I2 }, rotate: { y: Zdog.TAU / 4 } });

    const diagonals = [
      [{ x: -O2, y: -O2, z: O2 }, { x: -O2 + M, y: -O2 + M, z: O2 - M }],
      [{ x: O2, y: -O2, z: O2 }, { x: O2 - M, y: -O2 + M, z: O2 - M }],
      [{ x: -O2, y: O2, z: O2 }, { x: -O2 + M, y: O2 - M, z: O2 - M }],
      [{ x: O2, y: O2, z: O2 }, { x: O2 - M, y: O2 - M, z: O2 - M }],
      [{ x: -O2, y: -O2, z: -O2 }, { x: -O2 + M, y: -O2 + M, z: -O2 + M }],
      [{ x: O2, y: -O2, z: -O2 }, { x: O2 - M, y: -O2 + M, z: -O2 + M }],
      [{ x: -O2, y: O2, z: -O2 }, { x: -O2 + M, y: O2 - M, z: -O2 + M }],
      [{ x: O2, y: O2, z: -O2 }, { x: O2 - M, y: O2 - M, z: -O2 + M }]
    ];

    diagonals.forEach(path => {
      new Zdog.Shape({
        addTo: illo,
        path: path,
        stroke: STROKE_SIZE,
        color: color
      });
    });

    const animate = () => {
      if (isRotating.current) {
        illo.rotate.x -= 0.005 * speed;
        illo.rotate.y += 0.015 * speed;
      }
      illo.updateRenderGraph();
      reqRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      // Type assertion added to bypass missing interface definition
      (illo as any).children = []; 
    };
  }, [width, height, speed]); 

  useEffect(() => {
    if (illoRef.current) {
      // Type assertion added to bypass missing interface definition
      (illoRef.current as any).children.forEach((child: any) => {
        child.color = color;
      });
    }
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: 'block',
        outline: 'none',
        touchAction: 'none',
        cursor: 'grab',
        backgroundColor: 'transparent'
      }}
    />
  );
};

export default TesseractIcon;