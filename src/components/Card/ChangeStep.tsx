import styles from "./styles.module.css";

const ChangeStep = ({
  children,
  action,
  btnBack
}: {
  children: React.ReactNode;
  action: () => void;
  btnBack: boolean
}) => {
  return (
    <button className={btnBack ? `${styles.btnAction} ${styles.back}` : `${styles.btnAction} ${styles.next}`}onClick={action}>
      {children}
    </button>
  );
};

export default ChangeStep;
