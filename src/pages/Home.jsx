import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { FaArrowRight, FaDownload, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';

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

function Particles() {
    const dots = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i, left: `${Math.random() * 100}%`,
            dur: `${12 + Math.random() * 14}s`,
            del: `${Math.random() * 12}s`,
            size: `${2 + Math.random() * 2}px`,
        })), []);
    return (
        <div className="particles">
            {dots.map(p => (
                <div key={p.id} className="particle"
                    style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.dur, animationDelay: p.del }} />
            ))}
        </div>
    );
}

export default function Home() {
    const featured = projects.slice(0, 3);
    const skills = ['React.js', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'Express.js', 'Git', 'AWS'];

    return (
        <PageTransition>

            {/* ════════ HERO ════════ */}
            <section className="relative overflow-hidden bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[100px] sm:pb-[120px]">
                <Particles />
                <div className="orb w-[500px] h-[500px] bg-[#3B82F6] -top-[200px] -left-[150px]" />
                <div className="orb w-[400px] h-[400px] bg-[#3B82F6] -bottom-[150px] -right-[100px]" />

                <div className="container-main relative z-10">
                    <div className="max-w-[800px]">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="label-text text-[#3B82F6] inline-block mb-6">
                                Full-Stack Developer · AI/ML Enthusiast
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }} className="page-title mb-6">
                            Hi, I'm <span className="text-[#3B82F6]">Rakesh Kumar</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl text-[#F1F5F9] font-light mb-5 leading-relaxed max-w-[650px]">
                            Building Scalable Web Applications &amp; Intelligent AI Systems
                        </motion.p>

                        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }} className="body-text mb-10">
                            Computer Science Engineering student at Sri Sairam Engineering College, Chennai.
                            Passionate about crafting elegant solutions with modern web technologies and AI.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
                            <Link to="/projects" className="btn-primary">View Projects <FaArrowRight size={14} /></Link>
                            <a href="/rakesh_resume_JPMC.pdf" download className="btn-secondary"><FaDownload size={14} /> Download Resume</a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════ STATS ════════ */}
            <section className="section-alt">
                <div className="container-main">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { num: '10+', label: 'Projects Built', desc: 'Full-stack, AI/ML, and frontend' },
                            { num: '180+', label: 'Students Trained', desc: 'In C & Python programming' },
                            { num: '8.66', label: 'CGPA', desc: 'B.E. Computer Science' },
                        ].map((stat, i) => (
                            <FadeIn key={stat.label} delay={i * 0.1}>
                                <div className="card-static rounded-2xl p-8 text-center">
                                    <div className="text-3xl font-bold text-[#3B82F6] mb-2">{stat.num}</div>
                                    <div className="text-sm font-semibold text-[#F1F5F9] mb-1">{stat.label}</div>
                                    <p className="text-sm text-[#64748B]">{stat.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ FEATURED PROJECTS ════════ */}
            <section className="section-dark">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Portfolio</p>
                        <h2 className="section-title mb-4">Featured Projects</h2>
                        <p className="body-text mb-14">A selection of my recent work across different domains.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featured.map((project, i) => (
                            <FadeIn key={project.id} delay={i * 0.1}>
                                <div className="card rounded-2xl p-7 h-full flex flex-col group">
                                    <div className="text-3xl mb-5">{project.image}</div>
                                    <span className="tag self-start mb-3">{project.category}</span>
                                    <h3 className="text-lg font-bold text-[#F1F5F9] mb-2 tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {project.shortTitle}
                                    </h3>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.techStack.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                    <div className="flex gap-3 mt-auto">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200">
                                            <FaGithub size={14} /> GitHub
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200">
                                            <FaExternalLinkAlt size={12} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn>
                        <div className="text-center mt-14">
                            <Link to="/projects" className="btn-secondary">View All Projects <FaArrowRight size={13} /></Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ════════ SKILLS SNAPSHOT ════════ */}
            <section className="section-alt">
                <div className="container-main">
                    <FadeIn>
                        <div className="text-center mb-14">
                            <p className="label-text text-[#3B82F6] mb-3">Tech Stack</p>
                            <h2 className="section-title mb-4">Skills & Technologies</h2>
                            <p className="body-text mx-auto">Technologies I use to bring products to life.</p>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div className="flex flex-wrap justify-center gap-3 max-w-[700px] mx-auto mb-10">
                            {skills.map((skill, i) => (
                                <motion.span key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className="px-5 py-2.5 rounded-xl text-[15px] font-medium text-[#94A3B8] bg-[#1E293B] border border-[#94A3B8]/8 hover:border-[#3B82F6]/30 hover:text-[#3B82F6] transition-all duration-300 cursor-default">
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link to="/skills"
                                className="inline-flex items-center gap-2 text-[#3B82F6] text-sm font-semibold hover:gap-3 transition-all duration-200">
                                See all skills <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ════════ CTA ════════ */}
            <section className="section-dark">
                <div className="container-main">
                    <FadeIn>
                        <div className="card-static rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
                            <div className="orb w-[350px] h-[350px] bg-[#3B82F6] -top-[120px] -right-[120px]" />
                            <div className="orb w-[250px] h-[250px] bg-[#3B82F6] -bottom-[80px] -left-[80px]" />
                            <div className="relative z-10">
                                <h2 className="section-title mb-4">Let's Work Together</h2>
                                <p className="body-text mx-auto mb-10">
                                    Open to internships, freelance projects, and collaborations. Let's build something amazing.
                                </p>
                                <Link to="/contact" className="btn-primary">Get In Touch <FaArrowRight size={14} /></Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </PageTransition>
    );
}
