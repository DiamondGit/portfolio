import { useEffect, useRef } from "react";
import styles from "./Segmented.module.scss";
import classNames from "classnames";

type SegmentedItemType<T> = {
    label: string;
    value: T;
};

const containerBorderRadius = 10;
const containerPadding = 4;
const containerGap = 16;

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
    }, [active, segments, onChange]);

    const activeSegmentIndex = Math.max(
        segments.findIndex((segment) => segment.value === active),
        0
    );
    const segmentCount = segments.length;
    const segmentWidth = `calc(calc(100% - ${containerPadding * 2 + (segments.length - 1) * containerGap}px) / ${
        segments.length
    })`;
    const separatorLeft = (order: number) =>
        `calc(${containerPadding}px + calc(${segmentWidth} * ${
            order + 1
        }) + calc(${containerGap}px * ${order}) + ${containerGap}px / 2)`;
    const highlightLeft = `calc(${containerPadding}px + calc(calc(${segmentWidth} + ${containerGap}px) * ${activeSegmentIndex}))`;

    function computedOnChange(newSegmentValue: T) {
        if (active !== newSegmentValue) {
            onChange(newSegmentValue);
        }
    }

    function handleClickArrow(event: React.KeyboardEvent<HTMLDivElement>) {
        switch (event.code) {
            case "ArrowLeft":
                computedOnChange(segments[Math.max(activeSegmentIndex - 1, 0)].value);
                return;
            case "ArrowRight":
                computedOnChange(segments[Math.min(activeSegmentIndex + 1, segmentCount - 1)].value);
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
                gap: containerGap,
                padding: containerPadding,
                borderRadius: containerBorderRadius,
            }}
        >
            {segments.map((segment, segmentIndex) => (
                <div
                    key={`${segmentIndex}_${segment.value}`}
                    onClick={() => computedOnChange(segment.value)}
                    className={classNames(styles.segment, {
                        [styles.last]: segmentIndex === segments.length - 1,
                        [styles.active]: segment.value === active,
                    })}
                    style={{
                        borderRadius: containerBorderRadius - containerPadding,
                    }}
                >
                    {segment.label}
                </div>
            ))}
            {segments.slice(0, -1).map((segment, segmentIndex) => (
                <div
                    key={`separator_${segmentIndex}_${segment.value}`}
                    className={styles.separator}
                    style={{
                        top: containerPadding * 2,
                        bottom: containerPadding * 2,
                        left: separatorLeft(segmentIndex),
                    }}
                />
            ))}
            <div
                className={styles.highlight}
                style={{
                    width: segmentWidth,
                    left: highlightLeft,
                    top: containerPadding,
                    bottom: containerPadding,
                    borderRadius: containerBorderRadius - containerPadding,
                }}
            />
        </div>
    );
};

export default Segmented;
