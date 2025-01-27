"use client";

import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";

export default function Error({ error }: { error: Error }) {
    return (
        <Wrapper centered>
            <h1>Oops... Error...</h1>
            <p>{error.message}</p>
            <Button onClick={() => window.location.reload()}>Try again</Button>
        </Wrapper>
    );
}
