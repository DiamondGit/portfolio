import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import classNames from "classnames";
import type { Metadata } from "next";
import { Lexend as GeneralFont } from "next/font/google";
import "./globals.scss";
import styles from "./Layout.module.scss";

const generalFont = GeneralFont({
    weight: "400",
});

export const metadata: Metadata = {
    title: "Arman's Portfolio",
    description: "Created By Arman",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={classNames(styles.layout, generalFont.className)}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
