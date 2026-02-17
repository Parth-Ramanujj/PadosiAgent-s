
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="mb-6">
                            <Link to="/" className="inline-block">
                                <img
                                    src="/logo.png"
                                    alt="PadosiAgent"
                                    className="h-14 w-auto object-contain bg-white p-1 rounded-md"
                                />
                            </Link>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Empowering local communities with trusted insurance guidance. Connect with verified agents in your neighborhood.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary-600 transition-colors text-white">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-display">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Find Agents', 'Services', 'About Us', 'Contact', 'Faqs'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-400 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-display">Our Services</h3>
                        <ul className="space-y-4">
                            {['Buy Insurance', 'Renew Policy', 'Claim Assistance', 'Portfolio Audit', 'Agent Consultation'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-display">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                                <span>Ahmedabad - 380009<br />Gujarat, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary-500" />
                                <a href="mailto:support@padosiagent.com" className="hover:text-white transition-colors">support@padosiagent.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © 2026 PadosiAgent Servtech Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
