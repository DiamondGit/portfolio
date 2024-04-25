import { ReactNode, useEffect, useRef } from "react";

type OutsideClickHandlerProps = {
    onClick?: () => void;
    children?: ReactNode;
};

const OutsideClickHandler = ({ onClick, children }: OutsideClickHandlerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                onClick?.();
            }
        }
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div style={{ display: "contents" }} ref={containerRef}>
            {children}
        </div>
    );
};

export default OutsideClickHandler;
