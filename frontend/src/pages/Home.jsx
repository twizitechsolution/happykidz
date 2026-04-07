import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star, Shield, BookOpen, Users, Award, Heart, ArrowRight, MapPin,
  Globe, Smile, CheckCircle, Sun, Palette, Music, Dumbbell,
  Lightbulb, Leaf, Hash, Clock
} from 'lucide-react';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';
import {
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17
} from '../assets/images';

const LOGO = "https://customer-assets.emergentagent.com/job_e8d411ed-442e-4bb2-8983-8c3ef5c754a7/artifacts/0cxz66vb_IMG_20260403_184615.jpg";

const Wave = ({ fill, bg = "transparent" }) => (
  <div className="wave-divider" style={{ background: bg }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 55 }}>
      <path d="M0,35 C200,70 400,0 720,35 C1040,70 1280,5 1440,35 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

const CartoonCloud = ({ className }) => (
  <svg className={className} viewBox="0 0 120 70" fill="none">
    <ellipse cx="60" cy="55" rx="52" ry="15" fill="currentColor" opacity="0.5" />
    <circle cx="30" cy="40" r="20" fill="currentColor" opacity="0.5" />
    <circle cx="60" cy="30" r="25" fill="currentColor" opacity="0.5" />
    <circle cx="90" cy="38" r="18" fill="currentColor" opacity="0.5" />
  </svg>
);

