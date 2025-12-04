"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const tagline = "Smart, space-saving, sustainable tools — made for modern renters."

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-porcelain leading-tight text-balance drop-shadow-lg">
            Tools for Tiny Kitchens.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-porcelain/90 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
            {mounted &&
              tagline.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block opacity-0 animate-[fadeIn_0.05s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-sage hover:bg-sage/90 text-charcoal font-medium px-8 py-6 text-base rounded-full shadow-lg shadow-sage/30 transition-all hover:shadow-xl hover:shadow-sage/40 hover:-translate-y-0.5"
            >
              <Link href="/reviews">Explore Products</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-porcelain font-medium px-8 py-6 text-base group hover:bg-porcelain/10"
            >
              <Link href="/about">
                Discover Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating 3D Product Animation */}
        <div className="flex-1 relative w-full max-w-lg aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main floating gadget */}
            <div className="relative w-64 h-64 animate-float">
              <img
                src="/minimalist-multi-function-kitchen-gadget-spoon-whi.jpg"
                alt="Multi-function kitchen gadget"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Orbiting smaller tools */}
            <div className="absolute w-20 h-20 top-0 right-8 animate-float" style={{ animationDelay: "1s" }}>
              <img
                src="/compact-folding-spatula-kitchen-tool-silver-minima.jpg"
                alt="Folding spatula"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="absolute w-16 h-16 bottom-8 left-4 animate-float" style={{ animationDelay: "2s" }}>
              <img
                src="/small-bamboo-kitchen-clip-minimalist-eco-tool.jpg"
                alt="Bamboo clip"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-porcelain/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-porcelain/30 relative overflow-hidden">
          <div className="absolute inset-x-0 h-full bg-sage animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
