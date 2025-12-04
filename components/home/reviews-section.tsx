"use client"

import { motion } from "framer-motion"

const reviews = [
  { name: "Sophia L.", review: "This foldable cutting board changed my mornings — it's genius.", rating: 5 },
  { name: "Tom K.", review: "Finally, tools that understand small apartment living!", rating: 5 },
  { name: "Ella Brooks", review: "Beautiful design and incredibly functional. Worth every penny.", rating: 5 },
  { name: "Ravi N.", review: "The quality is outstanding. My tiny kitchen feels twice as big now.", rating: 5 },
]

export function ReviewsSection() {
  return (
    <section className="py-24 md:py-32 bg-porcelain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-sage uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
            Customer Favorites
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-lemon">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-charcoal/80 italic leading-relaxed">"{review.review}"</p>
              <p className="mt-4 font-medium text-charcoal">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
