import Wrapper from ".";
import styles from "./Wrapper.module.scss";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    return <Wrapper contentWrapperClassname={styles.pageWrapper}>{children}</Wrapper>;
}
