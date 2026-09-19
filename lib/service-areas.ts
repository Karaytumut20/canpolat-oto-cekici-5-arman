import { istanbulNeighborhoods } from "./istanbul-neighborhoods";

export type ServiceArea = { name: string; slug: string; type: "mahalle" | "ilce"; district?: string };

const slugify = (value: string) => value.toLocaleLowerCase("tr-TR")
  .replaceAll("ı", "i").replaceAll("ğ", "g").replaceAll("ü", "u").replaceAll("ş", "s").replaceAll("ö", "o").replaceAll("ç", "c")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const sileNeighborhoods = istanbulNeighborhoods
  .filter((area) => area.district === "Şile")
  .map((area) => area.name.replace(/\s+Mah\.$/, ""));

const nearbyDistricts = ["Şile", "Beykoz", "Çekmeköy", "Sancaktepe", "Ümraniye", "Pendik", "Kandıra"];

export const serviceAreas: ServiceArea[] = [
  ...sileNeighborhoods.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "mahalle" as const, district: "Şile" })),
  ...istanbulNeighborhoods
    .filter((area) => ["Beykoz", "Çekmeköy"].includes(area.district))
    .map((area) => ({
      name: area.name.replace(/\s+Mah\.$/, ""),
      slug: `${area.districtSlug}-${area.slug}-oto-cekici`,
      type: "mahalle" as const,
      district: area.district,
    })),
  ...nearbyDistricts.map((name) => ({ name, slug: `${slugify(name)}-oto-cekici`, type: "ilce" as const }))
];

export const priorityAreas = serviceAreas.filter((area) => nearbyDistricts.includes(area.name) && area.type === "ilce");

export const findArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);
