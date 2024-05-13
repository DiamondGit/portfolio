import { useEffect, useRef } from "react";
import styles from "./Segmented.module.scss";

type SegmentedItemType<T> = {
    label: string;
    value: T;
};

const containerBorderRadius = 10;
const containerPadding = 4;
const containerGap = 4;

export type SegmentedSegmentsType<T> = SegmentedItemType<T>[];

type SegmentedProps<T> = {
    active: T;
    segments: SegmentedSegmentsType<T>;
    onChange: (segmentValue: T) => void;
};

const Segmented = <T extends string | number>({ active, segments, onChange }: SegmentedProps<T>) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!segments.some((segment) => segment.value === active)) {
            onChange(segments[0].value);
        }
    }, []);

    const activeSegmentIndex = Math.max(
        segments.findIndex((segment) => segment.value === active),
        0
    );
    const segmentWidth = `calc(calc(100% - ${containerPadding * 2 + (segments.length - 1) * containerGap}px) / ${
        segments.length
    })`;

    function handleClickArrow(event: React.KeyboardEvent) {
        switch (event.code) {
            case "ArrowLeft":
                onChange(segments[Math.max(activeSegmentIndex - 1, 0)].value);
                return;
            case "ArrowRight":
                onChange(segments[Math.min(activeSegmentIndex + 1, segments.length - 1)].value);
                return;
            case "Enter":
            case "Escape":
                containerRef.current?.blur();
                return;
        }
    }

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleClickArrow}
            className={styles.container}
            style={{
                gap: `${containerGap}px`,
                padding: `${containerPadding}px`,
                borderRadius: `${containerBorderRadius}px`,
            }}
        >
            {segments.map((segment, segmentIndex) => (
                <div
                    key={`${segmentIndex}_${segment.label}`}
                    onClick={() => onChange(segment.value)}
                    className={styles.segment}
                    style={{
                        borderRadius: `${containerBorderRadius - containerPadding}px`,
                    }}
                >
                    {segment.label}
                </div>
            ))}
            <div
                className={styles.highlight}
                style={{
                    width: segmentWidth,
                    left: `calc(${containerPadding}px + calc(calc(${segmentWidth} + ${containerGap}px) * ${activeSegmentIndex}))`,
                    top: `${containerPadding}px`,
                    bottom: `${containerPadding}px`,
                    borderRadius: `${containerBorderRadius - containerPadding}px`,
                }}
            />
        </div>
    );
};

export default Segmented;
