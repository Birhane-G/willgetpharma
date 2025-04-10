import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import SectionHeader from "@/components/section-header"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Team</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet the dedicated professionals behind WILLGET PHARMA PLC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Leadership Team"
            description="The visionary leaders guiding WILLGET PHARMA to success"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  fill
                  alt="Biniam Mechal - CEO"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Biniam Mechal</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Biniam holds a bachelor's degree in pharmacy and has eight years of experience in pharmaceutical
                  marketing, sales, and promotion. He has worked with multinational pharmaceutical companies such as
                  GSK, Beker General Business PLC, Woyn Chemicals, and Droga Pharma PLC.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  fill
                  alt="Habtamu Geremew - Tender Officer"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Habtamu Geremew</CardTitle>
                <CardDescription>Tender Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Habtamu is a senior clinical pharmacy professional and one of the founding partners of WILLGET PHARMA.
                  He specializes in tender services and helps healthcare facilities navigate the procurement process.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  fill
                  alt="Shewandagne Hundera - Technical Manager"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Shewandagne Hundera</CardTitle>
                <CardDescription>Technical Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Shewandagne oversees the technical aspects of WILLGET PHARMA's operations, ensuring that all products
                  meet quality standards and regulatory requirements. He brings extensive experience in pharmaceutical
                  quality assurance.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Team */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Operational Team"
            description="The dedicated professionals who ensure smooth day-to-day operations"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Mekdes Tsegaye - Operational Manager"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mekdes Tsegaye</CardTitle>
                <CardDescription>Operational Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mekdes oversees the day-to-day operations of WILLGET PHARMA, ensuring efficient workflow and customer
                  satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Misganaw Deribe - Store Manager"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Misganaw Deribe</CardTitle>
                <CardDescription>Store Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Misganaw manages the inventory and storage facilities, ensuring proper handling and organization of
                  pharmaceutical products.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Betel Yohannes - Tender Officer"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Betel Yohannes</CardTitle>
                <CardDescription>Tender Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Betel assists in tender preparation and submission, helping healthcare facilities navigate the
                  procurement process.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Adrsse Hayilu - Driver"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Adrsse Hayilu</CardTitle>
                <CardDescription>Driver</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adrsse ensures timely delivery of pharmaceutical products to healthcare facilities across Addis Ababa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Sales Representatives"
            description="Our knowledgeable sales team connecting healthcare facilities with the right products"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Annene Kumela - Sales Representative"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Annene Kumela</CardTitle>
                <CardDescription>Sales Representative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annene works with healthcare facilities to understand their pharmaceutical needs and provide tailored
                  solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Dawit Lemma - Sales Representative"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dawit Lemma</CardTitle>
                <CardDescription>Sales Representative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dawit specializes in building relationships with healthcare providers and ensuring they have access to
                  the products they need.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Hayat Shamil - Sales Representative"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Hayat Shamil</CardTitle>
                <CardDescription>Sales Representative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hayat focuses on introducing new products to healthcare facilities and providing education on their
                  benefits and uses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Finance Team */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Finance Department"
            description="The financial experts ensuring the company's fiscal health and growth"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Betelhem Fantahun - Department Head"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Betelhem Fantahun</CardTitle>
                <CardDescription>Finance Department Head</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Betelhem leads the finance department, overseeing all financial operations and strategic financial
                  planning.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Meseret Berihun - Senior Accountant"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Meseret Berihun</CardTitle>
                <CardDescription>Senior Accountant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Meseret manages financial reporting, auditing, and compliance with financial regulations.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Dawit Mechal - Junior Accountant"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dawit Mechal</CardTitle>
                <CardDescription>Junior Accountant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dawit assists with day-to-day accounting tasks, including accounts payable, accounts receivable, and
                  financial record-keeping.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Gezehagne Yilma - Assistant Finance"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Gezehagne Yilma</CardTitle>
                <CardDescription>Assistant Finance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gezehagne provides support to the finance team, handling administrative tasks and assisting with
                  financial operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Support Staff"
            description="The essential team members who keep our operations running smoothly"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Solomon Mekonnen - Motor Driver"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Solomon Mekonnen</CardTitle>
                <CardDescription>Motor Driver</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solomon ensures quick delivery of urgent pharmaceutical products to healthcare facilities in Addis
                  Ababa.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Worku Ayle - Security"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Worku Ayle</CardTitle>
                <CardDescription>Security</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Worku ensures the security of WILLGET PHARMA's facilities, protecting valuable pharmaceutical products
                  and equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                <p>
                  WILLGET PHARMA is always looking for talented and passionate individuals to join our team. We offer a
                  dynamic work environment, competitive compensation, and opportunities for professional growth.
                </p>
                <p>
                  If you're interested in contributing to our mission of finding a way for better health of the
                  community, we'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="secondary">
                  <Link href="/contact">View Open Positions</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Join our team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
