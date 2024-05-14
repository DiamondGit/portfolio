import { useState } from "react";
import Segmented, { SegmentedSegmentsType } from "../../components/Segmented";
import ContentLayout from "../../components/wrappers/ContentLayout";
import styles from "./MainContent.module.scss";
import ThemeSwitch from "../../components/ThemeSwitch";

const segments: SegmentedSegmentsType<number> = [
    { label: "Left", value: 1 },
    { label: "AnotherRight", value: 2 },
    { label: "Last", value: 3 },
];

const Main = () => {
    const [activeSegment, setActiveSegment] = useState(segments[0].value);

    function handleChangeSegment(segmentValue: (typeof segments)[number]["value"]) {
        setActiveSegment(segmentValue);
    }

    return (
        <ContentLayout>
            {/* <div className={styles.welcomePage}>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.image}
                        src="https://images.unsplash.com/photo-1565679871226-33cfa91bedae?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className={styles.textContainer}>
                    <h4>Intro to</h4>
                    <h1>Welcome page</h1>
                </div>
            </div> */}
            <Segmented active={activeSegment} segments={segments} onChange={handleChangeSegment} />
            <ThemeSwitch />
        </ContentLayout>
    );
};

export default Main;
