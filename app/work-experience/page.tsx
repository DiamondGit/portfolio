import Wrapper from "@/components/Wrapper";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import WorkExpModel from "@/models/WorkExpModel";
import { formatDateTotalWorkExpDuration } from "@/public/utils";
import Timeline from "./_components/Timeline";

export default async function WorkExpPage() {
    const workExps = await WorkExpModel.find().lean().exec();

    if (workExps.length === 0)
        return (
            <Wrapper centered>
                <p>No data</p>
            </Wrapper>
        );

    workExps.sort((workExpA, workExpB) => workExpA.startDate.getTime() - workExpB.startDate.getTime());

    const workExpsWithId = workExps.map((workExp) => ({ ...workExp, id: workExp._id.toString() }));

    return (
        <PageWrapper>
            <h2>Total work experience: <span>{formatDateTotalWorkExpDuration(workExps)}</span></h2>
            <Timeline workExps={workExpsWithId} />
        </PageWrapper>
    );
}
