import Link from "next/link"

const footerLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-porcelain/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold text-porcelain">
                Excellen<span className="inline-block rotate-12">z</span>i
              </span>
            </Link>
            <p className="text-sm text-porcelain/60 max-w-sm leading-relaxed">
              Smart, space-saving, sustainable tools — made for modern renters who believe small spaces deserve
              beautiful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-porcelain mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/reviews" className="text-sm text-porcelain/60 hover:text-sage transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-porcelain/60 hover:text-sage transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-porcelain/60 hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-porcelain mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-porcelain/60 hover:text-sage transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-porcelain/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-porcelain/50">
            <p>© 2025 Excellenzi.com. All rights reserved.</p>
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}
