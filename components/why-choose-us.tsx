import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, PlusCircle, ShieldCheck, Truck } from "lucide-react"
import SectionHeader from "@/components/section-header"

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "We ensure all products meet the highest quality standards and regulatory requirements.",
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description: "Our advanced logistics ensure consistent and timely delivery of pharmaceutical products.",
    },
    {
      icon: HeartPulse,
      title: "Customer Focus",
      description: "We build lasting relationships with our customers through exceptional service and support.",
    },
    {
      icon: PlusCircle,
      title: "Expertise",
      description: "Our team of pharmaceutical professionals brings years of industry experience and knowledge.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Why Choose Us"
          description="We are committed to providing the highest quality pharmaceutical products and services."
          className="mb-16"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group">
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                  <CardHeader className="items-center text-center pb-2">
                    <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">{feature.description}</CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
