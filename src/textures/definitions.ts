import mossyAlbedo from "./mossy-bricks/albedo.png"
import mossyNormal from "./mossy-bricks/normal.png"
import mossyRoughness from "./mossy-bricks/roughness.png"

import redAlbedo from "./red-bricks/albedo.png"
import redNormal from "./red-bricks/normal.png"
import redRoughness from "./red-bricks/roughness.png"

export type TextureDefinition = {
  id: string
  label: string
  textures: Record<string, string>
}

export const textureDefinitions: TextureDefinition[] = [
  {
    id: "mossy-bricks",
    label: "Mossy Bricks",
    textures: {
      map: mossyAlbedo,
      normalMap: mossyNormal,
      roughnessMap: mossyRoughness,
    },
  },
  {
    id: "red-bricks",
    label: "Red Bricks",
    textures: {
      map: redAlbedo,
      normalMap: redNormal,
      roughnessMap: redRoughness,
    },
  },
]
