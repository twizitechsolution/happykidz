import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star, Shield, BookOpen, Users, Award, Heart, ArrowRight,
  MapPin, Globe, Smile, CheckCircle
} from 'lucide-react';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: Shield, title: "Safe & Secure", desc: "CCTV-monitored, childproof environment with trained safety staff.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: BookOpen, title: "Play-Based Learning", desc: "International curriculum blending purposeful play with structured education.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: Users, title: "Expert Teachers", desc: "Highly qualified early childhood educators with years of experience.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: Globe, title: "International Curriculum", desc: "Globally recognized standards with rich local cultural values.", color: "#FEF9C3", iconColor: "#ca8a04" },
];

const programs = [
  { title: "Playgroup", age: "1.5 – 2.5 Years", desc: "Gentle intro to structured learning through play, songs, and exploration.", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80", bg: "#FDE8E9" },
  { title: "Nursery", age: "2.5 – 3.5 Years", desc: "Building social skills, motor development, and early literacy.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", bg: "#F3F9E2" },
  { title: "Kindergarten", age: "4 – 6 Years", desc: "School-readiness program with reading, writing, numeracy & critical thinking.", image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80", bg: "#E0F2FE" },
  { title: "After School", age: "4 – 10 Years", desc: "Enriching after-school activities — arts, music, sports, and creativity.", image: "https://images.unsplash.com/photo-1561625116-5f8675632ab2?w=600&q=80", bg: "#FEF9C3" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Aanya (Nursery)", rating: 5, text: "Happy Kidz has been a wonderful experience for our daughter. The teachers are incredibly caring and the curriculum is world-class. Aanya loves going to school every day!", avatar: "https://i.pravatar.cc/100?img=1" },
  { name: "Rajesh Kumar", role: "Parent of Arjun (Kindergarten)", rating: 5, text: "The transformation in my son has been incredible. He's become more confident, creative, and socially aware. The staff truly goes above and beyond!", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Sunita Patel", role: "Parent of Riya (Playgroup)", rating: 5, text: "From the moment we walked in, we felt the warmth and professionalism. The facilities are excellent and the approach to learning is exactly what we wanted.", avatar: "https://i.pravatar.cc/100?img=5" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80", alt: "Kids in classroom" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Reading time" },
  { src: "https://images.unsplash.com/photo-1561625116-5f8675632ab2?w=600&q=80", alt: "Outdoor play" },
  { src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80", alt: "Art activities" },
  { src: "https://images.unsplash.com/photo-1605901309584-818e25452571?w=600&q=80", alt: "Creative play" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", alt: "Teacher with kids" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FDE8E9] rounded-full opacity-40 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F3F9E2] rounded-full opacity-50 blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="section-label">Welcome to Happy Kidz</span>
            <h1 className="font-nunito font-extrabold text-5xl md:text-6xl text-[#1A1A1A] leading-tight mt-4 mb-6">
              Where Every Child{' '}
              <span className="text-[#C8161D]">Learns,</span>{' '}
              <span className="text-[#9DC41E]">Grows</span>{' '}
              &amp; Shines
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
              A nurturing international preschool in Bhubaneswar where curiosity meets creativity. Give your child the very best start with our play-based, holistic curriculum.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/admissions" data-testid="hero-enroll-btn" className="btn-primary">Enroll Now <ArrowRight size={18} /></Link>
              <Link to="/contact" data-testid="hero-visit-btn" className="btn-outline">Book a Visit <MapPin size={18} /></Link>
            </div>
            <div className="flex flex-wrap gap-8">
              {[{ num: "500+", label: "Happy Kids" }, { num: "15+", label: "Expert Teachers" }, { num: "10+", label: "Years of Trust" }].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}>
                  <div className="font-nunito font-extrabold text-3xl text-[#C8161D]">{s.num}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=900&q=80" alt="Happy kids learning" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <motion.div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#FDE8E9] rounded-xl flex items-center justify-center">
                  <Star className="text-[#C8161D]" size={20} fill="#C8161D" />
                </div>
                <div>
                  <div className="font-nunito font-bold text-sm text-[#1A1A1A]">Top Rated</div>
                  <div className="flex gap-0.5 mt-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={10} fill="#FBBF24" className="text-yellow-400" />)}</div>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute -top-4 -right-4 bg-[#9DC41E] text-white rounded-2xl shadow-xl p-3" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <Heart size={28} fill="white" />
            </motion.div>
            <motion.div className="absolute top-8 -left-8 bg-[#FEF9C3] rounded-2xl shadow-lg p-3" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <Smile className="text-[#ca8a04]" size={24} />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#FDE8E9] rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#F3F9E2] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#C8161D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ num: "500+", label: "Enrolled Students", icon: Users }, { num: "15+", label: "Expert Educators", icon: Award }, { num: "10+", label: "Years of Excellence", icon: Star }, { num: "4", label: "Age-Specific Programs", icon: BookOpen }].map((s, i) => (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <s.icon size={30} className="mx-auto mb-2 text-red-200" />
                <div className="font-nunito font-extrabold text-4xl mb-1">{s.num}</div>
                <div className="text-red-200 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">The Happy Kidz Difference</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We believe every child deserves an exceptional start. Here's what makes us special.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {highlights.map((h, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border border-gray-100">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: h.color }}>
                  <h.icon size={28} style={{ color: h.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Programs</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Learning Journeys for Every Age</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Age-appropriate programs designed by early childhood experts to nurture every aspect of development.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {programs.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card rounded-3xl overflow-hidden border border-gray-100 bg-white group" data-testid={`program-card-${i}`}>
                <div className="h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6" style={{ background: p.bg + "55" }}>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{p.age}</span>
                  <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mt-1 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/programs" className="text-[#C8161D] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <ArrowRight size={14} /></Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <Link to="/programs" className="btn-primary" data-testid="view-programs-btn">View All Programs <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Parent Reviews</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">What Parents Say About Us</h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border border-gray-100" data-testid={`testimonial-card-${i}`}>
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#FBBF24" className="text-yellow-400" />)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#FDE8E9]" />
                  <div>
                    <div className="font-nunito font-bold text-[#1A1A1A]">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <Link to="/testimonials" className="btn-outline" data-testid="more-reviews-btn">Read More Reviews <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Gallery</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">A Peek Inside Happy Kidz</h2>
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}
                style={{ height: i === 0 ? 'auto' : '200px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: i === 0 ? '408px' : '200px' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - features */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-label">Our Commitment</span>
              <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3 mb-6">A Place Where Your Child Truly Belongs</h2>
              <p className="text-gray-600 leading-relaxed mb-6">At Happy Kidz, we combine play, creativity, and structured learning to give your child the perfect foundation for lifelong learning and happiness.</p>
              <div className="space-y-3">
                {["International curriculum aligned with global standards", "Small class sizes for personalized attention", "Regular parent-teacher communication", "Nutritious meals and healthy snacks provided", "Certified and experienced educators"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#9DC41E] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-secondary">Learn More About Us <ArrowRight size={18} /></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="Classroom" className="w-full h-[440px] object-cover rounded-[2rem] shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9DC41E] rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-4xl md:text-5xl mb-4">Ready to Join the Happy Kidz Family?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Limited seats available for the upcoming academic year. Book your school visit today!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="cta-apply-btn">Apply Now <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-white" data-testid="cta-contact-btn">Contact Us</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
