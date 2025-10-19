import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../ui/button";
import SwitchLocale from "./switch-locale";

const Header = () => {

    return (
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
                    <SwitchLocale />
                    <SecondaryButton text="Get a demo" />
                    <PrimaryButton text="Start your free trial" />
                </div>
            </section>
        </header>
    );
}

export default Header;