import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function Select({ label, options, value, onChange, placeholder = "Select option", className }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={twMerge("space-y-2", className)} ref={containerRef}>
            {label && <label className="text-sm font-semibold text-slate-900">{label}</label>}
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx(
                        "w-full px-4 py-3 text-left bg-white border rounded-xl flex items-center justify-between transition-all duration-200",
                        "focus:outline-none focus:ring-4 focus:ring-primary-500/10",
                        isOpen
                            ? "border-primary-500 ring-4 ring-primary-500/10 shadow-lg shadow-primary-500/5"
                            : "border-slate-200 hover:border-primary-300 hover:shadow-sm"
                    )}
                >
                    <span className={clsx("block truncate font-medium", !selectedOption ? "text-slate-400" : "text-slate-900")}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <ChevronDown
                        size={18}
                        className={clsx("text-slate-400 transition-transform duration-300", isOpen && "transform rotate-180 text-primary-500")}
                    />
                </button>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden ring-1 ring-black/5">
                        <ul className="max-h-64 overflow-auto py-1 custom-scrollbar">
                            {options.map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onChange(option.value);
                                            setIsOpen(false);
                                        }}
                                        className={clsx(
                                            "w-full px-4 py-2.5 text-left flex items-center justify-between transition-colors group",
                                            option.value === value
                                                ? "bg-primary-50 text-primary-700 font-medium"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        )}
                                    >
                                        <span className="truncate">{option.label}</span>
                                        {option.value === value && (
                                            <Check size={16} className="text-primary-600" />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
