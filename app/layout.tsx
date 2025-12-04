import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Excellenzi | Smart Kitchen Tools for Small Spaces",
    template: "%s | Excellenzi",
  },
  description:
    "Discover eco-conscious, space-saving kitchen tools designed for modern renters. Smart, sustainable, and beautifully minimal.",
  keywords: [
    "kitchen tools",
    "small space",
    "eco-friendly",
    "sustainable",
    "compact kitchen",
    "renters",
    "minimalist",
    "apartment living",
  ],
  authors: [{ name: "Excellenzi" }],
  creator: "Excellenzi",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Excellenzi",
    title: "Excellenzi | Smart Kitchen Tools for Small Spaces",
    description: "Discover eco-conscious, space-saving kitchen tools designed for modern renters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellenzi | Smart Kitchen Tools for Small Spaces",
    description: "Discover eco-conscious, space-saving kitchen tools designed for modern renters.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.jpg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#9BBBA7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
