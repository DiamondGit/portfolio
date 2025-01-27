import { WorkExpType } from "@/public/types/commonTypes";
import { formatDateRange, formatDateRangeDiff } from "@/public/utils";
import styles from "./Timeline.module.scss";

export default function TimelineItem({ workExp }: { workExp: WorkExpType }) {
    return (
        <div className={styles.item}>
            <h5 className={styles.range}>
                {formatDateRange(workExp)} ({formatDateRangeDiff(workExp)})
            </h5>
            <h3 className={styles.companyName}>{workExp.companyName}</h3>
            <hr />
            <p>{workExp.description}</p>
        </div>
    );
}
