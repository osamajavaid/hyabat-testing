import Blue from "@/components/wrappers/blue";
import Container from "@/components/wrappers/container";
import WhiteBadge from "@/components/wrappers/white-badge";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <section className="bg-[#F7FBFF]">
            {/* Hero Section */}
            <Container parentclassName='bg-light-blue' childclassName="hero">
                <WhiteBadge>
                    Contact
                </WhiteBadge>
                <h1 className="text-4xl font-semibold text-[#0C1D37]">
                    Contact <Blue>HYSABAT</Blue>
                </h1>
                <p className="text-base">
                    Ready to transform your construction business?<br />
                    We're here to help.
                </p>
            </Container>

            {/* Contact Form + Support Section */}
            <Container parentclassName='bg-gradient-to-t from-light-blue to-white' childclassName="py-32">
                <main className="grid grid-cols-1 md:grid-cols-[1fr_10px_1fr] max-w-[1221px] items-start mx-auto gap-x-32">
                    {/* Left: Contact Form */}
                    <div className="flex flex-col gap-y-16">
                        <div className="text-center flex flex-col gap-y-4">
                            <h2 className="text-4xl font-semibold text-[#0C1D37]">
                                How Can We Help?
                            </h2>
                            <p className="text-gray-text">
                                You can reach us anytime via email at{" "}
                                <a href="mailto:sales@hysabat.com" className="text-rich-blue hover:underline">
                                    sales@hysabat.com
                                </a>
                            </p>
                        </div>

                        <form className="flex flex-col gap-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1 text-gray-700">First name *</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="w-full bg-white rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rich-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 text-gray-700">Last name *</label>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="w-full bg-white rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rich-blue"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full bg-white rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rich-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-700">Phone number</label>
                                <div className="flex">
                                    <select className="border border-gray-300 rounded-l-md px-2 py-2 bg-gray-50 text-gray-text focus:outline-none focus:ring-2 focus:ring-rich-blue">
                                        <option>KSA</option>
                                        <option>UAE</option>
                                        <option>PK</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="+966 (50) 123–4567"
                                        className="w-full rounded-r-md bg-white border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rich-blue"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-1 text-gray-700">Message *</label>
                                <textarea
                                    placeholder="Leave us a message..."
                                    rows="4"
                                    className="w-full bg-white rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rich-blue"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-rich-blue hover:bg-rich-blue/60 cursor-pointer text-white py-3 rounded-md font-medium transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="h-full w-px bg-light-border hidden md:block" />
                    {/* Right: Talk to Support */}
                    <div className="flex flex-col justify-center gap-y-16">
                        <div className="text-center flex flex-col gap-y-4">
                            <h2 className="text-4xl font-semibold">
                                Talk to Support
                            </h2>
                            <p className="text-gray-text">
                                Connect with our Support Team
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col items-center gap-y-3 justify-center border border-light-border max-w-[420px] h-[240px] rounded-xl bg-white p-6 shadow-sm text-center">
                                <Image src={"/contact/svgs/support.svg"} height={42} width={42} alt="hysabat go green" />

                                <div className="">
                                    <h3 className="font-semibold text-gray-800 mb-1">Chat to support</h3>
                                    <p className="text-sm text-gray-500 mb-1">
                                        Our team is always ready to assist you.
                                    </p>
                                </div>
                                <Link href="mailto:sales@hysabat.com" className="text-rich-blue hover:underline">
                                    sales@hysabat.com
                                </Link>
                            </div>

                            <div className="flex flex-col items-center gap-y-3 justify-center border border-light-border max-w-[420px] h-[240px] rounded-xl bg-white p-6 shadow-sm text-center">
                                <Image src={"/contact/svgs/callus.svg"} height={42} width={42} alt="hysabat go green" />
                                <div className="">
                                    <h3 className="font-semibold text-gray-800 mb-1">Call us</h3>
                                    <p className="text-sm text-gray-500 mb-1">Monday to Friday</p>
                                </div>
                                <Link href="tel:+966537513971" className="text-rich-blue hover:underline">
                                    +966 53 751 3971
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </Container>
        </section>
    );
}
