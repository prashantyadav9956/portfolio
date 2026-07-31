import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Link2,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Video Editing',
    budget: '$1k - $3k',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Video Editing',
    'AI Content Creation',
    'Branding',
    'Thumbnail Design',
    'Social Media Creatives',
    'Full Retainer'
  ];

  const budgetOptions = ['<$1k', '$1k - $3k', '$3k - $10k', '$10k+'];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.socials.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and project details.");
      return;
    }

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-slate-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs font-bold text-cyan-400 font-syne uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-syne tracking-tight mb-4"
          >
            Let's Build Something <span className="gradient-text">Legendary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-lg px-2"
          >
            Have a project in mind, need viral thumbnails, or want to elevate your brand's AI visual identity? Reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Info & LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-white/10 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-syne text-white mb-2">Direct Reachout</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Preferred communication is via LinkedIn or direct email booking. Typical response time is under 4 hours.
              </p>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group hover:border-emerald-500/30 transition-all">
                <a
                  href={`https://wa.me/91${personalInfo.socials.phone.replace(/\D/g, '')}?text=Hello%20Prashant%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 overflow-hidden min-w-0 flex-1"
                  data-cursor="WHATSAPP"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-600/30 text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                      Phone / WhatsApp <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    </span>
                    <span className="block text-xs sm:text-sm font-bold font-syne text-white group-hover:text-emerald-400 transition-colors truncate">
                      {personalInfo.socials.phone}
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-emerald-600 text-gray-300 hover:text-white transition-colors shrink-0"
                  title="Copy Phone Number"
                  data-cursor="COPY"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Card with mailto link */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group hover:border-violet-500/30 transition-all">
                <a
                  href={`mailto:${personalInfo.socials.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="flex items-center gap-3 overflow-hidden min-w-0 flex-1"
                  data-cursor="EMAIL"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-violet-600/30 text-violet-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                      Email Address <ArrowUpRight className="w-3 h-3 text-violet-400" />
                    </span>
                    <span className="block text-xs sm:text-sm font-bold font-syne text-white group-hover:text-violet-400 transition-colors truncate">
                      {personalInfo.socials.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-violet-600 text-gray-300 hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                  data-cursor="COPY"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-600/30 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Location & Availability</span>
                  <p className="text-xs sm:text-sm font-bold font-syne text-white">{personalInfo.location}</p>
                </div>
              </div>

              {/* LinkedIn Professional Showcase Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-blue-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/30 text-cyan-400">
                      <Link2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-white text-sm">Connect On LinkedIn</h4>
                      <p className="text-[11px] text-gray-400">Prashant Yadav — Creative Designer</p>
                    </div>
                  </div>
                </div>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-syne font-bold text-xs transition-colors shadow-lg shadow-blue-600/30 mt-2"
                  data-cursor="LINKEDIN"
                >
                  <span>VIEW LINKEDIN PROFILE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-white/10 relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-syne text-white mb-2">Message Dispatched!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Prashant has received your project inquiry regarding <span className="text-cyan-400 font-semibold">{formData.serviceType}</span> and will reply within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', serviceType: 'Video Editing', budget: '$1k - $3k', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-syne font-bold text-xs"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold font-syne uppercase tracking-wider text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-syne uppercase tracking-wider text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Pills */}
                  <div>
                    <label className="block text-xs font-bold font-syne uppercase tracking-wider text-gray-300 mb-2">
                      Required Creative Service
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: opt })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold font-syne transition-all ${
                            formData.serviceType === opt
                              ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                              : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Pills */}
                  <div>
                    <label className="block text-xs font-bold font-syne uppercase tracking-wider text-gray-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold font-syne transition-all ${
                            formData.budget === opt
                              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                              : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Box */}
                  <div>
                    <label className="block text-xs font-bold font-syne uppercase tracking-wider text-gray-300 mb-2">
                      Project Details & Deliverables Needed
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell Prashant about your project goals, deadline, and visual vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-syne font-extrabold text-xs sm:text-sm tracking-wider shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 transition-all flex items-center justify-center gap-2 sm:gap-3"
                    data-cursor="SEND"
                  >
                    <span>SEND PROJECT PROPOSAL</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
