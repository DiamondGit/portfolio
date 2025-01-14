import Wrapper from "@/components/Wrapper";
import { FaGithub } from "react-icons/fa";
import PageSection from "../components/PageSection";
import SkillsBoard from "./_components/SkillsBoard";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.page}>
            <Wrapper contentWrapperClassname={styles.sectionsContainer}>
                <div className={styles.headingContainer}>
                    <h1>Welcome to My Portfolio</h1>
                    <a href="https://github.com/DiamondGit/portfolio" className={styles.iconLink} target="_blank">
                        <FaGithub className={styles.icon} />
                        <span className={styles.title}>Open in GitHub</span>
                    </a>
                </div>
                <PageSection title="Explore my skills">
                    <SkillsBoard />
                </PageSection>
                <PageSection title="Explore my skills">
                    <SkillsBoard />
                </PageSection>
                <PageSection title="Explore my skills">
                    <SkillsBoard />
                </PageSection>
                <PageSection title="Explore my skills">
                    <SkillsBoard />
                </PageSection>
                <PageSection title="Explore my skills">
                    <SkillsBoard />
                </PageSection>
            </Wrapper>
        </div>
    );
}
