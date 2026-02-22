import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-[#0F172A] border-b border-[#94A3B8]/6 ${scrolled
                ? 'shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
                : 'shadow-[0_1px_8px_rgba(0,0,0,0.15)]'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
                <div className="flex items-center justify-between h-[80px]">

                    {/* LEFT: Logo */}
                    <Link to="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-[38px] h-[38px] rounded-xl bg-[#3B82F6] flex items-center justify-center text-white font-extrabold text-[13px] tracking-tight shadow-md shadow-[#3B82F6]/20 group-hover:shadow-[#3B82F6]/40 transition-shadow duration-300">
                            RK
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[15px] font-bold text-[#F1F5F9] tracking-[-0.01em]">
                                Rakesh Kumar
                            </span>
                            <span className="text-[10px] font-medium text-[#64748B] tracking-[0.04em] mt-[2px]">
                                Full-Stack Developer
                            </span>
                        </div>
                    </Link>

                    {/* RIGHT: Nav Links (Desktop) */}
                    <nav className="hidden lg:flex items-center" style={{ gap: '32px' }}>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link key={link.name} to={link.path} className="relative py-1 group">
                                    <span className={`text-[13.5px] font-medium transition-colors duration-200 ${isActive ? 'text-[#3B82F6]' : 'text-[#94A3B8] group-hover:text-[#F1F5F9]'
                                        }`}>
                                        {link.name}
                                    </span>
                                    {isActive ? (
                                        <motion.div layoutId="navUnderline"
                                            className="absolute -bottom-[6px] left-0 right-0 h-[2px] rounded-full bg-[#3B82F6]"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                                    ) : (
                                        <div className="absolute -bottom-[6px] left-1/2 right-1/2 h-[2px] rounded-full bg-[#3B82F6]/40 group-hover:left-0 group-hover:right-0 transition-all duration-300" />
                                    )}
                                </Link>
                            );
                        })}

                        <Link to="/contact"
                            className="ml-3 inline-flex items-center px-5 py-[10px] rounded-xl text-[13px] font-semibold text-white bg-[#3B82F6] shadow-[0_2px_12px_rgba(59,130,246,0.25)] hover:bg-[#60A5FA] hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                            Hire Me
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl bg-[#1E293B] border border-[#94A3B8]/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#334155] transition-all duration-200 cursor-pointer"
                        aria-label="Toggle menu">
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <HiX size={20} />
                                </motion.span>
                            ) : (
                                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <HiMenuAlt3 size={20} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden bg-[#0F172A]/95 backdrop-blur-2xl border-t border-[#94A3B8]/6">
                        <div className="max-w-[1200px] mx-auto px-6 py-5 space-y-1">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.div key={link.name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.3 }}>
                                        <Link to={link.path}
                                            className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${isActive
                                                ? 'text-[#3B82F6] bg-[#3B82F6]/8'
                                                : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E293B]'
                                                }`}>
                                            {isActive && <span className="w-[3px] h-4 rounded-full bg-[#3B82F6] mr-3" />}
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-3">
                                <Link to="/contact"
                                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-[14px] font-semibold text-white bg-[#3B82F6] shadow-[0_2px_16px_rgba(59,130,246,0.2)]">
                                    Hire Me →
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
