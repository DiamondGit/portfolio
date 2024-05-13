import { useState } from "react";
import Segmented from "../../components/Segmented";
import Layout from "../../components/wrappers/ContentLayout";

const segments = [
    { label: "Left", value: "1" },
    { label: "AnotherRight", value: 2 },
    { label: "Last", value: "3" },
];

const MainContent = () => {
    const [activeSegment, setActiveSegment] = useState(segments[0].value);

    function handleChangeSegment(segmentValue: (typeof segments)[number]["value"]) {
        setActiveSegment(segmentValue);
    }

    return (
        <Layout>
            <Segmented active={activeSegment} segments={segments} onChange={handleChangeSegment} />
        </Layout>
    );
};

export default MainContent;
