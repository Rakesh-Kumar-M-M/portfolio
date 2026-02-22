import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-[#94A3B8]/6 bg-[#0F172A]">
            <div className="container-main py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">RK</div>
                            <span className="text-[15px] font-bold text-[#F1F5F9] tracking-tight">Rakesh<span className="text-[#3B82F6]">.</span>dev</span>
                        </Link>
                        <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">
                            Full-Stack Developer & AI/ML Enthusiast crafting scalable web applications and intelligent systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="label-text mb-6">Quick Links</h3>
                        <div className="space-y-3">
                            {['About', 'Projects', 'Experience', 'Contact'].map(link => (
                                <Link key={link} to={`/${link.toLowerCase()}`}
                                    className="block text-sm text-[#64748B] hover:text-[#3B82F6] transition-colors duration-200">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="label-text mb-6">Connect</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaGithub size={17} />, href: 'https://github.com/Rakesh-Kumar-M-M' },
                                { icon: <FaLinkedin size={17} />, href: 'https://www.linkedin.com/in/rakesh-kumar-m-m/' },
                                { icon: <FaEnvelope size={17} />, href: 'mailto:rakesh883872@gmail.com' },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#94A3B8]/8 flex items-center justify-center text-[#64748B] hover:text-[#3B82F6] hover:border-[#3B82F6]/20 transition-all duration-200">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#94A3B8]/6 mt-14 pt-8 text-center">
                    <p className="text-xs text-[#64748B]">© {new Date().getFullYear()} Rakesh Kumar M M. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
