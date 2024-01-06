import React, { useRef, useMemo } from 'react';
import { Canvas, useThree, extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

extend({ Points: THREE.Points });

const ParticleSystem = () => {
    const { scene } = useThree();
    const count = 5000;

    const particles = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.3) * 100; // Random positions
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 'blue',
            size: 0.1,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        return particles;
    }, [scene, count]);

    useFrame(() => {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
    });

    return null;
};

export default ParticleSystem;