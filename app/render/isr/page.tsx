export const revalidate = 10; // Revalidate every 10 seconds

export default function ISR() {
    return (
        <div>
            <h1>Incremental Static Regeneration (ISR)</h1>
            <p>This page is regenerated every 10 seconds if requested.</p>
        </div>
    );
}
