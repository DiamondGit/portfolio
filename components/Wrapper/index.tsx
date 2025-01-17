import classNames from "classnames";
import styles from "./Wrapper.module.scss";

export default function Wrapper({
    children,
    centered = false,
    contentWrapperClassname,
}: {
    children: React.ReactNode;
    centered?: boolean;
    contentWrapperClassname?: string;
}) {
    return (
        <div className={classNames(styles.wrapper, { [styles.centered]: centered })}>
            {!!contentWrapperClassname ? <div className={contentWrapperClassname}>{children}</div> : children}
        </div>
    );
}
