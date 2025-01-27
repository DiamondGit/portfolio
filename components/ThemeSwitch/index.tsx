"use client";

import { ThemeEnum } from "@/public/enums";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./ThemeSwitch.module.scss";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    function toggleTheme() {
        if (!mounted) return;
        setTheme(resolvedTheme === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark);
    }

    return (
        <div className={styles.switch} onClick={toggleTheme}>
            {mounted &&
                (resolvedTheme === ThemeEnum.light ? (
                    <FaSun className={classNames(styles.icon)} />
                ) : (
                    <FaMoon className={classNames(styles.icon)} />
                ))}
        </div>
    );
}
