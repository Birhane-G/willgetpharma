import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeader from "@/components/section-header"

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Products</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our comprehensive range of pharmaceutical products and medical equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="pharmaceuticals" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="pharmaceuticals">Pharmaceuticals</TabsTrigger>
                <TabsTrigger value="equipment">Medical Equipment</TabsTrigger>
                <TabsTrigger value="supplies">Medical Supplies</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="pharmaceuticals">
              <SectionHeader
                title="Pharmaceutical Products"
                description="Quality medications and pharmaceutical products for healthcare facilities."
                className="mb-8"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Prescription Medications"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Prescription Medications</CardTitle>
                    <CardDescription>High-quality prescription drugs for various medical conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We supply a wide range of prescription medications, including antibiotics, cardiovascular drugs,
                      antidiabetics, and more, from trusted manufacturers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Over-the-Counter Products"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Over-the-Counter Products</CardTitle>
                    <CardDescription>Non-prescription medications for common health concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our OTC product line includes pain relievers, cold and flu medications, digestive health products,
                      vitamins, and supplements for retail pharmacies.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Specialty Pharmaceuticals"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Specialty Pharmaceuticals</CardTitle>
                    <CardDescription>Specialized medications for complex medical conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide specialty pharmaceuticals for oncology, immunology, rare diseases, and other complex
                      medical conditions requiring specialized handling and administration.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Generic Medications"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Generic Medications</CardTitle>
                    <CardDescription>Cost-effective alternatives to branded medications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our generic medication portfolio offers high-quality, affordable alternatives to branded drugs,
                      helping healthcare facilities manage costs while maintaining quality care.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Vaccines"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Vaccines & Immunization Products</CardTitle>
                    <CardDescription>Essential vaccines for disease prevention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We supply a range of vaccines and immunization products for preventive healthcare, including
                      childhood vaccines, seasonal flu vaccines, and adult immunizations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Branded Medications"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Branded Medications</CardTitle>
                    <CardDescription>Original brand-name pharmaceutical products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We partner with leading pharmaceutical manufacturers to provide branded medications, ensuring
                      healthcare facilities have access to innovative treatments.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="equipment">
              <SectionHeader
                title="Medical Equipment"
                description="Modern medical equipment for healthcare providers to deliver quality care."
                className="mb-8"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Diagnostic Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Diagnostic Equipment</CardTitle>
                    <CardDescription>Tools for accurate patient assessment and diagnosis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our diagnostic equipment includes blood pressure monitors, stethoscopes, thermometers, glucose
                      meters, and other essential tools for patient assessment.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Laboratory Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Laboratory Equipment</CardTitle>
                    <CardDescription>Instruments for medical testing and analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We supply laboratory equipment such as microscopes, centrifuges, analyzers, and other instruments
                      essential for medical testing and research.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Surgical Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Surgical Equipment</CardTitle>
                    <CardDescription>Tools and instruments for surgical procedures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our surgical equipment includes surgical instruments, sterilization equipment, operating tables,
                      and other essential tools for surgical procedures.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Patient Monitoring Systems"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Patient Monitoring Systems</CardTitle>
                    <CardDescription>Equipment for continuous patient monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide patient monitoring systems including vital signs monitors, ECG machines, pulse
                      oximeters, and other equipment for continuous patient monitoring.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Imaging Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Imaging Equipment</CardTitle>
                    <CardDescription>Tools for medical imaging and diagnostics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our imaging equipment includes ultrasound machines, X-ray equipment, and other diagnostic imaging
                      tools for healthcare facilities.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Rehabilitation Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Rehabilitation Equipment</CardTitle>
                    <CardDescription>Tools for patient rehabilitation and therapy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We supply rehabilitation equipment including physical therapy tools, mobility aids, and other
                      equipment to support patient recovery and rehabilitation.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="supplies">
              <SectionHeader
                title="Medical Supplies"
                description="Essential medical supplies for day-to-day healthcare operations."
                className="mb-8"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Disposable Medical Supplies"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Disposable Medical Supplies</CardTitle>
                    <CardDescription>Single-use medical supplies for infection control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our disposable medical supplies include gloves, masks, syringes, needles, catheters, and other
                      single-use items essential for infection control.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Wound Care Products"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Wound Care Products</CardTitle>
                    <CardDescription>Supplies for wound treatment and management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide a comprehensive range of wound care products including dressings, bandages,
                      antiseptics, and other supplies for wound treatment and management.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Sterilization Supplies"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Sterilization Supplies</CardTitle>
                    <CardDescription>Products for equipment sterilization and disinfection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our sterilization supplies include sterilization pouches, indicators, disinfectants, and other
                      products essential for maintaining sterile environments.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Personal Protective Equipment"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Personal Protective Equipment</CardTitle>
                    <CardDescription>Protective gear for healthcare workers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We supply personal protective equipment (PPE) including gowns, face shields, masks, gloves, and
                      other protective gear for healthcare workers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Infusion Supplies"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Infusion Supplies</CardTitle>
                    <CardDescription>Products for intravenous therapy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our infusion supplies include IV sets, cannulas, infusion pumps, and other products essential for
                      intravenous therapy and medication administration.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="Laboratory Supplies"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <CardTitle>Laboratory Supplies</CardTitle>
                    <CardDescription>Consumables for laboratory testing and research</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide laboratory supplies including test tubes, slides, reagents, and other consumables
                      essential for laboratory testing and research.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request Catalog</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Product Catalog Request */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Request Our Full Product Catalog</h2>
                <p className="text-muted-foreground">
                  Our comprehensive product catalog includes detailed information about our complete range of
                  pharmaceutical products, medical equipment, and supplies. Contact us today to request your copy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Request Catalog</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Product catalog"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a Specific Product?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              If you don't see what you're looking for, contact us. We can source specific products to meet your
              healthcare facility's unique needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Our Product Specialists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
