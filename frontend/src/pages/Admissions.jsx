import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, CalendarCheck, FileText, GraduationCap, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOpts } from '../hooks/useScrollAnimation';

const Wave = ({ fill, bg = "transparent" }) => (
  <div className="wave-divider" style={{ background: bg }}>
    <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 50 }}>
      <path d="M0,35 C200,70 400,0 720,35 C1040,70 1280,5 1440,35 L1440,70 L0,70 Z" fill={fill} />
    </svg>
  </div>
);

const steps = [
  { icon: Phone, num: "01", title: "Initial Inquiry", desc: "Contact us via phone, email, or WhatsApp to express your interest and get basic information about available programs.", color: "#FDE8E9", iconColor: "#C8161D" },
  { icon: CalendarCheck, num: "02", title: "School Visit & Tour", desc: "Schedule a campus visit to see our facilities, meet our educators, and experience the Happy Kidz environment firsthand.", color: "#F3F9E2", iconColor: "#9DC41E" },
  { icon: FileText, num: "03", title: "Application Submission", desc: "Complete and submit the admission application form along with required documents. Our team reviews your submission promptly.", color: "#E0F2FE", iconColor: "#0284c7" },
  { icon: GraduationCap, num: "04", title: "Enrollment & Welcome", desc: "Upon approval, complete the enrollment process, pay the registration fee, and receive your welcome kit. Your child's journey begins!", color: "#FEF9C3", iconColor: "#ca8a04" },
];

const fees = [
  { program: "Playgroup", age: "1.5–2.5 yrs", registration: "₹2,500", monthly: "₹3,500", annual: "₹42,000" },
  { program: "Nursery", age: "2.5–3.5 yrs", registration: "₹2,500", monthly: "₹4,000", annual: "₹48,000" },
  { program: "Pre-KG", age: "3.5–4.5 yrs", registration: "₹2,500", monthly: "₹4,500", annual: "₹54,000" },
  { program: "Kindergarten", age: "4–6 yrs", registration: "₹2,500", monthly: "₹5,000", annual: "₹60,000" },
  { program: "After School", age: "4–10 yrs", registration: "₹1,500", monthly: "₹2,500", annual: "₹30,000" },
];

