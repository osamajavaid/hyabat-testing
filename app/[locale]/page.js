import ErpFeatures from "@/components/pages/home/erp-features";
import FAQSection from "@/components/pages/home/FAQs";
import Hero from "@/components/pages/home/hero";
import Blue from "@/components/wrappers/blue";
import TrustedContractors from "@/components/shared/trusted-contractor";
import { PrimaryButton } from "@/components/ui/button";
import Container from "@/components/wrappers/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
    const t = useTranslations("HomePage"); // for non-async functions
    // console.log("t: ", t("free-trail-button"))
    return (
        <Fragment>
            {/* <Hero /> */}
            <TrustedContractors />
            <Container parentclassName="bg-light-blue" childclassName="py-20 grid place-items-center text-center">
                <div className="grid place-items-center gap-y-1 max-w-[462px] pb-8">
                    <h1 className="text-[42px] font-extrabold">Average Client <Blue>Results</Blue></h1>
                    <p className="text-xl font-medium">Maximize productivity, minimize costs.</p>
                </div>
                {/* <!-- Cards Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mb-12">
                    {/* <!-- Card 1 --> */}
                    <div className="bg-white grid place-items-center rounded-xl gap-y-2.5 shadow-[4px_4px_3px] shadow-green px-6 py-10 border border-light-border ">
                        <div className="flex items-center gap-x-2">
                            <h3 className="text-4xl font-semibold text-rich-blue">75%</h3>
                            <Image src={"/home/svgs/go-green.svg"} height={26} width={24} alt="hysabat go green" />
                        </div>
                        <h4 className="text-[22px] font-semibold">Faster Financial Reports</h4>
                        <p className="w-[340px] text-lg font-medium">Speed up financial reporting with HYSABAT for faster insights.</p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="bg-white grid place-items-center rounded-xl gap-y-2.5 shadow-[4px_4px_3px] shadow-purple p-6 border border-light-border ">
                        <div className="flex items-center gap-x-2">
                            <h3 className="text-4xl font-semibold text-rich-blue">2X</h3>
                            <Image src={"/home/svgs/go-green.svg"} height={26} width={24} alt="hysabat go green" />
                        </div>
                        <h4 className="text-[22px] font-semibold">Increase in Productivity</h4>
                        <p className="w-[340px] text-lg font-medium">Helping businesses double transactions while ensuring accuracy.</p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="bg-white grid place-items-center rounded-xl gap-y-2.5 shadow-[4px_4px_3px] shadow-yellow p-6 border border-light-border">
                        <div className="flex items-center gap-x-2">
                            <h3 className="text-4xl font-semibold text-rich-blue">45%</h3>
                            <Image src={"/home/svgs/go-green.svg"} height={26} width={24} alt="hysabat go green" />
                        </div>
                        <h4 className="text-[22px] font-semibold">Automated Processes</h4>
                        <p className="w-[340px] text-lg font-medium">Streamlined workflows enhance efficiency and reduce manual tasks.</p>
                    </div>
                </div>
            </Container>
            <div className="h-96 bg-black/10"></div>
            <ErpFeatures />
            <FAQSection />

            <Container parentclassName='bg-gradient-to-t from-light-blue to-white' childclassName="py-32">
                <section className="relative overflow-hidden border border-light-border w-full bg-white rounded-2xl py-20 px-10">
                    <main>
                        <Image src={"/shared/logo-with-label.svg"} width={151} height={42} alt="hysabat logo with label" />
                        <section className="max-w-[470px] flex flex-col gap-y-3 pt-4">
                            <h1 className="text-[42px] font-bold">Start Your Journey with <br />
                                <Blue>HYSABAT</Blue> Today</h1>
                            <span className="text-lg font-medium">Join 50+ construction companies in Saudi Arabia that
                                trust Hysabat to manage operations.</span>
                            <PrimaryButton text="Get started. It’s FREE" />
                        </section>
                    </main>
                    <Image className="absolute right-0 bottom-0" src={"/home/svgs/start-your-journey.svg"} width={802} height={300} alt="hysabat logo with label" />
                </section>
            </Container>
        </Fragment>
    );
}