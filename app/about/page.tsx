import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Excellenzi",
  description:
    "Learn about Excellenzi's mission to create smart, sustainable kitchen tools for modern renters living in small spaces.",
}

const values = [
  {
    title: "Space Intelligence",
    description: "Every product is designed to maximize functionality while minimizing footprint.",
    icon: "📐",
  },
  {
    title: "Sustainable Materials",
    description: "We source eco-friendly, recyclable materials that are gentle on the planet.",
    icon: "🌿",
  },
  {
    title: "Thoughtful Design",
    description: "Beauty meets function in every curve, fold, and finish.",
    icon: "✨",
  },
  {
    title: "Real Testing",
    description: "Every product is tested in actual small-space kitchens by real renters.",
    icon: "🏠",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-sage uppercase tracking-widest">Our Story</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-serif font-semibold text-charcoal leading-tight text-balance">
                Designed for
                <br />
                Small Spaces,
                <br />
                Big Dreams
              </h1>
              <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
                Excellenzi was born in a 400-square-foot apartment, from the frustration of kitchen tools that just
                didn't fit — and the dream that compact living could still be beautiful.
              </p>
            </div>
          </div>
        </section>

        {/* Blueprint Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Notebook style content */}
              <div className="bg-porcelain p-8 md:p-12 rounded-2xl shadow-lg relative">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-sage/30 rounded-full" />
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-sage/30 rounded-full" />

                <h2 className="text-3xl font-serif font-semibold text-charcoal mb-6">The Design Philosophy</h2>
                <div className="space-y-4 text-charcoal/70 leading-relaxed">
                  <p>
                    We believe that small spaces deserve intelligent design. That's why every Excellenzi product starts
                    with a simple question: <strong className="text-charcoal">"How can this do more with less?"</strong>
                  </p>
                  <p>
                    Our team of industrial designers, sustainability experts, and urban dwellers collaborate to create
                    tools that fold, stack, transform, and adapt — just like the people who use them.
                  </p>
                  <p>
                    From concept sketches to final production, we obsess over every detail. Because in a tiny kitchen,
                    every inch matters.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src="/placeholder.svg?key=atwdi"
                  alt="Design sketches and prototypes"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sage/20 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-charcoal text-porcelain">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-sage uppercase tracking-widest">What We Stand For</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-balance">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-porcelain/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-sage uppercase tracking-widest">The Founders</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-charcoal text-balance">
                  Started in a Tiny Kitchen
                </h2>
                <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
                  <p>
                    Maya Chen and Alex Rivera met as neighbors in a Brooklyn apartment building — both struggling with
                    the same kitchen dilemma: too many tools, not enough space.
                  </p>
                  <p>
                    After countless conversations over coffee about what was wrong with existing products, they decided
                    to create something better. Something designed specifically for people like them.
                  </p>
                  <p>
                    Today, Excellenzi has helped over 50,000 renters transform their tiny kitchens into functional,
                    beautiful spaces.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg?key=hxkli"
                  alt="Maya and Alex, Excellenzi founders"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24 bg-sage/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-charcoal leading-relaxed italic">
              "Excellenzi is not just a brand — it's a movement for renters who want elegance, sustainability, and
              purpose without the waste."
            </blockquote>
            <p className="mt-6 text-charcoal/60 font-medium">— Maya Chen, Co-Founder</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
