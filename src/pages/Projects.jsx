import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheck } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { projects, categories } from '../data/projects';

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

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 bg-[#1E293B] border border-[#94A3B8]/10 rounded-2xl p-8 sm:p-10 max-w-lg w-full max-h-[85vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}>
                <button onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0F172A]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#F1F5F9] transition-colors cursor-pointer">
                    <FaTimes size={13} />
                </button>
                <div className="text-4xl mb-4">{project.image}</div>
                <span className="tag">{project.category}</span>
                <h2 className="text-xl font-bold text-[#F1F5F9] mt-3 mb-3 tracking-tight">{project.title}</h2>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-7">{project.description}</p>
                <p className="label-text mb-3">Key Features</p>
                <ul className="space-y-2.5 mb-7">
                    {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-[#94A3B8]">
                            <FaCheck className="text-[#3B82F6] mt-1 shrink-0" size={11} /><span>{f}</span>
                        </li>
                    ))}
                </ul>
                <p className="label-text mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-3 px-6">
                        <FaGithub size={15} /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-3 px-6">
                        <FaExternalLinkAlt size={13} /> Live Demo
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <PageTransition>
            <section className="bg-[#0F172A] pt-[140px] sm:pt-[160px] pb-[60px]">
                <div className="container-main">
                    <FadeIn>
                        <p className="label-text text-[#3B82F6] mb-3">Portfolio</p>
                        <h1 className="page-title mb-5">My Projects</h1>
                        <p className="body-text">Work across full-stack, AI/ML, and frontend development.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section-alt">
                <div className="container-main">
                    <FadeIn>
                        <div className="flex flex-wrap gap-2.5 mb-14">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setActive(cat)}
                                    className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 cursor-pointer ${active === cat
                                            ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20'
                                            : 'bg-[#0F172A] border border-[#94A3B8]/8 text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#94A3B8]/16'
                                        }`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map(project => (
                                <motion.div key={project.id} layout
                                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35 }}
                                    className="card rounded-2xl p-7 cursor-pointer group flex flex-col"
                                    onClick={() => setSelected(project)}>
                                    <div className="text-3xl mb-4">{project.image}</div>
                                    <span className="tag self-start mb-3">{project.category}</span>
                                    <h3 className="text-lg font-bold text-[#F1F5F9] mb-2 tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {project.shortTitle}
                                    </h3>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.techStack.map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                    <div className="flex gap-3 mt-auto">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                                            className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200 px-3 py-1.5 rounded-lg bg-[#0F172A]/50 border border-[#94A3B8]/6">
                                            <FaGithub size={13} /> GitHub
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                                            className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200 px-3 py-1.5 rounded-lg bg-[#0F172A]/50 border border-[#94A3B8]/6">
                                            <FaExternalLinkAlt size={11} /> Demo
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </PageTransition>
    );
}
