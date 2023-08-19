export const CATEGORIES = [
  "cpu",
  "motherboard",
  "ram",
  "power-supply",
  "storage",
  "monitor",
  "others",
] as const;

export type Product = {
  _id: string;
  productName: string;
  category: (typeof CATEGORIES)[number];
  status: "In Stock" | "Out of stock";
  price: number;
  description: string;
  keyFeatures: object;
  image: string;
  individualRating: number;
  averageRating: number;
  reviews: string[];
};
