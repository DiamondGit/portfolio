import styles from "./PageSection.module.scss";

type PageSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function PageSection({ title, children }: PageSectionProps) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div>{children}</div>
        </section>
    );
}
