import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    function preventTouch(event: React.TouchEvent<HTMLButtonElement>) {
        event.preventDefault();
    }
    return (
        <button {...props} className={classNames(styles.button, props.className)} onTouchStart={preventTouch}>
            {props.children}
        </button>
    );
}
