import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { experiences } from '../data/experience';

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

export default function Experience() {
    return (
        <PageTransition>
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Career</p>
                        <h1 className="page-title mb-5">Professional Experience</h1>
                        <p className="body-text">My journey through internships, leadership, and community contributions.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-alt">
                <div className="container-main">
                    <div className="relative max-w-[750px]">
                        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[#3B82F6]/20" />
                        {experiences.map((exp, i) => (
                            <FadeIn key={exp.id} delay={i * 0.12}>
                                <div className="relative pl-16 pb-12 last:pb-0">
                                    <div className="absolute left-[18px] -translate-x-1/2 w-[36px] h-[36px] rounded-full bg-[#1E293B] border-2 border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] z-10">
                                        {exp.type === 'work' ? <FaBriefcase size={13} /> : <FaUsers size={13} />}
                                    </div>
                                    <div className="card-static rounded-2xl p-7 sm:p-8">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                                            <div>
                                                <h3 className="text-lg font-bold text-[#F1F5F9] tracking-tight">{exp.role}</h3>
                                                <p className="text-sm font-medium text-[#3B82F6] mt-1">{exp.company}</p>
                                            </div>
                                            <span className="label-text bg-[#0F172A] border border-[#94A3B8]/8 px-3 py-1.5 rounded-lg self-start shrink-0">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {exp.description.map((point, j) => (
                                                <li key={j} className="flex items-start gap-3 text-[15px] text-[#94A3B8] leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/40 mt-[10px] shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map(tech => <span key={tech} className="tag">{tech}</span>)}
                                        </div>
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
