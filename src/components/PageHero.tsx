import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageHeroProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description, image, className, children }) => {
    // Parallax effect or zoom effect on load
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    return (
        <div className={`relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center pt-20 ${className}`}>
            {/* Background Image with Zoom Effect */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out z-0 ${loaded ? 'scale-105' : 'scale-100'}`}
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 md:px-6 mx-auto text-center">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight drop-shadow-lg">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow-md">
                            {description}
                        </p>
                        {children && (
                            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                                {children}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PageHero;
