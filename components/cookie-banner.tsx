"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50 animate-unfold">
      <div className="bg-white rounded-2xl shadow-xl border border-border p-5 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-sm text-charcoal/80 pr-6 leading-relaxed">
          This website uses cookies to enhance your experience and analyze site traffic. By continuing, you agree to our
          cookie policy.
        </p>
        <Button onClick={acceptCookies} className="mt-4 w-full bg-sage hover:bg-sage/90 text-charcoal font-medium">
          Accept Cookies
        </Button>
      </div>
    </div>
  )
}
