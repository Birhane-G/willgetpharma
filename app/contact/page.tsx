"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import SectionHeader from "@/components/section-header"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent",
      description: "Thank you for contacting WILLGET PHARMA. We'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Get in touch with WILLGET PHARMA for inquiries, orders, or partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>Visit our office</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  WILLGET PHARMA PLC
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +251 (0) 123 456 789
                  <br />
                  +251 (0) 987 654 321
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="mb-2 w-fit rounded-full bg-primary/10 p-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send us a message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@willgetpharma.com
                  <br />
                  sales@willgetpharma.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Your organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Location</h2>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  width={800}
                  height={500}
                  alt="Map location"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground">
                WILLGET PHARMA PLC is located in Addis Ababa, the capital city of Ethiopia. Our central location allows
                us to efficiently serve healthcare facilities throughout the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Business Hours" description="When you can reach us" className="mb-12" />
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">8:30 AM - 5:30 PM</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Saturday</p>
                    <p className="text-muted-foreground">9:00 AM - 1:00 PM</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Public Holidays</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Find answers to common questions about WILLGET PHARMA"
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How can I place an order?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can place an order by contacting our sales team via phone, email, or by filling out the contact
                  form on this page. Our representatives will guide you through the ordering process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept various payment methods including bank transfers, checks, and electronic payments. For large
                  orders, we can discuss payment terms that work for your organization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long does delivery take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Delivery times vary depending on your location and the products ordered. For Addis Ababa, we typically
                  deliver within 1-2 business days. For other regions in Ethiopia, delivery may take 3-5 business days.
                  Expedited delivery options are available for urgent orders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer product consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, our team of pharmaceutical professionals offers consultations to help you select the right
                  products for your healthcare facility's needs. Contact us to schedule a consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Contact WILLGET PHARMA today to discuss how we can meet your pharmaceutical needs.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="tel:+251123456789">Call Us Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:info@willgetpharma.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
