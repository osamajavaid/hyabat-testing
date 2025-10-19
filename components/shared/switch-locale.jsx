"use client";

import { usePathname, useRouter } from "next/navigation";

const SwitchLocale = () => {
    const pathname = usePathname();
    const router = useRouter();

    // Get current locale (first path segment)
    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0] === "ar" ? "ar" : "en";

    // Build new pathname with switched locale
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const newPath =
        "/" +
        [newLocale, ...segments.slice(1)].join("/");

    const handleSwitch = () => {
        router.push(newPath);
    };

    return (
        <span
            onClick={handleSwitch}
            className="cursor-pointer !font-cairo font-[700] pr-5 mr-4 border-r-2 border-light-border hover:opacity-80 transition-opacity"
        >
            {currentLocale === "en" ? "عربي" : "English"}
        </span>
    );
};

export default SwitchLocale;
