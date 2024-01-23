'use client'

import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Points, PointMaterial,
  // Preload 
} from "@react-three/drei"

// TODO: Figure out why the Module exists in Next.js and throws type error
//@ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

// Should be divisible by 3 to prevent computing errors in console
const STARS_NUMBER = 5001
const STAR_RADIUS = 1.2

const StarBackground = (props: any) => {
  const ref: any = useRef()

  const [sphere] = useState(() => random.inSphere(
    new Float32Array(STARS_NUMBER),
    { radius: STAR_RADIUS }
  ))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulledStarsCanvas
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          // color="yellow"
          size={0.002}
          // size={0.0025}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => (
  <div className='w-full h-auto fixed inset-0 z-[20]'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
)

export default StarsCanvas