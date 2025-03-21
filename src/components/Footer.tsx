"use client";
import React from 'react';
import { FooterSection } from './FooterSection';
import { SocialIcons } from './SocialIcons';

export const Footer: React.FC = () => {
    const infoLinks = [
        { text: 'About us', href: '#' },
        { text: 'Concepts', href: '#' },
        { text: 'FAQs', href: '#' },
        { text: 'Work with us', href: '#' }
    ];

    const devLinks = [
        { text: 'Utopia Map', href: '#' },
        { text: 'Utopia UI', href: '#' },
        { text: 'Utopia Game', href: '#' }
    ];

    const legalLinks = [
        { text: 'Terms of use', href: '#' },
        { text: 'Privacy policy', href: '#' },
        { text: 'Accessibility', href: '#' },
        { text: 'GPL-3.0 Licence', href: '#' }
    ];

    return (
        <footer className="flex flex-col gap-2.5 justify-center items-center px-0 pt-24 pb-8 bg-emerald-600 rounded-none">
            <div className="flex flex-col gap-8 items-center px-28 py-0 w-full max-w-[1200px] max-md:px-12 max-md:py-0 max-sm:px-6 max-sm:py-0">
                <section className="flex flex-col items-center w-full text-center">
                    <h1 className="mb-1 text-base font-bold leading-6 text-white">
                        UTOPIA
                    </h1>
                    <p className="text-base leading-7 text-white">
                        Online connections, real-world impact. Welcome to collaborative maps
                        for a more connected world.
                    </p>
                </section>

                <nav className="flex gap-8 justify-between mt-8 w-full max-md:flex-wrap max-md:gap-12 max-sm:flex-col max-sm:gap-8">
                    <FooterSection title="INFO" links={infoLinks} />
                    <FooterSection title="FOR DEVS" links={devLinks} />
                    <FooterSection title="LEGAL" links={legalLinks} />
                </nav>

                <hr className="mx-0 my-8 w-full h-px bg-white border-0" />

                <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:gap-6 max-sm:items-center">
                    <SocialIcons />
                    <p className="text-sm leading-5 text-white">Copyright © 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
