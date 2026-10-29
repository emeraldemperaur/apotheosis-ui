import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GnosisOrbProps {
    width?: string;
    height?: string;
    color?: string; // Retained for prop compatibility, but ignored in the shader to enforce monochrome
}

const vertexShader = `
    varying vec2 vUv;
    uniform float u_time;
    
    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        float warpsScale = length(modelPosition.xy);

        modelPosition.xyz += warpsScale * 0.1 * cos(3.0 * modelPosition.yzx + u_time);
        modelPosition.xyz += warpsScale * 0.05 * cos(11.0 * modelPosition.yzx + u_time);
        modelPosition.xyz += warpsScale * 0.025 * cos(17.0 * modelPosition.yzx + u_time);

        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;
        vUv = uv;
    }
`;

const fragmentShader = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;
    varying vec2 vUv;

    void uvRipple(inout vec2 uv, float intensity) {
        vec2 p = uv - 0.5;
        float cLength = length(p);
        uv = uv + (p / cLength) * cos(cLength * 15.0 - u_time * 0.5) * intensity;
    }

    void main() {
        vec2 uv = vUv;
        uvRipple(uv, 0.05);

        // Pure Monochrome Grid Logic
        vec3 color = vec3(1.0);
        color = mix(color, 1.0 - color, step(fract(uv.x * 8.0), 0.5));
        color = mix(color, 1.0 - color, step(fract(uv.y * 8.0), 0.5));
        color = mix(color, 1.0 - color, step(fract(uv.x * 100.0), 0.1));
        color = mix(color, 1.0 - color, step(fract(uv.y * 100.0), 0.1));

        // Hard opaque output, exactly like the original reference
        gl_FragColor = vec4(color, 1.0);
    }
`;

const GnosisOrb: React.FC<GnosisOrbProps> = ({ width = '100%', height = '100%' }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        if (!mountRef.current) return;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        
        // Orthographic camera accurately maps the 2D sphere to the viewport bounds
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        // Set alpha: true so the background remains transparent behind the sphere
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const clock = new THREE.Clock();

        const uniforms = {
            u_time: { value: 1.0 },
            u_resolution: { value: new THREE.Vector2() }
        };

        // Restored original 320x320 high-fidelity geometry to prevent grid aliasing
        const geometry = new THREE.SphereGeometry(0.7, 320, 320);
        const material = new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.DoubleSide,
            uniforms,
            vertexShader,
            fragmentShader
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const handleResize = () => {
            if (!container) return;
            const { clientWidth, clientHeight } = container;
            renderer.setSize(clientWidth, clientHeight);
            uniforms.u_resolution.value.set(clientWidth, clientHeight);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const animate = () => {
            uniforms.u_time.value = clock.getElapsedTime();
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.005;
            renderer.render(scene, camera);
            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width, height, overflow: 'hidden' }} />;
};

export default GnosisOrb;