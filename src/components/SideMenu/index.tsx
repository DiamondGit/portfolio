import { useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { LuAlignJustify } from "react-icons/lu";
import classNames from "classnames";
import OutsideClickHandler from "../wrappers/OutsideClickHandler";
import { createPortal } from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type NavItem = {
    title: string;
    path: string;
};

const headerItems: {
    homepage: NavItem;
    sections: NavItem[];
    contact: NavItem;
} = {
    homepage: {
        title: "Домашняя страница",
        path: "/",
    },
    sections: [
        {
            title: "Компоненты",
            path: "/components",
        },
        {
            title: "Логика",
            path: "/logic",
        },
        {
            title: "Страницы",
            path: "/pages",
        },
        {
            title: "Проекты",
            path: "/projects",
        },
    ],
    contact: {
        title: "Контакты",
        path: "/contacts",
    },
};

const Mask = ({ active }: { active: boolean }) => {
    return createPortal(
        <CSSTransition
            in={active}
            timeout={200}
            classNames={{
                enter: styles.maskEnter,
                enterActive: styles.maskEnterActive,
                exit: styles.maskExit,
                exitActive: styles.maskExitActive,
            }}
            unmountOnExit
        >
            <div className={styles.mask} />
        </CSSTransition>,
        document.body
    );
};

const SideMenu = () => {
    const [expanded, setExpended] = useState<boolean>(false);

    function toggleExpand() {
        setExpended((prevValue) => !prevValue);
    }

    function closeSideMenu() {
        setExpended(() => false);
    }

    return (
        <div className={styles.container}>
            <OutsideClickHandler onClick={closeSideMenu}>
                <aside className={classNames(styles.sideMenu, { [styles.expanded]: expanded })}>
                    <button className={styles.expandBtn} onClick={toggleExpand}>
                        <LuAlignJustify />
                    </button>
                </aside>
            </OutsideClickHandler>
            <Mask active={expanded} />
        </div>
    );
};

export default SideMenu;
