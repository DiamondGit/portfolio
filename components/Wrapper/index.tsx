import classNames from "classnames";
import styles from "./Wrapper.module.scss";

export default function Wrapper({
    children,
    page = false,
    centered = false,
    contentWrapperClassname,
}: {
    children: React.ReactNode;
    page?: boolean;
    centered?: boolean;
    contentWrapperClassname?: string;
}) {
    return (
        <div className={classNames(styles.wrapper, { [styles.centered]: centered, [styles.page]: page })}>
            {!!contentWrapperClassname ? <div className={contentWrapperClassname}>{children}</div> : children}
        </div>
    );
}
