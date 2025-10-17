import { PrimaryButton } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { getTranslations } from "next-intl/server";

export default function Home() {
    const t = useTranslations("HomePage"); // for non-async functions
    // const t = await getTranslations("HomePage"); // for async functions

    return (
        <main className="bg-light-blue grid place-items-center">
            <div className="wrapper grid grid-cols-2 items-center py-20">
                <section className="flex flex-col gap-y-5 max-w-[605px] ">
                    <div className="flex items-center gap-x-4 bg-white rtl:pl-2.5 rtl:pr-5 ltr:pl-4 ltr:pr-2.5 rounded-full w-[342px] h-[42px] border border-light-border">
                        <div className="grid grid-cols-[10px_1fr] items-center gap-x-3">
                            <span className="bg-rich-green w-3 h-3 rounded-full"></span>
                            <span>ZATCA Phase 2 compliance ready</span>
                        </div>
                        <Image src="/home/svgs/forward-sm.svg" width={18} height={18} alt="forward hysabat" />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-[64px] font-semibold leading-20">Build smarter <br /> with integrated ERP</h1>
                        <p className="text-xl">All-in-one construction ERP that scales with your business.
                            Project management to compliance, all in one platform.</p>
                    </div>
                    <PrimaryButton text={"Start your free trial"} />
                </section>
                <sectio className="flex items-center gap-x-4">
                    <Image src={"/home/images/banner-img1.png"} width={286} height={539} alt="hysabat dashboard" />
                    <Image src={"/home/images/banner-img2.png"} width={351} height={540} alt="hysabat dashboard" />
                </sectio>
            </div>
        </main>
    );
}