// components/FAQSection.jsx
'use client';

import RenderVideo from '@/components/shared/render-video';
import { PrimaryButton } from '@/components/ui/button';
import Blue from '@/components/wrappers/blue';
import Container from '@/components/wrappers/container';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "What is Hysabat Solutions?",
            answer: "Hysabat is a cloud-based accounting and ERP software designed to simplify financial management, inventory tracking, invoicing, and business operations for SMEs in the MENA region. It is user-friendly, compliant with local tax regulations, and customizable to your business needs."
        },
        {
            question: "Who can use Hysabat?",
            answer: "Hysabat is designed for Small and Medium Enterprises (SMEs) in the MENA region. Whether you're in retail, manufacturing, services, or any other industry, Hysabat can streamline your business operations and financial management."
        },
        {
            question: "Is Hysabat available in Arabic?",
            answer: "Yes, Hysabat is fully available in Arabic with a user interface specifically designed for the MENA region. We also offer multilingual support to cater to diverse business needs."
        },
        {
            question: "How do I start using Hysabat?",
            answer: "Getting started with Hysabat is simple! You can sign up for a free trial on our website, and our team will guide you through the setup process. We also offer personalized onboarding sessions to ensure you make the most of our platform."
        },
        {
            question: "Can I migrate my data from another software?",
            answer: "Absolutely! We provide seamless data migration services from various accounting and ERP systems. Our technical team will assist you in transferring your existing data securely to Hysabat with minimal disruption to your operations."
        }
    ];

    return (
        <Container parentclassName='bg-gradient-to-t from-light-blue to-white' childclassName="py-32">
            <div className="">
                {/* Header */}
                <section className="text-center mb-12">
                    <h1 className="text-[42px] font-semibold">
                        <Blue>Frequently</Blue> asked questions
                    </h1>
                    <p className="text-xl text-gray-text font-light">
                        <strong>Got questions? We have answers</strong>
                    </p>
                </section>

                {/* FAQ Items */}
                <section className="space-y-6 max-w-[786px] mx-auto">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="cursor-pointer w-full px-6 pb-5 text-left flex justify-between items-center duration-200"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg font-semibold pr-4">
                                    {item.question}
                                </h3>
                                <Image src={openIndex === index ? "/home/svgs/minus.svg" : "/home/svgs/plus.svg"} width={20} height={20} alt='hysabat frequently asked questions' />
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 
                                ${openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}
                                ${faqItems.length - 1 !== index && 'border-b border-[#E9EAEB]'}
                                
                                `}
                            >
                                <p className="text-gray-text leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* FAQ card */}
                <section className='relative z-0 max-w-[1216px] max-h-[306px] overflow-hidden rounded-2xl mx-auto'>
                    <RenderVideo
                        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                        video="/shared/videos/cta.mp4"
                    />

                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001e33]/60 via-[#001e33] to-[#001e33]/60" />
                    <div className="relative z-20 text-white p-8">
                        <div className="flex flex-col items-center justify-center gap-y-5 text-center">
                            <Image src={"/home/images/support-team.png"} width={120} height={56} alt='hysabat support team' />
                            <div className="space-y-1">
                                <h1 className='text-[28px] font-semibold'>Still have questions?</h1>
                                <span className='text-lg font-light'>Didn't find the answer to your question?
                                    Contact support team</span>
                            </div>

                            <PrimaryButton text="See More FAQ’s" />

                        </div>
                    </div>
                </section>

            </div>
        </Container>
    );
}

{/* <Image src={openIndex === index ? "/home/svgs/minus.svg" : "/home/svgs/plus.svg"} width={20} height={20} alt='hysabat frequently asked questions' /> */ }
