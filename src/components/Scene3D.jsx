import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';

function Geometries() {
    return (
        <group position={[0, 0, 0]}>
            {/* Main floating Icosahedron - Tech Core */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[0, 0, 0]} scale={1.8}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshPhysicalMaterial
                        color="#6366f1" // Indigo-500
                        roughness={0.2}
                        metalness={0.8}
                        transmission={0.2}
                        thickness={2}
                        clearcoat={1}
                    />
                </mesh>
            </Float>

            {/* Floating Ring - Orbit */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[1, 1, -1]} rotation={[Math.PI / 3, 0, 0]} scale={0.8}>
                    <torusGeometry args={[2, 0.15, 16, 100]} />
                    <meshStandardMaterial
                        color="#a855f7" // Purple-500
                        emissive="#a855f7"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={1}
                    />
                </mesh>
            </Float>

            {/* Small Satellite Sphere 1 */}
            <Float speed={3} rotationIntensity={1} floatIntensity={3}>
                <mesh position={[-2, 1.5, 0]} scale={0.4}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhysicalMaterial
                        color="#ec4899" // Pink-500
                        roughness={0.1}
                        metalness={0.5}
                        clearcoat={1}
                    />
                </mesh>
            </Float>

            {/* Small Satellite Sphere 2 */}
            <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[2, -1.5, 1]} scale={0.3}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#3b82f6" // Blue-500
                        roughness={0.1}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

                <Suspense fallback={null}>
                    <Geometries />
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.4}
                        scale={20}
                        blur={2.5}
                        far={4.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}
