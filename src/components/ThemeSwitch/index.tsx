import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {[...Array(8)].map((_, index) => (
                    <div key={`light_${index}`} className={styles.lightItem}>
                        <div className={styles.wrapper} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitch;
