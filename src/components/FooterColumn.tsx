import React from "react";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
                                                                title,
                                                                links,
                                                            }) => {
    return (
        <div className="flex flex-col flex-1 gap-2 max-md:flex-[0_0_calc(33.33%_-_32px)] max-sm:items-center max-sm:text-center max-sm:flex-[1_0_auto]">
            <h2 className="mb-1 font-bold text-sm leading-5 text-white text-opacity-80">
                {title}
            </h2>
            <nav>
                <ul className="flex flex-col gap-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-sm leading-5 text-white cursor-pointer hover:underline"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
