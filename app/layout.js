// app/layout.js
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    variable: "--font-jakarta",
    subsets: ["latin"],
});
const cairo = Cairo({
    variable: "--font-cairo",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={`${jakarta.variable} ${cairo.variable}  antialiased`}>{children}</body>
        </html>
    );
}
