"use client"

import { useState } from "react"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Check, ExternalLink, Leaf, Recycle, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductDetailProps {
  product: Product
}

const reviews = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "Absolutely love this product! It's transformed my small kitchen.",
    date: "2 weeks ago",
  },
  { author: "James K.", rating: 4, text: "Great quality and design. Shipping was fast too.", date: "1 month ago" },
  {
    author: "Emma L.",
    rating: 5,
    text: "Finally a product that actually delivers on its promises. Highly recommend!",
    date: "3 weeks ago",
  },
]

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-porcelain py-4">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-charcoal/60">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-charcoal transition-colors">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-porcelain rounded-2xl overflow-hidden">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={`/placeholder.svg?height=600&width=600&query=${product.images[currentImage]}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-charcoal" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-charcoal" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                      currentImage === index ? "border-sage" : "border-transparent opacity-60 hover:opacity-100",
                    )}
                  >
                    <img
                      src={`/.jpg?height=80&width=80&query=${image}`}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating) ? "fill-lemon text-lemon" : "fill-silver/30 text-silver/30",
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-charcoal/60">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">{product.name}</h1>
                <p className="mt-3 text-2xl font-semibold text-sage">${product.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <p className="text-charcoal/70 text-lg leading-relaxed">{product.description}</p>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-sage hover:bg-sage/90 text-charcoal font-medium px-10 py-6 text-base rounded-full shadow-lg shadow-sage/20 transition-all hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Key Features */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-sage" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-charcoal/70"
                    >
                      <Check className="w-4 h-4 text-sage flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-sage" />
                  Non-Toxic & Recyclable Materials
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span key={index} className="px-4 py-2 bg-porcelain rounded-full text-sm text-charcoal/70">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-3 p-4 bg-sage/10 rounded-xl">
                <Shield className="w-6 h-6 text-sage" />
                <p className="text-sm text-charcoal/70">
                  <strong className="text-charcoal">Independently Tested</strong> — Every product is reviewed in real
                  small-space kitchens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Function Diagram */}
      <section className="py-16 bg-porcelain">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-charcoal">How It Works</h2>
            <p className="mt-2 text-charcoal/60">See the multi-function magic in action</p>
          </div>

          {/* Animated steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Compact Storage", "Easy Unfold", "Multiple Uses"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-2xl font-serif font-semibold text-sage shadow-lg">
                  {index + 1}
                </div>
                <h3 className="font-medium text-charcoal text-lg">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-semibold text-charcoal mb-10">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-porcelain p-6 rounded-2xl"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < review.rating ? "fill-lemon text-lemon" : "fill-silver/30 text-silver/30",
                      )}
                    />
                  ))}
                </div>
                <p className="text-charcoal/80 italic">"{review.text}"</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-medium text-charcoal text-sm">{review.author}</span>
                  <span className="text-xs text-charcoal/50">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
