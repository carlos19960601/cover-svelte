import type { GroupData, GroupItem } from "$lib/types";

export const groupWithTypeName = (items: GroupItem[]): GroupData[] => {
  const grouped = items.reduce<Record<string, GroupData>>((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = {
        type: item.type,
        typeName: item.typeName,
        list: []
      };
    }
    acc[item.type].list.push(item);
    return acc;
  }, {});

  return Object.values(grouped);
};
