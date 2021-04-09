export const updateObjectsInArray = (items, itemId, propertyName, newObjProps) => {
    return items.map(i => {
        if (i[propertyName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i;
    })
}
