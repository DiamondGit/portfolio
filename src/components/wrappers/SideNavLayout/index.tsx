import { Outlet } from "react-router-dom";
import SideMenu from "../../SideMenu";
import Wrapper from "../Wrapper";
import styles from "./SideNavLayout.module.scss";

const SideNavLayout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </div>
            <SideMenu />
        </div>
    );
};

export default SideNavLayout;
