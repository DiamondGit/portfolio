import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import styles from "./LinkButton.module.scss";

export default function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link className={styles.link} href={href}>
            <FaChevronLeft className={styles.icon} />
            {children}
        </Link>
    );
}
