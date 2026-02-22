import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
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

const timeline = [
    { year: '2023', title: 'Started B.E. Computer Science', place: 'Sri Sairam Engineering College, Chennai', desc: 'Began CS journey with strong programming and data structures foundation.', icon: <FaGraduationCap /> },
    { year: '2024', title: 'Full Stack Developer Intern', place: 'Softrate', desc: 'Built production-grade MERN stack applications with scalable APIs.', icon: <FaCode /> },
    { year: '2024', title: 'Core Team – Skill Development Club', place: 'Sri Sairam Engineering College', desc: 'Trained 180+ students in C & Python, achieved 75% retention in advanced workshops.', icon: <FaRocket /> },
    { year: '2025', title: 'AI/ML Projects & Exploration', place: 'Self-directed & Academic', desc: 'Built Sentag — AI sentiment analysis tool with n8n workflow automation.', icon: <FaBrain /> },
];

export default function About() {
    return (
        <PageTransition>

            {/* ── Page Header — offset for fixed navbar ── */}
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">About Me</p>
                        <h1 className="page-title mb-5">Passionate Developer<br />Building Impactful Tech</h1>
                        <p className="body-text">Full-Stack Developer & AI/ML Enthusiast based in Chennai, India.</p>
                    </FadeIn>
                </div>
            </section>

            {/* ── Bio: Left text + Right visual ── */}
            <section className="section-alt">
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <FadeIn>
                            <p className="label-text text-[#3B82F6] mb-4">Who I Am</p>
                            <p className="text-[17px] text-[#94A3B8] leading-[1.85] mb-5 max-w-[550px]">
                                I'm a <span className="text-[#F1F5F9] font-semibold">Full-Stack Developer</span> and{' '}
                                <span className="text-[#F1F5F9] font-semibold">AI/ML Enthusiast</span> pursuing my B.E. in
                                Computer Science at Sri Sairam Engineering College with a CGPA of{' '}
                                <span className="text-[#3B82F6] font-semibold">8.66</span>.
                            </p>
                            <p className="text-[17px] text-[#94A3B8] leading-[1.85] mb-8 max-w-[550px]">
                                From full-stack MERN development to AI-powered sentiment analysis,
                                I thrive at the intersection of software engineering and artificial intelligence.
                            </p>
                            <div className="grid grid-cols-2 gap-4 max-w-[400px]">
                                {[
                                    { label: 'Location', value: 'Chennai, India' },
                                    { label: 'CGPA', value: '8.66' },
                                    { label: 'Degree', value: 'B.E. CSE' },
                                    { label: 'Batch', value: '2023–2027' },
                                ].map(item => (
                                    <div key={item.label} className="card-static rounded-xl p-4">
                                        <span className="label-text">{item.label}</span>
                                        <p className="text-[15px] font-semibold text-[#F1F5F9] mt-1">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.15}>
                            <div className="w-full max-w-[380px] mx-auto aspect-square rounded-3xl bg-[#1E293B] border border-[#94A3B8]/8 flex items-center justify-center">
                                <span className="text-8xl">👨‍💻</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Career Vision ── */}
            <section className="section-dark">
                <div className="container-main">
                    <FadeIn>
                        <div className="card-static rounded-2xl p-10 sm:p-12 max-w-[800px] relative overflow-hidden">
                            <div className="orb w-[250px] h-[250px] bg-[#3B82F6] -top-[80px] -right-[80px]" />
                            <div className="relative z-10">
                                <p className="label-text text-[#3B82F6] mb-4">Career Vision</p>
                                <blockquote className="text-xl sm:text-2xl font-medium text-[#F1F5F9] leading-relaxed mb-5 max-w-[600px]">
                                    "I aspire to bridge scalable web development and intelligent AI systems to build technology that makes a real-world impact."
                                </blockquote>
                                <p className="body-text">
                                    My goal is to contribute to product-driven companies where engineering excellence
                                    meets user impact — from intuitive interfaces to data-driven backend architectures.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── Currently Learning ── */}
            <section className="section-alt">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Growth</p>
                        <h2 className="section-title mb-10">Currently Learning</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px]">
                        {[
                            { title: 'Advanced React', desc: 'Hooks composition, compound components, and state machines' },
                            { title: 'System Design', desc: 'Scalable architecture, microservices, and distributed systems' },
                            { title: 'Machine Learning', desc: 'Deep learning, NLP, and model deployment pipelines' },
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={i * 0.1}>
                                <div className="card rounded-xl p-6">
                                    <h4 className="text-sm font-bold text-[#3B82F6] mb-2">{item.title}</h4>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="section-dark">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Journey</p>
                        <h2 className="section-title mb-12">Education & Experience</h2>
                    </FadeIn>
                    <div className="relative max-w-[700px]">
                        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#3B82F6]/20" />
                        {timeline.map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="relative pl-14 pb-10 last:pb-0">
                                    <div className="absolute left-[15px] -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-[#1E293B] border-2 border-[#3B82F6]/25 flex items-center justify-center text-[#3B82F6] text-xs z-10">
                                        {item.icon}
                                    </div>
                                    <div className="card-static rounded-xl p-6">
                                        <span className="label-text text-[#3B82F6]">{item.year}</span>
                                        <h4 className="text-[15px] font-bold text-[#F1F5F9] mt-1.5 tracking-tight">{item.title}</h4>
                                        <p className="text-xs font-medium text-[#64748B] mt-0.5">{item.place}</p>
                                        <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

        </PageTransition>
    );
}
