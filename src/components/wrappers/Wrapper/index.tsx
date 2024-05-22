import classNames from "classnames";
import styles from "./Wrapper.module.scss";

const Wrapper = ({
    removePaddingFromLaptop = false,
    children,
}: {
    removePaddingFromLaptop?: boolean;
    children?: React.ReactNode;
}) => {
    return (
        <div className={classNames(styles.wrapper, { [styles.removePaddingFromLaptop]: removePaddingFromLaptop })}>
            {children}
        </div>
    );
};

export default Wrapper;
