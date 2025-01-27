"use client";

import paths from "@/public/paths";
import { PathType } from "@/public/types/commonTypes";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Button from "../Button";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import styles from "./Navbar.module.scss";

function LinkItem({ pathItem, withIcon, onClick }: { pathItem: PathType; withIcon: boolean; onClick?: () => void }) {
    const { RelatedIcon } = pathItem;

    function handleClick() {
        onClick?.();
    }

    return (
        <Link className={styles.link} href={pathItem.path} onClick={handleClick}>
            {withIcon && <RelatedIcon className={styles.icon} />}
            {pathItem.name}
        </Link>
    );
}

function Links({ withIcon = false, onClick }: { withIcon?: boolean; onClick?: () => void }) {
    return paths.map((pathItem) => (
        <LinkItem key={pathItem.path} pathItem={pathItem} withIcon={withIcon} onClick={onClick} />
    ));
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
                    <Logo dark />
                    <Links />
                </Wrapper>
            </div>
            <div className={classNames(styles.navbarContent, styles.mobile)}>
                <Wrapper contentWrapperClassname={styles.navsContainer}>
                    <Logo dark />
                    <Button.IconButton displayIcon={FaBars} className={styles.toggleButton} onClick={openSideMenu} />
                </Wrapper>
                <div className={classNames(styles.sideMenu, { [styles.open]: isSideMenuOpen })}>
                    <Wrapper contentWrapperClassname={styles.sideMenuContent}>
                        <div className={styles.topContainer}>
                            <Logo dark onClick={closeSideMenu} />
                            <Button.IconButton
                                displayIcon={FaXmark}
                                className={styles.closeButton}
                                onClick={closeSideMenu}
                            />
                        </div>
                        <Links withIcon onClick={closeSideMenu} />
                    </Wrapper>
                </div>
            </div>
        </nav>
    );
}
