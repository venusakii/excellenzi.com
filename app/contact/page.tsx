"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-sm font-medium text-sage uppercase tracking-widest">Get in Touch</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-semibold text-charcoal text-balance">
              We'd Love to Hear From You
            </h1>
            <p className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? Drop us a note.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form - Sticky Note Style */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100, rotate: -5, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="bg-lemon/30 p-8 md:p-10 rounded-xl shadow-lg rotate-1 hover:rotate-0 transition-transform"
                    >
                      <h2 className="text-2xl font-serif font-semibold text-charcoal mb-6">Send a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/10 focus:outline-none focus:ring-2 focus:ring-sage"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/10 focus:outline-none focus:ring-2 focus:ring-sage"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/10 focus:outline-none focus:ring-2 focus:ring-sage resize-none"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-sage hover:bg-sage/90 text-charcoal font-medium py-6 rounded-full"
                        >
                          Send Message
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-sage/20 p-10 md:p-16 rounded-xl text-center h-full flex flex-col items-center justify-center"
                    >
                      <div className="text-6xl mb-4">✉️</div>
                      <h2 className="text-2xl font-serif font-semibold text-charcoal mb-2">Message Sent!</h2>
                      <p className="text-charcoal/70">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-6">Other Ways to Reach Us</h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    Whether you have a product question, partnership inquiry, or just want to share your small-space
                    kitchen story, we're all ears.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal">Email</h3>
                      <p className="text-charcoal/70">hello@excellenzi.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal">Location</h3>
                      <p className="text-charcoal/70">Brooklyn, New York</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal">Response Time</h3>
                      <p className="text-charcoal/70">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* FAQ callout */}
                <div className="bg-porcelain p-6 rounded-xl">
                  <h3 className="font-medium text-charcoal mb-2">Common Questions?</h3>
                  <p className="text-sm text-charcoal/70 mb-4">
                    Check our product pages for detailed specs, materials, and care instructions.
                  </p>
                  <a href="/reviews" className="text-sage font-medium text-sm hover:underline">
                    Browse Products →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
