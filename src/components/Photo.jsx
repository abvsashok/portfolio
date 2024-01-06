import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { useFrame, useLoader } from "@react-three/fiber";
import photo from "../../public/images/photo2.png"

const Image = () => {
    const texture = useLoader(THREE.TextureLoader, photo)
    return (
        <mesh>
            <planeBufferGeometry attach="geometry" args={[4, 4]} />
            <meshBasicMaterial attach="material" map={texture} toneMapped={false} color={'white'} />
        </mesh>
    )
}

export default Image;