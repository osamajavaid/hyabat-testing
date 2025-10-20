import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NewVersionBanner from "@/components/shared/new-version-banner";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


// export const dynamic = 'force-dynamic'; // 👈 important for dev


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
    metadataBase: new URL("http://hysabat2.vercel.app/en"), // replace with your real domain
    openGraph: {
        title: "Hysabat - Smart Construction ERP System",
        description:
            "Manage your construction business smarter with Hysabat. From projects to compliance, all in one ERP platform built for Saudi contractors.",
        url: "http://hysabat2.vercel.app/en",
        siteName: "Hysabat",
        images: [
            {
                url: "https://hysabat2.vercel.app/erp-features.jpeg", // place in /public
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
        images: ["https://hysabat2.vercel.app/erp-features.jpeg"], // same as OpenGraph
        // creator: "@hysabat", // optional, replace with your handle
    },
    icons: {
        icon: "https://hysabat2.vercel.app/hysabat-icon.svg",
        shortcut: "/hysabat-icon.svg",
        apple: "/hysabat-icon.svg",
    },
    manifest: "https://hysabat2.vercel.app/site.webmanifest",
    themeColor: "#0096FF", // adjust to your brand palette
};

export default function LocaleLayout({ children, params }) {
    // Ensure that the incoming `locale` is valid
    // const { locale } = await params;
    // if (!hasLocale(routing.locales, locale)) {
    //     notFound();
    // }

    return (
        // <NextIntlClientProvider lang={locale}>
        <div>
            <NewVersionBanner />
            <Header />
            {children}
            <Footer />
        </div>
        // </NextIntlClientProvider>
    );
}