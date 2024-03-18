import styles from "../css/styles.module.css";

const ChangeStep = ({
  children,
  action,
  btnBack,
}: {
  children: React.ReactNode;
  action: () => void;
  btnBack: boolean;
}) => {
  return (
    <button
      onClick={action}
      className={
        btnBack
          ? `${styles.btnAction} ${styles.back}`
          : `${styles.btnAction} ${styles.next}`
      }
    >
      {children}
    </button>
  );
};

export default ChangeStep;
