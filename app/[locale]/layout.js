import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NewVersionBanner from "@/components/shared/new-version-banner";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";


export const dynamic = 'force-dynamic'; // 👈 important for dev


export default async function LocaleLayout({ children, params }) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <NextIntlClientProvider lang={locale}>
            <div className="ltr:font-jakarta rtl:font-cairo" dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale}>
                <NewVersionBanner />
                <header className="grid place-items-center border-b border-light-border">
                    <section className="wrapper h-[82px]  flex items-center justify-between">
                        <Link href={"/"}><Image src="/shared/primary-logo.svg" width={310} height={44} alt="hysabat logo, hysabat" /></Link>
                        <nav className="flex items-center gap-x-4">
                            <Link href={"/features"}>Feature</Link>
                            <Link href={"/resources"}>Resources</Link>
                            <Link href={"/pricing"}>Pricing</Link>
                            <Link href={"/contact"}>Contact</Link>
                        </nav>
                        <div className="flex items-center gap-x-2">
                            <span className="!font-cairo font-[700] pr-5 mr-4 border-r-2 border-light-border">عربي</span>
                            {/* <button className="border border-light-border bg-gradient-to-t from-[#F1F2F9] to-white h-12 px-5 rounded-xl"></button>
                            <button className="bg-rich-blue text-white h-12 px-5 rounded-2xl">Start your free trial</button> */}
                            <SecondaryButton text="Get a demo" />
                            <PrimaryButton text="Start your free trial" />
                        </div>
                    </section>
                </header>
                {children}
            </div>
        </NextIntlClientProvider>
    );
}