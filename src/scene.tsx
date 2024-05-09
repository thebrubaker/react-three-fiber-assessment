import { useRef } from "react"
import { Box } from "@react-three/drei"
import { Mesh } from "three"

export const Scene = () => {
  const boxRef = useRef<Mesh>(null)

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
      </Box>
      <ambientLight intensity={3} />
    </>
  )
}
