import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Excellenzi",
  description: "Terms and conditions for using Excellenzi.com",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-serif font-semibold text-charcoal mb-8">Terms of Service</h1>
            <p className="text-charcoal/60 mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-charcoal/80 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">1. Introduction</h2>
                  <p>
                    Welcome to Excellenzi.com. By accessing or using our website, you agree to be bound by these Terms
                    of Service. If you do not agree with any part of these terms, please do not use our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">2. Use of Website</h2>
                  <p>
                    Our website is intended for informational purposes and to provide product reviews and
                    recommendations. You may browse and use our content for personal, non-commercial purposes only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">3. Affiliate Disclosure</h2>
                  <p>
                    Excellenzi.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                    advertising program designed to provide a means for sites to earn advertising fees by advertising
                    and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">4. Product Information</h2>
                  <p>
                    While we strive to provide accurate and up-to-date information about products, prices and
                    availability may change. We recommend verifying details on the retailer's website before making any
                    purchase.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">5. Intellectual Property</h2>
                  <p>
                    All content on this website, including text, images, logos, and design elements, is the property of
                    Excellenzi.com and protected by copyright laws. You may not reproduce, distribute, or use our
                    content without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">6. Limitation of Liability</h2>
                  <p>
                    Excellenzi.com is not responsible for any damages arising from your use of our website or reliance
                    on information provided. We make no warranties about the accuracy or completeness of our content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">7. Changes to Terms</h2>
                  <p>
                    We reserve the right to update these terms at any time. Continued use of the website after changes
                    constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">8. Contact</h2>
                  <p>For questions about these terms, please contact us at legal@excellenzi.com.</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
