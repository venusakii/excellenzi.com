import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Shop | Excellenzi",
  description: "Shop our curated collection of smart, space-saving kitchen tools.",
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24 md:py-32 bg-porcelain min-h-[60vh] flex items-center">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-sm font-medium text-sage uppercase tracking-widest">Coming Soon</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-serif font-semibold text-charcoal text-balance">
              Direct Shopping Experience
            </h1>
            <p className="mt-6 text-lg text-charcoal/70 max-w-2xl mx-auto">
              We're building a seamless shopping experience. In the meantime, explore our product reviews and find your
              perfect kitchen tools through our trusted Amazon affiliate links.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-sage hover:bg-sage/90 text-charcoal font-medium px-8 py-6 rounded-full"
            >
              <Link href="/reviews">Browse Products</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
