import Link from "next/link";
import Wrapper from "../Wrapper";
import styles from "./Navbar.module.scss";

const Navbar = () => (
    <nav className={styles.navbar}>
        <Wrapper contentWrapperClassname={styles.navsContainer}>
            <Link href="/">Home</Link>
            <Link href="/work-experience">Work experience</Link>
            <Link href="/components">Components</Link>
            <Link href="/contacts">Contacts</Link>
        </Wrapper>
    </nav>
);

export default Navbar;
