import { PrimaryButton } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fixRibbon = [
    { src: "/home/svgs/home-fix-ribbon/ntdp.svg", width: 190, height: 42 },
    { src: "/home/svgs/home-fix-ribbon/custom-zakat.svg", width: 147, height: 45 },
    { src: "/home/svgs/home-fix-ribbon/faroora.svg", width: 150, height: 42 },
    { src: "/home/svgs/home-fix-ribbon/ministry.svg", width: 154, height: 42 },
    { src: "/home/svgs/home-fix-ribbon/karaj.svg", width: 92, height: 42 },
    { src: "/home/svgs/home-fix-ribbon/ms.svg", width: 98, height: 42 },
    { src: "/home/svgs/home-fix-ribbon/google.svg", width: 130, height: 44 },
];

const Hero = () => {
    const t = useTranslations("HomePage"); // for non-async functions

    return (
        <main className="bg-light-blue grid place-items-center">
            <div className="wrapper grid grid-cols-2 items-center py-20">
                <section className="flex flex-col gap-y-5 max-w-[605px] ">
                    <div className="flex items-center gap-x-4 bg-white rtl:pl-2.5 rtl:pr-5 ltr:pl-4 ltr:pr-2.5 rounded-full w-[342px] h-[42px] border border-light-border">
                        <div className="grid grid-cols-[10px_1fr] items-center gap-x-3">
                            <span className="bg-rich-green w-3 h-3 rounded-full"></span>
                            <span>{t("zatca-desc")}</span>
                        </div>
                        <Image src="/home/svgs/forward-sm.svg" width={18} height={18} alt="forward hysabat" />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-[64px] font-semibold leading-20">{t("hero-title")}</h1>
                        <p className="text-xl">All-in-one construction ERP that scales with your business.
                            Project management to compliance, all in one platform.</p>
                    </div>
                    <PrimaryButton text={"Start your free trial"} />
                </section>
                <section className="flex items-center gap-x-4">
                    <Image src={"/home/svgs/banner-img1.svg"} width={286} height={539} alt="hysabat dashboard" />
                    <Image src={"/home/svgs/banner-img2.svg"} width={351} height={540} alt="hysabat dashboard" />
                </section>
            </div>

            <div className="wrapper grid place-items-center pb-20">
                <div className="max-w-[1220px] flex items-center flex-wrap xl:flex-nowrap justify-center px-8 bg-white gap-x-6 h-[72px] border-2 border-b-0 border-light-border rounded-full shadow-[0_5px_5px] shadow-green">
                    {fixRibbon?.map((el, index) => (
                        <Image
                            key={index}
                            src={el.src}
                            width={el.width}
                            height={el.height}
                            // layout="responsive"
                            className="bg-contain" alt="hysabat partners" />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Hero;