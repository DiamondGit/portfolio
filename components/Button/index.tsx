import classNames from "classnames";
import { IconType } from "react-icons";
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

function IconButton({ displayIcon, ...props }: { displayIcon: IconType } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const Icon = displayIcon;
    return (
        <Button {...props} className={styles.iconBtn}>
            <Icon />
        </Button>
    );
}

Button.IconButton = IconButton;
