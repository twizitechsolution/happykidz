import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Star, ArrowRight, CheckCircle, Globe, Smile, Shield, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const Wave = ({ fill, bg = "transparent" }) => (
  <div className="wave-divider" style={{ background: bg }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 50 }}>
      <path d="M0,35 C200,70 400,0 720,35 C1040,70 1280,5 1440,35 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

const values = [
  { icon: Heart, title: "Learning Through Play", desc: "We believe children learn best when they are engaged, curious, and having fun.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: Users, title: "Respect for Every Child", desc: "Each child is unique and deserves to be seen, heard, and valued unconditionally.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: Smile, title: "Emotional Well-Being First", desc: "A child who feels safe and happy learns better. We prioritize emotional health above all.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: Lightbulb, title: "Creativity & Innovation", desc: "We encourage children to think, imagine, create, and solve problems in their own unique ways.", color: "#FEF9C3", iconColor: "#ca8a04" },
  { icon: Shield, title: "Strong Moral Values", desc: "Building character, integrity, kindness, and respect alongside academic skills.", color: "#FCE7F3", iconColor: "#DB2777" },
];

const timeline = [
  { year: "2008", title: "Happy Kidz Founded", desc: "Founded under the vision of B.E.T., Happykidz Preschool was established to bring quality early education with global standards and local values." },
  { year: "2010", title: "ISO 9001:2008 Certified", desc: "Achieved ISO 9001:2008 certification, recognizing our commitment to quality education and continuous improvement." },
  { year: "2014", title: "Campus Expansion", desc: "Expanded to a larger, state-of-the-art facility with modern classrooms, art rooms, and outdoor play areas." },
  { year: "2018", title: "Award Recognition", desc: "Recognized for excellence in early childhood education at the Odisha Education Excellence Awards." },
  { year: "2023", title: "500+ Students Milestone", desc: "Celebrated over 500 enrolled students and 15 dedicated educators making a difference every single day." },
];

export default function About() {
  return (
    <div>
      <PageHero title="About Us" subtitle="Learn about our story, mission, and the passionate people who make Happy Kidz special." breadcrumb="About Us" />

      {/* ISO + BET Badges */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Established 2008", sub: "B.E.T. Initiative", color: "#FDE8E9", icon: Award, ic: "#C8161D" },
              { label: "ISO 9001:2008", sub: "Certified Education Provider", color: "#F3F9E2", icon: Shield, ic: "#9DC41E" },
              { label: "500+ Students", sub: "Happy Families", color: "#E0F2FE", icon: Users, ic: "#0284c7" },
              { label: "Award Winning", sub: "Excellence in Education", color: "#FEF9C3", icon: Star, ic: "#ca8a04" },
            ].map((b, i) => (
              <motion.div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl" style={{ backgroundColor: b.color }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/60">
                  <b.icon size={20} style={{ color: b.ic }} />
                </div>
                <div>
                  <div className="font-nunito font-extrabold text-sm" style={{ color: b.ic }}>{b.label}</div>
                  <div className="text-gray-500 text-xs">{b.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeLeft}>
              <span className="section-label">Our Story</span>
              <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3 mb-6">Where Learning Begins with Joy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe childhood is a beautiful journey of discovery, imagination, and growth. Founded in 2008 under the vision of B.E.T., Happykidz Preschool was established to bring quality early education to young learners with global standards and local values.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a developmental learning center committed to holistic child growth, we offer a warm and engaging environment, child-centric teaching methods, and strong foundational learning — all designed to inspire a lifelong love for learning.
              </p>
              <div className="space-y-3">
                {[
                  "Nurturing confidence, curiosity, and compassion in every child",
                  "Strong communication between parents, teachers, and children",
                  "Hands-on, activity-based curriculum with personalized attention",
                  "Safe, child-friendly campus with experienced educators",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#9DC41E] flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeRight}>
              {[
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
                "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
                "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
              ].map((src, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-md ${i === 0 ? 'col-span-2 h-52' : 'h-44'}`}>
                  <img src={src} alt="School life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Wave fill="#F8FAFC" bg="white" />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Purpose</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Mission &amp; Vision</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="rounded-3xl p-10 border-2 border-[#C8161D]/10" style={{ background: 'linear-gradient(135deg, #FFF5F5, #FDE8E9)' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-14 h-14 bg-[#C8161D] rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-white" fill="white" />
              </div>
              <h3 className="font-nunito font-bold text-2xl text-[#1A1A1A] mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "To create a safe and nurturing learning environment",
                  "To build strong academic foundations",
                  "To encourage creativity and curiosity",
                  "To promote inclusivity and respect",
                  "To collaborate with families for overall development",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#C8161D] mt-0.5 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="rounded-3xl p-10 border-2 border-[#9DC41E]/10" style={{ background: 'linear-gradient(135deg, #F8FFF0, #F3F9E2)' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="w-14 h-14 bg-[#9DC41E] rounded-2xl flex items-center justify-center mb-6">
                <Star size={28} className="text-white" fill="white" />
              </div>
              <h3 className="font-nunito font-bold text-2xl text-[#1A1A1A] mb-4">Our Vision</h3>
              <ul className="space-y-3">
                {[
                  "To be a leader in early childhood education",
                  "To build a joyful learning community",
                  "To inspire lifelong learners",
                  "To promote equality and diversity",
                ].map((v, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#9DC41E] mt-0.5 flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Wave fill="white" bg="#F8FAFC" />

      {/* Philosophy & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">What We Stand For</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Our Philosophy &amp; Core Values</h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card bg-white rounded-3xl p-6 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: v.color }}>
                  <v.icon size={26} style={{ color: v.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-base text-[#1A1A1A] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">School Life</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Life at Happy Kidz</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
              "https://images.unsplash.com/photo-1561625116-5f8675632ab2?w=600&q=80",
              "https://images.unsplash.com/photo-1605901309584-818e25452571?w=600&q=80",
              "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
              "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&q=80",
              "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80",
            ].map((src, i) => (
              <motion.div key={i} className="rounded-2xl overflow-hidden h-44"
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <img src={src} alt="School life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Journey</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Milestones Over the Years</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C8161D]/20 -translate-x-1/2 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div key={i} className={`flex items-center gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex-1">
                  {i % 2 === 0 ? (
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-left">
                      <h4 className="font-nunito font-bold text-lg text-[#1A1A1A] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ) : <div className="hidden md:block" />}
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-[#C8161D] rounded-full flex items-center justify-center text-white font-nunito font-extrabold text-sm shadow-lg">{item.year}</div>
                </div>
                <div className="flex-1">
                  {i % 2 !== 0 ? (
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                      <h4 className="font-nunito font-bold text-lg text-[#1A1A1A] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ) : <div className="hidden md:block" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-4xl mb-4">Come Visit Us Today</h2>
          <p className="text-red-100 text-lg mb-8">Experience the Happy Kidz difference in person. We'd love to welcome your family!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg">Book a Visit <ArrowRight size={18} /></Link>
            <Link to="/admissions" className="btn-outline-white">Enroll Now</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
