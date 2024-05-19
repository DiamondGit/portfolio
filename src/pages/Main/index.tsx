import { useState } from "react";
import Segmented, { SegmentedSegmentsType } from "../../components/Segmented";

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

    return <Segmented active={activeSegment} segments={segments} onChange={handleChangeSegment} />;
};

export default Main;
