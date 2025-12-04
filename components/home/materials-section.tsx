"use client"

import { motion } from "framer-motion"

const materials = [
  { name: "Bamboo Fiber", description: "Sustainably sourced", icon: "🎋" },
  { name: "Stainless Steel", description: "100% recyclable", icon: "⚙️" },
  { name: "Recycled Silicone", description: "Toxin-free", icon: "♻️" },
  { name: "Borosilicate Glass", description: "Heat resistant", icon: "🔬" },
]

export function MaterialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-sage uppercase tracking-widest">Conscious Craft</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
            Eco Materials That Matter
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-porcelain flex items-center justify-center text-4xl shadow-sm group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  {material.icon}
                </motion.span>
              </div>
              <h3 className="font-medium text-charcoal">{material.name}</h3>
              <p className="text-sm text-charcoal/60 mt-1">{material.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
