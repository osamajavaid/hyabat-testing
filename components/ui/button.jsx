import Link from "next/link"

export function PrimaryButton({ text, href = "#", className = "" }) {
    return (
        <Link href={href} className="grid place-items-center bg-rich-blue cursor-pointer text-white h-12 px-5 rounded-2xl w-fit">{text}</Link>

    )
}
export function SecondaryButton({ text, href = "#" }) {
    return (
        <Link href={href} className="grid place-items-center border border-light-border bg-gradient-to-t from-[#F1F2F9] w-fit to-white h-12 px-5 rounded-xl">{text}</Link>

    )
}
