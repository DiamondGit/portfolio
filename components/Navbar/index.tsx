"use client";

import paths from "@/public/paths";
import { PathType } from "@/public/types/commonTypes";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button";
import Wrapper from "../Wrapper";
import styles from "./Navbar.module.scss";

function LinkItem({ pathItem, withIcon }: { pathItem: PathType; withIcon: boolean }) {
    const { RelatedIcon } = pathItem;
    return (
        <Link className={styles.link} href={pathItem.path}>
            {withIcon && <RelatedIcon className={styles.icon} />}
            {pathItem.name}
        </Link>
    );
}

function Links({ withIcon = false }: { withIcon?: boolean }) {
    return paths.map((pathItem) => <LinkItem key={pathItem.path} pathItem={pathItem} withIcon={withIcon} />);
}

export default function Navbar() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    function openSideMenu() {
        setIsSideMenuOpen(true);
    }

    function closeSideMenu() {
        setIsSideMenuOpen(false);
    }

    return (
        <nav className={styles.navbar}>
            <div className={classNames(styles.navbarContent, styles.desktop)}>
                <Wrapper contentWrapperClassname={styles.navsContainer}>
                    <Links />
                </Wrapper>
            </div>
            <div className={classNames(styles.navbarContent, styles.mobile)}>
                <Wrapper contentWrapperClassname={styles.navsContainer}>
                    <span>ARMAN</span>
                    <Button className={styles.toggleButton} onClick={openSideMenu}>
                        <FaBars className={styles.icon} />
                    </Button>
                </Wrapper>
                <div className={classNames(styles.sideMenu, { [styles.open]: isSideMenuOpen })}>
                    <Wrapper contentWrapperClassname={styles.sideMenuContent}>
                        <Button className={styles.closeButton} onClick={closeSideMenu}>
                            <FaXmark className={styles.icon} />
                        </Button>
                        <Links withIcon />
                    </Wrapper>
                </div>
            </div>
        </nav>
    );
}
