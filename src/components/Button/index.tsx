import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    loading?: boolean;
} & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "onClick" | "children">;

const Button = ({ loading = false, ...props }: ButtonProps) => {
    const computedChildren = props.children;

    return (
        <button
            {...props}
            className={classNames(styles.button, {
                [styles.loading]: loading,
            })}
            disabled={loading || props.disabled}
        >
            {computedChildren}
        </button>
    );
};

export default Button;
