"use client";

import Wrapper from "@/components/Wrapper";

export default function Error({ error }: { error: Error }) {
    return (
        <Wrapper centered>
            <h1>Oops... Error...</h1>
            <p>{error.message}</p>
            <button onClick={() => window.location.reload()}>Try again</button>
        </Wrapper>
    );
}
