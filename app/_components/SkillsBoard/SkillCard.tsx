import { SkillType } from "@/public/data/skills";
import styles from "./SkillsBoard.module.scss";

type SkillCardProps = {
    skill: SkillType;
};

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <div className={styles.card} style={{ backgroundColor: skill.color }}>
            <h3 className={styles.title} title={skill.name} style={{ color: skill.textColor }}>
                {skill.name}
            </h3>
        </div>
    );
}
