import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight, Users, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Aanya (Nursery)", rating: 5, text: "Happy Kidz has been a wonderful experience for our daughter. The teachers are incredibly caring and the curriculum is world-class. Aanya loves going to school every day and comes home with new things to share!", avatar: "https://i.pravatar.cc/100?img=1" },
  { name: "Rajesh Kumar", role: "Parent of Arjun (Kindergarten)", rating: 5, text: "The transformation in my son has been incredible. He's become more confident, creative, and socially aware. The staff truly goes above and beyond for every child. Couldn't ask for better educators.", avatar: "https://i.pravatar.cc/100?img=3" },
  { name: "Sunita Patel", role: "Parent of Riya (Playgroup)", rating: 5, text: "From the moment we walked in, we felt the warmth and professionalism. The facilities are excellent and the approach to learning is exactly what we were looking for. Highly recommend Happy Kidz!", avatar: "https://i.pravatar.cc/100?img=5" },
  { name: "Vikram Mishra", role: "Parent of Aditya (Pre-KG)", rating: 5, text: "My son Aditya has grown so much in just one year at Happy Kidz. His language skills, creativity, and social abilities have improved tremendously. The teachers really know each child personally.", avatar: "https://i.pravatar.cc/100?img=7" },
  { name: "Meera Nair", role: "Parent of Kavya (Kindergarten)", rating: 5, text: "Happy Kidz is the best decision we made for our daughter. The balanced approach between play and learning is exactly right for her age. She's excited about school every morning!", avatar: "https://i.pravatar.cc/100?img=9" },
  { name: "Suresh Behera", role: "Parent of Rohan (After School)", rating: 5, text: "The after-school program is fantastic. Rohan is always engaged, doing homework under supervision and then enjoying fun activities. It's a relief knowing he's in safe, capable hands every afternoon.", avatar: "https://i.pravatar.cc/100?img=11" },
  { name: "Anita Dash", role: "Parent of Shreya (Nursery)", rating: 5, text: "The communication from the school is excellent. We always know what Shreya is learning and how she's progressing. The parent-teacher meets are thorough and truly helpful.", avatar: "https://i.pravatar.cc/100?img=25" },
  { name: "Deepak Mohanty", role: "Parent of Aryan (Kindergarten)", rating: 5, text: "Outstanding school with a genuine focus on each child's individual development. Aryan has learned to read and write well before primary school. The faculty is exceptional.", avatar: "https://i.pravatar.cc/100?img=13" },
  { name: "Rekha Sahu", role: "Parent of Diya (Playgroup)", rating: 5, text: "As a first-time parent, I was anxious about sending my little one to school. Happy Kidz put all my worries to rest. The staff is nurturing, patient, and genuinely invested in each child's happiness.", avatar: "https://i.pravatar.cc/100?img=29" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const featured = testimonials.slice(0, 3);
  const rest = testimonials.slice(3);

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent((c) => (c + 1) % featured.length);

  return (
    <div>
      <PageHero title="Testimonials" subtitle="Hear directly from the parents who trust Happy Kidz with their most precious gift." breadcrumb="Testimonials" />

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Happy Families", icon: Users },
              { num: "4.9", label: "Average Rating", icon: Star },
              { num: "10+", label: "Years of Trust", icon: Award },
              { num: "98%", label: "Would Recommend", icon: Quote },
            ].map((s, i) => (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-[#FDE8E9] rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <s.icon size={28} className="text-[#C8161D]" />
                </div>
                <div className="font-nunito font-extrabold text-4xl text-[#C8161D] mb-1">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Featured Stories</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Parent Voices</h2>
          </motion.div>
          <div className="relative" data-testid="testimonial-carousel">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <Quote size={48} className="text-[#FDE8E9] mb-4" fill="#FDE8E9" />
              <p className="text-gray-700 text-xl leading-relaxed italic mb-8">"{featured[current].text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={featured[current].avatar} alt={featured[current].name} className="w-14 h-14 rounded-full border-3 border-[#FDE8E9] object-cover" />
                  <div>
                    <div className="font-nunito font-bold text-lg text-[#1A1A1A]">{featured[current].name}</div>
                    <div className="text-gray-500 text-sm">{featured[current].role}</div>
                    <div className="flex gap-1 mt-1">{[...Array(featured[current].rating)].map((_, j) => <Star key={j} size={14} fill="#FBBF24" className="text-yellow-400" />)}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={prev} data-testid="carousel-prev" className="w-11 h-11 bg-[#FDE8E9] hover:bg-[#C8161D] text-[#C8161D] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} data-testid="carousel-next" className="w-11 h-11 bg-[#C8161D] hover:bg-[#A61217] text-white rounded-full flex items-center justify-center transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {featured.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-[#C8161D]' : 'w-2 bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">More Reviews</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">What Our Happy Families Say</h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {rest.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl p-8 border border-gray-100" data-testid={`all-testimonial-${i}`}>
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#FBBF24" className="text-yellow-400" />)}</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#FDE8E9]" />
                  <div>
                    <div className="font-nunito font-bold text-[#1A1A1A] text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-3xl mb-3">Ready to Write Your Own Success Story?</h2>
          <p className="text-red-100 mb-6">Join 500+ happy families who trust Happy Kidz for their child's early education.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="testimonials-enroll-btn">Enroll Now <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-white">Book a Visit</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
