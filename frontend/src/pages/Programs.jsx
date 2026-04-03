import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, ArrowRight, CheckCircle, Music, Palette, Dumbbell, Sun } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const programs = [
  {
    id: "playgroup",
    title: "Playgroup",
    subtitle: "Foundation of Fun Learning",
    age: "1.5 – 2.5 Years",
    duration: "3 Hours / Day",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    color: "#FDE8E9",
    accentColor: "#C8161D",
    desc: "Our Playgroup program gently introduces toddlers to structured learning through play, music, storytelling, and creative activities in a warm and welcoming environment.",
    features: ["Sensory play & exploration", "Music and movement", "Early language development", "Social skill building", "Art & craft activities", "Outdoor play sessions"],
  },
  {
    id: "nursery",
    title: "Nursery",
    subtitle: "Building Early Skills",
    age: "2.5 – 3.5 Years",
    duration: "4 Hours / Day",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    color: "#F3F9E2",
    accentColor: "#9DC41E",
    desc: "The Nursery program focuses on building essential social, cognitive, and motor skills through a blend of structured play, stories, art, and early academic concepts.",
    features: ["Early reading readiness", "Number concepts & counting", "Fine & gross motor skills", "Social-emotional development", "Science exploration", "Creative expression"],
  },
  {
    id: "prekg",
    title: "Pre-KG",
    subtitle: "Stepping Towards School",
    age: "3.5 – 4.5 Years",
    duration: "5 Hours / Day",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80",
    color: "#E0F2FE",
    accentColor: "#0284c7",
    desc: "Pre-KG bridges the gap between play-based nursery learning and formal schooling, introducing structured academics while keeping the joy of learning alive.",
    features: ["Alphabet & phonics", "Number recognition 1–50", "Writing readiness", "Critical thinking games", "Introduction to Hindi", "Environmental awareness"],
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    subtitle: "Ready for the World",
    age: "4 – 6 Years",
    duration: "6 Hours / Day",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    color: "#FEF9C3",
    accentColor: "#ca8a04",
    desc: "Our comprehensive Kindergarten program ensures children are fully school-ready with strong academic foundations, social confidence, and a love for lifelong learning.",
    features: ["Full reading & writing", "Mathematics foundations", "Science & discovery", "Computer basics", "Sports & fitness", "Leadership & confidence"],
  },
];

const activities = [
  { icon: Music, title: "Music & Dance", desc: "Classical and contemporary music education combined with expressive dance classes.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: Palette, title: "Art & Craft", desc: "Creative expression through painting, sculpture, and mixed media art activities.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: Dumbbell, title: "Sports & Fitness", desc: "Age-appropriate physical activities developing coordination, teamwork, and health.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: Sun, title: "Summer Camp", desc: "Fun-filled summer programs with outdoor activities, learning, and friendships.", color: "#FEF9C3", iconColor: "#ca8a04" },
];

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(null);

  return (
    <div>
      <PageHero title="Our Programs" subtitle="Age-appropriate programs designed to nurture every child's unique potential and love for learning." breadcrumb="Programs" />

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Academic Programs</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Learning Journeys for Every Age</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Each program is crafted by early childhood experts to match your child's developmental stage and learning style.</p>
          </motion.div>

          <div className="space-y-16">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOpts}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img src={prog.image} alt={prog.title} className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl" />
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: prog.color, color: prog.accentColor }}>
                    <Clock size={14} /> {prog.age}
                  </div>
                  <h3 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-1">{prog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 font-medium">{prog.subtitle} &bull; {prog.duration}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{prog.desc}</p>
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {prog.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle size={16} className="flex-shrink-0" style={{ color: prog.accentColor }} />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/admissions" className="btn-primary" style={{ backgroundColor: prog.accentColor }} data-testid={`enroll-${prog.id}-btn`}>
                    Enroll in {prog.title} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Beyond Academics</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Enrichment Activities</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We believe in the holistic development of every child — mind, body, and soul.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {activities.map((a, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: a.color }}>
                  <a.icon size={30} style={{ color: a.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* After School */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2d2d2d] rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-10">
            <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeLeft}>
              <span className="inline-block bg-[#9DC41E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">After School Program</span>
              <h2 className="font-nunito font-extrabold text-3xl md:text-4xl mb-4">Extended Learning &amp; Care</h2>
              <p className="text-gray-300 leading-relaxed mb-6">Our after-school program provides a safe, enriching environment for children ages 4–10 after regular school hours. Includes homework help, creative activities, and outdoor play.</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["2:00 PM – 6:00 PM daily", "Supervised homework time", "Snack &amp; nutrition break", "Arts, music &amp; sports", "Qualified care staff", "Safe, monitored space"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#9DC41E] flex-shrink-0" />
                    <span className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: f }} />
                  </div>
                ))}
              </div>
              <Link to="/admissions" className="btn-secondary" data-testid="after-school-enroll-btn">Enroll Now <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div className="flex-shrink-0" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeRight}>
              <img src="https://images.unsplash.com/photo-1605901309584-818e25452571?w=500&q=80" alt="After school" className="w-72 h-72 object-cover rounded-[2rem] shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 text-lg mb-8">Secure your child's spot today. Limited seats available for all programs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg">Apply Now <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-white">Book a Visit</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
