"use client";

import skills from "@/public/data/skills";
import SkillCard from "./SkillCard";
import styles from "./SkillsBoard.module.scss";

export default function SkillsBoard() {
    return (
        <article className={styles.board}>
            {skills.map((skillGroup, skillGroupIndex) => (
                <div key={skillGroupIndex} className={styles.skillsGroup}>
                    <h4>{skillGroup.name}</h4>
                    <div className={styles.skillsList}>
                        {skillGroup.skills.map((skill, skillIndex) => (
                            <SkillCard key={skillIndex} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </article>
    );
}
