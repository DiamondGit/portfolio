import styles from "./ContentLayout.module.scss";

type ContentLayoutProps = {
    children?: React.ReactNode;
};

const ContentLayout = ({ children }: ContentLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.tracker} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default ContentLayout;
