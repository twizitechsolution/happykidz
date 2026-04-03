import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const LOGO = "https://customer-assets.emergentagent.com/job_e8d411ed-442e-4bb2-8983-8c3ef5c754a7/artifacts/0cxz66vb_IMG_20260403_184615.jpg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/team", label: "Our Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

const programLinks = [
  "Playgroup (1.5–2.5 yrs)",
  "Nursery (2.5–3.5 yrs)",
  "Pre-KG (3.5–4.5 yrs)",
  "Kindergarten (4–6 yrs)",
  "After School Program",
  "Summer Camp",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="bg-white rounded-2xl p-3 inline-block mb-5">
              <img src={LOGO} alt="Happy Kidz" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nurturing young minds with love, creativity, and an international curriculum. Building strong foundations for lifelong learning since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-testid={`social-${label.toLowerCase()}`}
                  className="w-10 h-10 bg-white/10 hover:bg-[#C8161D] rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-[#9DC41E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#9DC41E] rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-5">Our Programs</h4>
            <ul className="space-y-2.5">
              {programLinks.map(label => (
                <li key={label}>
                  <Link to="/programs" className="text-gray-400 text-sm hover:text-[#9DC41E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#C8161D] rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#9DC41E] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Plot No 84, near Kharavela Park,<br />Khandagiri, Bhubaneswar
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#9DC41E] flex-shrink-0" />
                <a href="tel:+918249156053" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +91 82491 56053
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#9DC41E] flex-shrink-0" />
                <a href="mailto:happykidzbbs@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors break-all">
                  happykidzbbs@gmail.com
                </a>
              </div>
              <div className="p-3 bg-white/5 rounded-xl mt-2">
                <p className="text-gray-400 text-xs">
                  <span className="text-[#9DC41E] font-semibold">School Hours:</span> Mon–Sat, 8:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Happy Kidz International Preschool &amp; Kindergarten. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
