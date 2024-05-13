import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./IntroText.module.scss";

type IntroTextProps = {
    text: string;
};

type GlitchItemProps = {
    charItem: string;
    charIndex: number;
};

const getRandomChar = (inputCharItem: string): string => {
    if (inputCharItem === " ") return inputCharItem;

    const ranges: [number, number][] = [
        [48, 57], // Numbers
        [65, 90], // Upper letters
        [97, 122], // Lower letters
    ];
    const randomRangeIndex = Math.floor(Math.random() * ranges.length);
    const [min, max] = ranges[randomRangeIndex];
    return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
};

const GlitchItem = ({ charItem, charIndex }: GlitchItemProps) => {
    const [isComputedItem, setComputedItem] = useState<boolean>(false);
    const [displayChar, setDisplayChar] = useState<string>(getRandomChar(charItem));

    useEffect(() => {
        setTimeout(() => {
            setDisplayChar(charItem);
            setComputedItem(true);
        }, charIndex * 200);
    }, []);

    return <span className={classNames({ [styles.isComputedItem]: isComputedItem })}>{displayChar}</span>;
};

const IntroText = ({ text }: IntroTextProps) => {
    const [renderTrigger, setRenderTrigger] = useState(Date.now());

    useEffect(() => {
        setRenderTrigger(Date.now());
    }, [text]);

    return (
        <span key={renderTrigger} className={styles.container}>
            {text.split("").map((charItem, charIndex) => (
                <GlitchItem key={`${renderTrigger}_${charIndex}`} charItem={charItem} charIndex={charIndex} />
            ))}
        </span>
    );
};

export default IntroText;
