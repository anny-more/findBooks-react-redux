import { ReactNode, MouseEventHandler } from 'react';
import styles from './button.module.css';
type Props = {
  children?: string | ReactNode;
  className?: string;
  callback?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
};

export default function Button({children, className, callback, active}: Props) {
  const view = `${styles.search} ${className && styles[className]}`;

    return (
        <button className={view} onClick={callback} disabled={active}>
          {children}
        </button>
    )

}