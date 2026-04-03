import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, CheckCircle, Music, Palette, Dumbbell, Leaf, Utensils, Microscope, BookOpen, Users, Lightbulb } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const Wave = ({ fill, bg = "transparent" }) => (
  <div className="wave-divider" style={{ background: bg }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 50 }}>
      <path d="M0,35 C200,70 400,0 720,35 C1040,70 1280,5 1440,35 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

const programs = [
  {
    id: "playgroup",
    title: "Playgroup",
    subtitle: "Foundation of Fun Learning",
    age: "1.5 – 2.5 Years",
    duration: "3 Hours / Day",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    color: "#FDE8E9", accentColor: "#C8161D",
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
    color: "#F3F9E2", accentColor: "#9DC41E",
    desc: "The Nursery program builds essential social, cognitive, and motor skills through structured play, stories, art, science exploration, and early academic concepts.",
    features: ["Early reading readiness", "Number concepts & counting", "Fine & gross motor skills", "Social-emotional development", "Science exploration", "Creative expression"],
  },
  {
    id: "prekg",
    title: "Pre-KG",
    subtitle: "Stepping Towards School",
    age: "3.5 – 4.5 Years",
    duration: "5 Hours / Day",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80",
    color: "#E0F2FE", accentColor: "#0284c7",
    desc: "Pre-KG bridges the gap between play-based learning and formal schooling, introducing structured academics while keeping the joy of discovery alive every day.",
    features: ["Alphabet & phonics", "Number recognition 1–50", "Writing readiness", "Critical thinking games", "Introduction to Hindi", "Environmental awareness"],
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    subtitle: "Ready for the World",
    age: "4 – 6 Years",
    duration: "6 Hours / Day",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    color: "#FEF9C3", accentColor: "#ca8a04",
    desc: "Our comprehensive Kindergarten program ensures children are fully school-ready with strong academic foundations, social confidence, and a lifelong love of learning.",
    features: ["Full reading & writing", "Mathematics foundations", "Science & discovery", "Computer basics", "Sports & fitness", "Leadership & confidence"],
  },
];

const curriculum = [
  { icon: BookOpen, label: "Language", desc: "Interactive storytelling, phonics, and communication exercises.", color: "#FDE8E9", ic: "#C8161D" },
  { icon: Lightbulb, label: "Mathematics", desc: "Numbers, counting, patterns, and early problem-solving.", color: "#F3F9E2", ic: "#9DC41E" },
  { icon: Microscope, label: "Science", desc: "Curiosity-led exploration of nature, experiments, and discovery.", color: "#E0F2FE", ic: "#0284c7" },
  { icon: Users, label: "Social Awareness", desc: "Community, empathy, teamwork, and moral values.", color: "#FEF9C3", ic: "#ca8a04" },
  { icon: Palette, label: "Creativity", desc: "Art, music, storytelling, drama, and self-expression.", color: "#FCE7F3", ic: "#DB2777" },
  { icon: Dumbbell, label: "Physical Development", desc: "Outdoor play, games, movement, and coordination activities.", color: "#F0FFF4", ic: "#16A34A" },
];

const summerCamps = [
  { name: "Nature Camp", icon: Leaf, color: "#F3F9E2", iconColor: "#9DC41E", desc: "Explore plants, animals, and the great outdoors through educational nature walks and activities." },
  { name: "Arts & Crafts Camp", icon: Palette, color: "#FCE7F3", iconColor: "#DB2777", desc: "Creative expression through painting, sculpting, mixed media, and artistic exploration." },
  { name: "Music & Dance Camp", icon: Music, color: "#FDE8E9", iconColor: "#C8161D", desc: "Rhythm, melody, and movement — introducing children to the joy of music and expressive dance." },
  { name: "Sports Camp", icon: Dumbbell, color: "#E0F2FE", iconColor: "#0284c7", desc: "Team sports, individual fitness, and outdoor games for healthy physical development." },
  { name: "Cooking Camp", icon: Utensils, color: "#FEF9C3", iconColor: "#ca8a04", desc: "Fun, safe cooking activities that teach children about nutrition, math, and basic science." },
  { name: "STEAM Camp", icon: Microscope, color: "#F0FFF4", iconColor: "#16A34A", desc: "Science, Technology, Engineering, Art, and Math through hands-on experiments and creative projects." },
];

