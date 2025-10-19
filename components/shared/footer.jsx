import Image from "next/image";
import Container from "../wrappers/container";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Container parentclassName='bg-white text-base' childclassName="py-4">
                <main className="flex items-center justify-between">
                    <section className="flex items-center gap-x-1">
                        <Image src="/shared/hysabat-icon.svg" alt="hysabat WhatsApp contact" height={22} width={22} />
                        <span>All-in-one Cloud Business Management Solution</span>
                    </section>
                    <section>
                        {/* Middle Section */}
                        <div className="flex items-center space-x-6 text-sm md:text-base text-gray-700">
                            <div className="flex items-center space-x-2">
                                <Image src="/shared/phone.svg" alt="hysabat WhatsApp contact" height={22} width={22} />
                                <span>+966 53 751 3971</span>
                            </div>

                            <div className="hidden md:block border-l border-gray-300 h-5"></div>

                            <div className="flex items-center space-x-2">
                                <Image src="/shared/icon.svg" alt="hysabat WhatsApp contact" height={22} width={22} />
                                <span>info@hysabat.com</span>
                            </div>

                            <div className="hidden md:block border-l border-gray-300 h-5"></div>

                            <Link href="#" className="text-rich-blue font-medium">
                                Get The App
                            </Link>
                            {/* Right Section - App Store Buttons */}
                            <div className="flex items-center space-x-3">
                                <Link href={"#"}><Image src="/shared/stores.png" alt="hysabat WhatsApp contact" width={286} height={40} /></Link>
                            </div>
                        </div>

                    </section>
                </main>
            </Container>
            <Container parentclassName='bg-[#001E33]' childclassName="py-10">
                <footer className="text-white">
                    <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-y-2 gap-x-[69px] border-b border-gray-700 pb-10">
                        {/* About */}
                        <div className="">
                            <p className="text-sm leading-relaxed">
                                Hysabat is a cloud-based ERP solution that simplifies sales, finance, accounting, payroll, HR, and POS management.
                            </p>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center border border-light-border w-[338px] rounded-2xl px-4 h-10 space-x-2">
                                    <Image src="/shared/check-verified.svg" alt="hysabat WhatsApp contact" height={24} width={24} />
                                    <span className="text-sm">In Compliance With ZATCA</span>
                                    <Image src="/shared/zatca.svg" alt="hysabat WhatsApp contact" height={36} width={86} />
                                </div>

                                <button className="bg-[#25D366] hover:bg-[#1ebc59] text-white px-6 py-2 rounded-md text-sm font-medium flex items-center space-x-2">
                                    <Image src="/shared/whatsapp.svg" alt="hysabat WhatsApp contact" height={24} width={24} />
                                    <span>WhatsApp</span>
                                </button>
                            </div>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-[100px_140px_140px_180px_110px_66px] justify-around gap-x-12 gap-y-2">
                            {/* Quick Links */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">QUICK LINKS</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">Home</Link></li>
                                    <li><Link href="#" className="hover:text-white">Resources</Link></li>
                                    <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                                    <li><Link href="#" className="hover:text-white">FAQs</Link></li>
                                    <li><Link href="#" className="hover:text-white">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Core Operations */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">CORE OPERATIONS</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">Dashboard</Link></li>
                                    <li><Link href="#" className="hover:text-white">Reports</Link></li>
                                    <li><Link href="#" className="hover:text-white">Branches</Link></li>
                                    <li><Link href="#" className="hover:text-white">Inventory</Link></li>
                                    <li><Link href="#" className="hover:text-white">MRP</Link></li>
                                </ul>
                            </div>

                            {/* Sales & Purchase */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">SALES & PURCHASE</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">Sales</Link></li>
                                    <li><Link href="#" className="hover:text-white">Purchase</Link></li>
                                    <li><Link href="#" className="hover:text-white">Delivery</Link></li>
                                </ul>
                            </div>

                            {/* Finance & Accounting */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">FINANCE & ACCOUNTING</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">Accounts</Link></li>
                                    <li><Link href="#" className="hover:text-white">POS</Link></li>
                                    <li><Link href="#" className="hover:text-white">E-Invoicing</Link></li>
                                </ul>
                            </div>

                            {/* Sales & Purchase */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">People & CRM</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">HRM</Link></li>
                                    <li><Link href="#" className="hover:text-white">CRM</Link></li>
                                </ul>
                            </div>

                            {/* Finance & Accounting */}
                            <div>
                                <h3 className="font-semibold text-white mb-3 text-[13px] uppercase text-nowrap">Legal</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="#" className="hover:text-white">Terms</Link></li>
                                    <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                                    <li><Link href="#" className="hover:text-white">Sitemap</Link></li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            <Link href="#" className="hover:text-white">
                                <Image src="/shared/linkedin.svg" alt="hysabat social links" height={42} width={42} />

                            </Link>
                            <Link href="#" className="hover:text-white">
                                <Image src="/shared/facebook.svg" alt="hysabat social links" height={42} width={42} />

                            </Link>
                            <Link href="#" className="hover:text-white">
                                <Image src="/shared/x.svg" alt="hysabat social links" height={42} width={42} />
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-gray-400 text-center md:text-right">
                            ©2025 <span className="text-white font-semibold px-1"> HYSABAT Solutions</span> All Rights Reserved.
                        </div>

                        {/* Back to top */}
                        <Link
                            href="#top"
                            className="flex items-center gap-x-2 text-sm text-gray-300 hover:text-white"
                        >
                            <span>Back to the top</span>
                            <Image src="/shared/go-blue.svg" alt="back to top - hysabat" height={24} width={24} />
                        </Link>
                    </div>
                </footer>
            </Container>
        </>


    );
}
