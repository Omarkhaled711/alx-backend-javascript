export default function updateUniqueItems(groceryLs) {
  if (!(groceryLs instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceryLs.entries()) {
    if (quantity === 1) {
      groceryLs.set(item, 100);
    }
  }
}
