import type { Font, Pattern } from "./settings"

export type GroupItem = Font | Pattern

export interface GroupData {
  type: string
  typeName: string
  list: GroupItem[]
}
