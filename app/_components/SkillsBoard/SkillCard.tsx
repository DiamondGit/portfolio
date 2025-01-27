import { SkillType } from "@/public/data/skills";
import classNames from "classnames";
import { Source_Code_Pro as MonoFont } from "next/font/google";
import styles from "./SkillsBoard.module.scss";

type SkillCardProps = {
    skill: SkillType;
};

const monoFont = MonoFont({ weight: "600" });

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <div className={classNames(styles.card, monoFont.className)} style={{ backgroundColor: skill.color }}>
            <h6 className={styles.title} title={skill.name} style={{ color: skill.textColor }}>
                {skill.name}
            </h6>
        </div>
    );
}
