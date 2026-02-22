import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', update);
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 h-[2px] z-[60] bg-[#3B82F6]"
            style={{ width: `${progress}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.1 }}
        />
    );
}
