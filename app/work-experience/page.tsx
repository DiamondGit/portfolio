import Wrapper from "@/components/Wrapper";
import WorkExpModel from "@/models/WorkExpModel";
import { formatRange } from "@/public/utils";

export default async function WorkExpPage() {
    const workExps = await WorkExpModel.find({});

    if (workExps.length === 0)
        return (
            <Wrapper centered>
                <p>No data</p>
            </Wrapper>
        );

    workExps.sort((workExpA, workExpB) => workExpA.startDate.getTime() - workExpB.startDate.getTime());

    return (
        <Wrapper centered>
            <ul>
                {workExps.map((workExp) => (
                    <li key={workExp._id.toString()}>
                        <div>
                            <h3>{workExp.companyName}</h3>
                            <h6>{formatRange(workExp)}</h6>
                            <p>{workExp.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}
