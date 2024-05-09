import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import { TextureDefinition, textureDefinitions } from "@/textures/definitions"

export function TextureSelect({
  value,
  onValueChange,
}: {
  value: TextureDefinition | undefined
  onValueChange: (value: TextureDefinition | undefined) => void
}) {
  return (
    <Select
      value={value?.id}
      onValueChange={id => {
        onValueChange(textureDefinitions.find(t => t.id === id))
      }}
    >
      <SelectTrigger className="w-[180px] bg-slate-100">
        <SelectValue placeholder="Select a texture" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {textureDefinitions.map(texture => (
            <SelectItem key={texture.id} value={texture.id}>
              {texture.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
