import styles from "./styles.module.css";

const ChangeStep = ({
  children,
  action,
  btnBack,
  animation,
}: {
  children: React.ReactNode;
  action: () => void;
  btnBack: boolean,
  animation: () => void,
}) => {

  return (
    <button onClick={action} onFocus={animation} className={btnBack ? `${styles.btnAction} ${styles.back}` : `${styles.btnAction} ${styles.next}`}>
      {children}
    </button>
  );
};

export default ChangeStep;
