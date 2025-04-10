import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Target } from "lucide-react"
import SectionHeader from "@/components/section-header"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Learn about WILLGET PHARMA PLC, our history, mission, and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground">
                  WILLGET Pharma P.L.C was established in December 17, 2021 with two senior clinical pharmacy
                  professional partners Mr. Binyam Mechal and Mr. Habtamu Geremew in Addis Ababa, the capital of
                  Ethiopia.
                </p>
                <p className="text-muted-foreground">
                  The purpose of the company was to fill the existing gap in delivering pharmaceuticals to health
                  sectors and to assist the health system of the country. Within three years since establishment, it has
                  become profitable which is unlikely in similar markets, acquired more than 500 customers and has
                  gained the opportunity to work with most of the importers and suppliers/vendors in the country.
                </p>
                <p className="text-muted-foreground">
                  Our product and service receivers include hospitals such as Paulos Hospital, Federal Main Health
                  Directory, Army Hospital, Ministry of St. Peter Hospital; NGOs including ICAP and Missionaries of
                  Charity, private clinics, retail pharmacies and others. Our suppliers include Beker General Business
                  PLC, Dugda General Business PLC, Kare Pharmaceuticals, Vital Pharmaceuticals, Bishaw General Business
                  Trading and others.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="WILLGET PHARMA history"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription>Where we aim to be</CardDescription>
              </CardHeader>
              <CardContent>
                <p>To be among the top three companies within ten years in Ethiopia in the pharmaceutical sector.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription>What drives us every day</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  To access and supply medicine, medical supplies and equipment to all governmental and private health
                  facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Our Objectives"
            description="Strategic goals that guide our operations and growth"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Develop Skilled Personnel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop skilled sales and medical representatives who can effectively serve our customers and
                  partners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Accessibility & Affordability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensure easy accessibility and affordability of medical products for all healthcare facilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Introduce New Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously introduce new and innovative products to the Ethiopian healthcare market.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work on emerging new health department and channel leadership with advanced logistic services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Our Core Values"
            description="The principles that define our company culture and guide our actions"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive to build and maintain long term and lasting relationships with our customers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Teamwork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All employees and units work in support of one another to move the company forward.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each employee puts continuous effort to improve the overall operation of the company.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Company gains are shared for every employee in turn every employee is accountable for the
                  responsibility given to them.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Ambition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We set ambitious goals and team efforts are geared toward that goal.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="WILLGET PHARMA achievements"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Achievements</h2>
                <p className="text-muted-foreground">
                  Within three years of its establishment, WILLGET Pharma P.L.C has gained the opportunity to work with
                  a variety of institutions and has been able to acquire and maintain strong relationships with most of
                  our customers.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      Total customer base: 1,200+ community pharmacies, 18 NGOs, 7 private hospitals, and 14
                      governmental specialty facilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      First year (2021/2022): Total purchase of 5 million birr and selling of 7.3 million birr
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Second year (2022/2023): Total sales of more than 37 million birr</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Third year (2023/2024): Achieved sales of 132 million birr</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Leadership"
            description="Meet the visionary leader behind WILLGET PHARMA"
            className="mb-12"
          />
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="flex items-center justify-center p-6">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      width={300}
                      height={300}
                      alt="Biniam Mechal - CEO"
                      className="rounded-full object-cover h-48 w-48"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold">Biniam Mechal</h3>
                    <p className="text-primary font-medium">Chief Executive Officer</p>
                    <p className="mt-4 text-muted-foreground">
                      Biniam Mechal is the CEO of WILLGET PHARMA PLC. He holds a bachelor's degree in pharmacy and has
                      eight years of experience in pharmaceutical marketing, sales, and promotion.
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      He has worked with multinational pharmaceutical companies such as Glasko Smith Kline (GSK)
                      consumers, Beker General Business PLC, Woyn Chemicals, and Droga Pharma PLC. Now as the manager of
                      WILLGET PHARMA PLC, he is working with various pharmaceutical suppliers to ensure the best
                      products and services for our customers.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Us in Our Mission</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Partner with WILLGET PHARMA to contribute to better healthcare in Ethiopia.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
