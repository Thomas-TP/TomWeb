import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Text, useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

// --- 3D Models ---

function Laptop({ visible, ...props }) {
    return (
        <group {...props} visible={visible}>
            {/* Base */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Screen */}
            <group position={[0, -0.4, -1]} rotation={[Math.PI / 6, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[3, 2, 0.1]} />
                    <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Display */}
                <mesh position={[0, 1, 0.06]}>
                    <planeGeometry args={[2.8, 1.8]} />
                    <meshStandardMaterial color="#000" emissive="#111" />
                </mesh>
            </group>
        </group>
    );
}

function CodeSymbols({ visible, ...props }) {
    return (
        <group {...props} visible={visible}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Text
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    fontSize={2}
                    color="#6366f1"
                    position={[-1.5, 0, 0]}
                >
                    {'<'}
                </Text>
                <Text
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    fontSize={2}
                    color="#6366f1"
                    position={[1.5, 0, 0]}
                >
                    {'/>'}
                </Text>
                <mesh position={[0, 0, 0]}>
                    <icosahedronGeometry args={[0.8, 0]} />
                    <meshPhysicalMaterial color="#a855f7" roughness={0.2} metalness={0.8} wireframe />
                </mesh>
            </Float>
        </group>
    );
}

function Tablet({ visible, ...props }) {
    return (
        <group {...props} visible={visible}>
            <mesh>
                <boxGeometry args={[2, 2.8, 0.15]} />
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0.08]}>
                <planeGeometry args={[1.8, 2.6]} />
                <meshStandardMaterial color="#222" emissive="#101010" />
            </mesh>
        </group>
    );
}

function SwissCross({ visible, ...props }) {
    return (
        <group {...props} visible={visible}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 1, 0.5]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 3, 0.5]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
        </group>
    );
}

function PaperPlane({ visible, ...props }) {
    return (
        <group {...props} visible={visible}>
            <mesh rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.8, 2, 4]} />
                <meshStandardMaterial color="#fff" roughness={0.5} />
            </mesh>
        </group>
    );
}

// --- Main Scene Logic ---

function SceneContent() {
    const scrollRef = useRef(0);
    const groupRef = useRef();

    // Refs for individual objects to animate them
    const laptopRef = useRef();
    const codeRef = useRef();
    const tabletRef = useRef();
    const swissRef = useRef();
    const planeRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = window.scrollY / totalHeight;
            scrollRef.current = scrollProgress;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state, delta) => {
        const scroll = scrollRef.current;

        // Smooth interpolation could be added here using lerp

        // Visibility Logic based on scroll sections (approximate)
        // Hero: 0 - 0.15
        // Services: 0.15 - 0.35
        // Portfolio: 0.35 - 0.6
        // About: 0.6 - 0.85
        // Contact: 0.85 - 1.0

        // Animate Laptop (Hero)
        if (laptopRef.current) {
            const active = scroll < 0.15;
            laptopRef.current.visible = true; // Keep visible but move away

            const targetScale = active ? 1 : 0;
            laptopRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);

            laptopRef.current.rotation.y += delta * 0.2;
            laptopRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }

        // Animate Code (Services)
        if (codeRef.current) {
            const active = scroll >= 0.15 && scroll < 0.35;
            const targetScale = active ? 1 : 0;
            codeRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
            codeRef.current.rotation.y -= delta * 0.5;
        }

        // Animate Tablet (Portfolio)
        if (tabletRef.current) {
            const active = scroll >= 0.35 && scroll < 0.6;
            const targetScale = active ? 1 : 0;
            tabletRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
            tabletRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
            tabletRef.current.rotation.y += delta * 0.3;
        }

        // Animate Swiss Cross (About)
        if (swissRef.current) {
            const active = scroll >= 0.6 && scroll < 0.85;
            const targetScale = active ? 1 : 0;
            swissRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);
            swissRef.current.rotation.y += delta * 0.5;
            swissRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }

        // Animate Paper Plane (Contact)
        if (planeRef.current) {
            const active = scroll >= 0.85;
            const targetScale = active ? 1 : 0;
            planeRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 5);

            // Fly around
            planeRef.current.position.x = Math.sin(state.clock.elapsedTime * 2) * 2;
            planeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Hero - Right side */}
            <Laptop ref={laptopRef} position={[3, 0, 0]} rotation={[0, -0.5, 0]} />

            {/* Services - Left side */}
            <CodeSymbols ref={codeRef} position={[-3, 0, 0]} />

            {/* Portfolio - Right side */}
            <Tablet ref={tabletRef} position={[3, 0, 0]} rotation={[0, -0.3, 0]} />

            {/* About - Left side */}
            <SwissCross ref={swissRef} position={[-3, 0, 0]} rotation={[0, 0.5, 0]} />

            {/* Contact - Center/Top */}
            <PaperPlane ref={planeRef} position={[0, 1, 0]} />
        </group>
    );
}

export default function GlobalScene3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

                    <SceneContent />

                    <Environment preset="city" />
                    <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                </Suspense>
            </Canvas>
        </div>
    );
}

import { PerspectiveCamera } from '@react-three/drei';
