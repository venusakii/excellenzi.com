"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tips = [
  {
    title: "Top 5 sustainable swaps for renters",
    description: "Simple changes that make a big impact on your environmental footprint.",
  },
  {
    title: "Organize with zero plastic",
    description: "Discover beautiful, eco-friendly storage solutions for every corner.",
  },
  { title: "How to detox your kitchen air", description: "Natural ways to keep your cooking space fresh and healthy." },
]

export function TipsSection() {
  const [currentTip, setCurrentTip] = useState(0)

  const nextTip = () => setCurrentTip((prev) => (prev + 1) % tips.length)
  const prevTip = () => setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length)

  return (
    <section className="py-24 md:py-32 bg-sage/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-sage uppercase tracking-widest">Learn</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
            Small-Space Tips
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-10 md:p-16 shadow-lg text-center min-h-[200px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-4">
              {tips[currentTip].title}
            </h3>
            <p className="text-charcoal/70 text-lg max-w-lg mx-auto">{tips[currentTip].description}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTip}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-charcoal"
              aria-label="Previous tip"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {tips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTip(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTip ? "bg-sage w-6" : "bg-charcoal/20"
                  }`}
                  aria-label={`Go to tip ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTip}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-charcoal"
              aria-label="Next tip"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
