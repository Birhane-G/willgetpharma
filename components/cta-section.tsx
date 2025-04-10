import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl">
            Ready to Partner With Us for Better Healthcare?
          </h2>
          <p className="max-w-[700px] md:text-xl opacity-90">
            Contact WILLGET PHARMA today to discuss how we can meet your pharmaceutical needs and contribute to better
            healthcare in Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white font-medium"
            >
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
