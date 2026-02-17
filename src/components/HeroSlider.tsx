import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Search, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        badges: ["IRDAI Verified", "No Spam Calls", "100% Free"],
        title: "Buy / Port / Renew Insurance",
        subtitle: "Connect with your local PadosiAgent",
        description: "Expert guidance for Health, Life, Motor & SME insurance. Verified agents in your neighborhood.",
        ctaText: "Find My PadosiAgent",
        ctaLink: "/find-agents",
        bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" // Office meeting
    },
    {
        id: 2,
        badges: ["Expert Support", "Fast Settlement", "24/7 Aid"],
        title: "Hassle-free Claims Assistance",
        subtitle: "Support when you need it most",
        description: "Struggling with a claim? Get expert help with filing, follow-ups, settlements, and dispute resolution.",
        ctaText: "Get Claim Help",
        ctaLink: "/find-agents",
        bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" // Handshake/Agreement
    },
    {
        id: 3,
        badges: ["Free Service", "Unbiased Advice", "Coverage Check"],
        title: "Free Policy Audit",
        subtitle: "Optimize your insurance portfolio",
        description: "Unsure if you're fully covered? Get a free professional audit to identify gaps and save money.",
        ctaText: "Book Free Audit",
        ctaLink: "/find-agents",
        bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" // Analysis/Audit
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative overflow-hidden h-[600px] lg:h-[700px] w-full bg-slate-900 pt-32">
            {/* Slides Container */}
            <div className="absolute inset-0 w-full h-full">
                {SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-105"
                            style={{
                                backgroundImage: `url(${slide.bgImage})`,
                                transform: index === currentSlide ? 'scale(110%)' : 'scale(100%)'
                            }}
                        ></div>

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60"></div>

                        {/* Content */}
                        <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center pb-24 md:pb-0">

                            {/* Badges */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                {slide.badges.map((badge, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-medium">
                                        <CheckCircle2 size={12} className="text-emerald-400 md:w-3.5 md:h-3.5" />
                                        {badge}
                                    </div>
                                ))}
                            </div>

                            {/* Text */}
                            <h2 className="text-sm md:text-2xl font-medium text-blue-400 mb-2 md:mb-4 tracking-wide uppercase animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                                {slide.subtitle}
                            </h2>
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 font-display">
                                {slide.title}
                            </h1>
                            <p className="text-sm md:text-xl text-slate-300 max-w-2xl mb-6 md:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
                                {slide.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
                                <Link to={slide.ctaLink}>
                                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white rounded-full px-8 py-3 md:py-6 h-auto text-base md:text-lg shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all w-full sm:w-auto">
                                        <Search className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                                        {slide.ctaText}
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="outline" size="lg" className="rounded-full px-8 py-3 md:py-6 h-auto text-base md:text-lg border-white/30 text-white hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all z-30 border border-white/10 hidden md:block group"
            >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white backdrop-blur-sm transition-all z-30 border border-white/10 hidden md:block group"
            >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 h-2 rounded-full ${currentSlide === index ? 'w-8 bg-primary-500' : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
