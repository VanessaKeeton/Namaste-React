export default function normalizeRestaurantDetails(raw) {
  if (!raw.id) {
    console.error('items require an id')
  }
  return {
    id: raw.id,
    name: raw.name ?? "",
    cuisines: raw.cuisines ?? [],
    waitTime: raw.waitTime ?? "",
    imageAlt: raw.image?.alt ?? "",
    imageUrl: raw.image?.url ?? "",
    menu: raw.menu ?? [],
  };
}
