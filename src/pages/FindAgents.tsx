import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Filter, Search, MapPin, Star, ShieldCheck, Phone, MessageCircle, Repeat, Heart, Briefcase, Award, Clock, ArrowRight } from 'lucide-react';
import AgentFilters from '../components/AgentFilters';
import PageHero from '../components/PageHero';
import Navigation from '../components/Navigation';

// Mock Data
const AGENTS = [
    {
        id: 1,
        name: "Rajesh Kumar",
        location: "Satellite, Ahmedabad",
        rating: 4.9,
        reviews: 120,
        specialties: ["Life", "Term"],
        otherTags: ["Fire"],
        experience: "15 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
        verified: true,
        matchPercentage: 98,
        claims: 312,
        settledAmount: "₹6.5 Cr",
        responseTime: "Fast"
    },
    {
        id: 2,
        name: "Priya Patel",
        location: "Vastrapur, Ahmedabad",
        rating: 4.8,
        reviews: 89,
        specialties: ["Health", "Family"],
        otherTags: ["Travel"],
        experience: "8 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        verified: true,
        matchPercentage: 95,
        claims: 156,
        settledAmount: "₹3.2 Cr",
        responseTime: "V. Fast"
    },
    {
        id: 3,
        name: "Amit Shah",
        location: "Navrangpura, Ahmedabad",
        rating: 4.6,
        reviews: 56,
        specialties: ["Motor", "General"],
        otherTags: ["Vehicle"],
        experience: "12 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
        verified: false,
        matchPercentage: 88,
        claims: 98,
        settledAmount: "₹1.8 Cr",
        responseTime: "Avg"
    },
    {
        id: 4,
        name: "Sneha Gupta",
        location: "Bopal, Ahmedabad",
        rating: 4.9,
        reviews: 210,
        specialties: ["Investment", "Retirement"],
        otherTags: ["Pension"],
        experience: "10 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
        verified: true,
        matchPercentage: 92,
        claims: 410,
        settledAmount: "₹8.9 Cr",
        responseTime: "Fast"
    },
    {
        id: 5,
        name: "Vikram Singh",
        location: "Thaltej, Ahmedabad",
        rating: 4.7,
        reviews: 145,
        specialties: ["Life", "Health"],
        otherTags: ["Corporate"],
        experience: "14 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
        verified: true,
        matchPercentage: 90,
        claims: 250,
        settledAmount: "₹5.1 Cr",
        responseTime: "Fast"
    },
    {
        id: 6,
        name: "Anjali Mehta",
        location: "Maninagar, Ahmedabad",
        rating: 4.8,
        reviews: 95,
        specialties: ["Travel", "General"],
        otherTags: ["Student"],
        experience: "6 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
        verified: true,
        matchPercentage: 89,
        claims: 120,
        settledAmount: "₹2.5 Cr",
        responseTime: "V. Fast"
    },
    {
        id: 7,
        name: "Rahul Verma",
        location: "Gota, Ahmedabad",
        rating: 4.5,
        reviews: 42,
        specialties: ["Vehicle", "Motor"],
        otherTags: ["Bike"],
        experience: "5 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
        verified: false,
        matchPercentage: 85,
        claims: 80,
        settledAmount: "₹1.2 Cr",
        responseTime: "Avg"
    },
    {
        id: 8,
        name: "Neha Reddy",
        location: "Bodakdev, Ahmedabad",
        rating: 5.0,
        reviews: 180,
        specialties: ["Retirement", "Investment"],
        otherTags: ["Wealth"],
        experience: "18 yrs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
        verified: true,
        matchPercentage: 97,
        claims: 500,
        settledAmount: "₹12.5 Cr",
        responseTime: "Fast"
    }
];

