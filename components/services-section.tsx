import { Microscope, PlusCircle, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"

export default function ServicesSection() {
  const services = [
    {
      icon: PlusCircle,
      title: "Pharmaceutical Supply",
      description: "Quality medicines and pharmaceutical products for healthcare facilities.",
      features: ["Prescription medications", "Over-the-counter products", "Specialty pharmaceuticals"],
      link: "/services#pharmaceutical-supply",
    },
    {
      icon: Microscope,
      title: "Medical Equipment",
      description: "Modern medical equipment and supplies for healthcare providers.",
      features: ["Diagnostic equipment", "Medical supplies", "Laboratory instruments"],
      link: "/services#medical-equipment",
    },
    {
      icon: Stethoscope,
      title: "Pharmaceutical Consultations",
      description: "Expert advice and consultations for healthcare professionals.",
      features: ["Medication reviews", "Healthcare facility setup", "Pharmaceutical training"],
      link: "/services#consultations",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Our Services"
          description="We provide a wide range of pharmaceutical services to meet the needs of our customers."
          className="mb-16"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
