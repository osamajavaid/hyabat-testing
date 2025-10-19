import Marquee from "react-fast-marquee";

const ribbon = [
    { src: "/home/svgs/home-ribbon/buildings.svg" },
    { src: "/home/svgs/home-ribbon/elegant.svg" },
    { src: "/home/svgs/home-ribbon/first-target.svg" },
    { src: "/home/svgs/home-ribbon/golden.svg" },
    { src: "/home/svgs/home-ribbon/sgc.svg" },
    { src: "/home/svgs/home-ribbon/sharka-khal.svg" },
    { src: "/home/svgs/home-ribbon/sharkat.svg" },
];

const TrustedContractors = () => {
    return (
        <main className="bg-gradient-to-b from-light-blue via-light-blue to-white bg-light-blue grid place-items-center pb-20">
            <div className="wrapper grid place-items-center gap-y-10">
                <p className="text-lg font-semibold">Trusted by Leading Contractors and Authorities in Saudi Arabia</p>
                <div className="bg--500 flex gap-x-12">
                    <Marquee
                        autoFill
                        loop={0}
                        gradient
                        gradientColor="#E5F4FF"
                        className="w-full"
                        style={{ width: "100%", gap: "40px" }}
                    >
                        <div className="flex items-center gap-x-12 px-8">
                            {ribbon.map((el, index) => (
                                <img
                                    key={index}
                                    src={el.src}
                                    alt="hysabat contractors"
                                    className="filter grayscale max-h-[72px w-auto]"
                                />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </main>
    );
}

export default TrustedContractors;