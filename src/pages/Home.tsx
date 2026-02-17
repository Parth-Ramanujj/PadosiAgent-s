import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Shield, Search, CheckCircle, ArrowRight, UserCheck, FileCheck, HelpCircle, Lock, MapPin, BadgeIndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroSlider from '../components/HeroSlider';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <HeroSlider />

            {/* Core Services Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">Everything You Need</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Complete insurance solutions delivered by trusted local experts.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 overflow-hidden group">
                            <CardContent className="p-8">
                                <div className="bg-primary-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                                    <Shield size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-display">Buy / Port / Renew</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Get the best policies for Health, Life, and Motor insurance with personalized guidance from local experts.
                                </p>
                                <Link to="/find-agents" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                                    Find Insurance Expert <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Service 2 */}
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 overflow-hidden group">
                            <CardContent className="p-8">
                                <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <UserCheck size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-display">Claim Assistance</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Struggling with a claim? Get expert help with filing, follow-ups, settlements, and dispute resolution.
                                </p>
                                <Link to="/find-agents" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                                    Find Claims Expert <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Service 3 */}
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50 overflow-hidden group">
                            <CardContent className="p-8">
                                <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <FileCheck size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-display">Portfolio Audit</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Unsure if you're covered? Get a free policy audit to identify gaps and optimize your coverage.
                                </p>
                                <Link to="/find-agents" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                                    Get Free Audit <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">Why Users Trust PadosiAgent</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">The safest and most reliable way to find your insurance partner.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="bg-white w-20 h-20 mx-auto rounded-full shadow-md flex items-center justify-center mb-4 text-primary-600 group-hover:-translate-y-1 transition-transform">
                                <Lock size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">No Spam</h3>
                            <p className="text-sm text-slate-500">Your privacy protected</p>
                        </div>
                        <div className="text-center group">
                            <div className="bg-white w-20 h-20 mx-auto rounded-full shadow-md flex items-center justify-center mb-4 text-primary-600 group-hover:-translate-y-1 transition-transform">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Data Safe</h3>
                            <p className="text-sm text-slate-500">Encrypted & Secure</p>
                        </div>
                        <div className="text-center group">
                            <div className="bg-white w-20 h-20 mx-auto rounded-full shadow-md flex items-center justify-center mb-4 text-primary-600 group-hover:-translate-y-1 transition-transform">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Nearby</h3>
                            <p className="text-sm text-slate-500">In your neighborhood</p>
                        </div>
                        <div className="text-center group">
                            <div className="bg-white w-20 h-20 mx-auto rounded-full shadow-md flex items-center justify-center mb-4 text-primary-600 group-hover:-translate-y-1 transition-transform">
                                <BadgeIndianRupee size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-2">100% Free</h3>
                            <p className="text-sm text-slate-500">No charges for you</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Simple Steps */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">Find My PadosiAgent <br />in 4 Simple Steps</h2>
                            <p className="text-lg text-slate-600 mb-8">From search to service — it takes just minutes for you.</p>

                            <div className="space-y-6">
                                {[
                                    { icon: Search, title: 'Search', desc: 'Find verified agents nearby' },
                                    { icon: CheckCircle, title: 'Compare', desc: 'Review ratings & expertise' },
                                    { icon: UserCheck, title: 'Connect', desc: 'Call or WhatsApp directly' },
                                    { icon: HelpCircle, title: 'Assist Me', desc: 'Get personalized service' }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                        <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                                            <step.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                                            <p className="text-slate-500">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary-200/50 rounded-full blur-3xl opacity-50"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Insurance Agent helping client"
                                    className="relative rounded-2xl shadow-2xl z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-600 text-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to find your partner?</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of satisfied users who trust PadosiAgent for their insurance needs.
                    </p>
                    <Link to="/find-agents">
                        <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg font-bold">
                            Find My PadosiAgent Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