const FindAgents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(5);
    const [likedAgents, setLikedAgents] = useState<Set<number>>(new Set());
    const [compareAgents, setCompareAgents] = useState<Set<number>>(new Set());

    const toggleLike = (id: number) => {
        setLikedAgents(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const toggleCompare = (id: number) => {
        setCompareAgents(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const [filters, setFilters] = useState({
        serviceType: "",
        insuranceType: "",
        company: "",
        complaintType: ""
    });

    const filteredAgents = AGENTS.filter(agent => {
        const term = searchTerm.toLowerCase();
        // Basic search filtering
        const matchesSearch =
            agent.name.toLowerCase().includes(term) ||
            agent.location.toLowerCase().includes(term) ||
            agent.rating.toString().includes(term) ||
            agent.specialties.some(spec => spec.toLowerCase().includes(term));

        // Add more filter logic here if needed based on the 'filters' state
        // For now, we trust the visual update as requested, but logic can be added:
        // const matchesService = filters.serviceType === "" || ... 

        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Mobile Filter Modal/Drawer */}
            {isFiltersOpen && (
                <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsFiltersOpen(false)} />
                    <div className="relative w-full max-w-xs bg-white h-full shadow-xl animate-in slide-in-from-right">
                        <AgentFilters
                            filters={filters}
                            onFilterChange={setFilters}
                            onClose={() => setIsFiltersOpen(false)}
                            isMobile={true}
                        />
                    </div>
                </div>
            )}

            <Navigation />

            {/* Page Hero */}
            <PageHero
                title="Find Trusted Insurance Agents"
                description="Connect with verified local experts who understand your needs and speak your language."
                image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
            >
                {/* Search Bar in Hero */}
                <div className="max-w-2xl mx-auto relative hidden md:block">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-xl flex items-center transition-all focus-within:ring-4 focus-within:ring-primary-500/20">
                        <Search className="text-slate-400 w-5 h-5 ml-4 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search by name, location, or insurance type..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 px-4 h-12 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <div className="w-px h-8 bg-slate-200 mx-2 shrink-0"></div>

                        <button
                            className="flex items-center gap-2 text-slate-500 hover:text-primary-600 px-3 py-2 rounded-full hover:bg-slate-50 transition-colors mr-1 shrink-0"
                            title="Use current location"
                            onClick={() => {
                                if ("geolocation" in navigator) {
                                    // Simulate getting location
                                    navigator.geolocation.getCurrentPosition(
                                        () => setSearchTerm("Ahmedabad"),
                                        () => alert("Location access denied or unavailable.")
                                    );
                                }
                            }}
                        >
                            <MapPin size={18} />
                            <span className="text-sm font-medium hidden sm:inline">Near Me</span>
                        </button>

                        <button className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-transform hover:scale-105 shadow-md shrink-0" title="Search">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </PageHero>

            <div className="container px-4 md:px-6 mx-auto py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters - Desktop */}
                    <div className="hidden lg:block w-80 shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 sticky top-28 overflow-hidden">
                            <div className="p-4 bg-slate-50 border-b border-slate-100 font-bold text-slate-700">Filters</div>
                            <AgentFilters
                                filters={filters}
                                onFilterChange={setFilters}
                            />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Mobile Header Controls */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <h2 className="text-xl font-bold text-slate-800">{filteredAgents.length} Agents Found</h2>

                            <div className="flex gap-2 w-full md:w-auto md:hidden">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Button variant="outline" onClick={() => setIsFiltersOpen(true)}>
                                    <Filter size={18} />
                                </Button>
                            </div>
                        </div>

                        {/* Results List */}
                        {filteredAgents.length > 0 ? (
                            <div className="flex flex-col gap-4">
                                {filteredAgents.slice(0, visibleCount).map((agent, index) => {
                                    // Cycle through background styles for the left sidebar
                                    const bgStyles = [
                                        "bg-gradient-to-b from-blue-100 to-blue-200",
                                        "bg-gradient-to-b from-purple-100 to-purple-200",
                                        "bg-gradient-to-b from-emerald-100 to-emerald-800"
                                    ];
                                    const sidebarBg = bgStyles[index % bgStyles.length];

                                    const isLiked = likedAgents.has(agent.id);
                                    const isCompared = compareAgents.has(agent.id);

                                    return (
                                        <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group bg-white rounded-xl flex flex-col md:flex-row h-auto">

                                            {/* Left Sidebar - Avatar & Match */}
                                            <div className={`${sidebarBg} w-full md:w-64 shrink-0 flex flex-col items-center justify-center p-6 relative`}>
                                                <div className="bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-full flex items-center gap-1 mb-4 absolute top-4">
                                                    <Star size={12} fill="white" /> {agent.matchPercentage}% Match
                                                </div>

                                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-white mb-4">
                                                    <img
                                                        src={agent.image}
                                                        alt={agent.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => toggleCompare(agent.id)}
                                                        className={`p-3 rounded-full border transition-all duration-200 hover:scale-105 hover:shadow-md ${isCompared
                                                            ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'
                                                            }`}
                                                        title={isCompared ? "Remove Comparison" : "Compare Agent"}
                                                    >
                                                        <Repeat size={20} className={isCompared ? "animate-spin-once" : ""} />
                                                    </button>
                                                    <button
                                                        onClick={() => toggleLike(agent.id)}
                                                        className={`p-3 rounded-full border transition-all duration-200 hover:scale-105 hover:shadow-md ${isLiked
                                                            ? 'bg-red-50 text-red-500 border-red-100 shadow-sm transform scale-105'
                                                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'
                                                            }`}
                                                        title={isLiked ? "Remove from Shortlist" : "Shortlist Agent"}
                                                    >
                                                        <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Right Content - Details */}
                                            <div className="flex-1 p-5 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-lg font-bold text-[#1e40af]">{agent.name}</h3>
                                                            <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 font-normal h-5 px-1.5">
                                                                <ShieldCheck size={10} /> IRDA
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                                                        <MapPin size={14} className="text-slate-400" />
                                                        {agent.location}
                                                    </div>

                                                    {/* Unified Stats & Metrics Row */}
                                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                                        {/* Performance Group */}
                                                        <div className="flex flex-wrap gap-2">
                                                            <div className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 border border-amber-100">
                                                                <Star size={12} fill="currentColor" /> {agent.rating} <span className="text-amber-400 font-normal">({agent.reviews})</span>
                                                            </div>
                                                            <div className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border border-slate-200">
                                                                <Briefcase size={12} /> {agent.experience}
                                                            </div>
                                                            <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border border-emerald-100">
                                                                <Clock size={12} /> {agent.responseTime}
                                                            </div>
                                                        </div>

                                                        {/* Divider - Visible on larger screens */}
                                                        <div className="hidden xl:block w-px h-6 bg-slate-200"></div>

                                                        {/* Business Metrics Group */}
                                                        <div className="flex flex-wrap gap-2">
                                                            <div className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border border-slate-200">
                                                                <Award size={12} className="text-slate-400" />
                                                                <span className="font-bold text-slate-700">{agent.claims}</span> Claims
                                                            </div>
                                                            <div className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 border border-slate-200">
                                                                <Briefcase size={12} className="text-slate-400" />
                                                                <span className="font-bold text-slate-700">{agent.settledAmount}</span> Settled
                                                            </div>
                                                        </div>

                                                        {/* Specialties Group */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {agent.specialties.slice(0, 2).map((spec, i) => (
                                                                <div key={i} className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 flex items-center gap-1">
                                                                    <ShieldCheck size={12} className="text-slate-400" /> {spec}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bottom Row - Tags & Actions */}
                                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2 border-t border-slate-100 pt-4">
                                                    {/* Tags (Fire etc) */}
                                                    <div className="flex gap-2 self-start md:self-auto">
                                                        {agent.otherTags?.map((tag, i) => (
                                                            <Badge key={i} variant="secondary" className="bg-red-100 text-red-500 hover:bg-red-200 border-none font-normal px-3 py-1">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    {/* Main Actions */}
                                                    <div className="grid grid-cols-2 gap-3 w-full md:flex md:w-auto">
                                                        <Button className="flex-1 md:flex-none bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg px-6">
                                                            <Phone size={18} className="mr-2" /> Call
                                                        </Button>
                                                        <Button className="flex-1 md:flex-none bg-[#166534] hover:bg-[#14532d] text-white font-semibold rounded-lg px-6">
                                                            <MessageCircle size={18} className="mr-2" /> Chat
                                                        </Button>
                                                        <Button className="col-span-2 md:col-span-1 md:flex-none bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg px-6 whitespace-nowrap">
                                                            View Profile
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    );
                                })}

                                <div className="flex justify-center gap-4 mt-6">
                                    {visibleCount < filteredAgents.length && (
                                        <Button
                                            onClick={() => setVisibleCount(prev => prev + 5)}
                                            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all hover:shadow-lg"
                                        >
                                            Find More Agents
                                        </Button>
                                    )}

                                    {visibleCount > 5 && (
                                        <Button
                                            onClick={() => setVisibleCount(5)}
                                            variant="outline"
                                            className="font-semibold py-3 px-8 rounded-lg border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm"
                                        >
                                            Show Less
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">No Agents Found</h3>
                                <p className="text-slate-500 mb-6">Try adjusting your filters to find more agents in your area.</p>
                                <Button
                                    className="bg-[#166534] hover:bg-[#14532d] text-white"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setFilters({
                                            serviceType: "",
                                            insuranceType: "",
                                            company: "",
                                            complaintType: ""
                                        });
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindAgents;
