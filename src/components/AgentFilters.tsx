import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { Select } from './ui/Select';

interface FilterState {
    serviceType: string;
    insuranceType: string;
    company: string;
    complaintType: string;
}

interface AgentFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    onClose?: () => void; // Optional, only for mobile
    className?: string;
    isMobile?: boolean;
}

const AgentFilters = ({ filters, onFilterChange, onClose, className = "", isMobile = false }: AgentFiltersProps) => {

    const handleClear = () => {
        onFilterChange({
            serviceType: "",
            insuranceType: "",
            company: "",
            complaintType: ""
        });
    };

    const updateFilter = (key: keyof FilterState, value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    return (
        <div className={`bg-white h-full p-6 ${className}`}>
            {(isMobile || onClose) && (
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold font-display text-slate-900">Filters</h2>
                    {onClose && (
                        <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors bg-slate-100 hover:bg-red-50 p-2 rounded-full">
                            <X size={20} />
                        </button>
                    )}
                </div>
            )}

            <div className="space-y-4">
                {/* Service Type */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Service Type</label>
                    <Select
                        placeholder="All Services"
                        value={filters.serviceType}
                        onChange={(val) => updateFilter('serviceType', val)}
                        options={[
                            { value: "all", label: "All Services" },
                            { value: "purchase", label: "Insurance Purchase" },
                            { value: "claim", label: "Claim Assistance" },
                            { value: "audit", label: "Portfolio Audit" }
                        ]}
                    />
                </div>

                {/* Insurance Type */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Insurance Type</label>
                    <Select
                        placeholder="Insurance Type"
                        value={filters.insuranceType}
                        onChange={(val) => updateFilter('insuranceType', val)}
                        options={[
                            { value: "health", label: "Health Insurance" },
                            { value: "life", label: "Life Insurance" },
                            { value: "motor", label: "Motor Insurance" },
                            { value: "sme", label: "SME / Business" }
                        ]}
                    />
                </div>

                {/* Insurance Company */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Insurance Company</label>
                    <Select
                        placeholder="Insurance Company"
                        value={filters.company}
                        onChange={(val) => updateFilter('company', val)}
                        options={[
                            { value: "lic", label: "LIC" },
                            { value: "hdfc", label: "HDFC Ergo" },
                            { value: "star", label: "Star Health" },
                            { value: "icici", label: "ICICI Lombard" },
                            { value: "tata", label: "Tata AIG" }
                        ]}
                    />
                </div>

                {/* Complaint Type */}
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Complaint Type</label>
                    <Select
                        placeholder="Complaint Type"
                        value={filters.complaintType}
                        onChange={(val) => updateFilter('complaintType', val)}
                        options={[
                            { value: "rejection", label: "Claim Rejection" },
                            { value: "delay", label: "Delay in Settlement" },
                            { value: "correction", label: "Policy Correction" },
                            { value: "misselling", label: "Misselling" }
                        ]}
                    />
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
                <Button
                    variant="outline"
                    onClick={handleClear}
                    className="w-full border-primary-600 text-primary-700 hover:bg-primary-50 py-3 text-sm font-semibold rounded-lg"
                >
                    Clear All Filters
                </Button>
            </div>
        </div>
    );
};

export default AgentFilters;
