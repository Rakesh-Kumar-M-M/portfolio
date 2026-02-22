import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            className="text-center mb-14 sm:mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-3">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className="text-[var(--color-text-muted)] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
