import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-fit px-4">
        <SelectValue placeholder="Select an image filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="invert">Invert</SelectItem>
          <SelectItem value="gray">Gray</SelectItem>
          <SelectItem value="threshold">Threshold</SelectItem>
          <SelectItem value="opaque">Opaque</SelectItem>
          <SelectItem value="posterize">Posterize (with number)</SelectItem>
          <SelectItem value="blur">Blur (with number)</SelectItem>
          <SelectItem value="erode">Erode</SelectItem>
          <SelectItem value="dilate">Dilate</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectFilter