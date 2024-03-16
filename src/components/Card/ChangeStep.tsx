import styles from "./styles.module.css";

const ChangeStep = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) => {
  return (
    <button className={styles.btnAction} onClick={action}>
      {children}
    </button>
  );
};

export default ChangeStep;
