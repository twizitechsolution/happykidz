import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const LOGO = "https://customer-assets.emergentagent.com/job_e8d411ed-442e-4bb2-8983-8c3ef5c754a7/artifacts/0cxz66vb_IMG_20260403_184615.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/team", label: "Our Team" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      data-testid="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg bg-white/97 backdrop-blur-md' : 'bg-white shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#C8161D] text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="font-poppins">Welcome to Happy Kidz International Preschool &amp; Kindergarten</span>
          <a href="tel:+918249156053" className="flex items-center gap-1.5 hover:text-red-200 transition-colors font-poppins">
            <Phone size={11} /> +91 82491 56053
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="/" data-testid="header-logo">
            <img src={LOGO} alt="Happy Kidz" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  `text-sm font-medium font-poppins transition-colors duration-200 relative group pb-0.5 ${
                    isActive ? 'text-[#C8161D]' : 'text-[#1A1A1A] hover:text-[#C8161D]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#C8161D] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/admissions" data-testid="enroll-now-btn" className="btn-primary !text-sm !px-5 !py-2.5 ml-1">
              Enroll Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {open ? <X size={24} className="text-[#1A1A1A]" /> : <Menu size={24} className="text-[#1A1A1A]" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[700px]' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1.5">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-xl font-medium text-base transition-all ${
                  isActive ? 'bg-[#FDE8E9] text-[#C8161D] font-semibold' : 'text-[#1A1A1A] hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="btn-primary text-center mt-2 justify-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
  );
}
