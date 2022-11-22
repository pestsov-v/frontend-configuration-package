import React from "react";
import styles from "./DeleteButton.module.css";
import cn from 'classnames'
import {DeleteButtonProps} from "./DeleteButton.props";

export const DeleteButton = ({size = 'middle', color = 'purple', finallyText, initialText, className, ...props}: DeleteButtonProps ): JSX.Element => {
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [isDeleted, setIsDeleted] = React.useState(false);

    const handleClick = () => {
        setIsDeleting(true);
        // do something async
        setTimeout(() => {
            setIsDeleting(false);
            setIsDeleted(true);
            setTimeout(() => {
                setIsDeleted(false);
            }, 1000);
        }, 1250);
    };

    return (
        <button
            onClick={handleClick}
            className={cn(styles.button,
                isDeleting || isDeleted ? styles.deleting : "", {
                    [styles.red]: color === 'red',
                    [styles.purple]: color === 'purple',

                    [styles.small]: size === 'small',
                    [styles.middle]: size === 'middle',
                    [styles.big]: size === 'big',

                }
            )}
            disabled={isDeleting || isDeleted}
            {...props}
        >
          <span className={styles.buttonText}>
            {isDeleting || isDeleted ? initialText : finallyText}
          </span>
                <span className={styles.animation}>
            <span className={styles.balls}></span>
            <span className={styles.lid}></span>
            <span className={styles.can}>
              <span className={styles.filler}></span>
            </span>
          </span>
        </button>
    );
};