const themes = [
  "Colours & Shapes", "Nature & Environment", "Seasons", "Numbers & Counting",
  "Letters & Phonics", "Community Helpers", "Storytelling & Drama", "Sensory Play",
];

export default function Programs() {
  return (
    <div>
      <PageHero title="Our Programs" subtitle="Age-appropriate programs designed to nurture every child's unique potential and love for learning." breadcrumb="Programs" />

      {/* Preschool Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Academic Programs</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Preschool Programs</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Each program is crafted by early childhood experts to match your child's developmental stage.</p>
          </motion.div>
          <div className="space-y-16">
            {programs.map((prog, i) => (
              <motion.div key={prog.id} className="grid lg:grid-cols-2 gap-12 items-center"
                initial="hidden" whileInView="visible" viewport={viewportOpts}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img src={prog.image} alt={prog.title} className="w-full h-[360px] object-cover rounded-[2rem] shadow-xl" />
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

      {/* Curriculum Areas */}
      <Wave fill="#F8FAFC" bg="white" />
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">What We Teach</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Curriculum Areas</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Our curriculum covers all key areas of early childhood development.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {curriculum.map((c, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card bg-white rounded-3xl p-6 border border-gray-100 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.color }}>
                  <c.icon size={22} style={{ color: c.ic }} />
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg text-[#1A1A1A] mb-1">{c.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Wave fill="white" bg="#F8FAFC" />

      {/* Learning Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Learning Themes</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Themes &amp; Learning Approach</h2>
            <p className="text-gray-500 mt-3">Our curriculum is organized around engaging, real-world themes that spark imagination.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {themes.map((t, i) => {
              const colors = ["#FDE8E9", "#F3F9E2", "#FEF9C3", "#E0F2FE", "#FCE7F3", "#F0FFF4", "#FEF3C7", "#EDE9FE"];
              const texts = ["#C8161D", "#9DC41E", "#ca8a04", "#0284c7", "#DB2777", "#16A34A", "#D97706", "#7C3AED"];
              return (
                <motion.div key={i}
                  className="px-6 py-3 rounded-full font-nunito font-bold text-sm shadow-sm cursor-default"
                  style={{ backgroundColor: colors[i], color: texts[i] }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  {t}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* After School Program */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2d2d2d] rounded-3xl p-10 md:p-14 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeLeft}>
                <span className="inline-block bg-[#9DC41E] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-4">After School Program</span>
                <h2 className="font-nunito font-extrabold text-3xl md:text-4xl mb-4">Extended Learning &amp; Care</h2>
                <p className="text-gray-300 leading-relaxed mb-5">Designed for working parents and extended learning. Our after-school program provides a safe, enriching environment with structured activities and care.</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Homework Support", "Music, Dance & Art", "Sports & Fitness", "Healthy Snacks", "Science Exploration", "Yoga & Basic Tech Learning"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-[#9DC41E] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/admissions" className="btn-secondary" data-testid="after-school-enroll-btn">Enroll Now <ArrowRight size={18} /></Link>
              </motion.div>
              <motion.div className="grid grid-cols-2 gap-3" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeRight}>
                {["https://images.unsplash.com/photo-1605901309584-818e25452571?w=400&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80", "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80", "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=400&q=80"].map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden h-36">
                    <img src={src} alt="After school" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Camp */}
      <Wave fill="#FFF9F0" bg="#F8FAFC" />
      <section className="py-16 fun-gradient-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Seasonal Programs</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Summer Camp 2025</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Fun-filled seasonal programs that keep children learning and growing during holidays.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {summerCamps.map((camp, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card bg-white rounded-3xl p-8 border border-gray-100 text-center" data-testid={`summer-camp-${i}`}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: camp.color }}>
                  <camp.icon size={30} style={{ color: camp.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2">{camp.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{camp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <Link to="/admissions" className="btn-secondary" data-testid="summer-camp-enroll-btn">Register for Summer Camp <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
      <Wave fill="white" bg="#FFF9F0" />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
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
