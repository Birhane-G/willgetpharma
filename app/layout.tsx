import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WILLGET PHARMA PLC | Leading Pharmaceutical Supplier in Ethiopia",
  description:
    "WILLGET PHARMA PLC is a trusted pharmaceutical supplier in Ethiopia, providing quality medicines, medical supplies and equipment to healthcare facilities.",
  keywords:
    "pharmacy, Ethiopia, pharmaceutical, medical supplies, healthcare, medicine, Addis Ababa, medical equipment",
  authors: [{ name: "WILLGET PHARMA PLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willgetpharma.com",
    title: "WILLGET PHARMA PLC | Leading Pharmaceutical Supplier in Ethiopia",
    description: "Quality medicines, medical supplies and equipment for healthcare facilities in Ethiopia.",
    siteName: "WILLGET PHARMA PLC",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'