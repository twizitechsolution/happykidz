import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, viewportOpts } from '../hooks/useScrollAnimation';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "A valid email is required";
    if (!form.message.trim()) e.message = "Please enter your message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out and we'll get back to you as soon as possible." breadcrumb="Contact" />

      {/* Contact Main */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div className="lg:col-span-3" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeLeft}>
              <span className="section-label mb-4 inline-block">Send a Message</span>
              <h2 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-6">Get in Touch</h2>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                {submitted ? (
                  <div className="text-center py-10" data-testid="contact-success">
                    <div className="w-20 h-20 bg-[#F3F9E2] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-[#9DC41E]" />
                    </div>
                    <h3 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-3">Message Sent!</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Thank you for reaching out to Happy Kidz! We'll get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="btn-primary" data-testid="send-another-btn">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} className="input-field" placeholder="Full name" data-testid="contact-name-input" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} className="input-field" placeholder="your@email.com" data-testid="contact-email-input" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone Number</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 XXXXX XXXXX" data-testid="contact-phone-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Subject</label>
                        <input name="subject" value={form.subject} onChange={handleChange} className="input-field" placeholder="What is this about?" data-testid="contact-subject-input" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Your Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Tell us how we can help..." data-testid="contact-message-textarea" />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-base" data-testid="contact-submit-btn">
                      Send Message <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div className="lg:col-span-2" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeRight}>
              <span className="section-label mb-4 inline-block">Our Information</span>
              <h2 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-6">We're Here for You</h2>

              <div className="space-y-5">
                <div className="bg-[#FDE8E9] rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C8161D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-nunito font-bold text-[#1A1A1A] mb-1">Our Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Plot No 84, near Kharavela Park,<br />Khandagiri, Bhubaneswar,<br />Odisha – 751030</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F9E2] rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#9DC41E] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-nunito font-bold text-[#1A1A1A] mb-1">Phone Number</h4>
                      <a href="tel:+918249156053" data-testid="contact-phone-link" className="text-gray-600 text-sm hover:text-[#9DC41E] transition-colors">+91 82491 56053</a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E0F2FE] rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0284c7] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-nunito font-bold text-[#1A1A1A] mb-1">Email Address</h4>
                      <a href="mailto:happykidzbbs@gmail.com" data-testid="contact-email-link" className="text-gray-600 text-sm hover:text-[#0284c7] transition-colors break-all">happykidzbbs@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FEF9C3] rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ca8a04] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-nunito font-bold text-[#1A1A1A] mb-2">School Hours</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between gap-4"><span>Mon – Fri</span><span className="font-medium">8:00 AM – 2:00 PM</span></div>
                        <div className="flex justify-between gap-4"><span>Saturday</span><span className="font-medium">8:00 AM – 12:00 PM</span></div>
                        <div className="flex justify-between gap-4"><span>Sunday</span><span className="font-medium text-red-500">Closed</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/918249156053?text=Hello%20Happy%20Kidz!%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-contact-btn"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-nunito font-bold rounded-2xl px-6 py-4 hover:bg-[#1EB758] transition-all hover:-translate-y-1 shadow-md"
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Find Us</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Our Location</h2>
          </motion.div>
          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Happy Kidz Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d85.7939!3d20.2817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE2JzU0LjEiTiA4NcKwNDcnMzguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="map-embed"
            />
          </motion.div>
          <motion.div className="mt-6 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <a
              href="https://maps.google.com/?q=Khandagiri+Bhubaneswar+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="get-directions-btn"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-nunito font-bold text-2xl mb-1">Ready to Visit Us?</h3>
              <p className="text-gray-400 text-sm">We welcome walk-in visits during school hours. Call ahead to schedule a guided tour.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+918249156053" className="btn-primary" data-testid="quick-call-btn"><Phone size={18} /> Call Now</a>
              <a href="mailto:happykidzbbs@gmail.com" className="btn-secondary" data-testid="quick-email-btn"><Mail size={18} /> Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
