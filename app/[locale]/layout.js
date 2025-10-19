import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NewVersionBanner from "@/components/shared/new-version-banner";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


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
                <Header />
                {children}
                <Footer />
            </div>
        </NextIntlClientProvider>
    );
}