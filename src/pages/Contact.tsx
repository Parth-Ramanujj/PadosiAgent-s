
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import PageHero from '../components/PageHero';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Navigation />
            <PageHero
                title="Get in Touch"
                description="Have questions? We're here to help you finding the right coverage."
                image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop"
            />
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Content */}

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { icon: Phone, title: "Call Us", content: "+91 98765 43210", sub: "Mon-Sat, 9am - 7pm" },
                            { icon: Mail, title: "Email Us", content: "support@padosiagent.com", sub: "24/7 Response" },
                            { icon: MapPin, title: "Visit Us", content: "Ahmedabad, Gujarat", sub: "View on Map" }
                        ].map((item, i) => (
                            <Card key={i} className="text-center border-none shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <div className="text-primary-600 font-medium mb-1">{item.content}</div>
                                    <div className="text-xs text-slate-500">{item.sub}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8 md:p-12">
                            <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[150px]" placeholder="How can we help you today?"></textarea>
                                </div>

                                <Button className="w-full h-12 text-lg bg-primary-600 hover:bg-primary-700">
                                    <Send size={18} className="mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
