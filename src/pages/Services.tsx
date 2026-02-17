
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ShieldCheck, HeartPulse, Car, BookOpen, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import Navigation from '../components/Navigation';

const Services = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Navigation />
            <PageHero
                title="Our Services"
                description="From comprehensive protection to expert claim assistance, we've got you covered at every step of your insurance journey."
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center mb-8">
                    {/* Optional: We can keep a small sub-header or just rely on Hero */}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: HeartPulse,
                            title: "Health Insurance",
                            desc: "Comprehensive health coverage for you and your family with cashless hospitalization network.",
                            features: ["Individual & Family Floater", "Senior Citizen Plans", "Critical Illness Cover"],
                            color: "text-red-500 bg-red-50"
                        },
                        {
                            icon: ShieldCheck,
                            title: "Life Insurance",
                            desc: "Secure your family's future with term plans and investment-linked insurance products.",
                            features: ["Term Life Insurance", "Endowment Plans", "Child Education Plans"],
                            color: "text-blue-500 bg-blue-50"
                        },
                        {
                            icon: Car,
                            title: "Motor Insurance",
                            desc: "Protect your vehicle against accidents, theft, and third-party liabilities.",
                            features: ["Car Insurance", "Bike Insurance", "Commercial Vehicle"],
                            color: "text-green-500 bg-green-50"
                        },
                        {
                            icon: FileText,
                            title: "Claim Assistance",
                            desc: "Expert guidance to navigate the complex claims process and ensure settlement.",
                            features: ["Document Verification", "Status Tracking", "Dispute Resolution"],
                            color: "text-purple-500 bg-purple-50"
                        },
                        {
                            icon: BookOpen,
                            title: "Portfolio Audit",
                            desc: "Detailed analysis of your existing policies to identify coverage gaps and optimize costs.",
                            features: ["Risk Assessment", "Overlap Check", "Premium Optimization"],
                            color: "text-orange-500 bg-orange-50"
                        },
                        {
                            icon: Briefcase,
                            title: "SME Insurance",
                            desc: "Tailored insurance solutions for small and medium businesses.",
                            features: ["Shopkeeper Policy", "Workmen Compensation", "Fire & Burglary"],
                            color: "text-teal-500 bg-teal-50"
                        }
                    ].map((service, i) => (
                        <Card key={i} className="hover:shadow-lg transition-all duration-300 border-slate-200">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                                    <service.icon size={24} />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.desc}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center text-sm text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact">
                                    <Button variant="outline" className="w-full border-primary-100 text-primary-600 hover:bg-primary-50">
                                        Get Protected
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold font-display mb-4">Not sure what you need?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Book a free 15-minute consultation with our expert advisors to understand your risk profile.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-primary-600 hover:bg-primary-500 text-white border-0">
                            Schedule Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
