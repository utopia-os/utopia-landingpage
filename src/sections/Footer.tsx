"use client";
import React from 'react';
import { FooterColumn } from '../components/FooterColumn';
import { SocialIcons } from '../components/SocialIcons';

export const Footer: React.FC = () => {
    const infoLinks = [
        { text: 'About us & Concepts', href: '#' },
        { text: 'Work with us', href: '#' }
    ];

    const devLinks = [
        { text: 'Utopia Map', href: '#' },
        { text: 'Utopia UI', href: '#' },
        { text: 'Utopia Game', href: '#' }
    ];

    const legalLinks = [
        { text: 'Imprint', href: '#' },
        { text: 'Privacy policy', href: '#' },
        { text: 'GPL-3.0 Licence', href: '#' }
    ];

    return (
        <footer className="flex flex-col gap-2.5 justify-center items-center px-0 pt-24 pb-8 bg-emerald-700/90 rounded-[0_0_60px_60px]">
            <div className="flex flex-col gap-8 items-center px-28 py-0 w-full max-w-[1200px] max-md:px-12 max-md:py-0 max-sm:px-6 max-sm:py-0">

                <nav className="flex gap-8 justify-between mt-8 w-full max-md:flex-wrap max-md:gap-12 max-sm:flex-col max-sm:gap-8">
                    <FooterColumn title="INFO" links={infoLinks} />
                    <FooterColumn title="FOR DEVS" links={devLinks} />
                    <FooterColumn title="LEGAL" links={legalLinks} />
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
