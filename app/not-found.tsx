"use client";

import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Home.module.scss";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <Wrapper contentWrapperClassname={styles.notFoundPage}>
            <h1 className={styles.title}>404 :(</h1>
            <p className={styles.subtitle}>
                Page <strong>{pathname}</strong> not found. <Link href="/">Back to home</Link>
            </p>
        </Wrapper>
    );
}
