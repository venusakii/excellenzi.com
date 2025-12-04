"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with parallax effect */}
          <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            style={{
              transform: isInView ? "translateY(0)" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            <img src="/minimalist-compact-kitchen-countertop-with-organiz.jpg" alt="Compact kitchen setup" className="w-full h-full object-cover" />
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sage/20 to-transparent" />
          </div>

          {/* Content */}
          <div
            className="lg:pl-8"
            style={{
              transform: isInView ? "translateY(0)" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          >
            <span className="text-sm font-medium text-sage uppercase tracking-widest">Our Philosophy</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-charcoal leading-tight text-balance">
              Design with Purpose
            </h2>
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              Our products are designed to live where space, sustainability, and creativity meet. Every tool we create
              serves multiple purposes, folds away elegantly, and leaves a lighter footprint on our planet.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "3-in-1", label: "Multi-Function" },
                { value: "100%", label: "Recyclable" },
                { value: "50%", label: "Less Space" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-serif font-semibold text-sage">{stat.value}</div>
                  <div className="text-sm text-charcoal/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
