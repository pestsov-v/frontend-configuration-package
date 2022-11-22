import React from "react";
import styles from "./DeleteButton.module.css";
import cn from 'classnames'

export const DeleteButton = () => {
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
            className={cn(styles.button, isDeleting || isDeleted ? styles.deleting : "")}
            disabled={isDeleting || isDeleted}
        >
      <span className={styles.buttonText}>
        {isDeleting || isDeleted ? "Удаляем" : "Удалить"}
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