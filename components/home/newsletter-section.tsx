"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-charcoal text-porcelain">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm font-medium text-sage uppercase tracking-widest">Join Us</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif font-semibold text-balance">Join the Compact Revolution</h2>
        <p className="mt-4 text-porcelain/70 text-lg">
          Get eco tips, exclusive offers, and be the first to know about new products.
        </p>

        {/* Drawer-style form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 bg-porcelain/10 backdrop-blur-sm rounded-2xl p-8 border border-porcelain/20"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-4">
              <div className="text-4xl">🌱</div>
              <p className="text-lg font-medium">Welcome to the revolution!</p>
              <p className="text-porcelain/60 text-sm">Check your inbox for a special welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-full bg-porcelain text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-sage"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-sage hover:bg-sage/90 text-charcoal font-medium px-8 py-4 rounded-full whitespace-nowrap"
              >
                Save Space. Save the Planet.
              </Button>
            </form>
          )}
        </motion.div>

        {/* Seed to spoon animation */}
        <div className="mt-8 flex justify-center gap-4 text-2xl opacity-60">
          <span>🌱</span>
          <span>→</span>
          <span>🌿</span>
          <span>→</span>
          <span>🥄</span>
        </div>
      </div>
    </section>
  )
}
