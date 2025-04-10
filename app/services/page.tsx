import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import SectionHeader from "@/components/section-header"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive pharmaceutical services to meet the needs of healthcare facilities across Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Supply */}
      <section id="pharmaceutical-supply" className="py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <SectionHeader
                title="Pharmaceutical Supply"
                description="WILLGET PHARMA provides a wide range of pharmaceutical products to healthcare facilities across
                  Ethiopia. We ensure that our products are of the highest quality and meet all regulatory requirements."
              />
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Prescription medications for hospitals and clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Over-the-counter products for retail pharmacies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Specialty pharmaceuticals for specific medical conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Generic and branded medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Vaccines and immunization products</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Inquire About Products</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Pharmaceutical products"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipment */}
      <section id="medical-equipment" className="bg-muted py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Medical equipment"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <SectionHeader
                title="Medical Equipment"
                description="We supply modern medical equipment and supplies to healthcare providers, ensuring they have the tools
                  they need to provide quality care to their patients."
              />
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Diagnostic equipment for accurate patient assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Medical supplies for day-to-day healthcare operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Laboratory instruments for medical testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Surgical equipment for operating rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Patient monitoring systems</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Request Equipment Catalog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Consultations */}
      <section id="consultations" className="py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <SectionHeader
                title="Pharmaceutical Consultations"
                description="Our team of experienced pharmaceutical professionals provides expert advice and consultations to
                  healthcare facilities and professionals."
              />
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Medication reviews to ensure optimal patient outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Healthcare facility setup and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Pharmaceutical training for healthcare professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Regulatory compliance guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Inventory management solutions</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Pharmaceutical consultation"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Logistics */}
      <section id="logistics" className="bg-muted py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Logistics services"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <SectionHeader
                title="Advanced Logistics"
                description="Our advanced logistics services ensure that pharmaceutical products are delivered efficiently and on
                  time to healthcare facilities across Ethiopia."
              />
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Nationwide distribution network</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Temperature-controlled transportation for sensitive products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Real-time tracking of shipments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Expedited delivery options for urgent needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Secure handling of pharmaceutical products</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Learn About Our Logistics</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Services */}
      <section id="tender-services" className="py-12 md:py-16 lg:py-20 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <SectionHeader
                title="Tender Services"
                description="WILLGET PHARMA specializes in tender services for pharmaceutical products and medical equipment,
                  helping healthcare facilities navigate the procurement process."
              />
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Tender preparation and submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Competitive pricing strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Documentation and compliance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Contract negotiation and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Post-award support and implementation</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Discuss Tender Opportunities</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Tender services"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Additional Services"
            description="Beyond our core offerings, we provide specialized services to meet the unique needs of our clients"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Training Programs</CardTitle>
                <CardDescription>Professional development for healthcare staff</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer comprehensive training programs for healthcare professionals on pharmaceutical management,
                  medication administration, and inventory control.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Inquire About Training</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>Optimize your pharmaceutical inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our inventory management solutions help healthcare facilities maintain optimal stock levels, reduce
                  waste, and ensure product availability.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>Ensuring product safety and efficacy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our quality assurance services ensure that all products meet regulatory requirements and maintain
                  their efficacy throughout the supply chain.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Discover More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a Customized Solution?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Contact WILLGET PHARMA today to discuss how we can tailor our services to meet your specific needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
