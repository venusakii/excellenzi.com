import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/reviews/product-grid"

export const metadata = {
  title: "Product Reviews | Excellenzi",
  description:
    "Discover our curated collection of smart, space-saving kitchen tools. Read reviews and find the perfect products for your compact kitchen.",
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-sm font-medium text-sage uppercase tracking-widest">Curated Collection</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-semibold text-charcoal text-balance">
              Product Reviews
            </h1>
            <p className="mt-4 text-lg text-charcoal/70 max-w-2xl mx-auto">
              Every product we feature has been tested in real small-space kitchens. Discover tools that actually work.
            </p>
          </div>
        </section>

        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
