import Link from "next/link";

function getPath(path: string): string {
    return `/render/${path}`;
}

export default function Render() {
    return (
        <div>
            <Link href={getPath("csr")}>CSR</Link>
            <Link href={getPath("ssr")}>SSR</Link>
            <Link href={getPath("ssg")}>SSG</Link>
            <Link href={getPath("isr")}>ISR</Link>
        </div>
    );
}
