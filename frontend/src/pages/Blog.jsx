import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';
import {
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17
} from '../assets/images';

const categories = ["All", "Parenting Tips", "School Updates", "Activities", "Child Development", "Events"];

const posts = [
  {
    title: "7 Essential Parenting Tips for Your Preschooler",
    category: "Parenting Tips",
    date: "February 10, 2025",
    author: "Mrs. Anita Das",
    excerpt: "Our expert educators share 7 proven tips to support your child's growth at home and strengthen the parent-school partnership.",
    image: img4,
    featured: true,
    tips: ["Maintain daily routines", "Encourage independence", "Read together daily", "Limit screen time", "Promote communication", "Use positive discipline", "Stay involved in school life"],
  },
  {
    title: "The Magic of Play-Based Learning in Early Childhood",
    category: "Child Development",
    date: "January 28, 2025",
    author: "Mrs. Priya Mohapatra",
    excerpt: "Research shows children learn best through play. Discover how Happy Kidz integrates purposeful play into every lesson of the day.",
    image: img5,
  },
  {
    title: "Annual Sports Day 2025 — A Day of Joy and Achievement",
    category: "Events",
    date: "January 15, 2025",
    author: "Happy Kidz Team",
    excerpt: "Our Annual Sports Day was a tremendous success! Here are the highlights from a day filled with excitement, teamwork, and proud parental moments.",
    image: img6,
  },
  {
    title: "How to Prepare Your Child for Their First Day of School",
    category: "Parenting Tips",
    date: "December 20, 2024",
    author: "Ms. Kavita Sharma",
    excerpt: "Starting preschool is a big milestone. We share top tips to help parents and children navigate this exciting transition with confidence.",
    image: img7,
  },
  {
    title: "Art Therapy: Building Emotional Intelligence in Children",
    category: "Activities",
    date: "December 5, 2024",
    author: "Ms. Deepa Rath",
    excerpt: "Creative art activities help children process emotions, build confidence, and develop self-expression skills that last a lifetime.",
    image: img8,
  },
  {
    title: "Admissions Open for Academic Year 2025–26",
    category: "School Updates",
    date: "November 20, 2024",
    author: "Happy Kidz Team",
    excerpt: "We're excited to announce that admissions are now open for the new academic year. Limited seats available across all programs!",
    image: img9,
  },
  {
    title: "Summer Camp 2025: Register Now for Exciting Programs",
    category: "Events",
    date: "November 10, 2024",
    author: "Happy Kidz Team",
    excerpt: "Get ready for an unforgettable summer! Nature Camp, STEAM, Music, Sports, Cooking and Arts & Crafts camps are now open for registration.",
    image: img10,
  },
];

const parentingTips = [
  { tip: "Maintain daily routines", desc: "Consistent morning and bedtime routines give children a sense of security and prepare them for school." },
  { tip: "Encourage independence", desc: "Allow children to do age-appropriate tasks on their own to build confidence and problem-solving skills." },
  { tip: "Read together daily", desc: "Even 15 minutes of reading each day dramatically improves vocabulary, comprehension, and imagination." },
  { tip: "Limit screen time", desc: "Balance digital activities with creative play, outdoor activities, and face-to-face interaction." },
  { tip: "Promote communication", desc: "Ask open-ended questions about their day, feelings, and ideas to build strong language skills." },
  { tip: "Use positive discipline", desc: "Guide behavior with calm, consistent boundaries rather than punishment. Praise good choices." },
  { tip: "Stay involved in school life", desc: "Attend school events, meet teachers regularly, and show genuine interest in what your child is learning." },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = posts.find(p => p.featured);
  const filtered = activeCategory === "All" ? posts.filter(p => !p.featured) : posts.filter(p => p.category === activeCategory && !p.featured);

  return (
    <div>
      <PageHero title="Our Blog" subtitle="Tips, stories, updates, and expert insights from the Happy Kidz community." breadcrumb="Blog" />

      {/* Featured Post */}
      {activeCategory === "All" && featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
              <span className="section-label mb-5 inline-block">Featured Article</span>
              <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8161D] bg-[#FDE8E9] px-3 py-1 rounded-full mb-4 w-fit">
                    <Tag size={11} /> {featured.category}
                  </span>
                  <h2 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-3 leading-tight">{featured.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                  {/* Parenting Tips List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {featured.tips?.map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#9DC41E] flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-5">
                    <span className="flex items-center gap-1.5"><User size={13} /> {featured.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {featured.date}</span>
                  </div>
                  <Link to="/blog" className="btn-primary w-fit" data-testid="featured-post-btn">Read Full Article <ArrowRight size={16} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Parenting Tips Quick Card */}
      {activeCategory === "All" && (
        <section className="py-12 bg-[#F3F9E2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-8" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
              <span className="section-label">Quick Tips</span>
              <h2 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mt-2">7 Parenting Tips from Our Educators</h2>
            </motion.div>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
              {parentingTips.slice(0, 4).map((t, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-5 shadow-sm border border-[#9DC41E]/20 hover-card">
                  <div className="w-8 h-8 bg-[#9DC41E] rounded-full flex items-center justify-center text-white font-nunito font-bold text-sm mb-3">{i + 1}</div>
                  <h4 className="font-nunito font-bold text-[#1A1A1A] mb-1 text-sm">{t.tip}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-5 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3" data-testid="blog-categories">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                data-testid={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-[#C8161D] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-[#FDE8E9] hover:text-[#C8161D] border border-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {filtered.map((post, i) => (
              <motion.article key={i} variants={fadeUp} className="hover-card bg-white rounded-3xl overflow-hidden border border-gray-100" data-testid={`blog-post-${i}`}>
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8161D] bg-[#FDE8E9] px-3 py-1 rounded-full mb-3"><Tag size={11} /> {post.category}</span>
                  <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <Link to="/blog" className="mt-4 text-[#C8161D] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">Read More <ChevronRight size={14} /></Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400"><p className="text-lg">No posts found in this category.</p></div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-3xl mb-3">Stay Connected with Happy Kidz</h2>
          <p className="text-red-100 mb-6">Follow us for the latest updates, tips, and school news.</p>
          <Link to="/contact" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="blog-contact-btn">Contact Us <ArrowRight size={18} /></Link>
        </motion.div>
      </section>
    </div>
  );
}
