import SideMenu from "../../SideMenu";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
            <SideMenu />
        </div>
    );
};

export default PageLayout;
