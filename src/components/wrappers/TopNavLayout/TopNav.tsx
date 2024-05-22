import { Link } from "react-router-dom";
import { topLvlRoutes } from "../../../constants/routes";
import Wrapper from "../Wrapper";
import styles from "./TopNavLayout.module.scss";
import { useState } from "react";
import classNames from "classnames";
import OutsideClickHandler from "../OutsideClickHandler";

const TopNav = () => {
    const [isAdaptiveContainerOpen, setAdaptiveContainerOpen] = useState(false);

    function toggleAdaptiveContainerOpen() {
        setAdaptiveContainerOpen((prevValue) => !prevValue);
    }

    function handleAdaptiveContainerClose() {
        setAdaptiveContainerOpen(() => false);
    }

    return (
        <OutsideClickHandler onClick={handleAdaptiveContainerClose}>
            <div className={styles.topNav}>
                <div className={styles.wrapper}>
                    <Wrapper>
                        <div className={styles.container}>
                            <Link to={topLvlRoutes.main.path}>Arman</Link>
                            <button className={styles.toggleButton} onClick={toggleAdaptiveContainerOpen}>
                                =
                            </button>
                            <div
                                className={classNames(styles.adaptiveContainer, { [styles.open]: isAdaptiveContainerOpen })}
                            >
                                <Wrapper removePaddingFromLaptop>
                                    <div className={styles.dropdownContainer}>
                                        <div className={styles.navsContainer}>
                                            {Object.values(topLvlRoutes)
                                                .filter((topLvlRoute) => !topLvlRoute.hideOnNav)
                                                .map((topLvlRoute) => (
                                                    <Link
                                                        key={topLvlRoute.path}
                                                        to={topLvlRoute.path}
                                                        className={styles.nav}
                                                        onClick={handleAdaptiveContainerClose}
                                                    >
                                                        {topLvlRoute.name}
                                                    </Link>
                                                ))}
                                        </div>
                                        <button>ThemeSwitch</button>
                                    </div>
                                </Wrapper>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default TopNav;
