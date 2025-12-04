"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

const categories = [
  { id: "all", label: "All Products" },
  { id: "cooking", label: "Cooking" },
  { id: "prep", label: "Prep & Storage" },
  { id: "cleaning", label: "Cleaning" },
  { id: "sustainable", label: "Sustainable" },
]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
]

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-sage text-charcoal"
                    : "bg-porcelain text-charcoal/70 hover:bg-sage/30",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg bg-porcelain border-none text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/reviews/${product.slug}`}
              className="group bg-porcelain rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl"
              style={{
                animationDelay: `${index * 50}ms`,
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 50}ms forwards`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-silver/10">
                <img
                  src={`/.jpg?height=400&width=400&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-3 bg-porcelain text-charcoal rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Read Review
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < Math.floor(product.rating) ? "fill-lemon text-lemon" : "fill-silver/30 text-silver/30",
                      )}
                    />
                  ))}
                  <span className="text-xs text-charcoal/50 ml-2">({product.reviewCount})</span>
                </div>
                <h3 className="font-medium text-charcoal group-hover:text-sage transition-colors text-lg">
                  {product.name}
                </h3>
                <p className="text-charcoal/60 mt-1 text-sm line-clamp-2">{product.description}</p>
                <p className="mt-3 text-lg font-semibold text-charcoal">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Results count */}
        <div className="mt-10 text-center text-sm text-charcoal/50">
          Showing {sortedProducts.length} of {products.length} products
        </div>
      </div>
    </section>
  )
}
