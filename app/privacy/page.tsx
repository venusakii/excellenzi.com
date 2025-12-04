import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Excellenzi",
  description: "Privacy policy for Excellenzi.com - how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-serif font-semibold text-charcoal mb-8">Privacy Policy</h1>
            <p className="text-charcoal/60 mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-charcoal/80 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly, such as your email address when subscribing to our
                    newsletter, and automatically collected data including cookies, IP addresses, and browsing behavior.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Analyze website traffic and improve user experience</li>
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">3. Cookies</h2>
                  <p>
                    We use cookies to enhance your browsing experience, analyze site traffic, and understand user
                    preferences. You can control cookie settings in your browser. By continuing to use our site, you
                    consent to our use of cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">4. Third-Party Links</h2>
                  <p>
                    Our website contains links to third-party sites, including Amazon.com. We are not responsible for
                    the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">5. Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect your personal information. However, no method
                    of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">6. Your Rights</h2>
                  <p>
                    You have the right to access, correct, or delete your personal information. To exercise these
                    rights, contact us at privacy@excellenzi.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">7. Children's Privacy</h2>
                  <p>
                    Our website is not intended for children under 13. We do not knowingly collect personal information
                    from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">8. Changes to This Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by posting
                    the new policy on this page with an updated revision date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">9. Contact Us</h2>
                  <p>If you have questions about this privacy policy, please contact us at privacy@excellenzi.com.</p>
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
