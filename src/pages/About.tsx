
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Users, Target, Heart, Award } from 'lucide-react';

import PageHero from '../components/PageHero';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navigation />
            <PageHero
                title="Restoring Trust in Insurance"
                description="PadosiAgent was born in Ahmedabad from a simple idea: insurance is better when it's personal."
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 md:px-6 py-12">
                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
                    <Badge variant="secondary" className="mb-4">Our Story</Badge>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We connect you with verified local experts who aren't just salespeople, but trusted community members committed to your financial security.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { label: "Community Agents", value: "500+", icon: Users },
                        { label: "Families Protected", value: "10,000+", icon: Heart },
                        { label: "Cities Active", value: "20+", icon: Target },
                        { label: "Client Satisfaction", value: "98%", icon: Award },
                    ].map((stat, i) => (
                        <Card key={i} className="text-center hover:shadow-lg transition-shadow border-slate-100">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-bold font-display text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mission */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team working together"
                                className="rounded-2xl shadow-xl w-full object-cover h-64 md:h-96"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Our Mission</h2>
                            <div className="space-y-6">
                                {[
                                    "To simplify insurance for every Indian family through trusted local advice.",
                                    "To empower thousands of insurance agents with digital tools and credibility.",
                                    "To ensure 100% claim settlement support for our community members."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-1">
                                            <span className="text-primary-600 font-bold">{i + 1}</span>
                                        </div>
                                        <p className="text-slate-700 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Leadership Team</h2>
                    <p className="text-slate-600">Guided by industry veterans committed to change.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Arun Sharma", role: "CEO & Co-Founder", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Neha Gupta", role: "CTO & Co-Founder", img: "https://images.unsplash.com/photo-1573496359-09a6d90108db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                        { name: "Rahul Verma", role: "Head of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                    ].map((member, i) => (
                        <div key={i} className="group">
                            <div className="relative overflow-hidden rounded-2xl mb-4">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <div className="text-white">
                                        <div className="font-bold text-lg">{member.name}</div>
                                        <div className="text-sm opacity-90">{member.role}</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-display text-slate-900 text-center group-hover:text-primary-600 transition-colors">{member.name}</h3>
                            <p className="text-slate-500 text-center">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
