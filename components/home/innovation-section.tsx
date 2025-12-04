"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

const features = [
  { title: "One tool, three purposes.", delay: 0 },
  { title: "No toxins. No clutter.", delay: 0.2 },
  { title: "Everything you need. Nothing you don't.", delay: 0.4 },
]

export function InnovationSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const morphProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-charcoal text-porcelain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Morphing Visual */}
          <div className="relative aspect-square">
            <motion.div className="absolute inset-0 flex items-center justify-center" style={{ rotate: morphProgress }}>
              <div className="relative w-72 h-72">
                <img
                  src="/transforming-kitchen-tool-morphing-gadget-silver-f.jpg"
                  alt="Transforming tool"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-radial from-sage/20 to-transparent opacity-50" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-sage uppercase tracking-widest">Smart Design</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold leading-tight text-balance">
              Innovation in Every Inch
            </h2>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: feature.delay, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <p className="text-xl text-porcelain/80">{feature.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
