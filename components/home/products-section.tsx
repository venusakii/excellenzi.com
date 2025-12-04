"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All", icon: "✦" },
  { id: "cooking", label: "Cooking", icon: "🧂" },
  { id: "prep", label: "Prep & Storage", icon: "🍵" },
  { id: "cleaning", label: "Cleaning", icon: "🧽" },
  { id: "sustainable", label: "Sustainable", icon: "🌿" },
]

const products = [
  {
    id: 1,
    name: "Foldable Cutting Board",
    category: "prep",
    price: 29.99,
    image: "/compact-foldable-bamboo-cutting-board-minimalist-k.jpg",
  },
  {
    id: 2,
    name: "Multi-Tool Spatula",
    category: "cooking",
    price: 19.99,
    image: "/silicone-spatula-cooking-utensil-modern-sage-green.jpg",
  },
  {
    id: 3,
    name: "Collapsible Colander",
    category: "prep",
    price: 24.99,
    image: "/collapsible-silicone-colander-strainer-pastel-kitc.jpg",
  },
  {
    id: 4,
    name: "Magnetic Spice Jars",
    category: "prep",
    price: 34.99,
    image: "/magnetic-spice-jar-set-stainless-steel-minimalist.jpg",
  },
  {
    id: 5,
    name: "Eco Dish Brush Set",
    category: "cleaning",
    price: 18.99,
    image: "/bamboo-dish-brush-set-eco-friendly-natural.jpg",
  },
  {
    id: 6,
    name: "Nesting Mixing Bowls",
    category: "prep",
    price: 39.99,
    image: "/nesting-mixing-bowls-ceramic-pastel-colors-kitchen.jpg",
  },
  {
    id: 7,
    name: "Compact Air Fryer",
    category: "cooking",
    price: 79.99,
    image: "/compact-mini-air-fryer-white-modern-sleek.jpg",
  },
  {
    id: 8,
    name: "Silicone Lid Set",
    category: "sustainable",
    price: 22.99,
    image: "/reusable-silicone-lids-colorful-eco-kitchen-covers.jpg",
  },
  {
    id: 9,
    name: "Over-Sink Drying Rack",
    category: "cleaning",
    price: 44.99,
    image: "/over-sink-dish-drying-rack-stainless-steel-modern.jpg",
  },
]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 md:py-32 bg-porcelain">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-sage uppercase tracking-widest">Curated Collection</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
            Top Compact Essentials
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-sage text-charcoal shadow-md"
                  : "bg-white text-charcoal/70 hover:bg-white/80 hover:text-charcoal",
              )}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/reviews/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative aspect-square overflow-hidden bg-silver/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay - unfold effect */}
                <div className="absolute inset-0 bg-charcoal/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom group-hover:scale-100 scale-y-0">
                  <span className="text-porcelain font-medium">View Details →</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
