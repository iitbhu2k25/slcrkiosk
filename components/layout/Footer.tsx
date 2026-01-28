'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import LogoLoop from '@/components/ui/LogoLoop';

const partnerLogos = [
    { src: '/footer/iitbhu.avif', alt: 'IIT BHU', href: 'https://iitbhu.ac.in/' },
    { src: '/footer/IIT_Madras_Logo.svg.png', alt: 'IIT Madras', href: 'https://www.iitm.ac.in/' },
    { src: '/footer/iitbombay.avif', alt: 'IIT Bombay', href: 'https://www.iitb.ac.in/' },
    { src: '/footer/iitdelhi.avif', alt: 'IIT Delhi', href: 'https://home.iitd.ac.in/' },
    { src: '/footer/bhu.png', alt: 'BHU', href: 'https://www.bhu.ac.in/' },
    { src: '/footer/aarhus_university.png', alt: 'Aarhus University', href: 'https://www.au.dk/en/' },
    { src: '/footer/copenhagen.png', alt: 'University of Copenhagen', href: 'https://www.ku.dk/english/' },
    { src: '/footer/hokkaido-university-logo-png_seeklogo-508090.png', alt: 'Hokkaido University', href: 'https://www.hokudai.ac.jp/en/' },
    { src: '/footer/university_ofLyon.png', alt: 'University of Lyon', href: 'https://www.universite-lyon.fr/en' },
    { src: '/footer/ganga.jpg', alt: 'NMCG', href: 'https://nmcg.nic.in/' },
    { src: '/footer/cgwb_logo_2.jpg', alt: 'CGWB', href: 'http://cgwb.gov.in/' },
    { src: '/footer/india_wris.png', alt: 'India WRIS', href: 'https://indiawris.gov.in/' },
];

const quickLinks = [
    { label: 'About SLCR', href: '/about/slcr' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/media' },
    { label: 'Contact Us', href: '/contact' },
];

// Important Links
const importantLinks = [
     { label: 'Government of India', href: 'https://www.india.gov.in/' },
    
    { label: 'Ministry of Jal Shakti', href: 'https://jalshakti-dowr.gov.in/' },
    { label: 'NMCG', href: 'https://nmcg.nic.in/' },
    { label: 'Central Pollution Control Board', href: 'https://cpcb.nic.in/' },
    { label: 'Central Ground Water Board', href: 'https://cgwb.gov.in/' },
    { label: 'National Institute of Hydrology', href: 'https://nihroorkee.gov.in/' },
    { label: 'India-WRIS', href: 'https://indiawris.gov.in/' },
    { label: 'NWDA', href: 'https://nwda.gov.in/' },
    { label: 'IMD', href: 'https://mausam.imd.gov.in/' },
    { label: 'IIT-BHU, Varanasi', href: 'https://www.iitbhu.ac.in/' },
    { label: 'Government of UP', href: 'https://up.gov.in/en' },
   
    { label: 'Decision Support System', href: 'https://slcrdss.in/' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {/* Partners Section - Light Background */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-3 sm:px-4">
                    <h3 className="text-center text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8">
                        Our Partners & Associates
                    </h3>
                    <LogoLoop logos={partnerLogos} speed={30} />
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-gradient-to-b from-primary to-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
                    {/* UPDATED GRID: Changed to lg:grid-cols-5 to give extra space for Important Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                        
                        {/* About - Standard Width */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-accent rounded-full" />
                                About SLCR
                            </h4>
                            <p className="text-sm text-white/70 leading-relaxed mb-4">
                                Smart Laboratory on Clean Rivers (SLCR) is a joint initiative between India
                                and Denmark for sustainable river rejuvenation and water management.
                            </p>
                            <div className="flex gap-3 mt-4">
                                <a href="https://www.facebook.com/people/Smart-Lab-On-Clean-Rivers/61577375996615/#" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://x.com/JalTattva" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                                    <Twitter size={18} />
                                </a>
                                <a href="https://www.instagram.com/slcr.iitbhu/" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/slcr-smart-laboratory-on-clean-rivers-b65a4134a/" className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links - Standard Width */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-accent rounded-full" />
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white hover:pl-2 transition-all inline-flex items-center gap-1.5"
                                        >
                                            <span className="text-accent">›</span> {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Links - DOUBLE WIDTH (col-span-2) */}
                        <div className="lg:col-span-2">
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-accent rounded-full" />
                                Important Links
                            </h4>
                            {/* UPDATED LIST: Grid Layout (2 columns) */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                                {importantLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 break-words"
                                        >
                                            {link.label}
                                            <ExternalLink size={10} className="shrink-0" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact - Standard Width */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-accent rounded-full" />
                                Contact Us
                            </h4>
                            <ul className="space-y-3 text-sm text-white/70">
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="shrink-0 mt-0.5 text-accent" />
                                    <span>SLCR, Indian Institute of Technology (BHU), Varanasi - 221005, India</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={18} className="text-accent" />
                                    <a href="mailto:slcr@iitbhu.ac.in" className="hover:text-white transition-colors">
                                        slcr@iitbhu.ac.in
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={18} className="text-accent" />
                                    <a href="tel:+915422368106" className="hover:text-white transition-colors">
                                        +91 542-236-8106
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-primary-dark border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/60">
                        <p>
                            Copyright © {currentYear} <span className="text-white font-medium">SLCR</span> | All Rights Reserved
                        </p>
                        <p>SLCR, Indian Institute of Technology, BHU, Varanasi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}