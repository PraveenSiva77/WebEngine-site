import { useState } from 'react';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const capabilities = [
        { name: 'Frontend Development', href: '#' },
        { name: 'Backend Development', href: '#' },
        { name: 'CMS Implementation', href: '#' },
        { name: 'Systems Integrations', href: '#' },
        { name: 'Design', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'CRO', href: '#' },
        { name: 'SEO', href: '#' }
    ];

    const solutions = [
        { name: 'Website Redesigns', href: '#' },
        { name: 'Website Migrations', href: '#' },
        { name: 'Website Product Teams', href: '#' },
        { name: 'Performance Optimization', href: '#' }
    ];

    const company = [
        { name: 'About', href: '#' },
        { name: 'Why WebEngine?', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-0">
                        <div className="relative">
                            <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden">
                                {/* Engine gear icon */}
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-white">WebEngine</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Capabilities Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => handleDropdownToggle('capabilities')}
                                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center gap-1 py-2"
                            >
                                Capabilities
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeDropdown === 'capabilities' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                                    {capabilities.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => handleDropdownToggle('solutions')}
                                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center gap-1 py-2"
                            >
                                Solutions
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeDropdown === 'solutions' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                                    {solutions.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Client Stories - Simple Link */}
                        <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 py-2">
                            Client Stories
                        </a>

                        {/* Blog - Simple Link */}
                        <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 py-2">
                            Blog
                        </a>

                        {/* Company Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => handleDropdownToggle('company')}
                                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center gap-1 py-2"
                            >
                                Company
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {activeDropdown === 'company' && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                                    {company.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 flex items-center gap-2">
                            Book intro call
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Click outside to close dropdowns */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                ></div>
            )}
        </nav>
    );
}
