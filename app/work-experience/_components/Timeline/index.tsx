import { WorkExpType } from "@/public/types/commonTypes";
import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";

export default function Timeline({ workExps }: { workExps: (WorkExpType & { id: string })[] }) {
    return (
        <ol className={styles.timeline}>
            {workExps.map((workExp) => (
                <li key={workExp.id}>
                    <TimelineItem workExp={workExp} />
                </li>
            ))}
        </ol>
    );
}
