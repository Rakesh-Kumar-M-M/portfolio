import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { achievements } from '../data/achievements';

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

export default function Achievements() {
    return (
        <PageTransition>
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Recognition</p>
                        <h1 className="page-title mb-5">Certifications & Achievements</h1>
                        <p className="body-text">Certifications and recognitions earned along the way.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-alt">
                <div className="container-main">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((cert, i) => (
                            <FadeIn key={cert.id} delay={i * 0.08}>
                                <motion.div whileHover={{ y: -4 }}
                                    className="card rounded-2xl p-7 sm:p-8 relative overflow-hidden group cursor-default h-full">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-30 group-hover:opacity-80 transition-opacity duration-300"
                                        style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
                                    <div className="relative z-10">
                                        <div className="text-3xl mb-4">{cert.icon}</div>
                                        <h3 className="text-base font-bold text-[#F1F5F9] mb-2 tracking-tight">{cert.title}</h3>
                                        <p className="text-xs font-bold mb-3 tracking-wider uppercase text-[#3B82F6]">{cert.issuer}</p>
                                        <p className="text-sm text-[#94A3B8] leading-relaxed">{cert.description}</p>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