const highlights = [
  { icon: Shield, title: "Safe & Child-Friendly Campus", desc: "CCTV-monitored, fully childproof environment. Your child's safety is our first priority.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: Award, title: "Qualified & Caring Educators", desc: "Experienced, professionally trained educators who nurture each child with love and patience.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: Lightbulb, title: "Activity-Based Learning", desc: "Hands-on activities that build cognitive, motor, and social skills through joyful exploration.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: Heart, title: "Holistic Development", desc: "We nurture all aspects of a child's growth — social, emotional, creative, and academic.", color: "#FEF9C3", iconColor: "#ca8a04" },
  { icon: Users, title: "Parent-School Partnership", desc: "Strong, transparent communication between parents, teachers, and children at all times.", color: "#FCE7F3", iconColor: "#DB2777" },
];

const programs = [
  { title: "Playgroup", age: "1.5 – 2.5 Years", desc: "Gentle introduction to learning through play, songs, and joyful exploration.", image: img1, bg: "#FDE8E9", accent: "#C8161D" },
  { title: "Nursery", age: "2.5 – 3.5 Years", desc: "Building social skills, early literacy and motor development through fun.", image: img2, bg: "#F3F9E2", accent: "#9DC41E" },
  { title: "Pre-KG & KG", age: "3.5 – 6 Years", desc: "School-readiness with reading, writing, numeracy and critical thinking skills.", image: img3, bg: "#E0F2FE", accent: "#0284c7" },
  { title: "Summer Camp", age: "All Ages", desc: "Fun-filled seasonal camps — Nature, Arts, Music, Sports, Cooking, STEAM.", image: img4, bg: "#FEF9C3", accent: "#ca8a04" },
];

const routine = [
  { time: "8:00–8:30", label: "Arrival & Free Play", icon: Sun, color: "#FEF9C3", ic: "#ca8a04" },
  { time: "8:30–9:00", label: "Circle Time", icon: Users, color: "#FDE8E9", ic: "#C8161D" },
  { time: "9:00–9:30", label: "Exploration", icon: Lightbulb, color: "#E0F2FE", ic: "#0284c7" },
  { time: "9:30–10:00", label: "Snack Time", icon: Heart, color: "#F3F9E2", ic: "#9DC41E" },
  { time: "10:00–10:45", label: "Learning Activities", icon: BookOpen, color: "#FDE8E9", ic: "#C8161D" },
  { time: "10:45–11:15", label: "Outdoor Play", icon: Dumbbell, color: "#F3F9E2", ic: "#9DC41E" },
  { time: "11:15–11:45", label: "Creative Activities", icon: Palette, color: "#FCE7F3", ic: "#DB2777" },
  { time: "11:45–12:00", label: "Story Time", icon: BookOpen, color: "#E0F2FE", ic: "#0284c7" },
];

const themes = [
  { name: "Colours & Shapes", color: "#FDE8E9", text: "#C8161D" },
  { name: "Nature & Environment", color: "#F3F9E2", text: "#9DC41E" },
  { name: "Seasons", color: "#FEF9C3", text: "#ca8a04" },
  { name: "Numbers & Counting", color: "#E0F2FE", text: "#0284c7" },
  { name: "Letters & Phonics", color: "#FDE8E9", text: "#C8161D" },
  { name: "Community Helpers", color: "#F3F9E2", text: "#9DC41E" },
  { name: "Storytelling & Drama", color: "#FCE7F3", text: "#DB2777" },
  { name: "Sensory Play", color: "#E0F2FE", text: "#0284c7" },
];

const galleryImages = [
  { src: img5, alt: "Classroom fun" },
  { src: img6, alt: "Reading time" },
  { src: img7, alt: "Outdoor play" },
  { src: img8, alt: "Art & craft" },
  { src: img9, alt: "Creative play" },
  { src: img10, alt: "Teacher care" },
  { src: img11, alt: "Learning together" },
  { src: img12, alt: "Classroom" },
  { src: img13, alt: "Sports & fitness" },
  { src: img14, alt: "Block play" },
  { src: img15, alt: "Art class" },
  { src: img16, alt: "Story time" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Aanya (Nursery)", rating: 5, text: "Happy Kidz has been wonderful for our daughter. The teachers are incredibly caring and the curriculum is world-class. Aanya loves going to school every day!", avatar: "https://i.pravatar.cc/100?img=1" },
  { name: "Rajesh Kumar", role: "Parent of Arjun (Kindergarten)", rating: 5, text: "The transformation in my son has been incredible. He's become more confident, creative, and socially aware. The staff truly goes above and beyond!", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Sunita Patel", role: "Parent of Riya (Playgroup)", rating: 5, text: "Safe, caring, and the best start for our child! From the moment we walked in, we felt the warmth. The facilities are excellent and exactly what we wanted.", avatar: "https://i.pravatar.cc/100?img=5" },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#FDE8E9] rounded-full opacity-40 blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F3F9E2] rounded-full opacity-50 blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
        {/* Cartoon floating clouds */}
        <CartoonCloud className="absolute top-16 left-8 w-24 text-[#FDE8E9] float-cloud opacity-60 hidden lg:block" />
        <CartoonCloud className="absolute top-24 right-16 w-20 text-[#F3F9E2] float-cloud opacity-50 hidden lg:block" style={{ animationDelay: '2s' }} />
        {/* Floating stars */}
        <motion.div className="absolute top-32 left-1/4 text-yellow-300 hidden lg:block float-star" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <Star size={20} fill="#FCD34D" />
        </motion.div>
        <motion.div className="absolute bottom-32 right-1/4 text-[#9DC41E] hidden lg:block" animate={{ y: [0, -10, 0], rotate: [0, 360] }} transition={{ duration: 5, repeat: Infinity }}>
          <Star size={16} fill="#9DC41E" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#FDE8E9] text-[#C8161D] text-xs font-bold px-3 py-1.5 rounded-full border border-[#C8161D]/20 flex items-center gap-1.5">
                <Award size={12} /> Estd. 2008 — B.E.T.
              </span>
              <span className="bg-[#F3F9E2] text-[#9DC41E] text-xs font-bold px-3 py-1.5 rounded-full border border-[#9DC41E]/20 flex items-center gap-1.5">
                <Shield size={12} /> ISO 9001:2008 Certified
              </span>
            </div>
            <span className="section-label">Welcome to Happy Kidz</span>
            <h1 className="font-nunito font-extrabold text-5xl md:text-6xl text-[#1A1A1A] leading-tight mt-3 mb-3">
              Where <span className="text-[#C8161D]">Learning</span> Begins with <span className="text-[#9DC41E]">Joy</span>
            </h1>
            <p className="text-[#C8161D] font-nunito font-bold text-lg mb-4 italic">Play, Learn, Grow – The Happy Kidz Way</p>
            <p className="text-gray-600 text-base mb-8 leading-relaxed max-w-xl">
              We believe childhood is a beautiful journey of discovery, imagination, and growth. A nurturing international preschool in Bhubaneswar where every child feels safe, valued, and inspired.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/admissions" data-testid="hero-enroll-btn" className="btn-primary">Enroll Now <ArrowRight size={18} /></Link>
              <Link to="/contact" data-testid="hero-visit-btn" className="btn-outline">Book a Visit <MapPin size={18} /></Link>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[{ num: "500+", label: "Happy Kids" }, { num: "15+", label: "Expert Teachers" }, { num: "15+", label: "Years of Excellence" }].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.15 }}>
                  <div className="font-nunito font-extrabold text-3xl text-[#C8161D]">{s.num}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo collage */}
          <motion.div className="relative hidden lg:block" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-60">
                  <img src={img1} alt="Kids learning" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-44">
                  <img src={img2} alt="Art class" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-44">
                  <img src={img3} alt="Outdoor fun" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl h-60">
                  <img src={img4} alt="Reading" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <motion.div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 z-10" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#FDE8E9] rounded-xl flex items-center justify-center">
                  <Star className="text-[#C8161D]" size={20} fill="#C8161D" />
                </div>
                <div>
                  <div className="font-nunito font-bold text-sm">Top Rated School</div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={10} fill="#FBBF24" className="text-yellow-400" />)}</div>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute -top-3 -right-3 bg-[#9DC41E] text-white rounded-2xl shadow-xl p-3 z-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
              <Heart size={26} fill="white" />
            </motion.div>
          </motion.div>
          {/* Mobile hero image */}
          <div className="lg:hidden rounded-[2rem] overflow-hidden shadow-2xl h-64">
            <img src={img5} alt="Happy kids" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="bg-[#C8161D] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ num: "500+", label: "Enrolled Students", icon: Users }, { num: "15+", label: "Expert Educators", icon: Award }, { num: "15+", label: "Years of Excellence", icon: Star }, { num: "6", label: "Programs Offered", icon: BookOpen }].map((s, i) => (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <s.icon size={28} className="mx-auto mb-2 text-red-200" />
                <div className="font-nunito font-extrabold text-4xl mb-1">{s.num}</div>
                <div className="text-red-200 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS (5 from PDF) ===== */}
      <Wave fill="#F8FAFC" bg="white" />
      <section className="py-16 bg-[#F8FAFC] polka-dots relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">The Happy Kidz Difference</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We believe every child deserves an exceptional start. Here's what makes us truly special.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {highlights.map((h, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card bg-white rounded-3xl p-6 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: h.color }}>
                  <h.icon size={26} style={{ color: h.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-base text-[#1A1A1A] mb-2">{h.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Wave fill="white" bg="#F8FAFC" />

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Programs</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Learning Journeys for Every Age</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Age-appropriate programs designed by early childhood experts to nurture every aspect of development.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {programs.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card rounded-3xl overflow-hidden bg-white border border-gray-100 group" data-testid={`program-card-${i}`}>
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5" style={{ background: p.bg + '55' }}>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: p.accent }}>{p.age}</span>
                  <h3 className="font-nunito font-extrabold text-xl text-[#1A1A1A] mt-1 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <Link to="/programs" className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all" style={{ color: p.accent }}>Learn More <ArrowRight size={13} /></Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <Link to="/programs" className="btn-primary" data-testid="view-programs-btn">View All Programs <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DAILY ROUTINE (NEW - from PDF) ===== */}
      <Wave fill="#FFF5F5" bg="white" />
      <section className="py-16 fun-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">A Typical Day</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Our Daily Routine</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">A structured yet joyful day that keeps every child engaged, active, and learning.</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {routine.map((r, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card bg-white rounded-2xl p-4 text-center border border-gray-100" data-testid={`routine-step-${i}`}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: r.color }}>
                  <r.icon size={22} style={{ color: r.ic }} />
                </div>
                <div className="text-xs font-bold text-[#C8161D] mb-1">{r.time}</div>
                <div className="font-nunito font-bold text-xs text-[#1A1A1A] leading-tight">{r.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Wave fill="white" bg="#FFF5F5" />

      {/* ===== LEARNING THEMES (NEW - from PDF) ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Curriculum Themes</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Themes &amp; Learning Approach</h2>
            <p className="text-gray-500 mt-3">Our curriculum is organized around engaging real-world themes that spark curiosity and imagination.</p>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-4" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {themes.map((t, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-center gap-2 px-5 py-3 rounded-full font-nunito font-bold text-sm cursor-default hover:-translate-y-1 transition-transform shadow-sm"
                style={{ backgroundColor: t.color, color: t.text }}
                whileHover={{ scale: 1.05 }}
                data-testid={`theme-${i}`}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.text }} />
                {t.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY — LOTS OF PHOTOS ===== */}
      <Wave fill="#1A1A1A" bg="white" />
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">Our Gallery</span>
            <h2 className="font-nunito font-extrabold text-4xl text-white mt-3">Life at Happy Kidz</h2>
            <p className="text-gray-400 mt-3">Joyful moments, learning milestones, and cherished memories</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl overflow-hidden ${i === 0 || i === 6 ? 'col-span-2 row-span-2' : ''}`}
                style={{ height: (i === 0 || i === 6) ? '380px' : '180px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Wave fill="white" bg="#1A1A1A" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Parent Reviews</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">What Parents Say About Us</h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border-2 border-gray-100" data-testid={`testimonial-card-${i}`}>
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="#FBBF24" className="text-yellow-400" />)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">"{t.text}"</p>
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
          <motion.div className="text-center mt-8" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <Link to="/testimonials" className="btn-outline" data-testid="more-reviews-btn">Read More Reviews <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="section-label">About Happy Kidz</span>
              <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3 mb-5">Nurturing Young Minds with Love</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2008 under the vision of B.E.T., Happy Kidz is a developmental learning center committed to holistic child growth. We identify and nurture each child's unique abilities through structured curriculum, hands-on activities, and emotional support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our ISO 9001:2008 certified approach combines play-based learning with structured education to build confidence, curiosity, and compassion in every child.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Learning through play", "Respect for every child", "Emotional well-being first", "Creativity & innovation", "Strong moral values", "Parent-school partnership"].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="text-[#9DC41E] flex-shrink-0" size={18} />
                    <span className="text-gray-600 text-sm">{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-secondary">Learn More <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {[img11, img12, img13, img14].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md h-44">
                  <img src={src} alt="School life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9DC41E] rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <CartoonCloud className="absolute top-4 left-10 w-28 text-white opacity-10 hidden md:block" />
        <CartoonCloud className="absolute bottom-4 right-10 w-24 text-white opacity-10 hidden md:block" />
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-4xl md:text-5xl mb-4">Ready to Join the Happy Kidz Family?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">Limited seats available. Enroll your child today and give them the best start in life!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="cta-apply-btn">Apply Now <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-white" data-testid="cta-contact-btn">Contact Us</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
