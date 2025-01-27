"use client";

import LinkButton from "@/components/LinkButton";
import Wrapper from "@/components/Wrapper";
import { pathDict } from "@/public/paths";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <Wrapper centered>
            <h1>404 :(</h1>
            <p>
                Page <strong>{pathname}</strong> does not found.
            </p>
            <LinkButton href={pathDict.home.path}>Back to home</LinkButton>
        </Wrapper>
    );
}
