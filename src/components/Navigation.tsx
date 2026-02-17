import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import clsx from 'clsx';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Find Agents', path: '/find-agents' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        // { name: 'FAQs', path: '/faq' }, // Uncomment when FAQ page is created
    ];

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !scrolled;

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                !isTransparent ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={clsx(
                            "transition-all duration-300 rounded-lg p-1",
                            isTransparent && "bg-white/90 backdrop-blur-sm shadow-sm"
                        )}>
                            <img
                                src="/logo.png"
                                alt="PadosiAgent"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "font-medium transition-colors hover:text-primary-500",
                                    location.pathname === link.path
                                        ? "text-primary-500"
                                        : !isTransparent ? "text-slate-600" : "text-slate-100"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2">
                            <User size={18} />
                            Agent Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className={clsx("w-6 h-6", !isTransparent ? "text-slate-900" : "text-white")} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "font-medium py-2 px-4 rounded-lg transition-colors",
                                location.pathname === link.path
                                    ? "bg-primary-50 text-primary-600"
                                    : "text-slate-600 hover:bg-slate-50"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-slate-100 my-2" />
                    <button className="bg-primary-600 text-white py-3 rounded-lg font-medium w-full flex items-center justify-center gap-2">
                        <User size={18} />
                        Agent Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
