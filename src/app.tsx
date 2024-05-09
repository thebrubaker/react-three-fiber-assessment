import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Scene } from "@/scene"
import { Suspense } from "react"

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default App
