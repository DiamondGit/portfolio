import styles from "./Wrapper.module.scss";

export default function Wrapper({
    contentWrapperClassname,
    children,
}: {
    contentWrapperClassname?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={styles.wrapper}>
            {!!contentWrapperClassname ? <div className={contentWrapperClassname}>{children}</div> : children}
        </div>
    );
}
