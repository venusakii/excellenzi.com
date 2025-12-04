"use client"

import { motion } from "framer-motion"

const milestones = [
  { year: "2021", title: "The Concept", description: "Born from frustration in a 400 sq ft apartment." },
  { year: "2022", title: "First Designs", description: "Partnered with sustainable material suppliers." },
  { year: "2023", title: "Testing Phase", description: "Real renters, real kitchens, real feedback." },
  { year: "2024", title: "Eco Packaging", description: "Zero plastic, 100% recyclable shipping." },
  { year: "2025", title: "Launch", description: "Excellenzi goes live for the world." },
]

export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="text-center lg:text-left mb-12">
              <span className="text-sm font-medium text-sage uppercase tracking-widest">Our Journey</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
                Our Story
              </h2>
            </div>

            {/* Tape measure style timeline */}
            <div className="relative pl-8 border-l-4 border-clay">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[26px] w-4 h-4 rounded-full bg-sage border-4 border-white shadow" />

                  <div className="bg-porcelain rounded-xl p-5 ml-4">
                    <span className="text-xs font-bold text-sage">{milestone.year}</span>
                    <h3 className="font-medium text-charcoal mt-1">{milestone.title}</h3>
                    <p className="text-sm text-charcoal/60 mt-1">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img src="/two-founders-in-cozy-minimalist-kitchen-warm-natur.jpg" alt="Excellenzi founders" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
