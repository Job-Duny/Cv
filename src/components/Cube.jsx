import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'

export const Cube = () => {
    const textRef = useRef();
    useFrame((state) =>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
    );
  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <color attach="background" args={["#DACBBA"]} />
                <Text ref={textRef} fontSize={2} color="#044a40">
                    Design
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}