const initialForm = { parentName: '', childName: '', childAge: '', email: '', phone: '', program: '', message: '' };

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!form.childName.trim()) newErrors.childName = "Child's name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.program) newErrors.program = "Please select a program";
    return newErrors;
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
      <PageHero title="Admissions" subtitle="Join the Happy Kidz family. Simple steps to secure your child's bright future." breadcrumb="Admissions" />

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">How to Apply</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Simple 4-Step Process</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We've made the admission process as smooth and stress-free as possible for every family.</p>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={stagger}>
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="cartoon-card relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#C8161D] rounded-2xl flex items-center justify-center text-white font-nunito font-extrabold text-lg shadow-lg">{step.num}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: step.color }}>
                  <step.icon size={26} style={{ color: step.iconColor }} />
                </div>
                <h3 className="font-nunito font-bold text-xl text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Documents & Timeline */}
          <motion.div className="mt-14 rounded-3xl p-8 bg-[#FDE8E9]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-nunito font-extrabold text-2xl text-[#C8161D] mb-3">Documents Required</h3>
                <p className="text-gray-600 text-sm mb-4">Please bring the following at the time of enrollment:</p>
                <ul className="space-y-2.5">
                  {["Birth certificate (original + photocopy)", "Passport-size photographs (4 copies)", "Previous school records (if any)", "Parent/guardian Aadhaar card", "Residence proof (any utility bill)"].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-xl px-3 py-2">
                      <CheckCircle size={15} className="text-[#C8161D] flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-nunito font-extrabold text-2xl text-[#9DC41E] mb-3">Admission Timeline</h3>
                <div className="space-y-3">
                  {[
                    { month: "January – March", activity: "Applications Open" },
                    { month: "March – April", activity: "School Visits & Interviews" },
                    { month: "April", activity: "Admission Offers Sent" },
                    { month: "May – June", activity: "Enrollment & Orientation" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white rounded-xl p-3">
                      <div className="w-7 h-7 bg-[#C8161D] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-nunito font-bold text-xs">{idx + 1}</div>
                      <div>
                        <div className="text-xs text-gray-500">{item.month}</div>
                        <div className="font-semibold text-sm text-[#1A1A1A]">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Wave fill="#F8FAFC" bg="white" />

      {/* Enrollment Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Apply Online</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Enrollment Inquiry Form</h2>
            <p className="text-gray-500 mt-3">Fill in the details below and our admissions team will contact you within 24 hours.</p>
          </motion.div>

          <motion.div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {submitted ? (
              <div className="text-center py-12" data-testid="admission-success">
                <div className="w-20 h-20 bg-[#F3F9E2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-[#9DC41E]" />
                </div>
                <h3 className="font-nunito font-extrabold text-3xl text-[#1A1A1A] mb-3">Application Received!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Thank you for your interest in Happy Kidz! Our admissions team will reach out to you within 24 hours to schedule a school visit.</p>
                <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="btn-primary" data-testid="submit-another-btn">Submit Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="admission-form" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Parent/Guardian Name *</label>
                    <input name="parentName" value={form.parentName} onChange={handleChange} className="input-field" placeholder="Your full name" data-testid="parent-name-input" />
                    {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Child's Name *</label>
                    <input name="childName" value={form.childName} onChange={handleChange} className="input-field" placeholder="Child's full name" data-testid="child-name-input" />
                    {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Child's Age</label>
                    <input name="childAge" value={form.childAge} onChange={handleChange} className="input-field" placeholder="e.g. 3 years 2 months" data-testid="child-age-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Program of Interest *</label>
                    <select name="program" value={form.program} onChange={handleChange} className="input-field" data-testid="program-select">
                      <option value="">Select a Program</option>
                      <option>Playgroup (1.5–2.5 yrs)</option>
                      <option>Nursery (2.5–3.5 yrs)</option>
                      <option>Pre-KG (3.5–4.5 yrs)</option>
                      <option>Kindergarten (4–6 yrs)</option>
                      <option>After School Program</option>
                    </select>
                    {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="input-field" placeholder="your@email.com" data-testid="email-input" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 XXXXX XXXXX" data-testid="phone-input" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Additional Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Any specific questions or requirements..." data-testid="message-textarea" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-base" data-testid="admission-submit-btn">
                  Submit Inquiry <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Wave fill="white" bg="#F8FAFC" />

      {/* Tuition Fees */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
            <span className="section-label">Fee Structure</span>
            <h2 className="font-nunito font-extrabold text-4xl text-[#1A1A1A] mt-3">Tuition &amp; Fees 2025–26</h2>
            <p className="text-gray-500 mt-3">Transparent pricing with no hidden charges. Fees are inclusive of all standard activities.</p>
          </motion.div>
          <motion.div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="overflow-x-auto">
              <table className="w-full" data-testid="fee-table">
                <thead className="bg-[#C8161D] text-white">
                  <tr>
                    {["Program", "Age Group", "Registration Fee", "Monthly Fee", "Annual Fee"].map(h => (
                      <th key={h} className="py-4 px-5 text-left font-nunito font-bold text-sm">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                      <td className="py-4 px-5 font-nunito font-bold text-[#1A1A1A]">{row.program}</td>
                      <td className="py-4 px-5 text-gray-500 text-sm">{row.age}</td>
                      <td className="py-4 px-5 text-gray-700 font-medium">{row.registration}</td>
                      <td className="py-4 px-5 text-[#C8161D] font-bold">{row.monthly}</td>
                      <td className="py-4 px-5 text-gray-700 font-medium">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <motion.div className="mt-8 bg-[#F3F9E2] rounded-2xl p-6 border border-[#9DC41E]/20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="font-nunito font-bold text-[#1A1A1A] mb-3">Financial Assistance Available</h4>
            <p className="text-gray-600 text-sm leading-relaxed">We believe every child deserves quality education. We offer need-based fee concessions and sibling discounts. Contact our admissions office to learn more about available financial assistance options.</p>
          </motion.div>
        </div>
      </section>

      <Wave fill="#C8161D" bg="white" />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#C8161D] to-[#9B1015] text-white">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial="hidden" whileInView="visible" viewport={viewportOpts} variants={fadeUp}>
          <h2 className="font-nunito font-extrabold text-3xl mb-3">Have Questions About Admissions?</h2>
          <p className="text-red-100 mb-6">Our admissions team is here to help. Reach out anytime.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918249156053" className="bg-white text-[#C8161D] font-nunito font-bold rounded-full px-8 py-4 hover:bg-red-50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 shadow-lg" data-testid="call-admissions-btn"><Phone size={18} /> Call Us Now</a>
            <Link to="/contact" className="btn-outline-white">Send a Message</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
