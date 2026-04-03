import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Star, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const leadership = [
  {
    name: "Mrs. Anita Das",
    role: "Principal",
    exp: "15+ Years Experience",
    qual: "M.Ed., B.Ed., ECE Certified",
    bio: "Mrs. Das founded Happy Kidz with a vision to provide world-class early education in Bhubaneswar. Her passion for children's holistic development drives the entire school.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    fav: "The Very Hungry Caterpillar",
  },
  {
    name: "Mrs. Priya Mohapatra",
    role: "Vice Principal",
    exp: "12+ Years Experience",
    qual: "B.Ed., Montessori Certified",
    bio: "Mrs. Mohapatra oversees curriculum development and teacher training, ensuring every classroom delivers the highest quality of early learning experiences.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    fav: "Where the Wild Things Are",
  },
];

const teachers = [
  { name: "Ms. Kavita Sharma", role: "Nursery Class Teacher", exp: "8 Years", qual: "B.Ed., Child Psychology", image: "https://i.pravatar.cc/300?img=44", fav: "Goodnight Moon" },
  { name: "Ms. Ritu Panda", role: "Kindergarten Teacher", exp: "6 Years", qual: "M.A. Education", image: "https://i.pravatar.cc/300?img=45", fav: "Charlotte's Web" },
  { name: "Mr. Suresh Nayak", role: "Physical Education", exp: "10 Years", qual: "B.P.Ed., Sports Science", image: "https://i.pravatar.cc/300?img=33", fav: "The Champion Sports Kid" },
  { name: "Ms. Deepa Rath", role: "Art & Craft Teacher", exp: "7 Years", qual: "BFA, Art Education", image: "https://i.pravatar.cc/300?img=49", fav: "Harold and the Purple Crayon" },
  { name: "Ms. Sunita Mishra", role: "Music Teacher", exp: "5 Years", qual: "B.Mus., Classical Music", image: "https://i.pravatar.cc/300?img=50", fav: "Peter and the Wolf" },
  { name: "Ms. Pooja Singh", role: "Playgroup Teacher", exp: "4 Years", qual: "B.Ed., Early Childhood Ed.", image: "https://i.pravatar.cc/300?img=41", fav: "Pat the Bunny" },
  { name: "Mr. Amit Kumar", role: "Computer Teacher", exp: "6 Years", qual: "MCA, CTET Qualified", image: "https://i.pravatar.cc/300?img=35", fav: "Ada Twist, Scientist" },
  { name: "Ms. Meena Behera", role: "Library & Storytelling", exp: "9 Years", qual: "M.Lib., Storytelling Expert", image: "https://i.pravatar.cc/300?img=42", fav: "The Giving Tree" },
];

export default function Team() {
  return (
    <div>
      <PageHero title="Our Team" subtitle="Meet the passionate educators who make Happy Kidz a truly special place for children." breadcrumb="Our Team" />

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">School Leadership</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Guiding Happy Kidz Forward</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                className="hover-card bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                data-testid={`leader-card-${i}`}
              >
                <div className="relative h-72">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-nunito font-extrabold text-xl">{person.name}</div>
                    <div className="text-red-300 text-sm font-medium">{person.role}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-[#FDE8E9] text-[#C8161D] text-xs font-bold px-3 py-1 rounded-full">{person.exp}</span>
                    <span className="bg-[#F3F9E2] text-[#9DC41E] text-xs font-bold px-3 py-1 rounded-full">{person.qual}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{person.bio}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <BookOpen size={14} className="text-[#C8161D]" />
                    <span>Favourite Book: <em className="text-gray-600">{person.fav}</em></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Our Educators</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Meet Our Amazing Teachers</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Qualified, caring, and passionate — our teachers are the heart of Happy Kidz.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {teachers.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group hover-card bg-white rounded-3xl overflow-hidden border border-gray-100 cursor-pointer"
                data-testid={`teacher-card-${i}`}
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C8161D]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="text-white text-sm font-semibold mb-1">{t.qual}</div>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <BookOpen size={12} />
                      <span><em>{t.fav}</em></span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-nunito font-bold text-lg text-[#1A1A1A] mb-0.5">{t.name}</h3>
                  <p className="text-[#C8161D] text-sm font-medium mb-1">{t.role}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Star size={12} className="text-yellow-400" fill="#FBBF24" />
                    <span>{t.exp} Experience</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join team CTA */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <Heart size={40} className="text-[#C8161D] mx-auto mb-4" fill="#C8161D" />
          <h2 className="font-nunito font-extrabold text-3xl mb-3">Passionate About Early Education?</h2>
          <p className="text-gray-400 text-lg mb-6">We're always looking for dedicated educators to join our growing team at Happy Kidz.</p>
          <Link to="/contact" className="btn-primary" data-testid="join-team-btn">Join Our Team <ArrowRight size={18} /></Link>
        </motion.div>
      </section>
    </div>
  );
}
