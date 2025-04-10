import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-slate-800">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-slate-400 max-w-md">
                Subscribe to our newsletter to receive updates on new products, services, and pharmaceutical industry
                news.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                W
              </div>
              <span className="font-bold text-xl">WILLGET PHARMA</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Finding a way for better health of the community by supplying quality medicines, medical supplies and
              equipment to health facilities.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="grid gap-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="grid gap-3">
              <li>
                <Link
                  href="/services#pharmaceutical-supply"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Pharmaceutical Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services#medical-equipment"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="/services#consultations" className="text-slate-400 hover:text-primary transition-colors">
                  Pharmaceutical Consultations
                </Link>
              </li>
              <li>
                <Link href="/services#logistics" className="text-slate-400 hover:text-primary transition-colors">
                  Advanced Logistics
                </Link>
              </li>
              <li>
                <Link href="/services#tender-services" className="text-slate-400 hover:text-primary transition-colors">
                  Tender Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="grid gap-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  WILLGET PHARMA PLC
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">+251 (0) 123 456 789</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">info@willgetpharma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} WILLGET PHARMA PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
