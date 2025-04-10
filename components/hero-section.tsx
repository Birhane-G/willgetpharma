import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 top-0">
        <Image
            src="/images/pharma.jpg"
          alt="Pharmacy background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-3 pb-20 lg:pb-36">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6 text-white">
            <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              Leading Pharmaceutical Supplier in Ethiopia
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Finding a Way for Better Health
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl opacity-90">
              WILLGET PHARMA delivers quality medicines, medical supplies, and equipment to healthcare facilities across
              Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white font-medium"
              >
                <Link href="/about" className="flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[450px] h-[450px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Pharmacy services illustration"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
