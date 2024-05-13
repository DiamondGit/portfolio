import { useEffect } from "react";
import styles from "./Segmented.module.scss";

export type SegmentedItemType<T> = {
    label: string;
    value: T;
};

const containerBorderRadius = 10;
const containerPadding = 4;
const containerGap = 4;

type SegmentedProps<T> = {
    active: T;
    segments: SegmentedItemType<T>[];
    onChange: (segmentValue: T) => void;
};

const Segmented = <T extends string | number>({ active, segments, onChange }: SegmentedProps<T>) => {
    useEffect(() => {
        if (!segments.some((segment) => segment.value === active)) {
            onChange(segments[0].value);
        }
    }, []);

    const activeSegmentIndex = segments.findIndex((segment) => segment.value === active);
    const segmentWidth = `calc(calc(100% - ${containerPadding * 2 + (segments.length - 1) * containerGap}px) / ${
        segments.length
    })`;

    return (
        <div
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
                    left: `calc(${containerPadding}px + calc(calc(${segmentWidth} + ${containerGap}px) * ${Math.max(
                        0,
                        activeSegmentIndex
                    )}))`,
                    top: `${containerPadding}px`,
                    bottom: `${containerPadding}px`,
                    borderRadius: `${containerBorderRadius - containerPadding}px`,
                }}
            />
        </div>
    );
};

export default Segmented;
