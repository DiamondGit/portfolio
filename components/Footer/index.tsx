import paths from "@/public/paths";
import Link from "next/link";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import styles from "./Footer.module.scss";

const Footer = () => (
    <footer className={styles.footer}>
        <Wrapper contentWrapperClassname={styles.contentWrapper}>
            <Logo />
            <div className={styles.linksContainer}>
                {paths.map((pathItem) => (
                    <Link key={pathItem.path} href={pathItem.path} className={styles.link}>
                        {pathItem.name}
                    </Link>
                ))}
            </div>
        </Wrapper>
    </footer>
);

export default Footer;
