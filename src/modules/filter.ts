import { Item } from "../types";

export const getfilterItem = (items: Item[], filter: string) => {
    if (items.length === 0) {
        return items
    }

    if (filter !== 'All') {
        items = items
        .filter(item => 
            item.volumeInfo.categories && item.volumeInfo.categories.includes(filter)
        )
    }
    if (items.length === 0) {
        throw new Error('filter')
    }
    return items;
}