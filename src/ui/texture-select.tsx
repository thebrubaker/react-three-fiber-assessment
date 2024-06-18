import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import { TexturePack, texturePacks } from "@/textures/texture-packs"

export function TextureSelect({
  value,
  onValueChange,
}: {
  value?: TexturePack
  onValueChange?: (value?: TexturePack) => void
}) {
  return (
    <Select
      value={value?.id}
      onValueChange={id => {
        onValueChange?.(texturePacks.find(t => t.id === id))
      }}
    >
      <SelectTrigger className="w-[180px] bg-slate-100">
        <SelectValue placeholder="Select a texture" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {texturePacks.map(texture => (
            <SelectItem key={texture.id} value={texture.id}>
              {texture.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
