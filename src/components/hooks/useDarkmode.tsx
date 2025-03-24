import { useEffect, useState } from "react";

export const useDarkMode = () => {
    // Prüfe den initialen Browser-Setting für Dark Mode
    const getPrefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [isDarkMode, setIsDarkMode] = useState<boolean>(getPrefersDark());

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            setIsDarkMode(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isDarkMode;
};
