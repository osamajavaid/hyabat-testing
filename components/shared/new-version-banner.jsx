import React from 'react'
export default function NewVersionBanner() {
    return (
        <section className="bg-black flex gap-x-1 items-center justify-center h-[60px] font-semibold">
            <span className="bg-gradient-to-r from-[#00FFAF] to-[#00B87E] bg-clip-text text-transparent">
                We've just released our new UI!
            </span>
            <span className="text-white">Check out the <span className="underline">new version</span>.</span>
        </section>
    )
}
