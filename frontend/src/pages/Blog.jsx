import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const categories = ["All", "Parenting Tips", "School Updates", "Activities", "Child Development", "Events"];

const posts = [
  {
    title: "5 Ways to Make Learning Fun for Your Preschooler",
    category: "Parenting Tips",
    date: "January 15, 2025",
    author: "Mrs. Anita Das",
    excerpt: "Discover proven strategies to make everyday learning activities engaging and joyful for young children aged 2–6 years.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    featured: true,
  },
  {
    title: "The Importance of Play-Based Learning in Early Childhood",
    category: "Child Development",
    date: "January 8, 2025",
    author: "Mrs. Priya Mohapatra",
    excerpt: "Research shows that children learn best through play. Here's how Happy Kidz integrates purposeful play into every lesson.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  },
  {
    title: "Annual Sports Day 2025 – A Day of Joy and Achievement",
    category: "Events",
    date: "December 20, 2024",
    author: "Happy Kidz Team",
    excerpt: "Our Annual Sports Day was a huge success! Here are the highlights from a day filled with excitement, teamwork, and proud moments.",
    image: "https://images.unsplash.com/photo-1561625116-5f8675632ab2?w=600&q=80",
  },
  {
    title: "How to Prepare Your Child for Their First Day of School",
    category: "Parenting Tips",
    date: "December 10, 2024",
    author: "Ms. Kavita Sharma",
    excerpt: "Starting school is a big milestone. We share our top tips to help parents and children navigate this exciting transition with confidence.",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80",
  },
  {
    title: "Art Therapy and Its Role in Children's Emotional Development",
    category: "Activities",
    date: "November 25, 2024",
    author: "Ms. Deepa Rath",
    excerpt: "Creative art activities do more than make beautiful pictures — they help children process emotions and develop confidence.",
    image: "https://images.unsplash.com/photo-1605901309584-818e25452571?w=600&q=80",
  },
  {
    title: "Admissions Open for Academic Year 2025–26",
    category: "School Updates",
    date: "November 15, 2024",
    author: "Happy Kidz Team",
    excerpt: "We're excited to announce that admissions are now open for the new academic year! Limited seats available across all programs.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const featured = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== "All");

  return (
    <div>
      <PageHero title="Our Blog" subtitle="Tips, stories, and updates from the Happy Kidz community." breadcrumb="Blog" />

      {/* Featured Post */}
      {activeCategory === "All" && featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
              <span className="section-label mb-6 inline-block">Featured Article</span>
              <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover-card">
                <div className="h-72 lg:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8161D] bg-[#FDE8E9] px-3 py-1 rounded-full mb-4 w-fit">
                    <Tag size={12} /> {featured.category}
                  </span>
                  <h2 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-4 leading-tight">{featured.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <span className="flex items-center gap-1.5"><User size={14} /> {featured.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {featured.date}</span>
                  </div>
                  <Link to="/blog" className="btn-primary w-fit" data-testid="featured-post-btn">Read Article <ArrowRight size={18} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-6 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3" data-testid="blog-categories">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#C8161D] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#FDE8E9] hover:text-[#C8161D] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {(activeCategory === "All" ? posts.slice(1) : filteredPosts).map((post, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                className="hover-card bg-white rounded-3xl overflow-hidden border border-gray-100"
                data-testid={`blog-post-${i}`}
              >
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8161D] bg-[#FDE8E9] px-3 py-1 rounded-full mb-3">
                    <Tag size={11} /> {post.category}
                  </span>
                  <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2 leading-snug line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <Link to="/blog" className="mt-4 text-[#C8161D] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-3xl mb-3">Stay Connected with Happy Kidz</h2>
          <p className="text-red-100 mb-6">Get the latest parenting tips, school updates, and activity ideas.</p>
          <Link to="/contact" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="blog-contact-btn">
            Contact Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
