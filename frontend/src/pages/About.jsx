import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Star, ArrowRight, CheckCircle, Globe, Smile } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const values = [
  { icon: Heart, title: "Love & Care", desc: "Every child is treated with unconditional love and individual attention at all times.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: Lightbulb, title: "Curiosity", desc: "We foster a sense of wonder and encourage children to explore and question the world.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: Users, title: "Community", desc: "Building strong relationships between families, teachers, and the children we serve.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: Globe, title: "Global Outlook", desc: "Preparing children to become confident, empathetic global citizens from an early age.", color: "#FEF9C3", iconColor: "#ca8a04" },
];

const timeline = [
  { year: "2014", title: "Happy Kidz Founded", desc: "Opened our first center in Khandagiri, Bhubaneswar with 30 students and a bold vision for early education." },
  { year: "2016", title: "International Curriculum", desc: "Adopted an internationally recognized early childhood education framework for holistic learning." },
  { year: "2018", title: "Expanded Campus", desc: "Moved to a larger facility with state-of-the-art classrooms, art rooms, and outdoor play areas." },
  { year: "2020", title: "Award Recognition", desc: "Recognized as one of the top preschools in Odisha by the Education Excellence Awards." },
  { year: "2023", title: "500+ Students Milestone", desc: "Celebrated reaching 500+ enrolled students and 15 expert educators making a difference every day." },
];

export default function About() {
  return (
    <div>
      <PageHero title="About Us" subtitle="Learn about our story, mission, and the people who make Happy Kidz special." breadcrumb="About Us" />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeLeft}>
              <span className="section-label">Our Story</span>
              <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3 mb-6">Building Bright Futures Since 2014</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Happy Kidz International Preschool was founded with a single belief: every child deserves a joyful, nurturing start to their educational journey. Located in the heart of Khandagiri, Bhubaneswar, we began in 2014 with just 30 students and a passionate team of educators.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we are proud to have shaped the early years of over 500 children, providing them with a safe, stimulating, and internationally aligned learning environment that blends the best of global pedagogy with rich local cultural values.
              </p>
              <div className="space-y-3">
                {["International curriculum with local cultural values", "CCTV-monitored, fully childproof facilities", "Play-based holistic development approach", "Strong and transparent parent-school partnership"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#9DC41E] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="relative" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeRight}>
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Teacher with children" className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-[#C8161D] text-white rounded-2xl p-5 shadow-xl">
                <div className="font-nunito font-extrabold text-3xl">500+</div>
                <div className="text-red-200 text-sm">Happy Families</div>
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#9DC41E] rounded-2xl flex items-center justify-center shadow-lg">
                <Smile size={32} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Purpose</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Mission &amp; Vision</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-[#FDE8E9] rounded-3xl p-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 bg-[#C8161D] rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-white" fill="white" />
              </div>
              <h3 className="font-nunito font-bold text-2xl text-[#1A1A1A] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide a safe, stimulating, and loving environment where every child can discover their unique potential through play-based learning, creative exploration, and meaningful human connections that last a lifetime.
              </p>
            </motion.div>
            <motion.div className="bg-[#F3F9E2] rounded-3xl p-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="w-14 h-14 bg-[#9DC41E] rounded-2xl flex items-center justify-center mb-6">
                <Star size={28} className="text-white" fill="white" />
              </div>
              <h3 className="font-nunito font-bold text-2xl text-[#1A1A1A] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted early childhood education institution in Odisha, producing confident, compassionate, and globally aware individuals who make a positive contribution to society and the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">What We Stand For</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Our Core Values</h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: v.color }}>
                  <v.icon size={30} style={{ color: v.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Journey</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Milestones Over the Years</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C8161D]/20 -translate-x-1/2 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {i % 2 === 0 ? (
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 inline-block text-left">
                      <h4 className="font-nunito font-bold text-lg text-[#1A1A1A] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ) : <div className="hidden md:block" />}
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-[#C8161D] rounded-full flex items-center justify-center text-white font-nunito font-extrabold text-sm shadow-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  {i % 2 !== 0 ? (
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 inline-block">
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
      <section className="py-20 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-4xl mb-4">Want to Experience Happy Kidz?</h2>
          <p className="text-red-100 text-lg mb-8">Visit our school and witness the magic of early childhood education in action.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg">Book a Visit <ArrowRight size={18} /></Link>
            <Link to="/admissions" className="btn-outline-white">Enroll Now</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
