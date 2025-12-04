import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="min-h-[70vh] flex items-center justify-center bg-porcelain">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <span className="text-8xl font-serif font-semibold text-sage">404</span>
            <h1 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-charcoal">Page Not Found</h1>
            <p className="mt-4 text-charcoal/70 text-lg">
              Looks like this page has folded away. Let's get you back to something useful.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-sage hover:bg-sage/90 text-charcoal font-medium px-8 rounded-full"
              >
                <Link href="/">Go Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 rounded-full bg-transparent">
                <Link href="/reviews">Browse Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
