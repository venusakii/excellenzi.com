export interface Product {
  id: number
  slug: string
  name: string
  category: string
  price: number
  description: string
  features: string[]
  materials: string[]
  image: string
  images: string[]
  rating: number
  reviewCount: number
  amazonUrl: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "foldable-cutting-board",
    name: "Foldable Cutting Board",
    category: "prep",
    price: 29.99,
    description:
      "A revolutionary bamboo cutting board that folds in half for easy storage. Features built-in strainer corners and juice grooves.",
    features: ["Folds flat for storage", "Built-in strainer", "Juice grooves", "Non-slip base"],
    materials: ["Organic Bamboo", "Silicone grip"],
    image: "compact foldable cutting board bamboo kitchen",
    images: [
      "compact foldable cutting board bamboo kitchen",
      "cutting board folded flat storage",
      "cutting board strainer feature",
    ],
    rating: 4.8,
    reviewCount: 234,
    amazonUrl: "#",
  },
  {
    id: 2,
    slug: "multi-tool-spatula",
    name: "Multi-Tool Spatula",
    category: "cooking",
    price: 19.99,
    description: "One spatula that does it all — flip, scrape, cut, and serve. Made from heat-resistant silicone.",
    features: ["4-in-1 functionality", "Heat resistant to 450°F", "Dishwasher safe", "Ergonomic handle"],
    materials: ["Food-grade Silicone", "Stainless Steel core"],
    image: "silicone multi-tool spatula cooking utensil",
    images: ["silicone multi-tool spatula cooking utensil", "spatula flipping pancake", "spatula cutting brownies"],
    rating: 4.9,
    reviewCount: 189,
    amazonUrl: "#",
  },
  {
    id: 3,
    slug: "collapsible-colander",
    name: "Collapsible Colander",
    category: "prep",
    price: 24.99,
    description:
      "Expands when you need it, flattens when you don't. Perfect for tiny kitchens with limited drawer space.",
    features: ["Collapses to 1 inch", "Extendable handles", "Fine mesh", "Multiple sizes available"],
    materials: ["BPA-free Silicone", "Stainless Steel rim"],
    image: "collapsible silicone colander strainer kitchen",
    images: ["collapsible silicone colander strainer kitchen", "colander collapsed flat", "colander draining pasta"],
    rating: 4.7,
    reviewCount: 156,
    amazonUrl: "#",
  },
  {
    id: 4,
    slug: "magnetic-spice-jars",
    name: "Magnetic Spice Jars",
    category: "prep",
    price: 34.99,
    description:
      "Mount on any metal surface — fridge, range hood, or magnetic strip. Includes 12 jars with shaker tops.",
    features: ["Strong magnets", "Shaker & pour tops", "Airtight seals", "Clear labeling window"],
    materials: ["Stainless Steel", "Borosilicate Glass"],
    image: "magnetic spice jar set stainless steel modern",
    images: ["magnetic spice jar set stainless steel modern", "spice jars on fridge", "spice jar closeup"],
    rating: 4.6,
    reviewCount: 98,
    amazonUrl: "#",
  },
  {
    id: 5,
    slug: "eco-dish-brush-set",
    name: "Eco Dish Brush Set",
    category: "cleaning",
    price: 18.99,
    description: "Sustainable dish cleaning with replaceable heads. Bamboo handles, coconut fiber bristles.",
    features: ["3 brush sizes", "Replaceable heads", "Compostable materials", "Built-in scraper"],
    materials: ["Organic Bamboo", "Coconut Coir fiber"],
    image: "bamboo dish brush set eco-friendly kitchen",
    images: ["bamboo dish brush set eco-friendly kitchen", "brush cleaning pan", "replacement heads"],
    rating: 4.8,
    reviewCount: 312,
    amazonUrl: "#",
  },
  {
    id: 6,
    slug: "nesting-mixing-bowls",
    name: "Nesting Mixing Bowls",
    category: "prep",
    price: 39.99,
    description: "6 bowls that stack into one. Non-slip bases and pour spouts on every size.",
    features: ["6 graduated sizes", "Non-slip silicone base", "Pour spouts", "Measurement markings"],
    materials: ["Recycled Stainless Steel", "Silicone base"],
    image: "nesting mixing bowls colorful compact kitchen",
    images: ["nesting mixing bowls colorful compact kitchen", "bowls stacked together", "bowl with pour spout"],
    rating: 4.9,
    reviewCount: 267,
    amazonUrl: "#",
  },
  {
    id: 7,
    slug: "compact-air-fryer",
    name: "Compact Air Fryer",
    category: "cooking",
    price: 79.99,
    description: "All the crisp, none of the bulk. This 2-quart air fryer fits perfectly on any counter.",
    features: ["2-quart capacity", "Digital touch controls", "8 preset programs", "Dishwasher safe basket"],
    materials: ["BPA-free Plastic", "Ceramic coated basket"],
    image: "compact mini air fryer sleek modern white",
    images: ["compact mini air fryer sleek modern white", "air fryer cooking fries", "air fryer on small counter"],
    rating: 4.7,
    reviewCount: 445,
    amazonUrl: "#",
  },
  {
    id: 8,
    slug: "silicone-lid-set",
    name: "Silicone Lid Set",
    category: "sustainable",
    price: 22.99,
    description: "Replace plastic wrap forever. These stretchy lids fit any bowl, pot, or container.",
    features: ["6 sizes included", "Microwave safe", "Airtight seal", "Dishwasher safe"],
    materials: ["Food-grade Silicone"],
    image: "reusable silicone lids food covers eco kitchen",
    images: ["reusable silicone lids food covers eco kitchen", "lid stretching over bowl", "lids in different sizes"],
    rating: 4.5,
    reviewCount: 523,
    amazonUrl: "#",
  },
  {
    id: 9,
    slug: "over-sink-drying-rack",
    name: "Over-Sink Drying Rack",
    category: "cleaning",
    price: 44.99,
    description: "Rolls out over your sink for drying, rolls up for storage. Genius space-saving design.",
    features: ["Adjustable width", "Roll-up design", "Drip tray included", "Supports up to 20lbs"],
    materials: ["Stainless Steel", "Silicone grips"],
    image: "over sink dish drying rack stainless steel compact",
    images: ["over sink dish drying rack stainless steel compact", "rack rolled up storage", "dishes drying on rack"],
    rating: 4.8,
    reviewCount: 178,
    amazonUrl: "#",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}
