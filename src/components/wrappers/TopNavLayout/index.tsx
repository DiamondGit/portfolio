import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import styles from "./TopNavLayout.module.scss";
import Wrapper from "../Wrapper";

const TopNavLayout = () => {
    return (
        <div className={styles.layout}>
            <TopNav />
            <div className={styles.content}>
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </div>
        </div>
    );
};

export default TopNavLayout;
