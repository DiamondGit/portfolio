import classNames from "classnames";
import { useState } from "react";
import styles from "./ThemeSwitch.module.scss";

const ThemeIcon = ({ isLightMode }: { isLightMode: boolean }) => {
    return (
        <div className={classNames(styles.icon, { [styles.lightMode]: isLightMode })}>
            {[...Array(8)].map((_, index) => (
                <div key={`light_${index}`} className={styles.lightItem}>
                    <div className={styles.wrapper} />
                </div>
            ))}
        </div>
    );
};

type ThemeSwitchProps = {
    // sideMenuExpanded: boolean;
};

const ThemeSwitch = ({  }: ThemeSwitchProps) => {
    const [isLightMode, setLightMode] = useState(true);

    function switchToLightMode() {
        setLightMode(true);
    }

    function switchToDarkMode() {
        setLightMode(false);
    }

    function toggleTheme() {
        setLightMode((prevValue) => !prevValue);
    }

    return (
        <div className={styles.container} onClick={toggleTheme}>
            <div className={classNames(styles.themeItem, { [styles.light]: isLightMode })} onClick={switchToLightMode}>
                <ThemeIcon isLightMode={isLightMode} />
            </div>
            <div className={classNames(styles.themeItem, { [styles.dark]: !isLightMode })} onClick={switchToDarkMode}>
                <ThemeIcon isLightMode={isLightMode} />
            </div>
            <div className={styles.highlight} />
        </div>
    );
};

export default ThemeSwitch;
