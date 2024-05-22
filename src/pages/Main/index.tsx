import { useState } from "react";
import { SegmentedSegmentsType } from "../../components/Segmented";
import styles from "./MainContent.module.scss";

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
        <div className={styles.container}>
            <p>paragraph</p>
            <button>button</button>
            <a href="/">link</a>
            <div>
                Задача организации, в особенности же дальнейшее развитие различных форм деятельности обеспечивает широкому
                кругу специалистов форм воздействия.
            </div>
            <code>
                some code
            </code>
            <textarea value={"textarea value"} />
            <textarea value={"textarea value"} />
            <textarea value={"textarea value"} />
            <textarea value={"textarea value"} />
            <textarea value={"textarea value"} />
            <textarea value={"textarea value"} />
            <input value={"input value"} />
            <h1>Задача организации, в особенности</h1>
            <h2>Задача организации, в особенности</h2>
            <h3>Задача организации, в особенности</h3>
            <h4>Задача организации, в особенности</h4>
            <h5>Задача организации, в особенности</h5>
            <h6>Задача организации, в особенности</h6>
            <p>Идейные соображения высшего порядка, а также постоянное информационно-пропогандистское обеспечение нашей деятельности позволяет оценить значение соответствующих условий активизации.</p>
        </div>
    );
};

export default Main;
