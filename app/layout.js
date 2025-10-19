// app/layout.js
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
});
const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["latin"],
});

export const metadata = {
    title: "Hysabat – Smart Construction ERP System",
    description:
        "Hysabat is an all-in-one construction ERP system designed for contractors and organizations in Saudi Arabia. Manage projects, employees, payroll, and compliance effortlessly in one unified platform.",
    keywords: [
        "Hysabat",
        "construction ERP",
        "ERP system",
        "project management",
        "payroll management",
        "ZATCA phase 2 compliance",
        "contractor software",
        "Saudi Arabia ERP",
        "finance management",
        "employee management",
        "billing system",
        "business automation",
    ],
    metadataBase: new URL("https://jmmtech.net/en"), // replace with your real domain
    openGraph: {
        title: "Hysabat - Smart Construction ERP System",
        description:
            "Manage your construction business smarter with Hysabat. From projects to compliance, all in one ERP platform built for Saudi contractors.",
        url: "https://jmmtech.net/en",
        siteName: "Hysabat",
        images: [
            {
                url: "/erp-features.jpeg", // place in /public
                width: 1200,
                height: 630,
                alt: "Hysabat - Construction ERP Dashboard",
            },
        ],
        locale: "en",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hysabat - Smart Construction ERP System",
        description:
            "All-in-one ERP platform for construction, payroll, and compliance in Saudi Arabia.",
        images: ["/erp-features.jpeg"], // same as OpenGraph
        // creator: "@hysabat", // optional, replace with your handle
    },
    icons: {
        icon: "/hysabat-icon.svg",
        shortcut: "/hysabat-icon.svg",
        apple: "/hysabat-icon.svg",
    },
    manifest: "/site.webmanifest",
    themeColor: "#0096FF", // adjust to your brand palette
};


export default function RootLayout({ children }) {
    return (
        <html>
            <body className={`${jakarta.variable} ${cairo.variable}  antialiased`}>{children}</body>
        </html>
    );
}
