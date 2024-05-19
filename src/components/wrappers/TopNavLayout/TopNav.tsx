import { Link } from "react-router-dom";
import { topLvlRoutes } from "../../../constants/routes";
import Wrapper from "../Wrapper";
import styles from "./TopNavLayout.module.scss";

const TopNav = () => {
    return (
        <div className={styles.topNav}>
            <Wrapper>
                <div className={styles.container}>
                    <Link to={topLvlRoutes.main.path}>Arman</Link>
                    <div className={styles.navsContainer}>
                        {Object.values(topLvlRoutes)
                            .filter((topLvlRoute) => !topLvlRoute.hideOnNav)
                            .map((topLvlRoute) => (
                                <Link key={topLvlRoute.path} to={topLvlRoute.path} className={styles.nav}>
                                    {topLvlRoute.name}
                                </Link>
                            ))}
                    </div>
                    <button>ThemeSwitch</button>
                </div>
            </Wrapper>
        </div>
    );
};

export default TopNav;
