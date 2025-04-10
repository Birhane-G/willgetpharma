import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="WILLGET PHARMA team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About WILLGET PHARMA
            </div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Trusted Pharmaceutical Partner
            </h2>

            <p className="text-muted-foreground text-lg">
              Established in December 2021, WILLGET PHARMA PLC has quickly become a trusted name in Ethiopia's
              pharmaceutical sector. Our mission is to access and supply medicine, medical supplies and equipment to all
              governmental and private health facilities.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Working with 1,200+ community pharmacies, 18 NGOs, and 7 private hospitals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Achieved 132 million birr in sales by 2023/2024</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>Led by experienced pharmaceutical professionals</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
