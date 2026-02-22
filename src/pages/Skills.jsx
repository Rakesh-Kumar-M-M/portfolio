import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { skillCategories } from '../data/skills';

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

export default function Skills() {
    return (
        <PageTransition>
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Tech Stack</p>
                        <h1 className="page-title mb-5">Skills & Technologies</h1>
                        <p className="body-text">Technologies and tools I use to build modern applications.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-alt">
                <div className="container-main">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((cat, catIdx) => (
                            <FadeIn key={cat.title} delay={catIdx * 0.08}>
                                <div className="card-static rounded-2xl p-7 sm:p-8 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-2xl">{cat.icon}</span>
                                        <h3 className="text-lg font-bold text-[#F1F5F9] tracking-tight">{cat.title}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {cat.skills.map((skill, skillIdx) => (
                                            <motion.span key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIdx * 0.05 + skillIdx * 0.04 }}
                                                className="px-4 py-2 rounded-xl text-[14px] font-medium text-[#94A3B8] bg-[#0F172A] border border-[#94A3B8]/8 hover:border-[#3B82F6]/25 hover:text-[#3B82F6] transition-all duration-300 cursor-default">
                                                {skill.name}
                                            </motion.span>
                                        ))}
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
