"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { HeroSection } from "@/components/home/hero-section"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { ProductsSection } from "@/components/home/products-section"
import { InnovationSection } from "@/components/home/innovation-section"
import { VideoSection } from "@/components/home/video-section"
import { MaterialsSection } from "@/components/home/materials-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { TipsSection } from "@/components/home/tips-section"
import { StorySection } from "@/components/home/story-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img
          src="/minimalist-scandinavian-kitchen-interior-with-soft.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for content readability */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {/* Large floating circles */}
        <div
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-sage/30 blur-3xl animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-[60%] right-[10%] w-80 h-80 rounded-full bg-clay/25 blur-3xl animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[20%] left-[15%] w-48 h-48 rounded-full bg-lemon/20 blur-2xl animate-float"
          style={{ animationDuration: "7s", animationDelay: "4s" }}
        />

        {/* Smaller floating particles */}
        <div
          className="absolute top-[30%] right-[25%] w-24 h-24 rounded-full bg-porcelain/40 blur-xl animate-breathe"
          style={{ animationDuration: "5s" }}
        />
        <div
          className="absolute top-[70%] left-[40%] w-32 h-32 rounded-full bg-sage/20 blur-xl animate-breathe"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-[15%] right-[40%] w-20 h-20 rounded-full bg-clay/30 blur-lg animate-breathe"
          style={{ animationDuration: "4s", animationDelay: "3s" }}
        />

        {/* Moving gradient lines */}
        <div
          className="absolute top-0 left-[20%] w-px h-[40%] bg-gradient-to-b from-transparent via-porcelain/50 to-transparent animate-slideDown"
          style={{ animationDuration: "6s", animationIterationCount: "infinite" }}
        />
        <div
          className="absolute top-0 right-[30%] w-px h-[60%] bg-gradient-to-b from-transparent via-sage/40 to-transparent animate-slideDown"
          style={{ animationDuration: "8s", animationDelay: "2s", animationIterationCount: "infinite" }}
        />
      </div>

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PhilosophySection />
        <ProductsSection />
        <InnovationSection />
        <VideoSection />
        <MaterialsSection />
        <ReviewsSection />
        <TipsSection />
        <StorySection />
        <NewsletterSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
