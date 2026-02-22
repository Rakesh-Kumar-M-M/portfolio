import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

function FadeIn({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
            {children}
        </motion.div>
    );
}

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim()) e.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length > 0) { setErrors(v); return; }
        setErrors({});
        setSending(true);
        try {
            const res = await fetch('https://formsubmit.co/ajax/rakesh883872@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: `Portfolio Contact: ${form.name}`,
                }),
            });
            if (res.ok) {
                setSubmitted(true);
                setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }, 4000);
            } else {
                setErrors({ message: 'Failed to send. Please try again or email directly.' });
            }
        } catch {
            setErrors({ message: 'Network error. Please try again.' });
        } finally {
            setSending(false);
        }
    };

    const contactInfo = [
        { icon: <FaEnvelope size={16} />, label: 'Email', value: 'rakesh883872@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=rakesh883872@gmail.com' },
        { icon: <FaPhone size={16} />, label: 'Phone', value: '+91-8838725153', href: 'tel:+918838725153' },
        { icon: <FaMapMarkerAlt size={16} />, label: 'Location', value: 'Chennai, India', href: null },
    ];

    return (
        <PageTransition>
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Contact</p>
                        <h1 className="page-title mb-5">Get In Touch</h1>
                        <p className="body-text">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-alt">
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* LEFT: Info */}
                        <FadeIn className="lg:col-span-2">
                            <div className="space-y-5">
                                {contactInfo.map((item, i) => (
                                    <motion.div key={item.label}
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="card-static rounded-xl p-5 flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/8 border border-[#3B82F6]/12 flex items-center justify-center text-[#3B82F6] shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <span className="label-text">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#F1F5F9] hover:text-[#3B82F6] transition-colors duration-200 mt-0.5">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-[15px] text-[#F1F5F9] mt-0.5">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="flex gap-3 pt-2">
                                    {[
                                        { icon: <FaGithub size={18} />, href: 'https://github.com/Rakesh-Kumar-M-M' },
                                        { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/rakesh-kumar-m-m/' },
                                    ].map((s, i) => (
                                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-xl bg-[#1E293B] border border-[#94A3B8]/8 flex items-center justify-center text-[#64748B] hover:text-[#3B82F6] hover:border-[#3B82F6]/20 transition-all duration-200">
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>

                                <div className="card-static rounded-xl overflow-hidden mt-4">
                                    <iframe title="Chennai, India"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d80.06892531640625!3d13.047525899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1&output=embed"
                                        width="100%" height="200" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }}
                                        allowFullScreen="" loading="lazy" />
                                </div>
                            </div>
                        </FadeIn>

                        {/* RIGHT: Form */}
                        <FadeIn className="lg:col-span-3" delay={0.1}>
                            <div className="card-static rounded-2xl p-8 sm:p-10">
                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center justify-center py-20 text-center">
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                                                <FaCheckCircle className="text-[#3B82F6] text-5xl mb-5" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Message Sent!</h3>
                                            <p className="text-[15px] text-[#94A3B8]">I'll get back to you soon.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <h3 className="text-lg font-bold text-[#F1F5F9] mb-1">Send a Message</h3>
                                                <p className="text-sm text-[#64748B] mb-6">Fill out the form and I'll respond within 24 hours.</p>
                                            </div>
                                            {[
                                                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                                                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                                            ].map(f => (
                                                <div key={f.name}>
                                                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">{f.label}</label>
                                                    <input type={f.type} value={form[f.name]}
                                                        onChange={e => { setForm({ ...form, [f.name]: e.target.value }); setErrors({ ...errors, [f.name]: '' }); }}
                                                        placeholder={f.placeholder}
                                                        className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border text-[15px] text-[#F1F5F9] placeholder-[#64748B] transition-all duration-300 ${errors[f.name] ? 'border-red-500/40' : 'border-[#94A3B8]/10'
                                                            }`} />
                                                    {errors[f.name] && <p className="text-xs text-red-400 mt-1.5">{errors[f.name]}</p>}
                                                </div>
                                            ))}
                                            <div>
                                                <label className="block text-sm font-medium text-[#94A3B8] mb-2">Message</label>
                                                <textarea value={form.message}
                                                    onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                                                    placeholder="Tell me about your project..." rows={5}
                                                    className={`w-full px-4 py-3 rounded-xl bg-[#0F172A] border text-[15px] text-[#F1F5F9] placeholder-[#64748B] resize-none transition-all duration-300 ${errors.message ? 'border-red-500/40' : 'border-[#94A3B8]/10'
                                                        }`} />
                                                {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                                            </div>
                                            <button type="submit" disabled={sending} className="btn-primary w-full cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                                                <FaPaperPlane size={14} /> {sending ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
