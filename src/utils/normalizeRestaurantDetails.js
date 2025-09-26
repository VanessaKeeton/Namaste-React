export default function normalizeRestaurantDetails(raw) {
  return {
    name: raw.name ?? "",
    cuisines: raw.cuisines ?? [],
    waitTime: raw.waitTime ?? "",
    imageAlt: raw.image?.alt ?? "",
    imageUrl: raw.image?.url ?? "",
    menu: raw.menu ?? [],
  };
}
