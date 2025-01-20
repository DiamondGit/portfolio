import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { connectToMongoDB } from "@/config/db";
import classNames from "classnames";
import type { Metadata } from "next";
import { Lexend as GeneralFont } from "next/font/google";
import "./global.css";
import "./global.scss";
import styles from "./Layout.module.scss";
import Providers from "./providers";

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
    connectToMongoDB();
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={classNames(styles.layout, generalFont.className)}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
